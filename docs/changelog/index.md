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
## 0.5.8
🐛 增加对 pro-component 警告信息的捕获, 例如 `Warning: findDOMNode is deprecated`

## 0.5.7
BusinessSelect 组件
- 🐛修复 BusinessSelect 分组选项的问题.

## 0.5.6
BusinessSelect 组件
- 🐛修复 BusinessSelect 组件 disabled 属性未接收问题. 同时增加分组选项.

## 0.5.5
ModalForm 组件
- 💄ModalForm 弹窗表单有滚动时滚动条贴边.

SchemaForm 组件
- 🐛修复 schema 中 required 属性在 formItemProps 为函数时失效的问题.

## 0.5.4
BusinessSelect 组件
- 🆕增加 searchDebounceValue 属性, 控制组件搜索时的 debounce 值.
- 🐛修复组件搜索时 loading 和 allowClear 冲突的问题.


## 0.5.3
ProTable 组件
- 🐛修复搜索表单 valueType: dependency 无效的问题.

## 0.5.1
2024-5-20

ProForm 组件
- 🐛修复 formRef 约定式赋值没有及时更新的问题.
- 🐛修复在 `embed` 模式下对 valueType: formList 的 grid 布局失效的问题.

## 0.5.0
2024-5-15

- ✨ 重构 SchemaForm, ProForm 的约定式实现. 修复了 fieldProps 函数中 form 约定式赋值无效的问题. 覆盖了测试用例.

## 0.4.4
2024-5-11

SchemaForm 组件, ProForm 组件
- 🐛修复 **表单实例** 的 `validateFields`, `getFieldsFormatValue`, `validateFieldsReturnFormatValue` 方法未对约定式处理的问题.

## 0.4.3
2024-5-6

ModalForm 组件
- 🐛修复 ModalForm 组件(或者 ProTable) 套嵌在 ProForm 组件中时, fieldProps 函数中的 form 被覆盖的问题.

## 0.4.1
2024-4-25

SchemaForm 组件
- 🐛修复 getFieldsValue 没有对约定式值进行处理的问题.

## 0.4.0
2024-4-12

移除掉在 antd v4中过期的 api. 所以在 v0.4 以后只支持 antd v5.

ModalForm 组件
- 移除掉 bodyStyle api.

SchemaForm 组件
- 🆕在只读模式下 render 函数的第二个参数由 entity 扩展成 record. 这个 record 不仅包含所有表单项的值, 还包含了 initialValues 里除表单项以外的值和 setFieldsValue 里除表单项以外的值, 增加了实用性.

## 0.3.23
同 0.4.4

## 0.3.22
同 0.4.3

## 0.3.19
同 0.4.1

## 0.3.18
2024-4-9

ProTable 组件
- <img style="vertical-align: -3px" width='20' src='./ts.png'> 修复 ProTable 中 search 属性的类型定义.


## 0.3.17
2024-4-9

文档用例更新成 antd v5.

ModalForm 组件
- <img style="vertical-align: -3px" width='20' src='./ts.png'> 修复 ModalFormInnerRefType 的类型定义, 修复后 useRef() 默认值可以为空.

ProTable 组件
- <img style="vertical-align: -3px" width='20' src='./ts.png'> 修复 TableColumnType 的类型定义, 修复后提示更加准确.

## 0.3.16
2024-2-11

ModalForm 组件
- 🐛修复 openModal('read') 只读方法对 dependency 里的子项无效的问题.

ProTable 组件
- 🐛修复 innerRef 与 fieldProps 中的 innerRef 不是同对象的问题.

## 0.3.15
2024-2-7

ProTable 组件
- 🛠schema 中的 type 字段新增 'search' 类型, 代表该项只会被用于 ProTable 的 search 区域.
- 🆕新增 defaultHideInSearch 属性, 来全局控制 column 是否默认显示在搜索区域.

## 0.3.14
2024-2-2

ProTable 组件
- 🆕新增 reload 全局事件, 用于在其它页面控制表格的刷新.

## 0.3.13
2023-12-3

ProTable 组件
- 🐛删除按钮增加 stopPropogation. 

## 0.3.12
2023-12-1

SchemaForm 组件
- 🐛修复约定式赋值问题: setFieldsValue 赋值时会把其它表单项的值赋空.

## 0.3.11
2023-11-29

SchemaForm 组件
- 🐛修复约定式赋值问题: 假设组件是 labelInValue 的, dataIndex 是 userId,userName, 当后端返回 userId 和 userName 为空时, 原先会给组件赋上空对象, 现在改成给组件赋 undefined.

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
