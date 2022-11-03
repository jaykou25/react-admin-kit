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

### 内嵌模式

对于复杂表单, 每个区块可以单独设置布局, 同时通过设置`valueName`, 数据收集也可以收集在各自的对象里.

这个例子同时还展示了表单项的赋值和表单项的显示控制.

- 选择了公司后, 地址会自动带出.
- 办理业务选择第一项, 基本信息中的身份证项会隐藏.

> 👉 在 embed 模式下, 实现表单项的显示控制需要使用 valueType='dependency', 见下面的例子.
>
> 唯一要注意的是 colProps 请不要放在 columns 函数里, 而是放在外层.

```js
{
  valueType: 'dependency',
  name: ['someName'],
  colProps: {span: 16}, // 👈 ✔️
  columns: () => [{
    title: 'somtTitle',
    dataIndex: 'someTitle'
  }]
}

{
  valueType: 'dependency',
  name: ['someName'],
  columns: () => [{
    title: 'somtTitle',
    dataIndex: 'someTitle'
    colProps: {span: 16}, // 👈 ❌
  }]
}
```

<code src="./embed/index.tsx"></code>

### 初始值和表单项显示控制

请使用 valueType='dependency'来做显示控制, 原来的 renderFormItem 已经弃用.

<code src="./initValue/index.tsx"></code>

### 分组

分组模式下, FormItem 的布局默认是以[Space](https://ant.design/components/space-cn/#API)组件包裹. 可以在 fieldProps 里传入 Space 的 api

<code src="./group/index.tsx"></code>

### 分组(Grid 模式)

在分组模式下也可以自定义 FormItem 的布局, 即开启 grid 模式.

分组模式下布局分两层, 外层(标题区)和内层(内容区), 所以 grid 的设置也分两层.

<code src="./groupGrid/index.tsx"></code>

### 分组(Grid 模式) 左右布局

<code src="./groupGridHorizontal/index.tsx"></code>

### 数据收集

有的时候后端返回的数据并不能直接用于表单控件, 需要对数据进行处理. 并且在提交的时候也需要对数据进行处理. 最典型的场景就是附件列表上传.

利用 Schema 中的 convertValue 和 tranform 可以应对这个场景. 请参考 FormUpload 组件中的[这个例子](/components/form-upload#数据收集).

### SchemaForm 自定义的 API

<API exports='["Self"]' hideTitle src="../../../src/SchemaForm/index.tsx"></API>

### 表单场景的 Schema

列举在 Form 模式下特有的

| 参数     | 说明                                      | 类型   | 默认值 |
| -------- | ----------------------------------------- | ------ | ------ |
| colProps | 在 grid 模式下列所占的空间, 如 {span: 24} | object | -      |

### 透传给 ProForm 的 API

以下列取常用的, 更多可以参考[ProForm 的文档](https://procomponents.ant.design/components/form#proform)以及[Antd Form 的文档](https://ant.design/components/form-cn/#API)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `vertical` |
| grid | 开启 grid 模式(推荐), 可参考上面的例子. 开启了 grid 后可以通过 rowProps 和 colProps 对任意表单项调整布局 | `Boolean` | `false` |
| rowProps | 开启 `grid` 模式后传递给 `Row`的属性. 例如 {gutter: [16, 0]} | [RowProps](https://ant.design/components/grid/#Row) | `{ gutter: 8 }` |
| colProps | 开启 `grid` 模式后传递给全局表单项的属性. 例如 {span: 8}代表每行三项. 同时在 columns 里也可以单独指定 colProps, columns 里的 colProps 会覆盖 form 上的 colProps | [ColProps](https://ant.design/components/grid/#Col) | - |
| labelCol | 传递给表单项中 label 的属性. 如{span: 3}. 同上面的 colProps, 该属性也可以在 columns 里的 formItemProps 里单独指定. 如 `{formItemProps: {labelCol: {span: 3}}}` | [LabelColProps](https://ant.design/components/grid-cn/#Col) | - |
