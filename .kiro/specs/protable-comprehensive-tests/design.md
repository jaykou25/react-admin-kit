# ProTable 组件综合测试覆盖设计

## 概述

本设计文档概述了为 React Admin Kit 库中的 ProTable 组件创建综合测试套件的技术方法。ProTable 是一个复杂的表格组件，集成了 Ant Design ProTable、ModalForm、删除功能、导出功能和广泛的自定义选项。

测试策略将采用分层方法，包括单元测试、集成测试和端到端测试，确保所有功能在各种场景下都能正确工作。

## 架构

### 组件架构分析

ProTable 组件基于以下架构：

```
ProTable (主组件)
├── AntProTable (Ant Design ProTable)
├── ModalForm (模态表单集成)
├── 删除功能 (单行和批量删除)
├── 导出功能 (Excel 导出)
├── SettingProvider 集成
└── 工具函数 (数据处理、列过滤等)
```

### 核心依赖关系

1. **外部依赖**
   - `@ant-design/pro-table`: 基础表格组件
   - `antd`: UI 组件库 (Modal, Popconfirm, Space, message)
   - `styled-components`: 样式处理
   - `immer`: 不可变数据处理
   - `dayjs`: 日期处理

2. **内部依赖**
   - `ModalForm`: 模态表单组件
   - `LinkButton`: 链接按钮组件
   - `SettingProvider`: 全局配置提供者
   - `utils`: 工具函数集合

### 状态管理

ProTable 组件管理以下状态：
- `formType`: 表单类型 ('new' | 'edit' | 'read')
- `delLoading`: 删除操作加载状态
- `selectedRowKeys`: 选中行的键值数组
- `selectedRows`: 选中行的数据数组

## 组件和接口

### 主要组件接口

#### ProTable 主组件
```typescript
interface MyProTableType {
  columns: TableColumnType[];
  request?: ProTableProps['request'];
  actionRef?: ProTableProps['actionRef'];
  innerRef?: React.MutableRefObject<InnerRefType>;
  onFinish?: (values: any, formType: FormType, formData: any) => Promise<any> | void;
  onOpen?: (formType: FormType, formRef: any, formData: any) => Promise<any> | void;
  delFunction?: (selectedIds: (string | number)[], record: any) => Promise<any> | void;
  // ... 其他属性
}
```

#### InnerRef 接口
```typescript
interface InnerRefType {
  params?: any;
  total?: number;
  dataSource?: any;
  export: (rows: any, ExcelJS: any, options?: ExportOptions) => void;
  openModal: (formType?: FormType, initialValues?: object, cb?: () => void) => void;
  // ... ModalForm 相关方法
}
```

#### TableColumn 接口
```typescript
interface TableColumnType {
  title?: string;
  dataIndex?: string | string[];
  valueType?: ProColumnsValueType;
  type?: 'form' | 'table' | 'search';
  enableDelete?: boolean | ((record: any, index: number) => EnableDeleteType | boolean);
  renderExport?: (text: string | number, record: any) => string | number;
  render?: (dom: ReactNode, record: any, index: number, action: ActionType, innerRef: InnerRef) => any;
  // ... 其他属性
}
```

### 核心功能模块

#### 1. 数据加载模块
- **职责**: 处理数据请求、分页、排序、搜索
- **关键方法**: `patchRequest()`, `getActionRef()`
- **状态管理**: 通过 `innerRef` 存储请求参数和结果

#### 2. 模态表单模块
- **职责**: 集成 ModalForm 组件，处理创建和编辑操作
- **关键方法**: `selfOnOpen()`, `getModalTitle()`
- **状态管理**: `formType` 状态控制表单类型

#### 3. 删除功能模块
- **职责**: 处理单行和批量删除操作
- **关键方法**: `handleDelete()`, `getDelDom()`, `getTableAlertOptionRender()`
- **状态管理**: `delLoading` 控制删除加载状态

#### 4. 行选择模块
- **职责**: 处理行选择和批量操作
- **关键方法**: `getRowSelection()`
- **状态管理**: `selectedRowKeys`, `selectedRows`

#### 5. 导出功能模块
- **职责**: 处理数据导出为 Excel
- **关键方法**: `exportTable()`, `filteExportCols()`
- **工具函数**: `_getExportValue()`, `_formatDateTypeData()`

#### 6. 列配置模块
- **职责**: 处理列的渲染和过滤
- **关键方法**: `patchRender()`, `filteFormCols()`
- **工具函数**: `patchHideInSearch()`

## 数据模型

### 请求数据模型
```typescript
interface RequestParams {
  current?: number;
  pageSize?: number;
  [key: string]: any; // 搜索参数
}

interface RequestResponse {
  data: any[];
  total: number;
  success: boolean;
}
```

