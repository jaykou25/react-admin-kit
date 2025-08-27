# Design Document

## Overview

本设计文档描述了如何在 SchemaForm 组件中实现 `readonlyType="descriptions"` 时的表格转换功能。该功能将通过 DOM 操作和 React 渲染相结合的方式，将表单项转换为结构化的表格展示。

## Architecture

### 核心架构

```
SchemaForm Component
├── Form Container (formContainerRef)
│   └── BetaSchemaForm (隐藏当 readonlyType="description")
├── Description Container (readonlyDescriptionContainerRef)
│   └── Generated Table (当 readonlyType="descriptions" 时生成)
└── Table Generation Logic
    ├── DOM Scanner
    ├── Layout Calculator  
    ├── Table Builder
    └── React Renderer
```

### 数据流

1. **初始化阶段**: 组件挂载，表单正常渲染
2. **模式检测**: 检查 `readonlyType` 是否为 `"descriptions"`
3. **DOM 扫描**: 扫描表单容器中的表单项
4. **布局计算**: 根据 span 值计算表格行列布局
5. **表格生成**: 创建表格 DOM 结构
6. **渲染输出**: 将表格渲染到描述容器中

## Components and Interfaces

### 新增 Hook: useDescriptionTable

```typescript
interface UseDescriptionTableOptions {
  formContainerRef: React.RefObject<HTMLDivElement>;
  readonlyDescriptionContainerRef: React.RefObject<HTMLDivElement>;
  readonlyType?: 'form' | 'descriptions';
  columns: FormColumnType[];
  initialValues?: any;
}

interface UseDescriptionTableReturn {
  generateTable: () => void;
  clearTable: () => void;
}

const useDescriptionTable = (options: UseDescriptionTableOptions): UseDescriptionTableReturn
```

### 新增工具函数

```typescript
// DOM 扫描器
interface FormItemInfo {
  label: string;
  content: string;
  span: number;
  element: HTMLElement;
}

const scanFormItems = (container: HTMLElement): FormItemInfo[]

// 布局计算器
interface TableRow {
  items: FormItemInfo[];
  totalSpan: number;
}

const calculateTableLayout = (items: FormItemInfo[]): TableRow[]

// 表格构建器
const buildTableElement = (rows: TableRow[]): HTMLTableElement
```

### 类型扩展

```typescript
// 扩展现有的 SchemaFormSelfProps
export type SchemaFormSelfProps = {
  // ... 现有属性
  
  /**
   * @zh-Hans 描述模式下的表格样式配置
   * @en      Table style configuration in descriptions mode
   */
  descriptionsProps?: {
    className?: string;
    style?: React.CSSProperties;
    bordered?: boolean;
  };
}
```

## Data Models

### FormItemInfo 数据模型

```typescript
interface FormItemInfo {
  // 表单项标签文本
  label: string;
  
  // 表单项内容（HTML 字符串或文本）
  content: string;
  
  // 布局 span 值（从 CSS 类名解析）
  span: number;
  
  // 原始 DOM 元素引用
  element: HTMLElement;
  
  // 可选：数据索引（用于数据绑定）
  dataIndex?: string;
  
  // 可选：是否为空项（用于占位）
  isEmpty?: boolean;
}
```

### TableRow 数据模型

```typescript
interface TableRow {
  // 该行包含的表单项
  items: FormItemInfo[];
  
  // 该行的总 span 值
  totalSpan: number;
  
  // 行索引
  index: number;
}
```

## Error Handling

### 错误类型和处理策略

1. **DOM 查询失败**
   - 错误：`formContainerRef.current` 为 null
   - 处理：提前返回，不生成表格
   - 日志：开发环境下输出警告

2. **表单项解析失败**
   - 错误：无法找到 `.ant-form-item-label` 或 `.ant-form-item-control`
   - 处理：跳过该项，继续处理其他项
   - 日志：记录跳过的项数

3. **Span 解析失败**
   - 错误：无法从 CSS 类名解析 span 值
   - 处理：使用默认 span 值（8）
   - 日志：记录使用默认值的情况

4. **表格渲染失败**
   - 错误：`readonlyDescriptionContainerRef.current` 为 null
   - 处理：降级到隐藏表单但不显示表格
   - 日志：输出错误信息

### 错误边界

```typescript
const safeExecute = <T>(fn: () => T, fallback: T, errorMessage: string): T => {
  try {
    return fn();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[SchemaForm Description Table] ${errorMessage}:`, error);
    }
    return fallback;
  }
};
```



## Implementation Details

### 核心实现流程

1. **useEffect 监听**
   ```typescript
   useEffect(() => {
     if (readonlyType === 'descriptions') {
       // 延迟执行，确保 DOM 已渲染
       setTimeout(() => {
         generateTable();
       }, 0);
     } else {
       clearTable();
     }
   }, [readonlyType, columns, initialValues]);
   ```

2. **DOM 扫描实现**
   ```typescript
   const scanFormItems = (container: HTMLElement): FormItemInfo[] => {
     const formItems: FormItemInfo[] = [];
     const antCols = container.querySelectorAll('form .ant-row .ant-col');
     
     antCols.forEach((col) => {
       const label = col.querySelector('.ant-form-item-label')?.textContent || '';
       const control = col.querySelector('.ant-form-item-control');
       const span = extractSpanFromClassName(col.className);
       
       if (control) {
         formItems.push({
           label: label.replace(':', '').trim(),
           content: control.innerHTML,
           span,
           element: col as HTMLElement,
         });
       }
     });
     
     return formItems;
   };
   ```

3. **布局计算实现**
   ```typescript
   const calculateTableLayout = (items: FormItemInfo[]): TableRow[] => {
     const rows: TableRow[] = [];
     let currentRow: FormItemInfo[] = [];
     let currentSpan = 0;
     
     items.forEach((item) => {
       if (currentSpan + item.span > 24) {
         // 换行
         rows.push({ items: currentRow, totalSpan: currentSpan, index: rows.length });
         currentRow = [item];
         currentSpan = item.span;
       } else {
         currentRow.push(item);
         currentSpan += item.span;
       }
     });
     
     if (currentRow.length > 0) {
       rows.push({ items: currentRow, totalSpan: currentSpan, index: rows.length });
     }
     
     return rows;
   };
   ```

### 样式设计

```css
.schema-form-description-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.schema-form-description-table th {
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  text-align: left;
  font-weight: 500;
  width: 120px;
  min-width: 120px;
}

.schema-form-description-table td {
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  word-break: break-word;
}

.schema-form-description-table tr:nth-child(even) {
  background-color: #fafafa;
}
```

### 性能优化

1. **防抖处理**: 对频繁的重新生成操作进行防抖
2. **缓存机制**: 缓存解析结果，避免重复计算
3. **懒加载**: 只在需要时才执行 DOM 操作
4. **内存管理**: 及时清理事件监听器和 DOM 引用