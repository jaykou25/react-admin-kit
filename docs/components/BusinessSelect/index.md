---
group:
  title: 衍生组件
  order: 2
---

## BusinessSelect - 业务下拉

适用于需要请求接口的下拉组件. 只需一次定义, 全页面都能方便使用.👍

使用前先初始化组件, 定义好自已的业务接口. 之后只要传入 type 就可以了.

```js
import { BusinessSelectBuilder } from 'react-admin-kit';

const BusinessSelect = BusinessSelectBiulder({
  apis: [
    {
      type: 'color',
      api: queryColorFunction,
    },
    {
      type: 'brand',
      api: queryBrandFunction,
      pagination: true,
    },
  ],
});
```

### 基本的使用方法

<code src="./basic/index.tsx"></code>

### 同一页面中多次引用组件只请求一次接口

下拉数据默认自动缓存

<code src="./oneQuery/index.tsx"></code>

### 请求接口带参数 queryParams

当我们定义好了一个下拉, 在不同的页面有时会需要不同的查询条件.

比如一个人员接口根据 type 来区分不同的人员类型, 在 A 页面用的是 type=1, 在 B 页面用的是 type=2. 这种情况可以使用`queryParams`属性

```js
// A页面
<BusinessSelect type="user" queryParams={{ type: 1 }} />

// B页面
<BusinessSelect type="user" queryParams={{ type: 2 }} />
```

> 当 queryParams 传入值时, 该下拉不会读取缓存数据

### 分页下拉及其搜索

当下拉数据量很大时, ApiType 中的 pagination 设为 true, 组件即开启分页模式.

在下一页或者搜索的时候, 会给接口抛出 current, searchValue 两个值

```js
{
  api: ({ current, searchValue }) => request();
}
```

### BusinessSelectBuilder 自定义的 API

<API exports='["default"]' hideTitle src="../../../src/BusinessSelectBuilder/index.tsx"></API>

### ApiType 的 API

<API exports='["Api"]' hideTitle src="../../../src/BusinessSelectBuilder/index.tsx"></API>

### BusinessSelect 自定义 的 API

<API exports='["Self"]' hideTitle src="../../../src/BusinessSelectBuilder/index.tsx"></API>
