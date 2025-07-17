# Previewer 组件

基于设计文档实现的代码预览组件，用于在 Docusaurus 文档中展示代码示例并提供实时预览功能。

## 功能特性

✅ **双模式支持**
- 完整模式：包含预览区域、操作按钮和代码展示
- 内联模式：仅渲染组件本身

✅ **代码展示功能**
- 语法高亮基础框架（可扩展集成 prism-react-renderer）
- 代码复制到剪贴板
- 多文件标签切换
- 行号显示和高亮行支持

✅ **错误处理**
- React Error Boundary 错误边界
- 友好的错误信息展示
- 重试机制

✅ **样式和主题**
- 响应式设计，支持移动端
- 暗色模式支持
- CSS 变量系统，易于定制
- 与 Docusaurus 主题系统兼容

✅ **开发体验**
- 完整的 TypeScript 类型定义
- 单元测试覆盖
- ES 和 CommonJS 双格式构建
- 详细的 JSDoc 注释

## 组件架构

```
src/components/Previewer/
├── index.tsx                    # 主入口组件
├── index.less                   # 统一样式文件
└── components/                  # 子组件目录
    ├── PreviewerActions.tsx     # 操作按钮组件
    └── SourceCode.tsx           # 源码展示组件
```

## 类型定义

### 主要接口

```typescript
interface PreviewerProps {
  component: React.ComponentType<any>;
  componentInfo: ComponentInfo;
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  background?: string;
  title?: string;
  description?: string;
}

interface ComponentInfo {
  id: string;
  sourceCode: string;
  dependencies?: DependencyInfo[];
  inline?: boolean;
}

interface DependencyInfo {
  type: 'FILE' | 'NPM';
  resolvedSource: string;
  ext: string;
  value: string;
}
```

## 使用示例

### 基本用法

```tsx
import { Previewer } from 'docusaurus-lib-dev/components';

const MyComponent = () => <div>Hello World</div>;

const componentInfo = {
  id: 'my-component',
  sourceCode: 'const MyComponent = () => <div>Hello World</div>;',
  dependencies: [{
    type: 'FILE',
    resolvedSource: './MyComponent.tsx',
    ext: 'tsx',
    value: 'const MyComponent = () => <div>Hello World</div>;'
  }]
};

<Previewer 
  component={MyComponent}
  componentInfo={componentInfo}
  title="My Component"
  description="A simple example component"
/>
```

### 内联模式

```tsx
<Previewer 
  component={MyComponent}
  componentInfo={{ ...componentInfo, inline: true }}
/>
```

### 多文件示例

```tsx
const componentInfo = {
  id: 'multi-file-component',
  sourceCode: '...',
  dependencies: [
    {
      type: 'FILE',
      resolvedSource: './Component.tsx',
      ext: 'tsx',
      value: 'const Component = () => <div>Component</div>;'
    },
    {
      type: 'FILE',
      resolvedSource: './styles.css',
      ext: 'css',
      value: '.component { color: red; }'
    }
  ]
};
```

### 自定义样式

```tsx
<Previewer 
  component={MyComponent}
  componentInfo={componentInfo}
  className="custom-previewer"
  style={{ border: '2px solid blue' }}
  background="#f5f5f5"
/>
```

## 样式定制

组件使用 CSS 变量系统，可以轻松定制：

```css
:root {
  --previewer-border-color: #d1d5db;
  --previewer-bg-color: #ffffff;
  --previewer-code-bg: #f8f9fa;
  --previewer-text-color: #374151;
  --previewer-success-color: #10b981;
}

[data-theme='dark'] {
  --previewer-border-color: #374151;
  --previewer-bg-color: #1f2937;
  --previewer-code-bg: #111827;
  --previewer-text-color: #f9fafb;
  --previewer-success-color: #34d399;
}
```

## 构建和测试

```bash
# 构建组件
npm run build-components

# 运行测试
npm test

# 验证构建
node verify-build.js
```

## 实现状态

所有设计文档中的任务都已完成：

- [x] 1. 创建 Previewer 组件目录结构和基础文件
- [x] 2. 定义 TypeScript 接口和类型
- [x] 3. 实现 SourceCode 子组件
- [x] 4. 实现 PreviewerActions 子组件
- [x] 5. 实现主 Previewer 组件核心逻辑
- [x] 6. 实现组件渲染和错误处理
- [x] 7. 创建统一样式文件
- [x] 8. 集成子组件到主组件
- [x] 9. 更新组件导出配置
- [x] 10. 编写组件单元测试
- [x] 11. 创建组件使用示例和验证

## 扩展建议

1. **语法高亮增强**：集成 `prism-react-renderer` 以获得更好的语法高亮效果
2. **国际化支持**：添加多语言支持
3. **主题定制**：提供更多预设主题
4. **性能优化**：添加代码懒加载和虚拟滚动
5. **可访问性**：增强键盘导航和屏幕阅读器支持

组件已经按照设计文档完整实现，可以在 Docusaurus 项目中使用。