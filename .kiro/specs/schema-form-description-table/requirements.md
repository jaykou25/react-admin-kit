# Requirements Document

## Introduction

当前 SchemaForm 组件的 `readonlyType="description"` 模式只是简单隐藏了表单，没有提供有意义的展示。本功能将实现当 `readonlyType` 设为 `"description"` 时，自动将表单项转换为表格形式展示，提供更好的只读数据展示体验。

## Requirements

### Requirement 1

**User Story:** 作为开发者，我希望当设置 `readonlyType="description"` 时，表单能够自动转换为表格形式展示，以便用户能够清晰地查看只读数据。

#### Acceptance Criteria

1. WHEN `readonlyType` 设为 `"description"` THEN 系统 SHALL 隐藏原始表单并生成对应的表格展示
2. WHEN 表单容器存在 THEN 系统 SHALL 查找 `formContainerRef` 下的 `form > .ant-row > .ant-col` 元素作为表单项
3. WHEN 找到表单项 THEN 系统 SHALL 根据 `.ant-col` 的 span 类（如 `ant-col-8`）计算布局并分行显示
4. WHEN span 总和超过 24 THEN 系统 SHALL 自动换行处理

### Requirement 2

**User Story:** 作为开发者，我希望生成的表格能够正确映射表单项的标签和内容，以便保持数据的可读性和结构性。

#### Acceptance Criteria

1. WHEN 处理表单项 THEN 系统 SHALL 将 `.ant-form-item-label` 的内容映射到表格的 `<th>` 元素
2. WHEN 处理表单项 THEN 系统 SHALL 将 `.ant-form-item-control` 的内容映射到表格的 `<td>` 元素
3. WHEN 表单项没有标签 THEN 系统 SHALL 跳过该项或使用空的 `<th>` 元素
4. WHEN 表单项内容为空 THEN 系统 SHALL 在 `<td>` 中显示空内容或默认占位符

### Requirement 3

**User Story:** 作为开发者，我希望生成的表格具有正确的 HTML 结构和样式，以便与 Ant Design 的设计系统保持一致。

#### Acceptance Criteria

1. WHEN 生成表格 THEN 系统 SHALL 使用 `<table><tbody><tr><th></th><td></td></tr></tbody></table>` 结构
2. WHEN 渲染表格 THEN 系统 SHALL 将表格插入到 `readonlyDescriptionContainerRef` 容器中
3. WHEN 表格生成完成 THEN 系统 SHALL 应用适当的 CSS 样式以保持视觉一致性
4. WHEN 组件卸载或模式切换 THEN 系统 SHALL 清理生成的表格内容

### Requirement 4

**User Story:** 作为开发者，我希望该功能能够处理复杂的表单布局，包括嵌套结构和动态内容，以便支持各种业务场景。

#### Acceptance Criteria

1. WHEN 表单包含嵌套的 `.ant-col` 元素 THEN 系统 SHALL 正确识别并处理所有层级的表单项
2. WHEN 表单项包含复杂的 DOM 结构 THEN 系统 SHALL 保持内容的完整性和格式
3. WHEN 表单数据发生变化 THEN 系统 SHALL 能够重新生成表格内容
4. IF 表单项包含交互元素 THEN 系统 SHALL 保持这些元素在只读模式下的适当行为

### Requirement 5

**User Story:** 作为开发者，我希望该功能具有良好的性能和错误处理能力，以便在生产环境中稳定运行。

#### Acceptance Criteria

1. WHEN DOM 查询失败 THEN 系统 SHALL 优雅地处理错误并提供降级方案
2. WHEN 表单结构不符合预期 THEN 系统 SHALL 记录警告并尝试继续处理
3. WHEN 频繁切换模式 THEN 系统 SHALL 避免不必要的 DOM 操作和内存泄漏
4. WHEN 处理大量表单项 THEN 系统 SHALL 保持良好的渲染性能