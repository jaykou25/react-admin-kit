---
order: 0
---

# React Admin Kit

<p align="left">
  <a href="https://ant.design">
    <img width="100" src="https://jaykou25.github.io/react-admin-kit/logo.png">
  </a>
  <span style="font-size: 22px">React Admin Kit</span>
</p>

组件基于 [AntD 4.0](https://4x.ant.design/index-cn)

## 简介

### 为什么要有这套组件库

或者说已经有了 ProComponent 为什么还要有这套 ReactAdminKit(RAK)?

对于中后台业务系统(简称 admin 系统), ProComponent 的`ProLayout`, `ProTable`等组件已经成为了一个典范, 它们极大的方便了我们前端开发者.

然而, ProComponent 还是存在着一些问题, 或者说它总是达不到像 Antd 一样的使用体验. 究其原因, 对我而言, 是在文档的阅读和组件的选择上需要较多的时间成本...

我们只想把视角聚焦在两个点上, 表格(Table)和表单(Form), 也是 admin 系统中使用最多的页面结构, 以 schema 为核心把 Table 和 Form 串联起来. 并以此衍生出一些其它的组件.

如果你是 ProComponent 用户, 那大部分的 api 都可以透传给 RAK. 如果你之前未使用过 ProComponent, 那也完全可以直接通过 RAK 的用例和文档来开始使用, 渐近式的使用其它的 api.

### 如何使用

```bash
$ yarn add react-admin-kit
```

#### 定义 Schema

```js
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'select',
    fieldProps: { options: ['男', '女'] },
  },
];
```

#### 生成表单

```js
import { SchemaForm } from 'react-admin-kit';

// 具体请参考各组件文档
const Demo = () => {
  return <SchemaForm columns={columns} onFinish={onFinish} />;
};
```

#### 生成表格

```js
import { ProTable } from 'react-admin-kit';

// 具体请参考各组件文档
const Demo = () => {
  return <ProTable columns={columns} />;
};
```

### 核心 Schema 介绍

RAK 的核心是 Schema, 用 Schema 可以生成表单(Form), 也可以生成表格(Table). 甚至同一个 Schema 即会被用在表单场景也会被用在表格场景(ProTable).

在不同的场景下, Schema 的 api 会稍有不同. 以下列出一些常用的区别.

#### 表单场景(Form)

```js
{
  title: '部门',
  dataIndex: 'dept',

  // 根据不同的valueType生成不同的表单控件.
  valueType: 'select',

  // valueType更多可选的值可参见(https://procomponents.ant.design/components/schema/#api)

  // 如果valueType为select, checkbox, radio等类型, 选项可以通过fieldProps传进去
  fieldProps: {
    options: [
      {label: '选项A', value: 'A'},
      {label: '选项B', value: 'B'},
    ]
  }

  // fieldProps还可以给表单控件传入其它属性
  fieldProps: (form) =>  ({
    style: {width: '100%'},
    placeholder: '请选择部门'
    onChange: (val) => {
      console.log({val})
    }
  }),

  // formItemProps是传给formItem的属性, 比如是否必选
  formItemProps: {
    rules: [
      {
        required: true
      }
    ]
  },

  // 自定义表单控件
  renderFormItem: () => {
    return <Select option=[] />
  }

  // 👉readonly模式下表单项的显示走的render方法而不是renderFormItem
  readonly: true;
  render: (text, {mode}) => {
    return text
  }
}
```

#### 表格场景(Table)

```js
{
  title: '部门',
  dataIndex: 'dept',

  // valueType跟表单场景的一致
  valueType: 'select',

  // renderText用于自定义表格上的文字显示; renderText会保留省略号, 图标等
  renderText: (text, record) => {
    return text
  }

  // render可以完全自定义表格上的显示; 它的第一个参数是一个ReactNode, 它里面包含了省略号, 复制图标等内容.
  render: (dom, record) => {
    return dom
  }
}
```

### 核心组件介绍

RAK 包含了 3 个核心组件, 他们的描述非常简单:

- `SchemaForm - JSON表单`: 用 Schema 生成 Form
- `ModalForm - 弹窗表单`: Modal + SchemaForm
- `ProTable - 高级表格`: Antd ProTable + ModalForm

明白了这层关系， 很多的属性就都可以透传. 比如在`ModalForm`组件中就可以透传`SchemaForm`的属性. 在`ProTable`组件中可以透传`Modal`和`SchemaForm`的属性. 具体可以参见各组件的文档说明.
