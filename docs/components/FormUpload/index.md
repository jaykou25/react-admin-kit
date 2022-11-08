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

### 数据处理和收集-ConverValue-Transform

有时后端返回的数据并不符合组件显示的要求

```js
// 假设后端返回的数据是:
[
  { id: 1, fileName: '文件A', filePath: 'www.xx.com/xx' },
  { id: 2, fileName: '文件B', filePath: 'www.xx.com/xx' },
];

// 提交给后端的数据需要是fileIds: '1,2'
```

可以使用 `convertValue`, `transform`, `responseToFileList` 来处理这种情况.

<code src="./dataSubmit/index.tsx"></code>

### 更改取值字段

如果每个 FormUpload 都使用 `convertValue` 还是会稍显麻烦. 好在我们可以在全局更改取值字段

<code src="./changeKey/index.tsx"></code>

### FormUpload 自定义的 API

<API exports='["Self"]' hideTitle src="../../../src/FormUpload/index.tsx"></API>
