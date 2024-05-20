---
nav:
  title: 组件
  order: 1
group:
  title: 核心组件
  order: 0
order: 0
toc: content
title: SchemaForm - JSON 表单
description: 通过一个配置式的 schema 来生成表单 (Form), 简单高效.
---

# SchemaForm - JSON 表单

通过一个配置式的 schema 来生成表单. schema 与 antd table 的 columns 非常类似.

### 一个基本的 Schema 表单 

<code src="./demos/basic/index.tsx"></code>

在开始深入之前, 让我们先来了解几个重要的概念.

SchemaForm 的底层还是 [antd form](https://ant-design.antgroup.com/components/form-cn) 组件. 它通过遍历 **schema 数组** 来生成表单项.

以这个例子来说, <i>columns 数组</i> 中的每一个对象都是一个 **schema**. 

```js
{
  title: '用户名',
  dataIndex: 'username',
  fieldProps: {
    Placeholder: '请输入用户名'
  },
  formItemProps: {
    rules: [
      {
        required: true,
      },
    ],
  },
},
```

如果用 antd form 的方式来书写, 那么这个 schema 生成的表单项是这样的:

```js
import { Form, Input } from 'antd'

<Form>
  <Form.Item
    label='用户名'
    name='username'
    rules={[
      {
        required: true
      }
    ]}
  >
    <Input placeholder='请输入用户名' />
  </Form.Item>
</Form>
```

不难看出, 在 schema 中:
* `title` 对应的 Form.Item 中的 `label`.
* `dataIndex` 对应的 Form.Item 中的 `name`.
* `formItemProps` 的值会传递给 Form.Item 组件.
* `fieldProps` 的值会传递给被 Form.Item 包裹的组件 (对这个例子来说这个组件是 Input).

我们再来看一下第二个 schema:
```js | {4}
{
  title: "性别",
  dataIndex: "sex",
  valueType: "radio",
  fieldProps: {
    options: [
      { label: "男", value: "男" },
      { label: "女", value: "女" },
    ],
  },
};
```

与第一个 schema 不同的地方在于, 它多了一个 `valueType` 字段, 很显然 SchemaForm 通过 `valueType` 字段渲染出了不同的组件, 以这个例子来说 valueType: 'radio' 对应的是一个 Radio.Group 组件, 并且通过 fieldProps 给它传入了 options 属性.

这是使用 SchemaForm 的优点之一, 大部分常用的组件都能通过 `valueType` 来渲染. 

**schema** 部分介绍完了, 我们再来看一下 **表单实例 FormInstance**.

[表单实例](https://ant-design.antgroup.com/components/form-cn#forminstance) 是 antd form 中一个比较重要的概念, 通过实例中的方法, 我们可以完成很多操作, 比如: 提交表单, 重置表单, 给表单赋值等.

在 SchemaForm 中, 我们通过 `formRef` 属性来获取 *表单实例*.

```js | {4}
import { useRef } from 'react';
import { ProFormInstance, SchemaForm } from 'react-admin-kit';

const formRef = useRef<ProFormInstance>() // 注意这里使用的类型定义是 ProFormInstance. 它在 antd form instance 的基础上扩展了一些方法

<SchemaForm 
  formRef={formRef}
>

formRef.current?.submit() // 提交
formRef.current?.resetFields() // 重置
formRef.current?.setFieldsValue() // 赋值
```
在后文中还会详细介绍 *表单实例* 中的其它一些方法. 

以上就是 SchemaForm 的基本概念, 看到这你已经可以开始书写一些简单的表单了✨. 

随着你使用的不断深入, 你可以不断查看下面的各种例子来了解 SchemaForm 的其它属性, 相信你会越来越得心应手的. 

### valueType

valueType 是 schema 里的一个非常重要的字段, 通过指定 valueType 就能映射出不同的表单项. 常用的 valueType 有 `money` `digit` `textarea` `date` `dateRange` `select` `radio` 等, 完整的列表见[这里](https://procomponents.ant.design/components/schema#valuetype-%E5%88%97%E8%A1%A8). 当 valueType 没有指定时, 默认渲染的表单项是 Input 组件.

<code src="./demos/valueType/index.tsx"></code>

如果 valueType 不能满足你的需求, 可以使用 `renderFormItem` 完全自定义表单项.

自定义的组件需要满足 Form.Item 的规范, 即组件能接受 value 和 onChange 属性.

```js
{
  renderFormItem: (schema, config, form) => {
    return <MyComp />;
  };
}
```

### required

由于表单中设置必选的频率比较高，schema 中新增了 `required` 字段，作为 `formItemProps: { rules: [{ required: true }]}` 的简写. 当然 formItemProps 的优先级更高.

<code src="./demos/required/index.tsx"></code>

### 水平模式 horizontal

<code src="./demos/horizontal/index.tsx"></code>

### ⭐ grid 栅格模式 

grid 栅格模式是把 FormItem 放入 Ant Design 的[栅格系统](https://ant-design.antgroup.com/components/grid-cn)中, 通过 [Row](https://ant-design.antgroup.com/components/grid-cn#row) 和 [Col](https://ant-design.antgroup.com/components/grid-cn#col) 的属性来控制每个 FormItem 的布局.

```js
<SchemaForm 
  grid
  rowProps={{}}
  colProps={{}}
  columns=[
    { 
      title: 'name', 
      colProps: {} // 更高优先级
    },
    { 
      title: 'age', 
      colProps: {} // 更高优先级
    }
  ]
>
```
以这个组件为例, 当它开启 `grid` 属性后, 它实际上会被渲染成:

```js | {3,4,10}
// 伪代码, 仅用于示意.
<Form>
  <Row {...rowProps}>
    <Col {...colProps}>
      <Form.Item>
        <Field />
      <Form.Item>
    </Col>

    <Col {...colProps}>
      <Form.Item>
        <Field />
      <Form.Item>
    </Col>
  </Row>
</Form>
```

通过栅格系统, 表单项的布局将会变得更加的灵活.

<code src="./demos/grid/index.tsx"></code>

### grid 栅格模式水平方向

当 layout 设成水平方向时, 如果不同表单项所占的空间不同, 表单项 label 的宽度可能会不一致.

以下面这个例子为例, 第一行表单项独占 24, 第二行每个表单项占 8, 第三行表单项占 16. 默认状态下他们的 label 宽度会不一致.

<code src="./demos/gridHorizontalInit/index.tsx"></code>

如果要实现 label 宽度固定就需要对每个表单项单独指定 `labelCol`.

`labelCol`可以在 SchemaForm 上指定, 也可以在 schema 的 formItemProps 里指定, 后者的优先级更高.

`labelCol`的值是以所在表单项的宽度为 24 分来算出的比例值. 所以如果表单项的宽度不同, `labelCol`的值需要经过一定的计算. 一般先以最窄的表单项为基准, 设定好它的`labelCol`, 再计算其它表单项的`labelCol`, 来使他们的 label 宽保持相等.

以这个例子为例, 先设定第二行的`labelCol`为`{span: 9}`, 可算出 label 的宽度为 9/24 \* 8 = 3. 代表在整行 24 份中占 3 份.

所以第一行的`labelCol`可以设成`{span: 3}`

第三行因为表单项占 16 份, 所以`labelCol`应该设成`{span: 4.5}`. 4.5/24 \* 16 = 3. 但是 span 值只能是整数. 可以改传 flex, `flex: 0 0 18.75%`. 3/16 = 0.1875. [参考 grid 组件](https://ant.design/components/grid-cn/#components-grid-demo-flex-stretch)

<code src="./demos/gridHorizontal/index.tsx"></code>

### 空白占位

需要强制换行时可用空白占位.

<code src="./demos/placeholder/index.tsx"></code>

### 只读模式

通过 readonly 属性或者 schema 上的 readonly 属性可以设置只读模式. 只读模式有以下几个注意点:

1. 只读模式下的自定义显示用 `render` 方法, 而不是 `renderFormItem`.
2. 空白占位可以用 `render` 方法返回 null 来实现. `render: () => null`.

> 💡 Rakjs 扩展了只读模式下 render 函数的第二个参数 record. 这个 record 里包含了表单里的所有值, 提高了实用性.

<code src="./demos/readonly/index.tsx"></code>

### 表单项联动

可以使用 valueType='dependency' 来做显示控制, `name`里的值是需要监控的表单项.

<code src="./demos/dependency/index.tsx" ></code>

### 初始值和表单项赋值

<code src="./demos/initValue/index.tsx"></code>
<code src="./demos/initValue2/index.tsx"></code>

### 提交按钮 submitter

submitter 属性默认为 false. 开启后可自动生成提交按钮.

<code src="./demos/submitter/index.tsx"></code>

还可以给生成的按钮传递属性.

<code src="./demos/submitterProps/index.tsx"></code>

### ⭐ 内嵌模式 (Embed)

对于复杂表单, 内嵌模式可以让每个区块单独设置布局, 同时通过设置 `valueBaseName` 属性, 数据也可以收集在各自的对象里.

以这个例子为, `基本信息`区块和`业务信息`区块可以单独设置布局. 同时表单提交时的数据会收集成 `{ base: { username: 'xx'}, business: { company: 'xx'}}`

<code src="./demos/embed/index.tsx"></code>

这个例子同时还展示了表单项的赋值和表单项的联动控制.

- 选择了公司后, 地址会自动带出.
- 办理业务选择第一项, 基本信息中的身份证项会隐藏.

> 👉 需要注意的是, 在 embed 模式下, valueBaseName 的实现仅仅只是把 schema 中的 dataIndex 转换成数组. 见 antd 的这个[例子](https://ant.design/components/form-cn/#components-form-demo-nest-messages).
>
> 所以在 setFieldsValue 的时候, 需要把 valueBaseName 的值也考虑进去.
>
> ```js
> setFieldsValue({ business: { company: 'xxx' } });
> ```
>
> 同时在做联动控制时, 当 valueType='dependency'并且 valueBaseName 有值时, `name` 里的值应该是套嵌数组.
>
> ```js
> { valueType: 'dependency', name: [['business', 'serviceName']] } 👈
> ```

### 数据处理和收集 - ConvertValue-Transform

有的时候后端返回的数据并不能直接用于表单控件, 需要先对数据进行处理. (ConvertValue)

还有的时候, 在提交表单时, 表单收集到的数据并不能直接提交给后台, 需要先对数据进行处理. (Transform)

很典型的场景就是附件上传.

```js
// 假设有一个附件上传组件
{
  title: '附件列表',
  dataIndex: 'fileList',
  renderFormItem: () => <FormUpload />
}

// 该组件需要接收的是一个对象数组, 对象的字段是 name 和 url.
[
  { name: '文件A', url: 'www.xx.com/xx' },
  { name: '文件B', url: 'www.xx.com/xx' },
];

// 而后端返回的数据是 fileName 和 filePath:
[
  { id: 1, fileName: '文件A', filePath: 'www.xx.com/xx' },
  { id: 2, fileName: '文件B', filePath: 'www.xx.com/xx' },
];

// 提交给后端的数据需要是 fileIds: '1,2'

```

Schema 中的 `convertValue` 和 `tranform` 字段就可以应对这个场景.

<code src="../FormUpload/demos/dataSubmit/index"></code>

附件上传场景可以使用衍生组件中的 [FormUpload 组件](/components/form-upload).

### ⭐ 数据处理和收集 - 约定式

有一类组件我们除了要获取其 value 外还要获取它的显示文本(label), 比如 [Select](https://ant-design.antgroup.com/components/select-cn), [TreeSelect](https://ant-design.antgroup.com/components/tree-select-cn). 特别是当 Select 组件有分页时, 光靠 value 并不能回显出下拉内容, 这类场景我们可以开启组件的 `labelInValue` 属性来解决, 开启后组件将不再接收字符串而是需要接收一个对象 `{ label: string, value: string}`

但是后台一般会把值分开给到前端, 比如`{userId: 1, userName: 'jack'}`, 前端会把值拼成对象`{value: 1, label: 'jack'}`给到 Select, 在表单提交时再把该对象手动拆成 `{userId: 1, userName: 'jack'}` 给到后端.

由于这一类场景在实际应用中还是比较常见的. RAK 想通过对`dataIndex`的约定来简化这一流程, 约定如下:

- 👉 如果`dataIndex`中包含逗号`,`, RAK 会根据逗号前后的字段来自动拼接成一个对象, 提交时又会把该对象拆分. 逗号前的字段映射成 value, 逗号后的字段映射成 label.

```js
// 比如有一个用户下拉开启了 labelInValue
{
  title: '用户',
  dataIndex: 'userId,userName',
  valueType: 'select',
  fieldProps: {
    labelInValue: true,
    options: [
      { value: 1, label: 'jack' },
      { value: 2, label: 'tom' },
    ]
  }
}

// 未约定时表单拿到的值是
{'userId,userName': { value: 1, label: 'jack' }}

// 约定后值会被转化成:
{
  userId: 1,
  userName: 'jack'
}

// 同时在表单回显时无需对后端数据进行处理, 直接使用 initialValues 或 setFieldsValue 进行设值即能回显数据.
initialValues={{ userId: 1, userName: 'jack' }}

formRef.current?.setFieldsValue({ userId: 1, userName: 'jack' })
```

- 如果组件接受对象的键值不是 value 和 label, 还可以通过下划线自定义. 比如`userId,userName_id,name`, RAK 会拆分下划线, 下划线后面的字段同样用逗号隔开. 以这个例子来说, 当给组件赋值`{userId: 1, userName: 'jack'}`时, 值会被转换成`{ id: 1, name: 'jack' }` 传给组件.

<code src="./demos/conventionSimple/index.tsx"></code>

### 表单取值
SchemaForm 提供了多种方法来获取表单值. 最常用的是通过 onFinish 属性来取值. 

除了 onFinish 以外还可以通过 **表单实例** 提供的方法来获取表单值.

我们列举了几个常用的取值方法:

<code inline src="./demos/formValueTable/index.tsx"></code>

这些方法在取值上有细微的差异, 理解这些差异对处理时间, 数值转化等场景会很有帮助.

<code src="./demos/formValue/index.tsx"></code>

<code inline src="./demos/formValueTableResult/index.tsx"></code>

简而言之, 如果你的表单中用到了时间类控件, 又或者用到了 transform, 那么请使用后三种方法.

### 利用 innerRef 存储额外信息

`innerRef`是 RAK 提供的一个工具类 ref, 里面包含了一些实用的方法可以用来简化一些特殊的场景.

比如对于表单来说有这样一个场景:

表单里有一个人员的下拉框组件, 下拉数据里除了人员信息外还携带了部门数据 deptName 和 deptId. 当选中某个人员时部门名称会被自动带出, 同时当 deptId 为 '1' 时, 部门输入框需要置灰. 可参看例子.

通常这样的需求我们会把 deptId 存在一个额外的变量里, 然后在部门输入框的 fieldProps 里做判断.

innerRef 就可以减化这一流程, 在 fieldProps 的第二个参数里默认提供了 innerRef, 可以用 `innerRef.current?.setData()`来存储额外的信息, 然后在其它的表单项里消费 innerRef.

> innerRef 中的 setData 和 react 的 setState 一样, 只需要传入关心的字段就可以, 不会覆盖其它的字段.

<code src="./demos/innerRefData/index.tsx"></code>

> 对于内嵌模式 (embed), innerRef 可以传到 ProForm 上.
>
> ```js
> import { ProForm } from 'react-admin-kit';
> import { useRef } from 'react'
>
> const innerRef = useRef();
> ...
>
> <ProForm
>   innerRef={innerRef}
>   ...
> >
> ...
> </>
> ```

### 高级布局
### 分组 (Group)

当 valueType 为 group 时即开启分组模式. 每个 group 相当于是一个区块, `columns`里的内容会生成表单项.

默认情况下这些表单项是以 [Space](https://ant.design/components/space-cn/) 组件包裹的. 所以你可以在 fieldProps 里传入 Space 的 [api](https://ant.design/components/space-cn/#api)

<code src="./demos/group/index.tsx"></code>

### 分组 (Grid 模式)

在分组模式下同样也可以自定义表单项的布局, 即开启 grid 模式.

分组模式下布局分为两层, 外层(区块标题)和内层(columns 里的表单项), 所以 grid 的设置也分两层.

<code src="./demos/groupGrid/index.tsx"></code>

### 分组 (Grid 模式) 左右布局

<code src="./demos/groupGridHorizontal/index.tsx"></code>

### 表单数组 FormList

当 `valueType` 为 formList 时能够生成表单数组, 这对于收集数组信息非常有用. 

比如下面的例子能够添加多个店铺.

<code src="./demos/formList/index.tsx" ></code>

formList 实际上是一个组件, [api](https://procomponents.ant.design/components/group#proformlist-api) 见这里, 可以通过 fieldProps 给这个组件传递属性.

### 表单数组 Grid 排列

要让表单数组内的表单项 grid 排列, 除了开启 `grid` 属性以外, 表单项还需要用 `valueType='group'` 包裹.

<code src="./demos/formListGrid/index.tsx" ></code>

### 表单数组样式和操作按钮自定义

还可以通过 `itemRender` 属性自定义样式和操作按钮.

itemRender 的参数是 `({ listDom, action }, options)`, 其中 listDom 是表单项合集, action 是操作按钮合集, options 是对象 `{name, field, index, record, fields, operations, meta}`

<code src="./demos/formListGridCustom/index.tsx" ></code>



### API

### SchemaForm

<API filePath='src/SchemaForm/index.tsx' name='SchemaFormType'></API>

除了以上这些属性, 还可以透传 Ant Design 的属性, 更多可参考 [ProForm 的文档](https://procomponents.ant.design/components/form#proform) 以及 [Antd Form 的文档](https://ant.design/components/form-cn/#api), 以下列取一些常用的:

| 参数     | 说明                                                                                                                                                            | 类型                                                           | 默认值          |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------- |
| layout   | 表单布局                                                                                                                                                        | `horizontal` \| `vertical` \| `inline`                         | `vertical`      |
| grid     | 开启 grid 模式(推荐), 可参考上面的例子. 开启了 grid 后可以通过 rowProps 和 colProps 对任意表单项调整布局                                                        | `Boolean`                                                      | `false`         |
| rowProps | 开启 `grid` 模式后传递给 `Row`的属性. 例如 {gutter: [16, 0]}                                                                                                    | [RowProps](https://ant.design/components/grid-cn/#row)      | `{ gutter: 8 }` |
| colProps | 开启 `grid` 模式后传递给全局表单项的属性. 例如 {span: 8}代表每行三项. 同时在 columns 里也可以单独指定 colProps, columns 里的 colProps 会覆盖 form 上的 colProps | [ColProps](https://ant.design/components/grid-cn/#col)      | `--`            |
| labelCol | 传递给表单项中 label 的属性. 如{span: 3}. 同上面的 colProps, 该属性也可以在 columns 里的 formItemProps 里单独指定. 如 `{formItemProps: {labelCol: {span: 3}}}`  | [LabelColProps](https://ant.design/components/grid-cn/#col) | `--`            |

### InnerRef

| 参数    | 说明                                                                                         | 类型                            | 默认值 |
| ------- | -------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| data    | 可以存储表单中的额外数据                                                                     | `Record<string, any>`           | `{}`   |
| setData | 存入数据; setData 和 react 的 setState 一样, 只需要传入关心的字段就可以, 不会覆盖其它的字段. | `(Record<string, any>) => void` | `--`   |

### Column

| 字段名称       | 说明                                                                                                                                          | 类型                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| key            | 确定这个列的唯一值, 一般用于 dataIndex 重复的情况                                                                                             | `React.key`                                             |
| dataIndex      | 可使用约定模式自动处理值: userId, userName 或 userId, userName_id, name; 可参考[约定式例子](/components/schema-form#-数据处理和收集---约定式) | `string`                                                |
| valueType      | 数据的渲渲染方式，我们自带了一部分，你也可以自定义 valueType                                                                                  | `ProFieldValueType`                                     |
| title          | 标题的内容，在 form 中是 label                                                                                                                | `ReactNode` \| `(props,type,dom)=> ReactNode`           |
| tooltip        | 会在 title 旁边展示一个 icon，鼠标浮动之后展示                                                                                                | `string`                                                |
| valueEnum      | 支持 object 和 Map，Map 是支持其他基础类型作为 key                                                                                            | `(Entity)=> ValueEnum` \| `ValueEnum`                   |
| fieldProps     | 传给渲染的组件的 props，自定义的时候也会传递                                                                                                  | `(form,config)=>fieldProps` \| `fieldProps`             |
| formItemProps  | 传递给 Form. Item 的配置                                                                                                                      | `(form,config)=>formItemProps` \| `formItemProps`       |
| readonly | 只读模式; 优先级更高 | `boolean` |
| render         | 只读模式下自定义显示. `render` 方法只管理只读模式，编辑模式需要使用 `renderFormItem`                                                        | `(dom,record,index, action, schema) => React.ReactNode` |
| renderFormItem | 自定义编辑模式, 返回一个 ReactNode，会自动包裹 value 和 onChange                                                                              | `(schema,config,form) => React.ReactNode`               |
| hideInForm     | 在 Form 中隐藏                                                                                                                                | `boolean`                                               |
| rowProps       | 在开启 `grid` 模式时传递给 Row                                                                                                                | [RowProps](https://ant.design/components/grid/#row)  |
| colProps       | 在开启 `grid` 模式时传递给 Col                                                                                                                | [ColProps](https://ant.design/components/grid/#col)  |
| required | 表单是否必选 | `boolean` |









