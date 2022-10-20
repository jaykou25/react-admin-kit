---
group:
  title: 组件
---

## ProTable - 高级表格

这个组件是对 [Antd ProTable](https://procomponents.ant.design/components/table) 的封装, 在它的基础上融入了弹窗表单, 删除, 前端导出等功能. 代码会更加简洁, 使用上更加优雅.

下面的图列出了 ProTable 各区域的名称, 方便理解它的 api ![ProTable各区域名称](./ProTable.png)

如果你之前并不熟悉 ProTable 的 api, 完全可以先暂时跳过这张图. 直接看例子的源码来开始使用.

### 一个基本的 CRUD 表格

innerRef 可以用来控制弹窗的打开以及赋初始值

<code src="./basic/index.tsx"></code>

### 更改弹窗表单的布局

<code src="./modalFormLayout/index.tsx"></code>

### ProTable 自定义的 API

列举在 Form 模式下特有的

| 参数     | 说明                                              | 类型                   | 默认值 |
| -------- | ------------------------------------------------- | ---------------------- | ------ |
| name     | 用于显示在表格头上及弹窗的 title 上               | string                 | -      |
| innerRef | 用于控制弹窗的打开; 获取 dataSource, 总页数等信息 | React.MutableRefObject | -      |
