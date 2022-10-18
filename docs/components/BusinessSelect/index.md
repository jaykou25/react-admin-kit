---
group:
  title: 衍生组件
  order: 2
---

## BusinessSelect - 业务下拉

适用于需要请求接口的下拉组件. 只需一次定义, 全页面都能方便使用.

使用前先初始化组件, 定义自已的业务接口. 定义好了之后只要传入 type 就以了.

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

<code src="./oneQuery/index.tsx"></code>
