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

## Introduction

React Admin Kit (RAK) is a React and Ant Design-based component library designed for rapidly building forms and tables in management systems(referred to as "admin systems"). Using RAK not only significantly improves development efficiency but also reduces maintenance costs across different developers due to its convention-based APIs. Additionally, since forms and tables are generated from configuration arrays, reusing them across different pages becomes extremely straightforward.

## Why is RAK?

Or, to put it another way: Why do we need RAK when ProComponent already exists?

For admin systems, ProComponent's **`ProTable`** and other components have become exemplary tools that greatly facilitate frontend development.

However, ProComponent still has some shortcomings — or rather, it doesn’t quite achieve the same user experience as Ant Design. The primary reason, in my view, is the considerable time investment required to navigate its documentation and select the right components.

We want to focus on just two key elements: Tables and Forms, the most commonly used page structures in admin systems. By centering around **schemas**, we seamlessly connect Tables and Forms, subsequently deriving other components from this foundation.

If you're a ProComponent user, most of its APIs can be passed directly to RAK. If you haven’t used ProComponent before, you can start directly with RAK’s examples and documentation, gradually adopting other APIs as needed.

## How to Use

You need to install Ant Design first, as RAK depends on Ant Design.

```bash
pnpm i antd --save
```

Install RAK:

```bash
pnpm i react-admin-kit --save
```

Check out the [Component Documentation](/react-admin-kit/en/components/schema-form) and start building ✨.

> Note for Ant Design v4 Users 👇
>
> 1. If you're using Ant Design v4, you need to import the stylesheet manually:
>
> ```js
> import 'antd/dist/antd.min.css';
> ```
>
> 2. Since ProComponent includes some Ant Design v5 components(e.g., `ColorPicker`), using Vite as your bundler may cause startup errors during local development. In such cases, consider switching to Webpack.
>
> 3. For Ant Design v4 compatibility, use RAK versions below v0.4. Versions v0.4+ only support Ant Design v5.

### Forms

If you use Ant Design, a Form is typically composed of **`Form.Item`**.

```js
import { Form, Input, DatePicker, Select } from 'antd';

<Form onFinish={handleFinish}>
  <Form.Item label="Customer Name" name="name">
    <Input />
  </Form.Item>

  <Form.Item label="Contract Date" name="contractDate">
    <DatePicker />
  </Form.Item>

  <Form.Item label="Payment Method" name="payType">
    <Select
      options={[
        { label: 'Alipay', value: '1' },
        { label: 'WeChat Pay', value: '2' },
      ]}
    />
  </Form.Item>
</Form>;
```

RAK generates Form using **schemas**, where each **schema** corresponds to a **`Form.Item`**:

```js
import { SchemaForm } from 'react-admin-kit';

const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'name',
  },
  {
    title: 'Contract Date',
    dataIndex: 'contractDate',
    valueType: 'date',
  },
  {
    title: 'Payment Method',
    dataIndex: 'payType',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: 'Alipay', value: '1' },
        { label: 'WeChat Pay', value: '2' },
      ],
    },
  },
];

// Refer to component documentation for details
const Demo = () => {
  return <SchemaForm columns={columns} onFinish={handleFinish} />;
};
```

### Tables

The same set of **schemas** can also generate Table.

```js
import { ProTable } from 'react-admin-kit';

// Refer to component documentation for details
const Demo = () => {
  return <ProTable columns={columns} />;
};
```

## Core Components Overview

RAK consists of just 3 core components, which are composable:

- **`SchemaForm`**: Standalone form generator.
- **`ModalForm`**:  Combines **`Modal`** with **`SchemaForm`**.
- **`ProTable`**: Combines **`ProTable`** with **`ModalForm`**.

Properties cascade across components. For example, you can pass **`SchemaForm`**'s props to **`ModalForm`**. See individual component documentation for specifics.

## Dependencies

```js
{
  "@ant-design/pro-form": "~2.25.0",
  "@ant-design/pro-table": "~3.15.0",
  "@ant-design/pro-utils": "~2.15.0",
}

// peerDependency
{
  "antd": ">=4.23.4",
}
```

Ant Design v5 is recommended.