### 删除操作数据模型
```typescript
interface DeleteParams {
  selectedIds: (string | number)[];
  record: Record<string, any>;
}
```

### 导出数据模型
```typescript
interface ExportOptions {
  filename?: string;
  beforeExport?: (worksheet: any) => void;
}
```

## 错误处理

### 错误处理策略

1. **请求错误处理**
   - 网络错误: 显示错误状态，允许重试
   - 数据格式错误: 优雅降级，显示默认内容
   - 权限错误: 显示相应提示信息

2. **删除操作错误处理**
   - 删除失败: 显示错误消息，保持界面状态
   - 权限不足: 隐藏删除按钮或显示禁用状态
   - 网络错误: 提供重试机制

3. **表单错误处理**
   - 验证错误: 显示字段级错误信息
   - 提交错误: 保持模态框打开，显示错误提示
   - 数据加载错误: 显示加载失败状态

4. **导出错误处理**
   - 数据为空: 提示用户无数据可导出
   - 导出失败: 显示错误消息，允许重试
   - 浏览器兼容性: 提供降级方案

### 边界情况处理

1. **组件卸载时的清理**
   - 取消未完成的请求
   - 清理事件监听器
   - 防止内存泄漏

2. **快速用户交互**
   - 防抖处理搜索请求
   - 防止重复提交
   - 加载状态管理

3. **数据异常情况**
   - 空数据处理
   - 无效数据过滤
   - 类型转换错误处理

## 测试策略

### 测试分层架构

```
E2E 测试 (端到端测试)
├── 完整用户流程测试
└── 跨组件交互测试

集成测试 (Integration Tests)
├── 组件间交互测试
├── 数据流测试
└── 状态管理测试

单元测试 (Unit Tests)
├── 组件渲染测试
├── 工具函数测试
├── Hook 测试
└── 事件处理测试
```

### 测试工具栈

1. **测试框架**: Jest
2. **渲染工具**: React Testing Library
3. **用户交互**: @testing-library/user-event
4. **Mock 工具**: Jest mocks
5. **断言库**: Jest matchers + @testing-library/jest-dom

### 测试数据管理

#### Mock 数据策略
```typescript
// 标准测试数据
const mockTableData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

// 请求 Mock
const mockRequest = jest.fn().mockResolvedValue({
  data: mockTableData,
  total: 3,
  success: true,
});

// 删除函数 Mock
const mockDelFunction = jest.fn().mockResolvedValue(true);
```

#### 测试环境配置
```javascript
// Jest 配置
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

### 测试覆盖率目标

- **语句覆盖率**: ≥ 90%
- **分支覆盖率**: ≥ 85%
- **函数覆盖率**: ≥ 90%
- **行覆盖率**: ≥ 90%

### 性能测试考虑

1. **大数据集测试**
   - 测试 1000+ 行数据的渲染性能
   - 验证虚拟滚动功能
   - 检查内存使用情况

2. **频繁操作测试**
   - 快速搜索操作
   - 连续分页操作
   - 批量选择操作

3. **异步操作测试**
   - 并发请求处理
   - 请求取消机制
   - 错误恢复能力

## 国际化测试

### 多语言支持测试

1. **中文 (zh_CN) 测试**
   - 验证所有中文文案显示正确
   - 测试日期格式化
   - 检查数字格式化

2. **英文 (en_US) 测试**
   - 验证英文文案显示正确
   - 测试英文日期格式
   - 检查英文数字格式

3. **自定义 locale 测试**
   - 验证自定义文案覆盖
   - 测试 locale 动态切换
   - 检查 formType 文案更新

### 样式和布局测试

1. **响应式测试**
   - 不同屏幕尺寸下的布局
   - 移动端适配测试
   - 表格横向滚动测试

2. **主题测试**
   - 默认主题测试
   - 暗色主题测试
   - 自定义主题测试

3. **样式属性测试**
   - `noPadding` 属性效果
   - `optionColumnSpaceProps` 应用
   - `tableAlertOption.spaceProps` 应用

## 与 SettingProvider 集成测试

### 配置合并测试

1. **默认配置测试**
   - 验证 SettingProvider 提供的默认属性
   - 测试配置的正确合并
   - 检查优先级处理

2. **配置冲突测试**
   - 本地属性优先级测试
   - 嵌套 Provider 优先级测试
   - 动态配置更新测试

3. **配置类型测试**
   - ProTableSettingProps 类型验证
   - 配置属性的类型安全
   - 无效配置的处理

这个设计为 ProTable 组件的综合测试提供了完整的技术框架，确保所有功能都能得到充分的测试覆盖。