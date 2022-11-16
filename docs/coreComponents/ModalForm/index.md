---
group:
  title: 核心组件
  order: 2
---

## ModalForm - 弹窗表单

通过 schema 生成一个弹窗表单.

这是 Modal 和 SchemaForm 的结合, 因此可以透传 Modal 和 SchemaForm 的 api.

### 一个基本的弹窗表单

<code src="./basic/index.tsx"></code>

### 多列排布

通过`formProps`传入 SchemaForm 的 api.

<code src="./multipleCol/index.tsx"></code>

### 长表单校验时滚动到所在项

<code src="./longForm/index.tsx"></code>

### 非受控模式(推荐)

非受控模式只需要传入 innerRef 就能控制弹窗, 使用更加简洁

<code src="./innerRef/index.tsx"></code>

### 打开弹窗后请求数据后回显

利用 formType 只在编辑和查看时才请求

<code src="./onOpen/index.tsx"></code>

### 表单初始值和表单项显示隐藏

请使用 valueType='dependency'来做显示控制, 原来的 renderFormItem 已经弃用.

<code src="./initValue/index.tsx"></code>

### 只读模式

<code src="./readonly/index.tsx"></code>

### onFinish

onFinish 回调有三个参数, 第一个参数是表单里收集到的值, 第二个参数是表单类型, 第三个参数是打开弹窗时赋给表单的初始值(这里可以携带一些额外数据比如 id 等).

<code src="./onFinish/index.tsx"></code>

### ⭐ 数据处理和收集-约定式

与[SchemaForm 一样](/core-components/schema-form#-数据处理和收集-约定式), ModalForm 同样支持约定式数据处理.

<code src="./convention/index.tsx"></code>

### ModalForm 自定义的 API

<API hideTitle exports='["Self"]' src="../../../src/ModalForm/index.tsx"></API>

### InnerRef 上的方法

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| openModal | 用于打开弹窗; formType 可用于在 onFinish 的时候判断表单类型; `innerRef.current?.openModal('edit', {name: 'jack', age: 18})` | (formType: 'new' \| 'edit' \| 'read', initialValues) => void | - |

### 透传给 Modal 的 API 可参考[Antd Modal 文档](https://ant.design/components/modal-cn/#API)
