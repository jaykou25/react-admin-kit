---
group:
  title: 衍生组件
---

## BusinessTreeSelect - 业务树下拉

与 BusinessSelect 一样, 可以将系统里所有的树下拉都定义到一起. 只需一次定义, 全页面都能方便使用.👍

前先初始化组件.

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

<code src="./basic/index.tsx"></code>
