# normalizeSpan 方法需求规格

## 目标
规范化传入 Ant Design Descriptions 组件的 items 数组中的 span 值，确保布局合理、美观。

## 背景
- Ant Design Descriptions 组件通过 `column` 属性定义每行的列数（默认为 3）
- 每个 item 的 `span` 属性表示该项占据的列数
- `span: 'filled'` 会自动填满该行的剩余列
- 如果 items 的 span 值不规范，可能导致布局不美观或溢出

## 规则

### 基本规则

1. **每行总和原则**：理想情况下，一行内所有数字 span 的总和应该等于 column 值
2. **filled 优先**：当某个 item 被设为 `'filled'` 时，它会填满当前行剩余空间，并结束该行
3. **溢出处理（核心）**：当某个 item 的 span 会导致当前行总和超过 column 时，**前一项应被设为 `'filled'`** 来填满当前行，当前项开始新的一行

### 核心逻辑

**采用"预判下一项"的策略**：

遍历 items 时，对于每个 item（从第2项开始），在处理当前项之前，先判断"如果保持当前项的原值，下一项是否能放得下"：

1. **当前项是 'filled' 或 undefined**
   - 保持 `'filled'`，填满当前行并开始新行

2. **当前项是数字 span**
   - 计算累积值：`newTotal = 当前行累积 + 当前项span`

   - **情况 A：newTotal > column**
     - 当前项自己就会溢出，设为 `'filled'`，开始新行

   - **情况 B：newTotal = column**
     - 刚好填满，保持当前项，开始新行

   - **情况 C：newTotal < column**
     - 检查下一项：
       - 如果没有下一项：保持当前项（最后一行可以不填满）
       - 如果有下一项且 `newTotal + 下一项span > column`：
         - **当前项设为 `'filled'`**，填满当前行，下一项开始新行
       - 如果有下一项且 `newTotal + 下一项span ≤ column`：
         - 保持当前项，继续累积

## 示例详解

### 示例 1：需要规范化（预判下一项会溢出）
**输入**：`[{ span: 1 }, { span: 1 }, { span: 3 }]`, column=3

**分析**：
- 第1项 (i=0): span=1
  - 累积 = 0 + 1 = 1 < 3
  - 有下一项，检查：1 + 1 = 2 < 3，可以放下
  - 保持 1，累积 = 1

- 第2项 (i=1): span=1
  - 累积 = 1 + 1 = 2 < 3
  - 有下一项，检查：2 + 3 = 5 > 3，**会溢出**
  - **当前项设为 'filled'**，填满当前行
  - 重置累积 = 0

- 第3项 (i=2): span=3
  - 累积 = 0 + 3 = 3 = column
  - 刚好填满，保持 3

**输出**：`[{ span: 1 }, { span: 'filled' }, { span: 3 }]`

**可视化布局**：
```
第1行: [1] [filled] → 1 + (3-1) = 3 ✓
第2行: [3]         → 3 ✓
```

---

### 示例 2：已经规范（无需修改）
**输入**：`[{ span: 1 }, { span: 'filled' }, { span: 3 }]`, column=3

**分析**：
- 第1项: span=1, 累积=1
- 第2项: span='filled', 填满并重置
- 第3项: span=3, 单独一行

**输出**：`[{ span: 1 }, { span: 'filled' }, { span: 3 }]`（不变）

---

### 示例 3：简单溢出（当前项自己溢出）
**输入**：`[{ span: 2 }, { span: 2 }]`, column=3

**分析**：
- 第1项 (i=0): span=2
  - 累积 = 0 + 2 = 2 < 3
  - 有下一项，检查：2 + 2 = 4 > 3，**会溢出**
  - **当前项设为 'filled'**，填满当前行
  - 重置累积 = 0

- 第2项 (i=1): span=2
  - 累积 = 0 + 2 = 2 < 3
  - 没有下一项，保持 2

**输出**：`[{ span: 'filled' }, { span: 2 }]`

**可视化布局**：
```
第1行: [filled]   → 3 ✓
第2行: [2]        → 2 (最后一行，可以不填满)
```

---

### 示例 4：刚好填满（无需修改）
**输入**：`[{ span: 1 }, { span: 2 }, { span: 1 }, { span: 2 }]`, column=3

**分析**：
- 第1项: span=1, 累积=1, 下一项1+2=3 ≤ 3，保持，累积=1
- 第2项: span=2, 累积=1+2=3 = column，刚好填满，保持，重置
- 第3项: span=1, 累积=1, 下一项1+2=3 ≤ 3，保持，累积=1
- 第4项: span=2, 累积=1+2=3 = column，刚好填满，保持

**输出**：`[{ span: 1 }, { span: 2 }, { span: 1 }, { span: 2 }]`（不变）

---

### 示例 5：单列占满
**输入**：`[{ span: 3 }, { span: 1 }, { span: 1 }]`, column=3

**分析**：
- 第1项: span=3, 累积=3 = column，刚好填满，重置
- 第2项: span=1, 累积=1, 下一项1+1=2 < 3，保持
- 第3项: span=1, 累积=2，没有下一项，保持

**输出**：`[{ span: 3 }, { span: 1 }, { span: 1 }]`（不变）

