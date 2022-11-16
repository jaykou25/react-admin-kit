---
group:
  title: 组件
---

## ProTable - 高级表格

ProTable 是 [Antd ProTable](https://procomponents.ant.design/components/table) 和`ModalForm`的结合, 并且融入了删除, 前端导出等功能. 使用上代码会更加简洁.

如果你之前并不熟悉 ProTable 的 api, 完全可以直接看例子来开始使用.

### 一个基本的 CRUD 表格

<code src="./basic/index.tsx"></code>

ProTable 中新增了 innerRef 属性:

- 利用 innerRef 可以控制弹窗的打开以及对表单的赋值

```js
innerRef.current?.openModal('edit', initialValues);
```

- 同时在 columns 里的`render`方法里也增加了 innerRef

```js
{
  valueType: 'option',
  title: '操作',
  render: (text, record, index, actionRef, innerRef) => [
    <Button onClick={() => innerRef.current?.openModal('edit', record)}>编辑</Button>
  ]
}
```

ProTable 同时集成了删除功能

- 传入 delFunction 并且开启 rowSelection 后, 自动支持批量删除功能
- 传入 delFunction 并且 columns 里开启删除后, 操作列自动支持删除. 该功能默认关闭

```js
{
  valueType: 'option',
  title: '操作',
  enableDelete: true, // boolean或函数
  enabledDelete: () => ({
    disabled: true,
    visible: true,
    danger: true
  }),
  render: (text, record, index, actionRef, innerRef) => [
    <Button onClick={() => innerRef.current?.openModal('edit', record)}>编辑</Button>
  ]
}
```

### renderText 与 render 的区别

在 ProTable 里`render`跟`renderText`很容易混淆.

`renderText`更接近于 Antd Table 的 render, 但是必需返回 string. 最终在表格上显示的时候会把省略号, 复制图标等内容拼接上去.

`render`可以完全自定义内容的显示. 但是它的第一个参数是`dom`而不是`text`, 这个需要注意. 这个 dom 里包含了省略号和复制图标等内容.

<code src="./renderText/index.tsx"></code>

### 更改弹窗表单的布局

`formProps`属性里传入的值即是`SchemaForm`中的属性.

<code src="./modalFormLayout/index.tsx"></code>

### 弹窗只读模式

`innerRef.current?.openModal('read', initialData)`

<code src="./readonly/index.tsx"></code>

### 打开弹窗后请求数据回显

可以用 formType 判断只有当编辑时才请求

<code src="./onOpen/index.tsx"></code>

### onFinish

onFinish 回调有三个参数, 第一个参数是表单里收集到的值, 第二个参数是表单类型, 第三个参数是打开弹窗时赋给表单的初始值(这里可以携带一些额外数据比如 id 等).

<code src="./onFinish/index.tsx"></code>

### 受控表单

也可以不使用 request, 当成普通 table 来使用. 同样集成了新增编辑功能.

<code src="./controlled/index.tsx"></code>

### 开启前端导出列表

可以使用`renderExport`自定义导出的内容

<code src="./export/index.tsx"></code>

### ⭐ 数据处理和收集-约定式

与[SchemaForm 一样](/core-components/schema-form#-数据处理和收集-约定式), ProTable 同样支持约定式数据处理.

<code src="./convention/index.tsx"></code>

### 利用 innerRef 存储额外信息

比如下拉框里有一些额外信息需要提交给后台, 可以用 `innerRef.current?.setData()`来存储. setData 和 react 的 setState 一样, 只需要传入关心的字段就可以, 不会覆盖其它的字段.

<code src="./innerRefData/index.tsx"></code>

### 各区域参考图

下面的图列出了 ProTable 各区域的名称, 方便理解它的 api ![ProTable各区域名称](./ProTable.png)

### ProTable 自定义的 API

列举在 Form 模式下特有的

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | name 被用于显示在表格标题上, 弹窗的标题上, 以及导出的文件名上. 也可不传. 若要关闭表格标题的显示, 可以用 headerTitle: false | `string` | - |
| innerRef | 用于控制弹窗的打开; 获取 dataSource, 总页数等信息 | React.`MutableRefObject<InnerRefType>` | - |
| noPadding | 是否去掉 table 外的的 padding | `boolean` | `false` |
| onFinish | 点击弹窗确认按钮后的回调 | `(values, formType, formData) => Promise\<any\> \| void` | - |
| onOpen | 打开弹窗后的回调 | `(formType, formRef, formData) => Promise \| void` | - |
| tableAlertOption | tableAlertOption 区域的选项, 这里面集成了删除, 导出等功能 | [TableAlertOption](/core-components/pro-table#tablealertoption) | `{ hideDelete: false, hideExport: true }` |
| modalProps | 传给 Modal 的属性 | [ModalProps](https://ant.design/components/modal-cn/#API) | - |
| formProps | 传给 SchemaForm 的属性 | [SchemaFormProps](/core-components/schema-form#schemaform-自定义的-api) | - |

## InnerRef

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| openModal | 用于打开弹窗; formType 可用于在 onFinish 的时候判断表单类型; `innerRef.current?.openModal('edit', {name: 'jack', age: 18})` | `(formType: 'new' \| 'edit' \| 'read', initialValues) => void` | - |
| setData | 用于存储额外信息. | `(vals: Record<string, any>) => void` | - |
| data | 获取存储的额外信息. | - | - |
| dataSource | 获取 request 请求到的 dataSource | `any[]` | - |
| total | 获取 request 请求到的数据总数 | `number` | - |
| params | 获取 request 的请求参数 | `Record<string, any>` | - |

#### TableAlertOption

| 名称 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| hideDelete | 是否隐藏勾选删除功能 | `boolean` | `false` |
| hideExport | 是否隐藏导出功能 | `boolean` | `true` |
| exportName | 导出文件的名字 | `string` | 默认以 ProTable 的 name 属性为导出文件名 |
| actions | 定义该区域额外的按钮 | `Array[ReactNode]` | - |

### 表格场景的 Schema 定义. 更多请查看[文档](https://procomponents.ant.design/components/table#columns-%E5%88%97%E5%AE%9A%E4%B9%89)

只列举在 Table 模式下特有的. Form 模式的请参考[SchemaForm](/core-components/schema-form#表单场景的-schema)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| renderExport | 定义前端导出的内容 | `(text, record, index) => string` | - |
| renderText | 用于自定义表格上的文字显示; renderText 会保留省略号, 图标等 | `(text, record) => string` | - |
| render | 用于完全自定义表格上的显示; 它的第一个参数是一个 ReactNode, 它里面包含了省略号, 复制图标等内容. | `(dom, record, index) => any` | - |
