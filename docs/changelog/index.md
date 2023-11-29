---
nav:
  title: 更新日志
  order: 2
toc: content
class: home
sidebar: false
title: 更新日志
description: React Admin Kit 组件库的更新日志
---

# 更新日志
## 0.3.10
2023-11-28

BusinessSelect 组件
- 🆕增加 onLoad 事件，会在下拉数据加载完成后触发.

BusinessTreeSelect 组件
- 🆕同上, 增加 onLoad 事件.

## 0.3.9
2023-11-27

ProTable 组件
- 🆕增加 optionColumnSpaceProps 属性, 用于控制表格操作列中的按钮排列.
- 🐛修复当全局设置 options 属性时, 组件内的 options 属性设 false 被覆盖的问题.

SettingProvider 全局设置
- 🆕增加 optionColumnSpaceProps 属性, 用于全局控制表格操作列中的按钮排列.




## 0.3.7
2023-11-22

BusinessSelect 组件
- 修复 allowClear, showSearch 属性被内部默认属性覆盖的问题.

## 0.3.6

2023-11-19

SchemaForm 组件

- 修复 setFieldsValue 对约定式数据赋值无效的问题.

FormUpload 组件

- 当 value 值为空字符串时不报错

ProTable 组件

- 修复 actionRef 没传时, 内部集成的删除功能不会触发 reload

## 0.3.5

Button 组件

- 增加类型定义

FormUpload 组件

- 组件在上传过程中会给 children 组件注入 loading 属性.
- 组件的 children 也可以是一个函数, 会给 children 函数传入 loading.
- `文档` 增加文件导入的用例

## 0.3.4

ProTable 组件

- ProTable `search` 属性增加 labelWrap 的 ts 类型.
- ProTable 组件新增 `confirmModalType` 和 `confirmModalProps` 属性, 用于控制删除弹框的类型. 默认类型为 Popconfirm.
- ProTable 操作列的删除按钮新增属性 btnText 用于更改按钮的文字. `{ enableDelete: () => ({btnText: ''}) }`
- ProTable `tableAlertOption` 属性中新增 `deleteProps` 属性, 用于控制批量删除按钮的属性.

全局设置 SettingProvider

- SettingProvider 新增针对 ProTable 的全局属性设置, 可以全局设置删除弹框的类型和提示文字等.

## 0.3.3

- ModalForm 组件的 innerRef 增加 formType 字段, 用于表示当前表单类型, `new | edit | read`
- SchemaForm 组件的 schema 新增 required 字段, 它是 formItemProps: { rules: [{ required: true }]} 的简写。
- ProTable 组件的 schema 新增 type 字段, `form | table`, 用于指定该 schema 是被用于表格还是表单, type 为空时既会用于表单也会用于表格.

## 0.3.2

- 修复 SchemaForm 在 onFinish 时对数组类型的值转换错误的问题。

## 0.3.1

- 修复 SchemaForm 当 initialValues 有值时 formRef 无效的问题。
- 修复 ProForm 当 initialValues 有值时 formRef 无效的问题。

## 0.3.0

- 文档升级成 dumi2.0
- ProForm 组件新增 innerRef 属性.
- SchemaForm 组件 submitter 属性新增 style 属性.
- 修复 ProTable 组件 name 不传时的 undefined 问题.
- 修复 SchemaForm 组件当 initialValues 有值时, 重置表单会让初始值丢失的问题.
- api 改动: Protable 组件中 tableAlertOption 里的 `hideExport` 属性名改成 `enableExport`
- api 改动: FormUpload 组件的 onChange 属性修改:
  - 由原来的只要文件变动就会触发 onChange, 改成只有当文件都上传完毕才触发, 并且上传错误的文件并不会包含在 files 里.
  - onFinish 属性与 onChange 相同.

## 0.2.2

- 修复同 0.1.23

## 0.1.23

- 修复 FormUpload 在受控状态下 fileList 状态不同步问题

## 0.2.1

- 修复 SchemaForm 在设置 initialValues 时引起的 fields touched

## 0.2.0

- api 改动: 更改 SchemaForm 组件的 valueName 为 valueBaseName
- 增加表单的约定式处理, 大大简化数据处理流程
- 修复 当 valueBaseName 有值时, valueType 为 dependency 时 columns 函数里 dataIndex 要处理 valueBaseName 值
- 修复 readonly 模式下 dependency 的 columns 未处理

## 0.1.22

- 移除掉多余的 console.log

## 0.1.21

- 调整 BusinessSelectBuilder 的 api
- 调整 BusinessTreeSelectBuilder 的 api

## 0.1.20

- 修改 LinkButton type

## 0.1.19

- SettingProvider 增加 对 SchemaForm 的全局设置
- 完善 ProTable 前端导出
- 新增组件 FormUpload
- SettingProvider 增加 对 FormUpload 的全局设置

## 0.1.18

- ModalForm 增加 confirmOnClose
- BusinessSelect 增加 clearSelectCache 方法
- BusinessTreeSelect 增加 clearTreeSelectCache 方法

## 0.1.17

- ModalForm 和 ProTable 的 onOpen 方法增加第三个参数 formData
- 修正 ProColumnType

## 0.1.16

- 修复 BusinessSelectBuilder 缓存引起的 reRender 问题

## 0.1.15

- ModalForm onFinish 失败后不关闭弹窗
- 修复 BusinessSelectBuilder 分页组件没有抛出 queryParams
- ModalForm 的 innerRef 的 openModal 方法增加 formType 参数;onOpen 和 onFinish 时可获取到; formType 支持 read
- ProTable 的 innerRef 的 openModal 支持 read
- 修复 ProTable 的 columnsType

## 0.1.14

- 修复 LinkButton classnames 问题
- 重构 BusinessTreeSelect 组件, 增加 queryParams

## 0.1.13

- 修改 columns 的 valueType
- 测试 SchemaFormfieldProps 拿不到 form 实例
- 去掉 src

## 0.1.12

- 增加依赖@ant-design/pro-utils

## 0.1.11

- 打包中放入 src 文件

## 0.1.10

- ProTable 增加 noPadding

## 0.1.9

- 修改用例 弃用 renderFormItem 来做显示控制
- 扩展 valueType 定义
- BusinessSelect 和 BusinessTreeSelect 支持传入 type 泛型

## 0.1.8

- 修复 LinkButton 告警
- 修复 BusinessTreeSelect loading 错误

## 0.1.7

- 增加组件 Button
- 增加组件 LinkButton

## 0.1.6

- 增加 SchemaForm 的 embed 模式

## 0.1.5

- 增加组件 BusinessSelect
- 增加组件 BusinessTreeSelect
- 增加组件 SettingProvider

## 0.1.4

- 把 react 移出 dependency

## 0.1.3

- 增加 type `ProColumnType` 和 `InnerRefType`

## 0.1.2

- 去掉 css modules

## 0.1.1

- 调整依赖

## 0.1.0

- 初发版测试
