---
group:
  title: 组件
---

## ProTable - 高级表格

这是对 antd ProTable 的封装

### 一个基本的表格(CRUD)

```tsx
import React, { useState } from 'react';
import { Modal } from 'antd';

const Basic = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div onClick={() => setVisible(true)}>open</div>
      <Modal visible={visible} title="hi">
        hi
      </Modal>
    </div>
  );
};

export default Basic;
```
