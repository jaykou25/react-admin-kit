# 需求文档

## 介绍

本功能涉及重构 docusaurus-lib-dev 库中现有的 rehype 插件，以提高代码质量、可维护性和可扩展性。当前插件处理 MDX 文件以提取 Previewer 组件，分析其依赖关系，并为组件演示生成缓存文件。重构将使用文件缓存系统以提高性能，提取出的 Previewer 组件文件单独存放，为每一个 Previewer 组件生成一个对应的组件。

## 需求

### 需求 1

**用户故事：** 作为维护 docusaurus-lib-dev 库的开发者，我希望 rehype 插件代码结构良好且模块化，以便更容易理解、测试和扩展。

#### 验收标准

1. 当插件代码被重构时，它应该被拆分为逻辑清晰、职责单一的模块
2. 当检查代码库时，每个函数应该有明确的单一目的
3. 当审查代码时，所有函数应该使用 TypeScript 进行适当的类型定义
4. 当分析代码结构时，主要插件逻辑应该与工具函数分离
5. 当查看文件组织时，相关功能应该被组合在一起

### 需求 2

**用户故事：** 作为使用插件的开发者，当我在一个 mdx 文件中写入 `<Previewer src='@@/Button/demos/basic' />` 代码块时，页面可以呈现出 src 对应的组件和其源代码。

#### 验收标准

1. src 中的的地址可以是相对地址也可以是绝对地址，如果是相对地址起始位置是该 mdx 文件地址。如果是绝对地址，需要传入 alias 参数来映射起始位置，比如声明 @@ 为某一个地址。
2. 当 Previewer 代码块有 inline 声明时，只显示组件，源代码不显示。比如：`<Previewer inline />`
3. 每个 mdx 文件最后转成 jsx 时需要为每个 Previewer 代码块单独转成对应的组件，这样可以使每个页面的数量保持可控。比如：
   
   ```mdx
   <Previewer src="@/Button/demos/basic" />

   <Previewer src="@/BusinessSelect/demos/basic" />
   ```
   会转换成：

   ```jsx
   import PreviewerX1 from '@site/.xx'
   import PreviewerX2 from '@site/.xx'

   return <>
     <PreviewerX1 />
     <PreviewerX2 />
   </>
   ```
### 需求 3

**用户故事：** 作为使用插件的开发者，我希望解析 mdx 的 Previewer 代码块时有缓存功能。

#### 验收标准

1. 当 src 地址没变并且 src 对应的组件内容没变时，不需要重复解析。
2. 当 src 地址对应的组件内的内容变化时缓存要失效。