---

### 示例 6：复杂多行
**输入**：`[{ span: 1 }, { span: 1 }, { span: 2 }, { span: 1 }, { span: 1 }, { span: 1 }]`, column=3

**分析**：
- 第1项: span=1, 累积=1, 下一项1+1=2 < 3，保持，累积=1
- 第2项: span=1, 累积=1+1=2, 下一项2+2=4 > 3，**设为 'filled'**，重置
- 第3项: span=2, 累积=2, 下一项2+1=3 ≤ 3，保持，累积=2
- 第4项: span=1, 累积=2+1=3 = column，刚好填满，重置
- 第5项: span=1, 累积=1, 下一项1+1=2 < 3，保持，累积=1
- 第6项: span=1, 累积=1+1=2，没有下一项，保持

**输出**：`[{ span: 1 }, { span: 'filled' }, { span: 2 }, { span: 1 }, { span: 1 }, { span: 1 }]`

**可视化布局**：
```
第1行: [1] [filled] → 1 + 2 = 3 ✓
第2行: [2] [1]      → 2 + 1 = 3 ✓
第3行: [1] [1]      → 1 + 1 = 2 (最后一行)
```

---

### 示例 7：filled 后重置
**输入**：`[{ span: 1 }, { span: 'filled' }, { span: 2 }, { span: 2 }]`, column=3

**分析**：
- 第1项: span=1, 累积=1
- 第2项: span='filled', 填满并重置
- 第3项: span=2, 累积=2, 下一项2+2=4 > 3，**设为 'filled'**，重置
- 第4项: span=2, 累积=2，没有下一项，保持

**输出**：`[{ span: 1 }, { span: 'filled' }, { span: 'filled' }, { span: 2 }]`

---

### 示例 8：单个超大项
**输入**：`[{ span: 5 }]`, column=3

**分析**：
- 第1项: span=5, 累积=0+5=5 > 3，**溢出**
  - 设为 'filled'

**输出**：`[{ span: 'filled' }]`

---

### 示例 9：无 span 属性
**输入**：`[{ span: 1 }, {}, { span: 1 }]`, column=3

**分析**：
- 第1项: span=1, 累积=1
- 第2项: span=undefined → 视为 'filled'，填满并重置
- 第3项: span=1, 累积=1，保持

**输出**：`[{ span: 1 }, { span: 'filled' }, { span: 1 }]`

---

### 示例 10：自定义 column 值
**输入**：`[{ span: 2 }, { span: 2 }, { span: 3 }]`, column=4

**分析**：
- 第1项: span=2, 累积=2, 下一项2+2=4 ≤ 4，保持，累积=2
- 第2项: span=2, 累积=2+2=4 = column，刚好填满，重置
- 第3项: span=3, 累积=3，保持

**输出**：`[{ span: 2 }, { span: 2 }, { span: 3 }]`（不变）

---

## 边界情况

### 空数组
**输入**：`[]`
**输出**：`[]`

### null/undefined
**输入**：`null` 或 `undefined`
**输出**：`[]`

### 所有项刚好填满
**输入**：`[{ span: 1 }, { span: 1 }, { span: 1 }]`, column=3
**输出**：`[{ span: 1 }, { span: 1 }, { span: 1 }]`（不变）

---

## 伪代码实现

```typescript
function normalizeSpan(items, column = 3) {
  if (!items || items.length === 0) return [];

  const result = [];
  let currentRowSpan = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const span = item.span;

    // 规则1: filled 或 undefined
    if (span === 'filled' || span === undefined) {
      result.push({ ...item, span: 'filled' });
      currentRowSpan = 0;
      continue;
    }

    const newTotal = currentRowSpan + span;

    // 规则2A: 当前项自己溢出
    if (newTotal > column) {
      result.push({ ...item, span: 'filled' });
      currentRowSpan = 0;
      continue;
    }

    // 规则2B: 刚好填满
    if (newTotal === column) {
      result.push(item);
      currentRowSpan = 0;
      continue;
    }

    // 规则2C: 未填满，检查下一项
    const nextItem = items[i + 1];
    const nextSpan = nextItem?.span;

    // 没有下一项，保持当前项
    if (!nextItem || nextSpan === undefined) {
      result.push(item);
      currentRowSpan = newTotal;
      continue;
    }

    // 下一项是 'filled'，保持当前项
    if (nextSpan === 'filled') {
      result.push(item);
      currentRowSpan = newTotal;
      continue;
    }

    // 检查：当前项 + 下一项是否会溢出
    if (newTotal + nextSpan > column) {
      // 会溢出，当前项填满当前行
      result.push({ ...item, span: 'filled' });
      currentRowSpan = 0;
    } else {
      // 不会溢出，保持当前项
      result.push(item);
      currentRowSpan = newTotal;
    }
  }

  return result;
}
```

---

## 总结

**核心思想**：
- 采用"预判下一项"的策略
- 当当前项 + 下一项会溢出时，当前项变成 'filled'
- 目标是让每一行都尽可能填满，避免布局不美观

**关键判断**：
```
如果 (当前行累积 + 当前项 + 下一项 > column) {
  当前项 = 'filled'
} else {
  保持当前项
}
```
