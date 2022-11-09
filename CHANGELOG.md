# React Admin Kit

## 0.1.0

- 初发版测试

## 0.1.1

- 调整依赖

## 0.1.2

- 去掉 css modules

## 0.1.3

- 增加 type `ProColumnType` 和 `InnerRefType`

## 0.1.4

- 把 react 移出 dependency

## 0.1.5

- 增加组件 BusinessSelect
- 增加组件 BusinessTreeSelect
- 增加组件 SettingProvider

## 0.1.6

- 增加 SchemaForm 的 embed 模式

## 0.1.7

- 增加组件 Button
- 增加组件 LinkButton

## 0.1.8

- 修复 LinkButton 告警
- 修复 BusinessTreeSelect loading 错误

## 0.1.9

- 修改用例 弃用 renderFormItem 来做显示控制
- 扩展 valueType 定义
- BusinessSelect 和 BusinessTreeSelect 支持传入 type 泛型

## 0.1.10

- ProTable 增加 noPadding

## 0.1.11

- 打包中放入 src 文件

## 0.1.12

- 增加依赖@ant-design/pro-utils

## 0.1.13

- 修改 columns 的 valueType
- 测试 SchemaFormfieldProps 拿不到 form 实例
- 去掉 src

## 0.1.14

- 修复 LinkButton classnames 问题
- 重构 BusinessTreeSelect 组件, 增加 queryParams

## 0.1.15

- ModalForm onFinish 失败后不关闭弹窗
- 修复 BusinessSelectBuilder 分页组件没有抛出 queryParams
- ModalForm 的 innerRef 的 openModal 方法增加 formType 参数;onOpen 和 onFinish 时可获取到; formType 支持 read
- ProTable 的 innerRef 的 openModal 支持 read
- 修复 ProTable 的 columnsType

## 0.1.16

- 修复 BusinessSelectBuilder 缓存引起的 reRender 问题

## 0.1.17

- ModalForm 和 ProTable 的 onOpen 方法增加第三个参数 formData
- 修正 ProColumnType

## 0.1.18

- ModalForm 增加 confirmOnClose
- BusinessSelect 增加 clearSelectCache 方法
- BusinessTreeSelect 增加 clearTreeSelectCache 方法

## 0.1.19

- SettingProvider 增加 对 SchemaForm 的全局设置
- 完善 ProTable 前端导出
- 新增组件 FormUpload
- SettingProvider 增加 对 FormUpload 的全局设置

## 0.1.20

- 修改 LinkButton type

## 0.1.21

- 调整 BusinessSelectBuilder 的 api
- 调整 BusinessTreeSelectBuilder 的 api
