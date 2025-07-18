# 设计文档

## 概述

本设计文档描述了 docusaurus-lib-dev 库中 rehype 插件的重构方案。重构的目标是提高代码质量、可维护性和性能，同时实现每个 Previewer 代码块转换为独立组件的新架构。

## 当前架构分析

### 现有代码结构

```
src/rehype/
├── index.ts          # 主插件逻辑（约200行，职责混杂）
├── utils.ts          # 工具函数（依赖分析、路径解析等）
└── __tests__/        # 测试文件
```

### 现有问题

1. **单一文件过大**：`index.ts` 包含了插件初始化、AST 遍历、文件处理、缓存写入等多种职责
2. **缺乏缓存机制**：每次都重新解析和处理文件，没有基于文件内容变化的智能缓存
3. **统一组件架构限制**：所有 Previewer 都通过一个统一的组件处理，导致页面加载所有 demo 数据
4. **错误处理不完善**：缺乏对文件不存在、解析失败等异常情况的处理
5. **类型定义不完整**：部分函数和接口缺乏完整的 TypeScript 类型定义

## 重构设计

### 新的模块架构

```
src/rehype/
├── index.ts                    # 插件入口，负责插件注册和配置
├── core/
│   ├── processor.ts           # 核心处理器，负责 AST 遍历和节点处理
│   ├── cache-manager.ts       # 缓存管理器，负责文件缓存逻辑
│   ├── file-handler.ts        # 文件处理器，负责文件读取和依赖分析
│   └── component-generator.ts # 组件生成器，负责生成独立的 Previewer 组件
├── utils/
│   ├── path-resolver.ts       # 路径解析工具
│   ├── dependency-analyzer.ts # 依赖分析工具
│   └── hash-utils.ts          # 哈希计算工具
├── types/
│   └── index.ts               # 类型定义
└── __tests__/                 # 测试文件
```

### 核心模块设计

#### 1. 插件入口 (`index.ts`)

```typescript
interface PreviewerOptions {
  include?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
  cacheDir?: string;
  elementName?: string;
  alias?: Record<string, string>;
}

export default function createPreviewerPlugin(
  options: PreviewerOptions,
): Plugin;
```

**职责**：

- 插件配置验证和默认值设置
- 创建和返回 unified 插件函数
- 初始化核心处理器

#### 2. 核心处理器 (`core/processor.ts`)

```typescript
export class PreviewerProcessor {
  constructor(
    private options: PreviewerOptions,
    private cacheManager: CacheManager,
    private fileHandler: FileHandler,
    private componentGenerator: ComponentGenerator,
  );

  process(tree: Node, file: VFile): ProcessResult;
  private processPreviewerNode(
    node: PreviewerNode,
    index: number,
  ): ComponentInfo;
  private replacePreviewerWithImport(
    node: PreviewerNode,
    componentInfo: ComponentInfo,
  ): void;
}

interface ProcessResult {
  imports: ImportStatement[];
  components: ComponentInfo[];
}
```

**职责**：

- AST 遍历和 Previewer 节点识别
- 为每个 Previewer 节点生成独立组件
- 将 Previewer 节点替换为对应的组件导入和使用
- 协调各个模块完成转换流程

#### 3. 缓存管理器 (`core/cache-manager.ts`)

```typescript
export class CacheManager {
  constructor(private cacheDir: string);

  // 检查缓存是否有效
  isCacheValid(filePath: string, contentHash: string): boolean;

  // 获取缓存的组件信息
  getCachedDemo(filePath: string): DemoInfo | null;

  // 保存组件信息到缓存
  setCachedDemo(filePath: string, demoInfo: DemoInfo): void;

  // 生成最终的缓存文件
  generateCacheFiles(allDemos: Record<string, DemoInfo>): void;
}
```

**职责**：

- 基于文件内容哈希的缓存验证
- 缓存数据的读取和写入
- 生成 `result.json` 和 `demos.ts` 文件

#### 4. 文件处理器 (`core/file-handler.ts`)

```typescript
export class FileHandler {
  constructor(
    private pathResolver: PathResolver,
    private dependencyAnalyzer: DependencyAnalyzer,
  );

  // 处理单个演示文件
  processDemo(srcPath: string, basePath: string): DemoInfo;

  // 计算文件内容哈希
  calculateFileHash(filePath: string): string;
}
```

