---
group:
  title: 衍生组件
order: 2
---

## BusinessTreeSelect - 业务树下拉

与 BusinessSelect 一样, 可以将系统里所有的树下拉都定义到一起. 只需一次定义, 全页面都能方便使用.👍

先初始化组件.

```js
import { BusinessTreeSelectBuilder } from 'react-admin-kit';

// 方便ts提示
type TreeSelectType = 'org';

const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>(
  {
    apis: [
      {
        type: 'org',
        api: queryOrgFunction,
      },
    ],
  })

// 开始使用
<BusinessTreeSelect type="org" />;
```

### 基本的使用方法

例子中部门会根据公司级联

和`BusinessSelect`一样, 同样支持`queryParams`, 可以传入请求参数.

数据同样会默认缓存.

`BusinessTreeSelect`可以透传 Antd TreeSelect 的所有属性.

<code src="./basic/index.tsx"></code>

### 清除缓存

使用`clearTreeSelectCache(type: string)`方法清除缓存. type 不传清除所有类型的缓存.

<code src="./clearCache/index.tsx"></code>

### BusinessTreeSelectBuilder 的 API

<API exports='["default"]' hideTitle src="../../../src/BusinessTreeSelectBuilder/index.tsx"></API>

### ApiType

<API exports='["Api"]' hideTitle src="../../../src/BusinessTreeSelectBuilder/index.tsx"></API>

### BusinessTreeSelect 自定义 的 API

<API exports='["Self"]' hideTitle src="../../../src/BusinessTreeSelectBuilder/index.tsx"></API>
