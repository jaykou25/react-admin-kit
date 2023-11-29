---
group:
  title: 衍生组件
  order: 1
order: 0
toc: content
title: BusinessSelect - 业务下拉
description: BusinessSelect - 业务下拉组件用于解决中后台系统中下拉组件如何分页, 如何复用等问题.
---

# BusinessSelect - 业务下拉

下拉组件是中后台系统中重度使用的组件, 并且下拉选项大部分是通过接口获取的. 当系统中的下拉组件使用的越来越多的时候, 就会出现一些问题, 比如:

1. 有一部分下拉是需要分页的, 希望能对分页的下拉组件进行更通用的封装.
2. 有的下拉会在多个页面中多次使用, 如何更好的复用他们.
3. 当页面中有多个下拉组件时, 下拉选项的请求逻辑会让页面代码变得臃肿, 如何抽离这些代码.

与其让这些下拉分布在各个页面中, 不如把他们定义到一块, 由 type 区分, 形成一个更为通用的下拉组件.

我们称这个组件为 `BusinessSelect`, 它是由 `BusinessSelectBuilder` 初始化而来:

```ts
import { BusinessSelectBuilder } from 'react-admin-kit';

// 定义 type 类型
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

// 在页面上使用
<BusinessSelect type="color" />;
<BusinessSelect type="brand" />;
```

### 基本的使用方法

`BusinessSelect`是 antd [Select](https://ant-design.antgroup.com/components/select-cn) 的封装, 可以透传 Select 的所有属性.

<code src="./demos/basic/index.tsx"></code>

### 同一页面中多次引用只会请求一次接口

下拉数据默认会自动缓存

<code src="./demos/oneQuery/index.tsx"></code>

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

<code src="./demos/queryParams/index.tsx"></code>

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

<code src="./demos/clearCache/index.tsx"></code>

### 定义 labelKey 和 valueKey

下拉的 label 默认取值是 `name` 字段, value 的默认取值是 `id`. 如果要更改取值字段, 可通过 labelKey 和 valueKey 来更改.

```js
<BusinessSelect type="user" labelKey="userName" valueKey="userId" />
```

除了在 BusinessSelect 上设置以外, 还可以在 BusinessSelectBuilder 上设置

```js
BusinessSelectBuilder({
  apis: [
    {
      type: 'user'
      defaultProps: {
        labelKey: 'userName',
        valueKey: 'userId'
      }
    }
  ]
})
```

### onLoad 事件
当下拉数据加载完成后会触发 onLoad 事件. 这个事件对于某些场景非常有用, 例如可以用它实现默认选中第一条数据.

<code src="./demos/onLoad/index.tsx"></code>

### API

### BusinessSelectBuilder

<API filePath='src/BusinessSelectBuilder/index.tsx' name='BusinessSelectBuilder'></API>

### ApiType

<API name='BizApi'></API>

### BusinessSelect

<API name='BusinessSelectSelf'></API>
