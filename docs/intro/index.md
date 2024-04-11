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

## 简介

React Admin Kit (简称 RAK) 是一个基于 React 和 Ant Design 的组件库, 用于在中后台系统中快速的构建表单表格. RAK 的使用不仅能极大的提升开发效率, 而且由于其约定式的 api 还能降低后期不同开发人员的维护成本. 另外由于表单和表格都是由配置式数组生成, 使得不同页面间的表单和表格的复用变得非常简单.

## 为什么要有这套组件库

或者说已经有了 ProComponent 为什么还需要 RAK?

对于中后台业务系统(简称 admin 系统), ProComponent 的`ProLayout`, `ProTable`等组件已经成为了一个典范, 它们极大的方便了我们前端开发者.

然而, ProComponent 还是存在着一些问题, 或者说它总是达不到像 Antd 一样的使用体验. 究其原因, 对我而言, 是在文档的阅读和组件的选择上需要花费较多的时间成本...

我们只想把视角聚焦在两个点上, 表格(Table)和表单(Form), 也是 admin 系统中使用最多的页面结构, 以 schema 为核心把 Table 和 Form 串联起来. 并以此衍生出一些其它的组件.

如果你是 ProComponent 用户, 那大部分的 api 都可以透传给 RAK. 如果你之前未使用过 ProComponent, 那也完全可以直接通过 RAK 的用例和文档来开始使用, 渐近式的使用其它的 api.

## 如何使用

RAK 依赖 Antd, 所以在使用前需要先安装 Antd.

```bash
yarn add antd
```

如果使用的是 antd v4 版本, 还需要引入样式.

```js
import 'antd/dist/antd.min.css';
```

> 由于 ProComponent 引入了 antd v5的一些组件, 比如 ColorPicker, 会导制在 vite 下启动报错. 如果你还是想继续使用 antd v4 可以改用 webpack. 


安装 RAK

```bash
$ yarn add react-admin-kit
```

> 要使用 antd v4 请使用 RAK < v0.4, v0.4 以后只支持 antd v5.

### 生成表单

常规的表单是由 Form.Item 组成.

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

RAK 通过 schemas 生成表单, 一个 schema 对应一个 Form.Item.

```js
import { SchemaForm } from 'react-admin-kit';

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

RAK 只有 3 个核心组件, 并且它们是组合的关系:

- `SchemaForm - JSON表单`: `SchemaForm`
- `ModalForm - 弹窗表单`: `Modal` + `SchemaForm`
- `ProTable - 高级表格`: `ProTable` + `ModalForm`

所以组件间的属性是可以透传的. 比如在`ModalForm`组件中就可以透传`SchemaForm`的属性. 在`ProTable`组件中可以透传`Modal`和`SchemaForm`的属性. 具体可以参见各组件的文档说明.

## 项目依赖

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

推荐使用 antd v5.