**职责**：

- 文件读取和内容处理
- 依赖分析和递归处理
- 文件哈希计算

#### 5. 组件生成器 (`core/component-generator.ts`)

```typescript
export class ComponentGenerator {
  constructor(private cacheDir: string);

  // 生成独立的 Previewer 组件
  generateComponent(
    demoInfo: DemoInfo,
    options: ComponentOptions,
  ): ComponentInfo;

  // 生成组件文件到指定目录
  writeComponentFile(componentInfo: ComponentInfo): string;

  // 生成导入语句
  generateImportStatement(
    componentInfo: ComponentInfo,
    relativePath: string,
  ): ImportStatement;
}

interface ComponentOptions {
  inline?: boolean;
  componentId: string;
  mdxFilePath: string;
}

interface ComponentInfo {
  id: string;
  filePath: string;
  componentName: string;
  inline: boolean;
  demoInfo: DemoInfo;
}
```

**职责**：

- 为每个 Previewer 生成独立的 React 组件
- 处理 inline 模式的组件生成
- 管理组件文件的写入和路径解析
- 生成对应的导入语句

## 新架构核心设计

### 独立组件生成机制

#### 转换流程

1. **AST 遍历**：识别 MDX 文件中的所有 `<Previewer>` 节点
2. **组件生成**：为每个 Previewer 节点生成独立的 React 组件文件
3. **节点替换**：将 Previewer 节点替换为对应组件的导入和使用
4. **导入注入**：在 MDX 文件顶部注入所有组件的导入语句

#### 组件生成示例

**输入 MDX：**

```mdx
# Button 组件

<Previewer src="@@/Button/demos/basic" />

<Previewer src="@@/Button/demos/size" inline />
```

**生成的组件文件：**

```typescript
// .docusaurus-previewer-cache/components/Button_demos_basic_abc123.tsx
import React from 'react';
import { PreviewerWrapper } from '@docusaurus/lib-dev';

// 导入演示组件和依赖
import DemoComponent from '@@/Button/demos/basic';
import './basic.less';

const componentInfo = {
  id: 'abc123',
  sourceCode: `import React from 'react';\n...`,
  dependencies: [...]
};

export default function PreviewerAbc123() {
  return (
    <PreviewerWrapper
      component={DemoComponent}
      componentInfo={componentInfo}
      inline={false}
    />
  );
}
```

**转换后的 MDX：**

```jsx
import PreviewerAbc123 from '@site/.docusaurus-previewer-cache/components/Button_demos_basic_abc123';
import PreviewerDef456 from '@site/.docusaurus-previewer-cache/components/Button_demos_size_def456';

# Button 组件

<PreviewerAbc123 />

<PreviewerDef456 />
```

### 缓存机制设计

#### 缓存策略

1. **组件级缓存**：为每个生成的组件文件建立缓存
2. **内容哈希**：基于源文件内容的 SHA-256 哈希值判断文件是否变化
3. **依赖追踪**：跟踪组件文件的本地依赖，任一依赖变化都会使缓存失效
4. **组件文件缓存**：避免重复生成相同的组件文件

#### 缓存数据结构

```typescript
interface CacheEntry {
  contentHash: string; // 文件内容哈希
  dependencyHashes: Record<string, string>; // 依赖文件哈希映射
  demoInfo: DemoInfo; // 组件信息
  timestamp: number; // 缓存时间戳
}

interface CacheIndex {
  [filePath: string]: CacheEntry;
}
```

#### 缓存文件组织

```
.docusaurus-previewer-cache/
├── index.json              # 缓存索引文件
├── entries/                # 缓存条目目录
│   ├── {hash1}.json       # 单个组件的缓存数据
│   └── {hash2}.json
├── components/             # 生成的独立组件目录
│   ├── Button_demos_basic_abc123.tsx
│   ├── Button_demos_size_def456.tsx
│   └── ...
├── result.json             # 最终结果文件（兼容现有）
└── demos.ts               # 组件导入文件（兼容现有）
```

### 错误处理策略

#### 1. 文件不存在处理

