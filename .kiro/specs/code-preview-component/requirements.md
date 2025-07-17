# 需求文档

## 介绍

在 docusaurus-lib-dev/src/components 里添加一个代码预览组件 Previewer，该组件能够在 Docusaurus 文档中展示代码示例并提供实时预览功能。这个组件将帮助开发者更好地理解和学习代码示例，提供交互式的代码演示体验。

## 需求

### 需求 1

**用户故事：** 作为该组件使用者，当传入相应参数就能够显示组件和其源码。

#### 验收标准

1. 组件参数为 component 和 componentInfo
   
   ```tsx
   import Demoxx from '../../packages/react-admin-kit/src/Button/demos/basic'

   const componentInfo = {
    id: 'abc123',
    sourceCode: '...',
    dependencies: [...]
   }

   return <Previewer component={Demoxx} componentInfo={componentInfo} />
   ```

2. componentInfo 中可以包含 `{inline: boolean}`

### 需求 2

**用户故事：** 作为组件开发者，组件的实现请尽可能的借鉴 website/src/components/ 下的 Previewer, PreviewerActions, SourceCode 组件

#### 验收标准

1. 总的组件名是 Previewer. 其它的组件放在该组件下的 components 二级文件夹内。
2. 样式文件合并成一个，在入口出引入。
3. 规范类型定义。

