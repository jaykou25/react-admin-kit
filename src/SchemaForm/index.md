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

### 一个基本的 Schema 表格 (默认是纵向模式 vertical)

<code src="./demos/basic/index.tsx"></code>

### valueType

valueType 是 schema 里的一个非常重要的字段, 通过指定 valueType 就能映射出不同的表单项. 常用的 valueType 有 `money` `digit` `textarea` `date` `dateRange` `select` `radio` 等, 完整的列表见[这里](https://procomponents.ant.design/components/schema#valuetype-%E5%88%97%E8%A1%A8). 当 valueType 没有指定时, 默认渲染的表单项是 Input 组件.

<code src="./demos/valueType/index.tsx"></code>

一个 schema 实际上就是对应一个 Form.Item, Form.Item 里包裹的组件统称为 Field. 如果要给 Field 传递属性, 可以用 `fieldProps`.

```js
{
  valueType: 'money',
  // 传递给 InputNumber 的属性
  fieldProps: {
    precision: 2,
    style: { width: '80%' },
  },
},
{
  valueType: 'select',
  // 传递给 Select 组件的属性
  fieldProps: {
    options: [
      { label: '选择1', value: 1 },
      { label: '选择2', value: 2 },
    ],
  },
}
```

而 `formItemProps` 是传递给 Form.Item 的属性, 比如是否必选:

```js
{
  formItemProps: {
    rules: [
      {
        required: true,
      },
    ],
  },
}
```

如果 valueType 不能满足你的需求, 可以使用 `renderFormItem` 完全自定义表单项, 返回的组件需要满足 Form.Item 的规范, 即组件能接受 value 和 onChange 属性.

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

### ⭐ grid 模式 (推荐)

grid 模式可以任意控制每个 FormItem 所占的空间

<code src="./demos/grid/index.tsx"></code>

### grid 模式 (水平方向)

当设成水平方向时, 如果不同行所占的空间不同, 表单项 label 的宽度可能会不一致.

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

只读模式下自定义显示走的`render`方法.

空白占位请使用`render: () => null`

<code src="./demos/readonly/index.tsx"></code>

### 表单项联动

可以使用 valueType='dependency'来做显示控制, `name`里的值是需要监控的表单项.

<code src="./demos/dependency/index.tsx"></code>

### 初始值和表单项赋值

<code src="./demos/initValue/index.tsx"></code>
<code src="./demos/initValue2/index.tsx"></code>

### 提交按钮 submitter

submitter 属性默认为 false, 开启后可自动生成提交按钮.

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

> 👉 需要注意的是, 在 embed 模式下, valueBaseName 的实现仅仅只是把 schema 中的 dataIndex 转换成数组. 见 antd 的这个[例子](https://4x.ant.design/components/form-cn/#components-form-demo-nest-messages).
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

### 分组 (Group)

当 valueType 为 group 时即开启分组模式. 每个 group 相当于是一个区块, `columns`里的内容会生成表单项.

默认情况下这些表单项是以[Space](https://4x.ant.design/components/space-cn/#API)组件包裹的. 所以你可以在 fieldProps 里传入 Space 的 [api](https://4x.ant.design/components/space-cn/#API)

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

### 表单数组 Grid 排列

要让表单数组内的表单项 grid 排列, 除了开启 `grid` 属性以外, 表单项还需要用 `valueType='group'` 包裹.

<code src="./demos/formListGrid/index.tsx" ></code>

### 表单数组样式和操作按钮自定义

还可以通过 `itemRender` 属性自定义样式和操作按钮.

itemRender 的参数是 `({ listDom, action }, options)`, 其中 listDom 是表单项合集, action 是操作按钮合集, options 是对象 `{name, field, index, record, fields, operations, meta}`

<code src="./demos/formListGridCustom/index.tsx" ></code>

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

还有一类组件我们除了要获取其 value 外还要获取它的显示文本(label), 像 Select, TreeSelect 等. 特别是当下拉组件有分页时, 光靠 value 无法回显出下拉内容, 这类场景可以通过开启组件的 `labelInValue` 属性来解决, 此时组件需要接收一个对象 `{ label: string, value: string}`

但是后台一般会把值分开给前端, 比如`{userId: 1, userName: 'jack'}`, 前端会把值拼成对象`{value: 1, label: 'jack'}`用于回显, 在表单提交时再把对象拆成字符串.

这一类场景在实际应用中还是比较常见的. RAK 想通过对`dataIndex`的约定来简化这一流程, 约定如下:

- 👉 如果`dataIndex`中包含逗号`,`, RAK 会根据逗号前后的字段来自动拼接成一个对象, 提交时又会自动将其拆分. 逗号前的字段映射成 value, 逗号后的字段映射成 label.

```js
// 比如有一个表单项开启了labelInValue
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

// RAK检测到dataIndex中含有逗号, 所以在表单提交时, values的值会自动转化成:
{
  userId: 1,
  userName: 'jack'
}

// 不需要处理即可直接提交给后端.

// 同时在表单回显时无需对后端数据进行处理, 直接使用initialValues或setFieldsValue即能回显数据.
initialValues={{userId: 1, userName: 'jack'}}

formRef.current?.setFieldsValue({userId: 1, userName: 'jack'})
```

- 如果组件接受对象的键值不是 value 和 label, 还可以通过下划线自定义. 比如`userId,userName_id,name`, RAK 会拆分下划线, 下划线后面的字段同样用逗号隔开. 这种情况的输入如果是`{userId: 1, userName: 'jack'}`则会转换成`{id: 1, name: 'jack'}`

<code src="./demos/convention/index.tsx"></code>

<code src="./demos/conventionValueBaseName/index.tsx"></code>

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

### API

### SchemaForm

<API filePath='src/SchemaForm/index.tsx' name='SchemaFormType'></API>

除了以上这些属性, 还可以透传 Ant Design 的属性, 更多可参考[ProForm 的文档](https://procomponents.ant.design/components/form#proform)以及[Antd Form 的文档](https://4x.ant.design/components/form-cn/#API), 以下列取一些常用的:

| 参数     | 说明                                                                                                                                                            | 类型                                                           | 默认值          |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------- |
| layout   | 表单布局                                                                                                                                                        | `horizontal` \| `vertical` \| `inline`                         | `vertical`      |
| grid     | 开启 grid 模式(推荐), 可参考上面的例子. 开启了 grid 后可以通过 rowProps 和 colProps 对任意表单项调整布局                                                        | `Boolean`                                                      | `false`         |
| rowProps | 开启 `grid` 模式后传递给 `Row`的属性. 例如 {gutter: [16, 0]}                                                                                                    | [RowProps](https://4x.ant.design/components/grid-cn/#Row)      | `{ gutter: 8 }` |
| colProps | 开启 `grid` 模式后传递给全局表单项的属性. 例如 {span: 8}代表每行三项. 同时在 columns 里也可以单独指定 colProps, columns 里的 colProps 会覆盖 form 上的 colProps | [ColProps](https://4x.ant.design/components/grid-cn/#Col)      | `--`            |
| labelCol | 传递给表单项中 label 的属性. 如{span: 3}. 同上面的 colProps, 该属性也可以在 columns 里的 formItemProps 里单独指定. 如 `{formItemProps: {labelCol: {span: 3}}}`  | [LabelColProps](https://4x.ant.design/components/grid-cn/#Col) | `--`            |

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
| render         | 自定义只读模式的 dom, `render` 方法只管理的只读模式，编辑模式需要使用 `renderFormItem`                                                        | `(dom,entity,index, action, schema) => React.ReactNode` |
| renderFormItem | 自定义编辑模式, 返回一个 ReactNode，会自动包裹 value 和 onChange                                                                              | `(schema,config,form) => React.ReactNode`               |
| hideInForm     | 在 Form 中隐藏                                                                                                                                | `boolean`                                               |
| rowProps       | 在开启 `grid` 模式时传递给 Row                                                                                                                | [RowProps](https://4x.ant.design/components/grid/#Row)  |
| colProps       | 在开启 `grid` 模式时传递给 Col                                                                                                                | [ColProps](https://4x.ant.design/components/grid/#Col)  |
