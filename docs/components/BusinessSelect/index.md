---
group:
  title: 衍生组件
  order: 2
order: 1
---

## BusinessSelect - 业务下拉

适用于需要请求接口的下拉组件. 只需一次定义, 全页面都能方便使用.👍

先初始化组件.

```ts
import { BusinessSelectBuilder } from 'react-admin-kit';

// 方便ts提示
type SelectType = 'color' | 'brand';

const BusinessSelect = BusinessSelectBiulder<SelectType>({
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

// 开始使用
<BusinessSelect type="color" />;
```

### 基本的使用方法

`BusinessSelect`是 antd Select 的封装, 可以透传 Select 的所有属性.

<code src="./basic/index.tsx"></code>

### 同一页面中多次引用只会请求一次接口

下拉数据默认会自动缓存

<code src="./oneQuery/index.tsx"></code>

### 请求接口带查询参数 queryParams

有时我们需要给接口传递查询参数, 可以使用 queryParams.

比如有一个人员接口会根据 type 来区分不同的人员类型, 在 A 页面用的是 type=1, 在 B 页面用的是 type=2. 这种情况可以使用`queryParams`属性

```js
// A页面
<BusinessSelect type="user" queryParams={{ type: 1 }} />

// B页面
<BusinessSelect type="user" queryParams={{ type: 2 }} />
```

> 当 queryParams 传入值时, 该下拉将不缓存数据

<code src="./queryParams/index.tsx"></code>

### 分页下拉及其搜索

当下拉数据量很大时, 将 ApiType 中的 pagination 设为 true, 组件即开启分页模式, 支持滚动到底部加载下一页和远程搜索

在下一页或者搜索的时候, 会给接口抛出 current, searchValue 两个值

```js
{
  api: ({ current, searchValue }) => request();
}
```

### 清除缓存

使用`clearSelectCache(type: string)`方法清除缓存. type 不传清除所有类型的缓存

<code src="./clearCache/index.tsx"></code>

### BusinessSelectBuilder 的 API

<API exports='["default"]' hideTitle src="../../../src/BusinessSelectBuilder/index.tsx"></API>

### ApiType

<API exports='["Api"]' hideTitle src="../../../src/BusinessSelectBuilder/index.tsx"></API>

### BusinessSelect 自定义 的 API

<API exports='["Self"]' hideTitle src="../../../src/BusinessSelectBuilder/index.tsx"></API>
