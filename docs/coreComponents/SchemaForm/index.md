---
group:
  title: 核心组件
  order: 1
order: 1
---

## SchemaForm - JSON 表单

通过与 antd table 相类似的 columns 来生成表单.

这个组件是对 pro-form 中的 BetaSchemaForm 组件的封装.

[BetaSchemaForm 组件](https://procomponents.ant.design/components/schema-form#proformlayouttype)支持 7 种表单类型, 有 Form, ModalForm, DrawerForm, StepsForm, LightFilter, QueryFilter, Embed. 但是在 SchemaForm 中我们只支持 Form 和 Embed 两种类型, 使得 api 大大简化.

另外我们把 ModalForm 和 DrawerForm 抽出来做成独立的组件.

### 一个基本的 Schema 表格(默认是纵向模式 vertical)

<code src="./basic/index.tsx"></code>

### 水平模式 horizontal

<code src="./horizontal/index.tsx"></code>

### grid 模式(推荐)

grid 模式可以任意控制每个 FormItem 所占的空间

<code src="./grid/index.tsx"></code>

### grid 模式(水平方向)

该例子中保持 label 的固定宽度比较困难, 第一行占 24, 第二行每个表单项占 8, 第三行占 16. 可以在 columns 的 formItemProps 里单独指定每个表单项的 labelCol.

有的时候 span 计算出来可能不是整数, 以这个例子为例, 第三行如果要保持跟第一第二行一样的 label 宽度, span 计算出来是 4.5, 这种情况可以改传 flex 来达到效果.

<code src="./gridHorizontal/index.tsx"></code>

### 空白占位

<code src="./placeholder/index.tsx"></code>

### 只读模式

只读模式下自定义显示走的`render`方法.

空白占位请使用`render: () => ''`

<code src="./readonly/index.tsx"></code>

## 表单项联动

可以使用 valueType='dependency'来做显示控制, `name`里的值是需要监控的表单项.

<code src="./dependency/index.tsx"></code>

### 初始值和表单项赋值

<code src="./initValue/index.tsx"></code>

### ⭐ 内嵌模式

对于复杂表单, 内嵌模式可以让每个区块单独设置布局, 同时通过设置`valueBaseName`, 数据也可以收集在各自的对象里.

以这个例子为, `基本信息`区块和`业务信息`区块可以单独设置布局. 同时表单提交时的数据会收集成 `{ base: { username: 'xx'}, business: { company: 'xx'}}`

<code src="./embed/index.tsx"></code>

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

### 分组(Group)

当 valueType 为 group 时即开启分组模式. 每个 group 相当于是一个区块, `columns`里的内容会生成表单项.

默认情况下这些表单项是以[Space](https://ant.design/components/space-cn/#API)组件包裹的. 所以你可以在 fieldProps 里传入 Space 的 api

<code src="./group/index.tsx"></code>

### 分组(Grid 模式)

在分组模式下同样也可以自定义表单项的布局, 即开启 grid 模式.

分组模式下布局分为两层, 外层(区块标题)和内层(columns 里的表单项), 所以 grid 的设置也分两层.

<code src="./groupGrid/index.tsx"></code>

### 分组(Grid 模式) 左右布局

<code src="./groupGridHorizontal/index.tsx"></code>

### 数据处理和收集-ConverValue-Transform

有的时候后端返回的数据并不能直接用于表单控件, 同时在提交的时候也需要对数据进行处理. 很典型的场景就是附件上传.

```js
// 假设有一个附件上传组件
{
  title: '附件列表',
  dataIndex: 'fileList',
  renderFormItem: () => <FormUpload />
}

// 该组件需要接收的数据是一个对象数组.
[
  { name: '文件A', url: 'www.xx.com/xx' },
  { name: '文件B', url: 'www.xx.com/xx' },
];

// 后端返回的数据是:
[
  { id: 1, fileName: '文件A', filePath: 'www.xx.com/xx' },
  { id: 2, fileName: '文件B', filePath: 'www.xx.com/xx' },
];

// 提交给后端的数据需要是fileIds: '1,2'

```

Schema 中的 `convertValue` 和 `tranform` 字段就可以应对这个场景.

请参考 FormUpload 组件中的[这个例子](/components/form-upload#数据收集).

<code src="../../components/FormUpload/dataSubmit/index"></code>

### ⭐ 数据处理和收集-约定式

有一类组件我们除了要获取其 value 外还要获取它的显示文件(label), 像 Select, TreeSelect 等, 可以通过开启`labelInValue`解决, 此时组件需要接收一个对象 `{ label: string, value: string}`

但是后台一般会把值分开给前端, 比如`{userId: 1, userName: 'jack'}`, 前端会把值拼成对象`{value: 1, label: 'jack'}`用于回显, 在表单提交时再把对象拆成字符串.

这一类场景在实际应用中还是比较常见的, RAK 想通过对`dataIndex`的约定来简化这一流程.

- 👉 如果`dataIndex`中包含`,`逗号, RAK 会根据逗号前后的字段来自动拼接成一个对象, 提交时又会自动将其拆分. 逗号前的字段映射成 value, 逗号后的字段映射成 label.

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

- 如果组件接受对象的键值不是 value 和 label, 可以通过下划线自定义. 比如`userId,userName_id,name`, RAK 会拆分下划线, 下划线后面的字段时样用逗号隔开. 这种情况输入如果是`{userId: 1, userName: 'jack'}`会转换成`{id: 1, name: 'jack'}`

<code src="./convention/index.tsx"></code>

<code src="./conventionValueBaseName/index.tsx"></code>

### SchemaForm 自定义的 API

<API exports='["Self"]' hideTitle src="../../../src/SchemaForm/index.tsx"></API>

### 表单场景的 Schema

列举在 Form 模式下特有的

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colProps | 在 grid 模式下列所占的空间, 如 {span: 24} | object | - |
| dataIndex | 可使用约定模式自动处理值: userId,userName 或 userId,userName_id,name | string |  |

### 透传给 ProForm 的 API

以下列取常用的, 更多可以参考[ProForm 的文档](https://procomponents.ant.design/components/form#proform)以及[Antd Form 的文档](https://ant.design/components/form-cn/#API)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `vertical` |
| grid | 开启 grid 模式(推荐), 可参考上面的例子. 开启了 grid 后可以通过 rowProps 和 colProps 对任意表单项调整布局 | `Boolean` | `false` |
| rowProps | 开启 `grid` 模式后传递给 `Row`的属性. 例如 {gutter: [16, 0]} | [RowProps](https://ant.design/components/grid/#Row) | `{ gutter: 8 }` |
| colProps | 开启 `grid` 模式后传递给全局表单项的属性. 例如 {span: 8}代表每行三项. 同时在 columns 里也可以单独指定 colProps, columns 里的 colProps 会覆盖 form 上的 colProps | [ColProps](https://ant.design/components/grid/#Col) | - |
| labelCol | 传递给表单项中 label 的属性. 如{span: 3}. 同上面的 colProps, 该属性也可以在 columns 里的 formItemProps 里单独指定. 如 `{formItemProps: {labelCol: {span: 3}}}` | [LabelColProps](https://ant.design/components/grid-cn/#Col) | - |

```

```
