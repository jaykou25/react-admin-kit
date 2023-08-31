---
group:
  title: 核心组件
  order: 0
order: 1
toc: content
title: ModalForm - 弹窗表单
description: 通过 schema 生成一个弹窗表单. 这是 Modal 和 SchemaForm 的结合.
---

# ModalForm - 弹窗表单

通过 schema 生成一个弹窗表单.

这是 Modal 和 SchemaForm 的结合, 因此可以透传 Modal 和 SchemaForm 的 api.

### 一个基本的弹窗表单

<code src="./demos/basic/index.tsx"></code>

### 非受控模式 (推荐)

利用 RAK 提供的 innerRef, 无需额外定义 open 变量就能控制弹窗, 使用更加简洁. 后面的用例默认使用该方式.

<code src="./demos/innerRef/index.tsx"></code>

### 多列排布

`formProps` 属性可以透传 SchemaForm 组件的 api, 来改变表单的排列样式.

<code src="./demos/multipleCol/index.tsx"></code>

### 长表单校验时滚动到所在项

<code src="./demos/longForm/index.tsx"></code>

### 表单类型和表单初始值

innerRef 上的 `openModal` 方法接受两个参数, 第一个是 formType, 第二个是 initialValues.

- formType 有三种类型, `new | edit | read`, 默认值是 `new`, 在 onFinish 和 onOpen 属性里可以根据该值做不同的处理.

- initialValues 是给表单的初始值.

<code src="./demos/readonly/index.tsx"></code>

### 打开弹窗后请求数据回显

利用 formType 只在编辑和查看时才请求

<code src="./demos/onOpen/index.tsx"></code>

### 表单项显示隐藏

请使用 valueType='dependency'来做显示控制, 原来的 renderFormItem 已经弃用.

<code src="./demos/initValue/index.tsx"></code>

### onFinish

onFinish 回调有三个参数, 第一个参数是表单里收集到的值, 第二个参数是表单类型, 第三个参数是打开弹窗时赋给表单的初始值(这里可以携带一些额外数据比如 id 等).

<code src="./demos/onFinish/index.tsx"></code>

### ⭐ 数据处理和收集 - 约定式

与[SchemaForm 一样](/components/schema-form#-数据处理和收集---约定式), ModalForm 同样支持约定式数据处理.

<code src="./demos/convention/index.tsx"></code>

### 利用 innerRef 存储额外信息

与[SchemaForm](/components/schema-form#利用-innerref-存储额外信息)一样, ModalForm 也能利用 innerRef 存储额外数据.

<code src="./demos/innerRefData/index.tsx"></code>

### API

### ModalForm

<API filePath='src/ModalForm/index.tsx' name='ModalFormType'></API>

### InnerRef

| 参数      | 说明                                                                                                                        | 类型                                                                  | 默认值 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------ |
| openModal | 用于打开弹窗; formType 可用于在 onFinish 的时候判断表单类型; `innerRef.current?.openModal('edit', {name: 'jack', age: 18})` | `(formType?: 'new' \| 'edit' \| 'read', initialValues?: any) => void` | -      |
| data      | 可以存储表单中的额外数据                                                                                                    | `Record<string, any>`                                                 | `{}`   |
| setData   | 存入数据; setData 和 react 的 setState 一样, 只需要传入关心的字段就可以, 不会覆盖其它的字段.                                | `(Record<string, any>) => void`                                       | `--`   |

### 透传给 Modal 的 API 可参考[Antd Modal 文档](https://ant.design/components/modal-cn/#API)
