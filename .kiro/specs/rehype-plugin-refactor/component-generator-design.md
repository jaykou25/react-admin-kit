# ComponentGenerator 组件生成器设计文档

## 概述

本设计文档描述了对 docusaurus-lib-dev 库中 ComponentGenerator 模块的重构方案。重构的目标是修复当前实现中的问题，确保生成的组件文件符合预期格式，能够与网站的 Previewer 组件正确集成，并提高代码的可维护性。

## 当前问题分析

### 主要问题

1. **错误的导入路径**：当前代码导入不存在的 `PreviewerWrapper` 组件
2. **未使用的属性**：`cacheDir` 属性被声明但从未使用
3. **导入路径解析问题**：演示组件的导入路径不够直接和准确
4. **组件模板不匹配**：生成的组件格式与实际需要的格式不符

### 影响

- 生成的组件无法正确渲染
- 导入错误导致构建失败
- 代码维护困难
- 开发体验不佳

## 设计方案

### 1. 组件模板重构

#### 新的组件模板结构

```typescript
const COMPONENT_TEMPLATE = `import React from 'react';
import { Previewer } from '@docusaurus-lib-dev/components';
{{DEMO_IMPORTS}}

const componentInfo = {{COMPONENT_INFO}};

export default function {{COMPONENT_NAME}}() {
  return (
    <Previewer 
      component={DemoComponent}
      componentInfo={componentInfo}
      inline={{{INLINE}}}
    />
  );
}`;
```

#### 模板变量说明

- `{{DEMO_IMPORTS}}`：演示组件和依赖的导入语句
- `{{COMPONENT_INFO}}`：组件信息对象的 JSON 字符串
- `{{COMPONENT_NAME}}`：生成的组件名称
- `{{INLINE}}`：是否为内联模式的布尔值

### 2. 导入路径解析优化

#### 演示组件导入路径计算

```typescript
/**
 * 计算演示组件的相对导入路径
 * @param srcPath MDX 文档中的 src 路径（如 @@/Button/demos/basic）
 * @param componentFilePath 生成的组件文件路径
 * @param alias 别名配置
 * @returns 相对导入路径
 */
private calculateDemoImportPath(
  srcPath: string, 
  componentFilePath: string, 
  alias?: Record<string, string>
): string {
  // 1. 解析别名路径
  const resolvedSrcPath = this.resolveAliasPath(srcPath, alias);
  
  // 2. 计算从组件文件到演示文件的相对路径
  const relativePath = path.relative(
    path.dirname(componentFilePath), 
    resolvedSrcPath
  );
  
  // 3. 转换为 Unix 风格路径并移除扩展名
  return relativePath
    .replace(/\\/g, '/')
    .replace(/\.(tsx?|jsx?)$/, '');
}
```

#### 别名路径解析

```typescript
/**
 * 解析别名路径
 * @param srcPath 源路径
 * @param alias 别名配置
 * @returns 解析后的绝对路径
 */
private resolveAliasPath(srcPath: string, alias?: Record<string, string>): string {
  if (!alias) return srcPath;
  
  for (const [aliasKey, aliasValue] of Object.entries(alias)) {
    if (srcPath.startsWith(aliasKey + '/')) {
      return srcPath.replace(aliasKey, aliasValue);
    }
  }
  
  return srcPath;
}
```

### 3. 类结构重构

#### 新的 ComponentGenerator 类结构

```typescript
export class ComponentGenerator {
  private componentsDir: string;
  
  constructor(
    private cacheDir: string,
    private alias?: Record<string, string>
  ) {
    this.componentsDir = path.join(cacheDir, 'components');
  }

  // 核心方法
  generateComponent(demoInfo: DemoInfo, options: ComponentOptions): ComponentInfo;
  writeComponentFile(componentInfo: ComponentInfo): string;
  generateImportStatement(componentInfo: ComponentInfo, relativePath: string): ImportStatement;
  
  // 私有方法
  private generateComponentCode(componentInfo: ComponentInfo): string;
  private generateDemoImports(srcPath: string, componentFilePath: string): string;
  private generateComponentName(componentId: string, mdxFilePath: string): string;
  private calculateDemoImportPath(srcPath: string, componentFilePath: string): string;
  private resolveAliasPath(srcPath: string): string;
}
```

#### 构造函数改进

- 正确使用 `cacheDir` 参数
- 添加 `alias` 参数支持别名路径解析
- 确保所有属性都被使用

### 4. 组件信息对象优化

#### ComponentInfo 接口扩展

```typescript
interface ComponentInfo {
  id: string;
  filePath: string;
  componentName: string;
  inline: boolean;
  demoInfo: DemoInfo;
  srcPath: string; // 新增：MDX 文档中的 src 路径
}
```

#### 组件信息 JSON 生成

