# Implementation Plan

- [x] 1. 更新类型定义以支持 descriptions 模式





  - 修改 SchemaFormSelfProps 类型，将 readonlyType 选项从 'description' 更新为 'descriptions'
  - 添加 descriptionsProps 配置选项到类型定义中
  - 更新相关的 TypeScript 接口和类型导出
  - _Requirements: 1.1, 3.3_

- [x] 2. 创建 DOM 扫描和解析工具函数




  - [x] 2.1 实现 extractSpanFromClassName 函数




    - 编写函数从 CSS 类名中提取 span 值（如从 'ant-col-8' 提取 8）
    - 处理边界情况和默认值
    - 添加单元测试验证解析逻辑
    - _Requirements: 1.4, 5.2_

  - [x] 2.2 实现 scanFormItems 函数




    - 编写 DOM 扫描逻辑，查找 form > .ant-row > .ant-col 元素
    - 提取每个表单项的 label 和 control 内容
    - 处理嵌套结构和异常情况
    - 返回 FormItemInfo 数组
    - _Requirements: 1.2, 1.3, 4.1_

- [x] 3. 实现布局计算逻辑




  - [x] 3.1 创建 calculateTableLayout 函数




    - 实现根据 span 值计算表格行列布局的算法
    - 处理 span 总和超过 24 时的自动换行逻辑
    - 优化布局算法以处理不规则 span 组合
    - 添加单元测试验证布局计算
    - _Requirements: 1.4, 4.3_

- [ ] 4. 创建表格构建和渲染功能





  - [x] 4.1 实现 buildTableElement 函数





    - 创建 HTML table 元素生成逻辑
    - 实现 <table><tbody><tr><th></th><td></td></tr></tbody></table> 结构
    - 应用适当的 CSS 类名和样式
    - 处理内容的 HTML 转义和安全性
    - _Requirements: 2.1, 2.2, 3.1, 3.2_

  - [x] 4.2 添加表格样式定义



    - 创建 CSS 样式文件或样式对象
    - 实现与 Ant Design 设计系统一致的视觉样式
    - 支持 bordered 和其他样式配置选项
    - 确保响应式布局兼容性
    - _Requirements: 3.3_

- [x] 5. 实现 useDescriptionTable Hook



  - [x] 5.1 创建核心 Hook 逻辑



    - 实现 useDescriptionTable Hook 的基本结构
    - 集成 DOM 扫描、布局计算和表格构建功能
    - 实现 generateTable 和 clearTable 方法
    - 添加适当的依赖数组和优化
    - _Requirements: 4.2, 5.3_

  - [x] 5.2 添加错误处理和边界情况

    - 实现 safeExecute 错误处理包装器
    - 处理 DOM 查询失败的情况
    - 添加开发环境下的警告日志
    - 实现降级方案和错误恢复
    - _Requirements: 5.1, 5.2_

- [x] 6. 集成到 SchemaForm 组件



  - [x] 6.1 更新 SchemaForm 主组件



    - 在 SchemaForm 组件中集成 useDescriptionTable Hook
    - 修改 readonlyType 判断逻辑，支持 'descriptions' 模式
    - 更新 useEffect 依赖和生命周期管理
    - 确保与现有功能的兼容性
    - _Requirements: 1.1, 3.4, 4.4_

  - [x] 6.2 实现组件清理逻辑

    - 添加组件卸载时的表格清理逻辑
    - 实现模式切换时的状态重置
    - 防止内存泄漏和 DOM 引用问题
    - 优化重新渲染性能
    - _Requirements: 3.4, 5.3_

- [x] 7. 更新现有 demo 和文档



  - [x] 7.1 修改 readonly-basic-description demo


    - 将 demo 中的 readonlyType 从 'description' 更新为 'descriptions'
    - 验证新功能在 demo 中的正确工作
    - 添加更多测试用例覆盖不同布局场景
    - _Requirements: 1.1_


  - [x] 7.2 创建新的测试用例


    - 编写单元测试验证 DOM 扫描功能
    - 编写集成测试验证表格生成功能
    - 测试错误处理和边界情况
    - 验证性能和内存使用情况
    - _Requirements: 5.4_

- [-] 8. 性能优化和最终验证


  - [ ] 8.1 实现性能优化



    - 添加防抖处理避免频繁重新生成
    - 实现结果缓存机制
    - 优化 DOM 操作和查询性能
    - 添加懒加载和按需执行逻辑
    - _Requirements: 5.3, 5.4_

  - [ ] 8.2 最终集成测试和验证
    - 验证所有功能需求的完整实现
    - 测试与其他组件的兼容性
    - 进行端到端测试和用户场景验证
    - 确保代码质量和文档完整性
    - _Requirements: 4.4, 5.4_
