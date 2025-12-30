# Design Document

## Overview

本设计文档描述了为 SettingProvider 组件的 proTableSetting 属性创建集成测试的技术方案。测试将验证全局配置的应用以及组件级别配置的覆盖行为，重点关注 pagination、size 和 search 三个核心属性。

## Architecture

### 测试架构设计

```
packages/react-admin-kit/src/SettingProvider/cases/
├── protable-pagination/
│   ├── index.tsx              # 测试组件
│   └── index.test.jsx         # 测试用例
├── protable-size/
│   ├── index.tsx              # 测试组件
│   └── index.test.jsx         # 测试用例
└── protable-search/
    ├── index.tsx              # 测试组件
    └── index.test.jsx         # 测试用例
```

### 测试框架和工具

- **Jest**: 测试运行器和断言库
- **React Testing Library**: React 组件测试工具
- **@testing-library/jest-dom**: DOM 断言扩展
- **Snapshot Testing**: 用于验证渲染结果的一致性

## Components and Interfaces

### 测试组件接口设计

每个测试组件将接受可选的 props 来覆盖全局设置：

```typescript
// protable-pagination/index.tsx
interface PaginationTestProps {
  pagination?: any; // 用于覆盖全局 pagination 设置
}

// protable-size/index.tsx  
interface SizeTestProps {
  size?: 'small' | 'middle' | 'large'; // 用于覆盖全局 size 设置
}

// protable-search/index.tsx
interface SearchTestProps {
  search?: any; // 用于覆盖全局 search 设置
}
```

### 测试数据结构

```typescript
// 共享的测试数据
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

const mockRequest = jest.fn().mockResolvedValue({
  data: mockData,
  total: 3,
  success: true,
});

const basicColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
];
```

## Data Models

### 全局配置模型

```typescript
// Pagination 配置
const globalPaginationSetting = {
  pagination: {
    pageSize: 5,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage: true,
  }
};

// Size 配置
const globalSizeSetting = {
  size: 'small'
};

// Search 配置  
const globalSearchSetting = {
  search: {
    defaultCollapsed: false,
    span: 12,
    labelWidth: 'auto',
  }
};
```

### 覆盖配置模型

```typescript
// 组件级别的覆盖配置
const overridePaginationConfig = {
  pageSize: 10,
  showSizeChanger: false,
};

const overrideSizeConfig = 'large';

const overrideSearchConfig = {
  defaultCollapsed: true,
  span: 8,
};
```

## Error Handling

### 测试错误处理策略

1. **Mock 失败处理**: 当 request mock 失败时，测试应该能够正确处理
2. **渲染错误处理**: 使用 try-catch 包装渲染逻辑，确保测试不会因为组件错误而中断
3. **异步等待**: 使用 waitFor 确保异步操作完成后再进行断言

```typescript
// 错误处理示例
test('应该处理请求失败的情况', async () => {
  const failedRequest = jest.fn().mockRejectedValue(new Error('Request failed'));
  
  const { container } = render(
    <SettingProvider proTableSetting={globalSetting}>
      <ProTable request={failedRequest} columns={basicColumns} />
    </SettingProvider>
  );
  
  await waitFor(() => {
    expect(container.querySelector('.ant-table')).toBeTruthy();
  });
});
```

## Testing Strategy

### 测试策略概述

1. **单元测试**: 验证每个属性的独立功能
2. **集成测试**: 验证 SettingProvider 与 ProTable 的集成
3. **DOM 断言测试**: 通过检查 CSS 类名和属性验证配置生效
4. **行为测试**: 验证用户交互和配置覆盖行为

### 测试用例设计

#### Pagination 测试用例

```typescript
describe('SettingProvider proTableSetting.pagination 集成测试', () => {
  test('1. 全局 pagination 配置应该生效');
  test('2. 组件级别 pagination 配置应该覆盖全局配置');
  test('3. 验证 pagination 相关 DOM 元素和类名');
  test('4. 验证 pageSize 配置是否正确应用');
});
```

#### Size 测试用例

```typescript
describe('SettingProvider proTableSetting.size 集成测试', () => {
  test('1. 全局 size 配置应该生效');
  test('2. 组件级别 size 配置应该覆盖全局配置');
  test('3. 验证 table size 相关的 CSS 类名');
  test('4. 验证不同 size 值的 DOM 表现');
});
```

#### Search 测试用例

```typescript
describe('SettingProvider proTableSetting.search 集成测试', () => {
  test('1. 全局 search 配置应该生效');
  test('2. 组件级别 search 配置应该覆盖全局配置');
  test('3. 验证搜索表单的展开/收起状态');
  test('4. 验证搜索表单的布局配置');
});
```

### 断言策略

1. **DOM 断言**: 验证特定的 CSS 类名和属性
   - 检查 `.ant-table-small`、`.ant-table-middle`、`.ant-table-large` 等尺寸类名
   - 检查 `.ant-pagination` 相关的分页元素
   - 检查 `.ant-pro-table-search` 搜索表单相关元素
2. **属性断言**: 验证组件属性是否正确传递
3. **行为断言**: 验证配置是否正确应用到组件

### 测试工具配置

```typescript
// 测试环境配置
/**
 * @jest-environment jsdom
 */

// 必要的导入
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SettingProvider, ProTable } from 'react-admin-kit';
```

### 性能考虑

1. **Mock 优化**: 使用简单的 mock 数据，避免复杂的异步操作
2. **测试隔离**: 每个测试用例之间使用 beforeEach 清理 mock
3. **快照管理**: 定期更新快照，确保测试的准确性

### 维护性设计

1. **共享工具**: 创建共享的测试工具函数和数据
2. **清晰命名**: 使用描述性的测试名称和变量名
3. **文档注释**: 为复杂的测试逻辑添加注释说明