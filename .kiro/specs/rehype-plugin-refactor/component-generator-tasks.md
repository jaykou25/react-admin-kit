# ComponentGenerator 组件生成器实现任务

## 任务列表

- [ ] 1. 重构 ComponentGenerator 构造函数

  - 添加 alias 参数支持别名路径解析
  - 确保 cacheDir 参数被正确使用
  - 移除未使用属性的 TypeScript 警告

  - _需求: 需求 2.1_

- [x] 2. 修改组件模板常量

  - 将 PreviewerWrapper 改为 Previewer 组件
  - 更新导入路径为 '@docusaurus-lib-dev/components'
  - 调整模板变量占位符
  - _需求: 需求 1.1, 1.2_

- [x] 3. 实现别名路径解析方法

  - 创建 resolveAliasPath 私有方法
  - 支持 @@/ 等别名前缀的路径解析
  - 处理相对路径和绝对路径的转换
  - _需求: 需求 1.1_

- [x] 4. 实现演示组件导入路径计算

  - 创建 calculateDemoImportPath 私有方法
  - 基于 MDX 文档中的 src 路径计算相对导入路径
  - 正确处理路径分隔符和文件扩展名
  - _需求: 需求 1.1_

- [x] 5. 重构 generateDemoImports 方法

  - 简化逻辑，只生成主组件的导入语句
  - 使用 src 路径而不是 dependencies 中的 source
  - 移除对其他依赖的处理逻辑
  - _需求: 需求 1.1_

- [x] 6. 更新 ComponentInfo 接口

  - 添加 srcPath 字段存储 MDX 文档中的 src 路径
  - 更新相关的类型定义文件
  - 确保类型安全
  - _需求: 需求 1.4_

- [x] 7. 修改 generateComponent 方法

  - 更新方法以接收和处理 srcPath 参数
  - 确保 ComponentInfo 对象包含所有必需字段
  - 保持方法签名的向后兼容性
  - _需求: 需求 1.1_

- [x] 8. 重构 generateComponentCode 方法

  - 使用新的 generateDemoImports 方法签名
  - 更新模板变量替换逻辑
  - 添加错误处理机制
  - _需求: 需求 1.1, 2.4_

- [x] 9. 实现错误处理机制

  - 创建 generateErrorComponent 方法
  - 在组件生成失败时提供友好的错误组件
  - 添加适当的日志记录
  - _需求: 需求 2.4_

- [x] 10. 更新 writeComponentFile 方法

  - 添加组件信息验证
  - 改进错误处理和异常捕获
  - 确保目录创建的可靠性
  - _需求: 需求 2.4_

- [x] 11. 更新单元测试

  - 修改现有测试以匹配新的实现
  - 添加别名路径解析的测试用例
  - 测试错误处理机制
  - _需求: 需求 1.3, 2.2_

- [x] 12. 添加集成测试

  - 测试完整的组件生成流程
  - 验证生成的组件能够正确导入和渲染
  - 测试各种路径场景（相对路径、别名路径等）
  - _需求: 需求 1.3_

- [x] 13. 更新类型定义

  - 修改 ComponentOptions 接口以支持 srcPath
  - 更新 ComponentInfo 接口定义
  - 确保所有类型定义的一致性
  - _需求: 需求 1.4_

- [x] 14. 代码清理和优化

  - 移除未使用的代码和注释
  - 优化导入语句和变量命名
  - 确保代码符合项目的编码规范
  - _需求: 需求 2.1, 2.2_

- [x] 15. 文档更新


  - 更新方法的 JSDoc 注释
  - 添加新功能的使用示例
  - 更新 README 或相关文档
  - _需求: 需求 2.3_
