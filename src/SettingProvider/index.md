---
group:
  title: 默认设置
  order: 2
order: 0
toc: content
title: SettingProvider - 默认设置
description: 为组件提供统一的默认设置, 只需在应用外围包裹一次即可全局生效.
---

## SettingProvider - 组件默认设置

为组件提供统一的默认设置, 只需在应用外围包裹一次即可全局生效.

### ProTable

比如我们想配置 ProTable 的默认大小为 middle; search 区域的表单默认展开; 弹窗表单的布局默认一行两列; 删除弹框默认为 Modal.confirm, 删除文字默认为关闭.

<code src="./demos/table/index.tsx"></code>

### ModalForm

比如我们想配置 ModalForm 的默认弹窗表单的布局为水平模式.

<code src="./demos/modalForm/index.tsx"></code>

### SchemaForm

比如我们想配置 SchemaForm 的默认验证提示.

<code src="./demos/schemaForm/index.tsx"></code>

### FormUpload

可以给 FormUpload 组件默认带上 token.

<code src="./demos/formUpload/index.tsx"></code>

### API

<API filePath='src/SettingProvider/index.tsx' name='SettingProvider' ></API>
