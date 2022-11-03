---
group:
  title: 衍生组件
  order: 2
order: 5
---

## FormUpload - 表单上传

适用于表单中上传文件. 遵循 value, onChange 受控模式.

Antd Upload 组件的属性可以透传给 FormUpload, 另外还可认在 SettingProvider 里全局设置默认属性, 比如设置 headers`{ Authorization: token}` 等

### 基本的使用方法

<code src="./basic/index.tsx"></code>

### 上传错误的提醒

<code src="./errorHandle/index.tsx"></code>

### 附件回显

<code src="./show/index.tsx"></code>

### 数据收集

假设表单提交时后台接的是 fileIds, 然后详情接口返回的是 fileList

利用 convertValue, transform, responseToFileList 就可以处理这种情况.

<code src="./dataSubmit/index.tsx"></code>

### 更改取值字段

如果每个 FormUpload 都使用 convertValue 还是会稍显麻烦. 好在我们可以在全局设置取值字段

<code src="./changeKey/index.tsx"></code>

### FormUpload 自定义的 API

<API exports='["Self"]' hideTitle src="../../../src/FormUpload/index.tsx"></API>
