---
group:
  title: 衍生组件
  order: 1
order: 4
toc: content
title: FormUpload - 表单上传
description: FormUpload - 表单上传组件适用于在表单中的文件上传. 遵循 value, onChange 受控模式.
---

# FormUpload - 表单上传

该组件是对 Antd Upload 组件的封装, 通过对 fileList 和 onChange 的接管, 让它表现为一个标准的 value - onChange 受控组件, 使其能够被直接用在 Form.Item 里.

FormUpload 组件的设计目标是希望在简单的全局配置过后, 使用 FormUpload 组件就像使用 Input 组件一样简单轻量. 上传成功的文件会被表单自动收集, 上传失败的文件会被自动过滤.

### 基本的使用

在使用之前先在全局配置好 `action`, `headers` 等必要属性.

```js
<SettingProvider
  formUploadSetting={{
    action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
    headers: { Authorization: 'myToken' },
    responseToFileList: (res) => ({ id: res?.data.id }), // 将后台返回值合并进file对象
  }}
>
  ...
</SettingProvider>
```

<code src="./demos/basic/index.tsx"></code>

### 文件上传失败

- 可在全局设置上传失败后的提醒.
- 上传失败的文件不会被表单收集.

<code src="./demos/errorHandle/index.tsx"></code>

### 文件初始值

beforeUpload 返回 false 的文件表单不收集.

<code src="./demos/show/index.tsx"></code>

### 数据处理和收集 - ConverValue - Transform

FormUpload 组件默认接受的 file 对象格式是 { name: string; url: string }

如果后端返回的数据不符合该要求, 可以使用 SchemaForm 提供的 ConverValue 和 Transform

<code src="./demos/dataSubmit/index.tsx"></code>

### 更改取值字段

FormUpload 还提供了 `nameKey` 和 `urlKey` 来更改 file 对象的取值字段. 同样也支持在全局更改.

<code src="./demos/changeKey/index.tsx"></code>

### API

<API filePath='src/FormUpload/index.tsx' name='FormUploadType'></API>

#### responseToFileList 是什么意思?

当文件上传成功后, 表单默认收集到的数据是这样的:

```js
{
  uid: 'rc-upload-1691485494798-17',
  name: 'xx.png',
  size: 1403,
  status: 'done',
  response: {
    // 上传成功后的后端返回值
    id: 123,
    filePath: 'xxx'
  }
}
```

responseToFileList 函数可以把上面的 response 合并进文件对象.

比如 `responseToFileList: (res) => ({ id: res.id })`, 最后提交时的对象就会有 id.

```js
{
  id: 123,
  uid: 'rc-upload-1691485494798-17',
  name: 'xx.png',
  size: 1403,
  status: 'done',
  response: {
    // 上传成功后的后端返回
    id: 123,
    filePath: 'xxx'
  }
}
```

一般这个属性可以在 `SettingProvider` 组件中全局设定
