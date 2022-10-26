---
group:
  title: 核心组件
  order: 2
---

## ModalForm - 弹窗表单

通过 columns 生成一个弹窗表单.

### 一个基本的弹窗表单

<code src="./basic/index.tsx"></code>

### 多列排布

<code src="./multipleCol/index.tsx"></code>

### 长表单的滚动到所在项

<code src="./longForm/index.tsx"></code>

### 请求数据后回显

<code src="./onOpen/index.tsx"></code>

### 非受控模式(推荐)

非受控模式只需要传入 innerRef 就能控制弹窗, 使用更加简洁

<code src="./innerRef/index.tsx"></code>

### 表单初始值和表单项显示隐藏

请使用 valueType='dependency'来做显示控制, 原来的 renderFormItem 已经弃用.

<code src="./initValue/index.tsx"></code>

### 只读模式

<code src="./readonly/index.tsx"></code>

### ModalForm 自定义的 API

<API hideTitle exports='["Self"]' src="../../../src/ModalForm/index.tsx"></API>

### 透传给 Modal 的 API 可参考[Antd Modal 文档](https://ant.design/components/modal-cn/#API)
