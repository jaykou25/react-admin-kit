---
group:
  title: 衍生组件
---

## BusinessTreeSelect - 业务树下拉

与 BusinessSelect 一样, 可以将系统里所有的树下拉都定义到一起. 只需一次定义, 全页面都能方便使用.

使用前先初始化组件, 定义自已的业务接口. 定义好了之后只要传入 type 就以了.

```js
import { BusinessTreeSelectBuilder } from 'react-admin-kit';

const BusinessTreeSelect = BusinessTreeSelectBiulder({
  apis: [
    {
      type: 'org',
      api: queryOrgFunction,
    },
  ],
});
```

### 基本的使用方法

<code src="./basic/index.tsx"></code>
