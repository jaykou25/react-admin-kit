---
nav:
  title: 简介
  order: 0
toc: content
sidebar: false
class: home
title: 简介
description: React Admin Kit (简称RAK) 是一个基于 React 和 Ant Design 的组件库, 用于在中后台系统中快速的构建表单表格. RAK 的使用不仅能极大的提升开发效率, 而且由于其约定式的 api 还能降低后期不同开发人员的维护成本. 另外由于表单和表格都是由配置式数组生成, 使得不同页面间的表单和表格的复用变得非常简单.
---

# 简介

React Admin Kit (简称 RAK) 是一个基于 React 和 Ant Design 的组件库, 用于在中后台系统中快速的构建表单表格. RAK 的使用不仅能极大的提升开发效率, 而且由于其约定式的 api 还能降低后期不同开发人员的维护成本. 另外由于表单和表格都是由配置式数组生成, 使得不同页面间的表单和表格的复用变得非常简单.

## 为什么要有这套组件库

或者说已经有了 ProComponent 为什么还需要 RAK?

对于中后台业务系统(简称 admin 系统), ProComponent 的`ProLayout`, `ProTable`等组件已经成为了一个典范, 它们极大的方便了我们前端开发者.

然而, ProComponent 还是存在着一些问题, 或者说它总是达不到像 Antd 一样的使用体验. 究其原因, 对我而言, 是在文档的阅读和组件的选择上需要花费较多的时间成本...

我们只想把视角聚焦在两个点上, 表格(Table)和表单(Form), 也是 admin 系统中使用最多的页面结构, 以 schema 为核心把 Table 和 Form 串联起来. 并以此衍生出一些其它的组件.

如果你是 ProComponent 用户, 那大部分的 api 都可以透传给 RAK. 如果你之前未使用过 ProComponent, 那也完全可以直接通过 RAK 的用例和文档来开始使用, 渐近式的使用其它的 api.

## 如何使用

```bash
$ yarn add react-admin-kit
```

### 引入 Ant Design 样式

```js
import 'antd/dist/antd.min.css';
```

### 定义 Schema

```js
const columns = [
  {
    title: '客户名称',
    dataIndex: 'name',
  },
  {
    title: '合同日期',
    dataIndex: 'contractDate',
    valueType: 'date',
  },
  {
    title: '支付方式',
    dataIndex: 'payType',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '支付宝', value: '1' },
        { label: '微信', value: '2' },
      ],
    },
  },
];
```

### 生成表单

常规的表单生成是通过 Form.Item

```js
import { Form, Input, DatePicker, Select } from 'antd';

<Form onFinish={handleFinish}>
  <Form.Item label="客户名称" name="name">
    <Input />
  </Form.Item>

  <Form.Item label="合同日期" name="contractDate">
    <DatePicker />
  </Form.Item>

  <Form.Item label="支付方式" name="payType">
    <Select
      options={[
        { label: '支付宝', value: '1' },
        { label: '微信', value: '2' },
      ]}
    />
    ;
  </Form.Item>
</Form>;
```

使用了 RAK 之后 一个 Form.Item 就是对应一个 schema, 传入 schemas 就能生成表单.

```js
import { SchemaForm } from 'react-admin-kit';

// 具体请参考各组件文档
const Demo = () => {
  return <SchemaForm columns={columns} onFinish={handleFinish} />;
};
```

### 生成表格

```js
import { ProTable } from 'react-admin-kit';

// 具体请参考各组件文档
const Demo = () => {
  return <ProTable columns={columns} />;
};
```

## 核心组件介绍

RAK 包含了 3 个核心组件, 他们的描述非常简单:

- `SchemaForm - JSON表单`: 用 Schema 生成 Form
- `ModalForm - 弹窗表单`: Modal + SchemaForm
- `ProTable - 高级表格`: Antd ProTable + ModalForm

明白了这层关系， 很多的属性就都可以透传. 比如在`ModalForm`组件中就可以透传`SchemaForm`的属性. 在`ProTable`组件中可以透传`Modal`和`SchemaForm`的属性. 具体可以参见各组件的文档说明.

## 项目依赖

```js
{
  "antd": "^4.23.4",
  "@ant-design/pro-form": "^2.2.2",
  "@ant-design/pro-table": "^3.0.11",
  "@ant-design/pro-utils": "^2.2.10",
}
```

目前所有的用例使用的是 antd v4. antd v5 理论也能支持.
