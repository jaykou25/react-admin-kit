---
group:
  title: 衍生组件
  order: 1
order: 1
toc: content
title: BusinessTreeSelect - 业务树下拉
description: BusinessTreeSelect - 业务树下拉组件用于解决中后台系统中树下拉的分页, 如何复用等问题.
---

## BusinessTreeSelect - 业务树下拉

与 BusinessSelect 一样, 可以将系统里所有的树下拉都定义到一起. 只需一次定义, 全页面都能方便使用.

先初始化组件.

```js
import { BusinessTreeSelectBuilder } from 'react-admin-kit';

// 定义 type 类型
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

// 在页面中使用
<BusinessTreeSelect type="org" />;
```

### 基本的使用方法

- 该例子中部门会根据公司级联

- 和`BusinessSelect`一样, 同样支持`queryParams`, 可以传入请求参数.

- 数据同样会默认缓存.

- `BusinessTreeSelect`可以透传 Antd TreeSelect 的所有属性.

<code src="./demos/basic/index.tsx"></code>

### 清除缓存

使用`clearTreeSelectCache(type: string)`方法清除缓存. type 不传清除所有类型的缓存.

<code src="./demos/clearCache/index.tsx"></code>

### API

### BusinessTreeSelectBuilder

<API filePath='src/BusinessTreeSelectBuilder/index.tsx' name='BusinessTreeSelectBuilder' ></API>

### ApiType

<API name='BizTreeApi' ></API>

### BusinessTreeSelect

<API name='BusinessTreeSelectSelf'></API>
