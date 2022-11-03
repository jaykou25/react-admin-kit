---
group:
  title: 组件
---

## ProTable - 高级表格

这个组件是 [Antd ProTable](https://procomponents.ant.design/components/table) 和`ModalForm`的结合, 并且融入了删除, 前端导出等功能. 使用上代码会更加简洁.

如果你之前并不熟悉 ProTable 的 api, 完全可以直接看例子来开始使用.

### 一个基本的 CRUD 表格

<code src="./basic/index.tsx"></code>

- 用 innerRef 来控制弹窗的打开以及赋初始值
- columns 里的`render`方法增加了 innerRef, 用来控制弹窗的打开和赋值

```js
{
  valueType: 'option',
  title: '操作',
  render: (text, record, index, actionRef, innerRef) => [
    <Button onClick={() => innerRef.current?.openModal('edit', record)}>编辑</Button>
  ]
}
```

- 传入 delFunction 并且开启 rowSelection 后, 自动支持批量删除功能
- 传入 delFunction 并且 columns 里开启删除后, 操作列自动支持删除. 默认关闭

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

### 更改弹窗表单的布局

<code src="./modalFormLayout/index.tsx"></code>

### 只读模式

<code src="./readonly/index.tsx"></code>

### 打开弹窗后请求数据回显

可以用 formType 判断只有当编辑时才请求

<code src="./onOpen/index.tsx"></code>

### 受控表单

也可以不使用 request, 当成普通 table 来使用. 同样集成了新增编辑功能.

<code src="./controlled/index.tsx"></code>

### 开启前端导出列表

可以使用`renderExport`自定义导出的内容

<code src="./export/index.tsx"></code>

### 各区域参考图

下面的图列出了 ProTable 各区域的名称, 方便理解它的 api ![ProTable各区域名称](./ProTable.png)

### ProTable 自定义的 API

列举在 Form 模式下特有的

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 用于显示在表格头上及弹窗的 title 上 | string | - |
| innerRef | 用于控制弹窗的打开; 获取 dataSource, 总页数等信息 | React.MutableRefObject | - |
| noPadding | 是否去掉 table 外的的 padding | `Boolean` | `false` |
| onFinish | 点击弹窗确认按钮后的回调 | (values, formType, formData) => Promise\<any\> \| void | - |
| onOpen | 打开弹窗后的回调 | (formType, formRef, formData) => Promise \| void | - |
| tableAlertOption | tableAlertOption 区域的选项, 这里面集成了删除, 导出等功能 | [TableAlertOption](/core-components/pro-table#tablealertoption) | `{ hideDelete: false, hideExport: true }` |

#### TableAlertOption

| 名称       | 说明                 | 类型             | 默认                                     |
| ---------- | -------------------- | ---------------- | ---------------------------------------- |
| hideDelete | 是否隐藏勾选删除功能 | Boolean          | `false`                                  |
| hideExport | 是否隐藏导出功能     | Boolean          | `true`                                   |
| exportName | 导出文件的名字       | string           | 默认以 ProTable 的 name 属性为导出文件名 |
| actions    | 定义该区域额外的按钮 | Array[ReactNode] | -                                        |

### 表格场景的 Schema

列举在 Table 模式下特有的. Form 模式的请参考[SchemaForm](/core-components/schema-form#表单场景的-schema)

| 参数         | 说明               | 类型                     | 默认值 |
| ------------ | ------------------ | ------------------------ | ------ |
| renderExport | 定义前端导出的内容 | (text, record) => string | -      |
