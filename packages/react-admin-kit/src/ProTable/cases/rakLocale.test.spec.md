# ProTable rakLocale 属性测试用例规格文档

## 测试目标
验证 ProTable 组件的 `rakLocale` 属性优先级高于全局 SettingProvider 的 `locale` 属性。

## 测试背景
根据 [ProTable/index.tsx:85-91](../../index.tsx#L85-L91) 的代码逻辑：
```typescript
const mergedProps: ProTableSettingProps = myMergeOptions(
  setting,
  safeProps || {},
  {
    toolbar: {},
    rakLocale: globalLocale, // 默认使用全局 locale
    // ...其他默认值
  }
);
```

组件级的 `rakLocale` 属性（来自 `props`）通过 `myMergeOptions` 合并时优先级高于全局设置。

## 测试场景

### 场景 1: 组件级 rakLocale 覆盖全局 locale
**前置条件:**
- 使用 SettingProvider 包裹，设置全局 locale 为中文
- ProTable 设置 `rakLocale` 为英文 locale

**预期结果:**
- ProTable 组件使用英文 locale
- 表格标题使用英文后缀
- 表单类型文本使用英文
- 删除相关文本使用英文

### 场景 2: 仅使用全局 locale（无组件级 rakLocale）
**前置条件:**
- 使用 SettingProvider 包裹，设置全局 locale 为中文
- ProTable 不设置 `rakLocale` 属性

**预期结果:**
- ProTable 组件使用全局中文 locale
- 所有文本显示为中文

### 场景 3: 无全局 locale，仅使用组件级 rakLocale
**前置条件:**
- 不使用 SettingProvider 或 SettingProvider 不设置 locale
- ProTable 设置 `rakLocale` 为自定义 locale

**预期结果:**
- ProTable 组件使用自定义 locale
- 所有文本按照自定义 locale 显示

### 场景 4: 既无全局 locale 也无组件级 rakLocale
**前置条件:**
- 不使用 SettingProvider
- ProTable 不设置 `rakLocale` 属性

**预期结果:**
- ProTable 使用默认的 zhCN locale
- 所有文本显示为默认中文

### 场景 5: rakLocale 部分属性覆盖
**前置条件:**
- 全局 locale 设置完整的中英文 locale
- 组件级 rakLocale 仅设置部分属性（如只设置 `tableTitleAfter`）

**预期结果:**
- `rakLocale` 中设置的属性优先级最高
- 未设置的属性使用全局 locale 的值
- 都未设置的属性使用默认值

## 测试数据准备

### 中文 locale (zhCN)
```typescript
const zhCN = {
  tableTitleAfter: '列表',
  formTypeNew: '新增',
  formTypeEdit: '编辑',
  formTypeRead: '查看',
  exportFilename: '导出列表',
  delBtnText: '删除',
  delPopconfirmTitle: '确认删除吗？',
  delModalConfirmTitle: '操作确认',
  delModalConfirmContent: '确认删除吗？',
  delSuccessContent: '删除成功',
  alertDelBtnText: '批量删除',
  alertDelPopconfirmTitle: (rowKeys) => `确认删除${rowKeys.length}条数据吗？`,
  alertDelModalConfirmTitle: '操作确认',
  alertDelModalConfirmContent: (rowKeys) => `确认删除${rowKeys.length}条数据吗？`,
  confirmOnCloseTitle: '确认关闭',
  confirmOnCloseContent: '表单项内容未保存, 是否确认关闭?',
};
```

### 英文 locale (enUS)
```typescript
const enUS = {
  tableTitleAfter: ' List',
  formTypeNew: 'New',
  formTypeEdit: 'Edit',
  formTypeRead: 'View',
  exportFilename: 'Export List',
  delBtnText: 'Delete',
  delPopconfirmTitle: 'Are you sure to delete?',
  delModalConfirmTitle: 'Confirm',
  delModalConfirmContent: 'Are you sure to delete?',
  delSuccessContent: 'Deleted successfully',
  alertDelBtnText: 'Batch Delete',
  alertDelPopconfirmTitle: (rowKeys) => `Are you sure to delete ${rowKeys.length} items?`,
  alertDelModalConfirmTitle: 'Confirm',
  alertDelModalConfirmContent: (rowKeys) => `Are you sure to delete ${rowKeys.length} items?`,
  confirmOnCloseTitle: 'Confirm Close',
  confirmOnCloseContent: 'Form content not saved, are you sure to close?',
};
```

## 测试要点

### 1. 文本显示验证
- [x] 表格标题后缀 (`headerTitle`)
- [x] 表单类型文本 (`formTypeNew`, `formTypeEdit`, `formTypeRead`)
- [x] 删除按钮文本
- [x] 删除确认标题和内容
- [x] 批量删除按钮文本
- [x] 批量删除确认文本

### 2. 优先级验证
- [x] 组件级 rakLocale > 全局 locale
- [x] 全局 locale > 默认 locale
- [x] 部分属性覆盖时的合并逻辑

### 3. 边界情况
- [x] rakLocale 为 undefined
- [x] rakLocale 为 null
- [x] rakLocale 为空对象 {}
- [x] 全局 locale 为 undefined
- [x] 函数类型属性（如 `alertDelPopconfirmTitle`）

## 测试方法

### 测试工具
- Jest + React Testing Library
- @testing-library/jest-dom

### 测试组件结构
```tsx
<SettingProvider locale={globalLocale}>
  <ProTable
    rakLocale={componentLocale}
    name="User"
    columns={columns}
    request={mockRequest}
    // ...其他必要属性
  />
</SettingProvider>
```

### 验证方法
1. **DOM 文本查询**: 使用 `getByText`, `getByTitle` 等
2. **Context 值验证**: 可以通过渲染特殊测试组件来验证内部 locale 值
3. **快照测试**: 对比不同 locale 下的渲染结果

## 预期测试文件结构
```
src/ProTable/cases/
  ├── rakLocale.test.tsx          # 主要测试文件
  ├── rakLocale.partial.test.tsx  # 部分属性覆盖测试
  └── rakLocale.priority.test.tsx # 优先级测试
```

## 测试覆盖率目标
- 分支覆盖率: 80%+
- 函数覆盖率: 85%+
- 行覆盖率: 90%+
- 语句覆盖率: 90%+

## 参考
- ProTable 源码: [index.tsx:59-110](../../index.tsx#L59-L110)
- myMergeOptions 工具函数: [utils/index.ts:100-122](../../utils/index.ts#L100-L122)
- SettingProvider 源码: [../SettingProvider/index.tsx:17-40](../SettingProvider/index.tsx#L17-L40)
- Locale 类型定义: [../locale/index.ts](../locale/index.ts)
