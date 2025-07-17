# 实现计划

- [x] 1. 创建 Previewer 组件目录结构和基础文件








  - 创建 `packages/docusaurus-lib-dev/src/components/Previewer/` 目录
  - 创建 `packages/docusaurus-lib-dev/src/components/Previewer/components/` 子目录


  - 创建基础文件：index.tsx, index.less, components/PreviewerActions.tsx, components/SourceCode.tsx
  - _需求: 2.1_

- [x] 2. 定义 TypeScript 接口和类型





  - 在 Previewer/index.tsx 中定义 PreviewerProps, ComponentInfo, DependencyInfo 接口


  - 定义 PreviewerActionsProps 和 SourceCodeProps 接口
  - 定义内部状态管理相关的类型
  - 添加完整的 JSDoc 注释
  - _需求: 1.1, 2.3_

- [x] 3. 实现 SourceCode 子组件


  - 基于现有 website/src/components/SourceCode 组件创建简化版本
  - 实现代码语法高亮功能，使用 prism-react-renderer
  - 添加复制到剪贴板功能，使用 react-copy-to-clipboard
  - 实现 Docusaurus 主题适配和暗色模式支持
  - 处理不同编程语言的语法高亮映射
  - _需求: 1.1, 2.1_


- [ ] 4. 实现 PreviewerActions 子组件

  - 基于现有 website/src/components/PreviewerActions 组件创建简化版本
  - 实现代码展开/收起切换按钮和状态管理
  - 添加多文件标签切换功能（当 dependencies 包含多个文件时）
  - 实现操作按钮的 SVG 图标和交互效果
  - 集成国际化支持，使用 @docusaurus/Translate
  - _需求: 1.1, 2.1_



- [ ] 5. 实现主 Previewer 组件核心逻辑

  - 创建主组件结构，接收 component 和 componentInfo props
  - 实现内联模式判断逻辑（基于 inline 或 componentInfo.inline）
  - 在内联模式下直接渲染传入的 component


  - 在完整模式下渲染包含预览区域和操作区域的完整布局



  - 使用 React.Suspense 包装组件渲染，添加 loading 状态
  - _需求: 1.1, 1.2_

- [ ] 6. 实现组件渲染和错误处理

  - 创建 React Error Boundary 来捕获组件渲染错误

  - 实现错误状态的友好展示界面
  - 添加 props 验证和默认值处理
  - 处理 componentInfo 数据格式验证
  - 实现组件 ID 的锚点链接功能
  - _需求: 1.1_

- [ ] 7. 创建统一样式文件


  - 将 website 中的 Previewer, PreviewerActions, SourceCode 样式整合到单一 index.less 文件
  - 移除对外部样式变量的依赖，使用内联样式变量
  - 确保样式与 Docusaurus 主题系统兼容
  - 实现响应式设计，支持移动端适配
  - 添加暗色模式支持，使用 @docusaurus/theme-common 的 useColorMode
  - _需求: 2.2_



- [ ] 8. 集成子组件到主组件

  - 在主 Previewer 组件中导入和使用 PreviewerActions 和 SourceCode 子组件
  - 实现组件间的数据传递和状态同步
  - 处理 dependencies 数据到子组件的传递
  - 确保组件间的样式协调和布局正确



  - _需求: 1.1, 2.1_

- [ ] 9. 更新组件导出配置

  - 更新 `packages/docusaurus-lib-dev/src/components/index.ts` 导出 Previewer 组件
  - 验证现有 `.fatherrc.ts` 构建配置对新组件的支持


  - 确保 TypeScript 类型定义文件正确生成
  - 测试 CommonJS 和 ES Modules 两种导出格式
  - _需求: 2.1, 2.3_

- [ ] 10. 编写组件单元测试

  - 为 Previewer 主组件编写基础渲染测试
  - 测试内联模式和完整模式的不同渲染行为
  - 测试 props 验证和错误处理逻辑
  - 为 SourceCode 和 PreviewerActions 子组件编写单元测试
  - 测试用户交互功能（代码展开、复制、标签切换）
  - _需求: 1.1, 1.2_

- [ ] 11. 创建组件使用示例和验证
  - 创建测试用的 React 组件示例
  - 编写不同使用场景的示例代码（内联模式、完整模式、多文件）
  - 验证组件在实际使用中的表现
  - 测试与 Docusaurus 环境的集成兼容性
  - 确保所有功能按需求正常工作
  - _需求: 1.1, 1.2, 2.1_