- 提供清晰的错误信息，包含尝试的路径和支持的扩展名
- 支持优雅降级，跳过无效的 Previewer 节点

#### 2. 解析错误处理

- 捕获 Babel 解析错误，记录详细日志
- 对于解析失败的文件，返回基础的组件信息

#### 3. 缓存错误处理

- 缓存文件损坏时自动重建
- 磁盘空间不足时的优雅处理

### 性能优化

#### 1. 并行处理

- 对于多个 Previewer 节点，并行处理文件分析
- 依赖分析的并行化处理

#### 2. 增量更新

- 只重新处理内容发生变化的文件
- 智能的依赖变化检测

#### 3. 内存优化

- 大文件的流式处理
- 及时释放不再需要的缓存数据

## 关键技术实现

### 组件命名策略

```typescript
function generateComponentName(srcPath: string, mdxPath: string): string {
  // 基于源文件路径和 MDX 文件路径生成唯一组件名
  // 例：@@/Button/demos/basic + /docs/button.mdx => Button_demos_basic_abc123
  const pathSegments = srcPath.replace(/^@@\//, '').replace(/[\/\\]/g, '_');
  const hash = createHash('sha256')
    .update(srcPath + mdxPath)
    .digest('hex')
    .slice(0, 6);
  return `${pathSegments}_${hash}`;
}
```

### AST 节点替换机制

```typescript
// 将 <Previewer> 节点替换为组件使用
function replacePreviewerNode(
  node: PreviewerNode,
  componentInfo: ComponentInfo,
) {
  // 替换节点类型和属性
  node.type = 'mdxJsxFlowElement';
  node.name = componentInfo.componentName;
  node.attributes = []; // 清空原有属性
  node.children = []; // 清空子节点
}

// 在文件顶部注入导入语句
function injectImports(tree: Node, imports: ImportStatement[]) {
  const importNodes = imports.map(createImportNode);
  tree.children.unshift(...importNodes);
}
```

### 组件模板生成

```typescript
const COMPONENT_TEMPLATE = `
import React from 'react';
import { PreviewerWrapper } from '@site/src/components/PreviewerWrapper';
{{DEMO_IMPORTS}}

const componentInfo = {{COMPONENT_INFO}};

export default function {{COMPONENT_NAME}}() {
  return (
    <PreviewerWrapper 
      component={DemoComponent}
      componentInfo={componentInfo}
      inline={{{INLINE}}}
    />
  );
}
`;
```

## 实现计划

### 阶段 1：基础重构和模块化

1. **创建新的模块结构**
   - 建立 core、utils、types 目录
   - 创建各个模块的基础文件和接口定义
2. **提取现有功能**
   - 将 index.ts 中的功能拆分到对应模块
   - 保持现有测试的通过
3. **完善类型定义**
   - 定义完整的 TypeScript 接口
   - 确保类型安全

### 阶段 2：独立组件生成机制

1. **实现组件生成器**
   - 开发 ComponentGenerator 类
   - 实现组件模板和文件写入逻辑
2. **AST 转换逻辑**
   - 实现节点替换机制
   - 添加导入语句注入功能
3. **集成测试**
   - 验证完整的转换流程
   - 确保生成的组件可正常使用

### 阶段 3：缓存机制实现

1. **缓存管理器开发**
   - 实现基于哈希的缓存验证
   - 添加依赖追踪功能
2. **性能优化**
   - 实现并行处理
   - 添加增量更新逻辑
3. **错误处理完善**
   - 添加各种异常情况的处理
   - 提供详细的错误信息

### 阶段 4：测试和文档

1. **完善测试覆盖**
   - 单元测试覆盖所有模块
   - 集成测试验证完整流程
2. **性能测试**
   - 缓存机制的性能验证
   - 大量文件处理的压力测试
3. **文档更新**
   - API 文档更新
   - 使用示例和最佳实践

## 向后兼容性

重构后的插件将保持完全的向后兼容性：

- 插件 API 保持不变
- 生成的缓存文件格式保持兼容
- 现有的 Previewer 组件无需修改

## 测试策略

1. **单元测试**：每个模块的独立测试
2. **集成测试**：完整插件流程的测试
3. **性能测试**：缓存机制的性能验证
4. **兼容性测试**：确保与现有代码的兼容性
