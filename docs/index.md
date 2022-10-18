---
order: 0
---

## 简介

### 为什么要有这套组件库

或者说已经有了 ProComponent 为什么还要有这套 ReactAdminKit(RAK)?

对于中后台业务系统(简称 admin 系统), ProComponent 的`ProLayout`, `ProTable`等组件已经成为了一个典范, 它们极大的方便了我们前端开发者.

然而, ProComponent 还是存在着一些问题, 或者说它总是达不到像 Antd 一样的使用体验. 究其原因, 对我而言, 是在文档的阅读和组件的选择上需要较多的时间成本...

我们只想把视角聚焦在两个点上, 表格(Table)和表单(Form), 也是 admin 系统使用最多的页面结构, 以 schema 为核心把 Table 和 Form 串联起来. 并以此衍生出一些其它的组件.

如果你是 ProComponent 用户, 那大部分的 api 都可以透传给 RAK. 如果你之前未使用过 ProComponent, 那也完全可以直接通过 RAK 的用例和文档来开始使用, 渐近式的使用其它的 api.

### 如何使用

```bash
$ yarn add react-admin-kit
```

#### 以 ProTable 为例

```js
import { ProTable } from 'react-admin-kit';

const Demo = () => {
  return (
    <ProTable
      name="用户"
      columns={columns}
      innerRef={innerRef}
      actionRef={actionRef}
      request={mockRequest}
      onFinish={onFinish}
    />
  );
};

// 具体参考各组件文档
```
