# ComponentGenerator 组件生成器需求文档

## 介绍

本文档描述了 docusaurus-lib-dev 库中 rehype 插件的 ComponentGenerator 模块的改进需求。ComponentGenerator 负责为每个 Previewer 代码块生成独立的 React 组件文件，当前实现存在一些问题需要修复，以确保生成的组件符合预期格式并能正确工作。

## 需求

### 需求 1

**用户故事：** 作为使用 docusaurus-lib-dev 的开发者，我希望 ComponentGenerator 生成的组件文件能够与网站的 Previewer 组件正确集成，以便正确显示组件演示和源代码。

#### 验收标准

1. 当 ComponentGenerator 生成组件时，应该使用正确的导入路径和组件结构
2. 当检查生成的组件代码时，不应该引用不存在的组件（如 `PreviewerWrapper`）
3. 当组件被网站导入时，应该能够正确渲染，不会出现导入错误
4. 当生成的组件被使用时，应该能够正确传递 inline 属性

### 需求 2

**用户故事：** 作为维护 docusaurus-lib-dev 的开发者，我希望 ComponentGenerator 的代码结构清晰、无冗余，以便更容易维护和扩展。

#### 验收标准

1. 当检查代码时，不应该有未使用的属性（如 `cacheDir`）
2. 当查看组件生成逻辑时，应该有清晰的职责分离
3. 当需要修改组件模板时，应该容易定位和修改相关代码
4. 当生成组件时，应该有适当的错误处理机制


## 组件生成格式要求

### 当前格式

```typescript
// 当前生成的组件格式
import React from 'react';
import { PreviewerWrapper } from '@site/src/components/PreviewerWrapper';
// 导入演示组件和依赖
import DemoComponent from './Demo.tsx';

const componentInfo = {
  id: 'test123',
  sourceCode: 'export default function Demo() { return <div>Test</div>; }',
  dependencies: [/* ... */],
};

export default function PreviewerDemo_basic_abc123() {
  return (
    <PreviewerWrapper 
      component={DemoComponent}
      componentInfo={componentInfo}
      inline={false}
    />
  );
}
```

### 期望格式

```typescript
// 期望的组件格式
import React from 'react';
import { Previewer } from '@docusaurus-lib-dev/components';

// 导入演示组件，这里导入组件的地址是一个相当地址，直接指向组件地址。
import DemoComponent from '../../packages/react-admin-kit/src/Button/demos/basic';

const componentInfo = {
  id: 'test123',
  sourceCode: 'export default function Demo() { return <div>Test</div>; }',
  dependencies: [/* ... */],
};

export default function PreviewerDemo_basic_abc123() {
  return (
    <Previewer 
      component={DemoComponent}
      componentInfo={componentInfo}
      inline={false}
    />
  );
}
```

## 主要修改点

1. **导入路径修正**：将 `PreviewerWrapper` 改为从 `@docusaurus-lib-dev/src/components/Previewer` 导入
2. **组件名称修正**：使用 `Previewer` 而不是 `PreviewerWrapper`
3. **导入演示组件**: 地址直接指向组件。 
4. **未使用属性清理**：移除未使用的 `cacheDir` 属性，或正确使用它

## 技术约束

1. 保持与现有 API 的兼容性
2. 确保生成的组件能在 Docusaurus 环境中正确工作
3. 遵循项目的代码风格和最佳实践
4. 确保所有更改都有相应的测试覆盖