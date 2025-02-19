---
nav:
  title: 测试用例
  order: 10
group:
  title: 核心组件
  order: 0
order: 20
toc: content
title: ModalForm
debug: true
---


# SchemaForm

## 初始值问题
columns 上有 initialValue. Form 上也有 initialValues. 这两者会合并处理吗?

首先我们来看看 pro-component 是如何处理的.

<code src="./modal-form-demo/pro-component-initial-value" ></code>

可以看出 Form 上的 initialValues 优先级更高. 并且他们是合并的关系. 同时控制台会有告警信息.

同理, ModalForm 也要遵循这个规则.

案例1. columns 有初始值 `{name: 'hello'}`, ModalForm 上有初始值 `{name: 'Jack', phone: 123}`, openModal 有初始值 `{name: 'Jack2'}`

期望1: `{name: 'Jack2', phone: 123}`

<code src="./modal-form-demo/modal-form-initial-value" ></code>

案例2. 采用 open 受控模式, 并且用于 Class 组件.

<code src="./modal-form-demo/modal-form-initial-value-control-class" ></code>

案例3. 采用 open 受控模式, 用于 Function 组件.

<code src="./modal-form-demo/modal-form-initial-value-control" ></code>