```typescript
private generateComponentInfoJson(componentInfo: ComponentInfo): string {
  const { demoInfo } = componentInfo;
  
  const componentInfoObj = {
    id: demoInfo.id,
    sourceCode: demoInfo.sourceCode,
    dependencies: demoInfo.dependencies.map((dep) => ({
      type: dep.type,
      source: dep.source,
      resolvedSource: dep.resolvedSource,
      ext: dep.ext,
      importType: dep.importType,
      imported: dep.imported,
      // 保留 value 字段用于源代码显示
      ...(dep.type === 'FILE' && { value: dep.value })
    })),
  };
  
  return JSON.stringify(componentInfoObj, null, 2);
}
```

### 5. 错误处理机制

#### 错误处理策略

```typescript
/**
 * 生成组件代码（带错误处理）
 */
private generateComponentCode(componentInfo: ComponentInfo): string {
  try {
    const { srcPath, inline, componentName } = componentInfo;
    
    // 生成导入语句
    const demoImports = this.generateDemoImports(srcPath, componentInfo.filePath);
    
    // 生成组件信息对象
    const componentInfoJson = this.generateComponentInfoJson(componentInfo);
    
    // 应用模板
    return COMPONENT_TEMPLATE
      .replace('{{DEMO_IMPORTS}}', demoImports)
      .replace('{{COMPONENT_INFO}}', componentInfoJson)
      .replace('{{COMPONENT_NAME}}', componentName)
      .replace('{{INLINE}}', String(inline));
      
  } catch (error) {
    console.error(`生成组件代码失败: ${componentInfo.componentName}`, error);
    
    // 返回错误组件模板
    return this.generateErrorComponent(componentInfo, error);
  }
}

/**
 * 生成错误组件
 */
private generateErrorComponent(componentInfo: ComponentInfo, error: Error): string {
  return `import React from 'react';

export default function ${componentInfo.componentName}() {
  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #ff4d4f', 
      borderRadius: '4px',
      backgroundColor: '#fff2f0' 
    }}>
      <h4>组件生成错误</h4>
      <p>组件 ${componentInfo.componentName} 生成失败</p>
      <details>
        <summary>错误详情</summary>
        <pre>{error.message}</pre>
      </details>
    </div>
  );
}`;
}
```

### 6. 导入语句生成优化

#### 改进的导入生成逻辑

```typescript
/**
 * 生成演示组件的导入语句
 * @param srcPath MDX 文档中的 src 路径
 * @param componentFilePath 生成的组件文件路径
 * @returns 导入语句字符串
 */
private generateDemoImports(srcPath: string, componentFilePath: string): string {
  // 只生成主组件的导入路径
  const importPath = this.calculateDemoImportPath(srcPath, componentFilePath);
  return `import DemoComponent from '${importPath}';`;
}
```

## 实现计划

### 阶段 1：核心重构

1. **更新组件模板**
   - 修改 COMPONENT_TEMPLATE 常量
   - 更新 Previewer 组件导入路径
   - 调整模板变量替换逻辑

2. **重构构造函数**
   - 添加 alias 参数支持
   - 确保 cacheDir 被正确使用
   - 移除未使用的属性警告

### 阶段 2：路径解析优化

1. **实现别名路径解析**
   - 添加 resolveAliasPath 方法
   - 实现 calculateDemoImportPath 方法
   - 更新导入路径计算逻辑

2. **优化导入语句生成**
   - 重构 generateDemoImports 方法
   - 改进主组件识别逻辑
   - 优化相对路径计算

### 阶段 3：错误处理和测试

1. **添加错误处理**
   - 实现 generateErrorComponent 方法
   - 添加 try-catch 错误捕获
   - 提供友好的错误信息

2. **更新测试用例**
   - 修改现有测试以匹配新的实现
   - 添加新功能的测试覆盖
   - 验证错误处理逻辑

## 向后兼容性

### 兼容性保证

1. **API 兼容性**：保持现有的公共方法签名不变
2. **配置兼容性**：支持现有的配置选项
3. **输出兼容性**：生成的组件文件结构保持一致

### 迁移策略

1. **渐进式迁移**：先修复核心问题，再优化细节
2. **测试验证**：确保所有现有测试通过
3. **文档更新**：更新相关文档和示例

## 性能考虑

### 优化措施

1. **路径缓存**：缓存已解析的路径避免重复计算
2. **模板缓存**：缓存编译后的模板提高生成速度
3. **错误恢复**：快速失败机制避免阻塞整个流程

## 测试策略

### 测试覆盖

1. **单元测试**：覆盖所有新增和修改的方法
2. **集成测试**：验证完整的组件生成流程
3. **错误测试**：验证各种错误情况的处理
4. **兼容性测试**：确保与现有代码的兼容