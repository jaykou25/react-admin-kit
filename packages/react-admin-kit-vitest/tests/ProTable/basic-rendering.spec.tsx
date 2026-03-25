import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';
import { describe, expect, test, vi } from 'vitest';

// 标准列配置
export const mockColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    valueType: 'text',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'digit',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    valueType: 'text',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    valueEnum: {
      active: { text: '激活', status: 'Success' },
      inactive: { text: '未激活', status: 'Default' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    render: () => ['编辑'],
  },
];

// 标准测试数据
export const mockTableData = [
  {
    id: 1,
    name: '张三',
    age: 25,
    email: 'zhangsan@example.com',
    status: 'active',
    createTime: '2023-01-01',
    department: 'IT',
  },
  {
    id: 2,
    name: '李四',
    age: 30,
    email: 'lisi@example.com',
    status: 'inactive',
    createTime: '2023-01-02',
    department: 'HR',
  },
  {
    id: 3,
    name: '王五',
    age: 28,
    email: 'wangwu@example.com',
    status: 'active',
    createTime: '2023-01-03',
    department: 'Finance',
  },
];

describe('ProTable 基础渲染测试', () => {
  describe('最少属性渲染', () => {
    test('应该使用最少属性正确渲染', async () => {
      const { container, getByText, getByRole } = await render(
        <ProTable columns={mockColumns} />,
      );

      await expect(
        container.querySelector('.ant-pro-table'),
      ).toBeInTheDocument();

      await expect(
        container.querySelector('.ant-table-thead'),
      ).toBeInTheDocument();

      // 验证列标题正确显示
      expect(getByText('ID')).toHaveLength(2);
      expect(getByText('姓名')).toHaveLength(2);
      expect(getByText('年龄')).toHaveLength(2);
      expect(getByText('邮箱')).toHaveLength(2);
      expect(getByText('状态')).toHaveLength(2);
      expect(getByText('创建时间')).toHaveLength(2);
      expect(getByText('操作')).toBeInTheDocument();
    });

    test('应该在没有数据时显示空状态', async () => {
      const mockRequest = vi.fn(() =>
        Promise.resolve({
          data: [],
          total: 0,
        }),
      );

      const { getByText } = await render(
        <ProTable columns={mockColumns} request={mockRequest} />,
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      await expect(mockRequest).toHaveBeenCalled();

      await expect(getByText('暂无数据')).toHaveLength(2);
    });
  });

  describe('columns 配置测试', () => {
    test('应该正确处理嵌套 dataIndex', async () => {
      const nestedColumns = [
        {
          title: '用户信息',
          children: [
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
          ],
        },
      ];
      const { getByText } = await render(
        <ProTable columns={nestedColumns} search={false} />,
      );

      await expect(getByText('用户信息')).toBeInTheDocument();
      await expect(getByText('ID')).toBeInTheDocument();
      await expect(getByText('姓名')).toBeInTheDocument();
    });
  });

  describe('rowKey 属性测试', () => {
    test('应该正确应用字符串 rowKey', async () => {
      const mockRequest = vi.fn(() =>
        Promise.resolve({
          data: mockTableData,
          total: mockTableData.length,
        }),
      );

      const { container } = await render(
        <ProTable columns={mockColumns} request={mockRequest} rowKey="id" />,
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      await expect(mockRequest).toHaveBeenCalled();

      const rows = container.querySelectorAll('.ant-table-tbody tr');
      await expect(rows.length).toBeGreaterThan(0);

      await expect(rows[0]).toHaveAttribute('data-row-key', '1');
    });

    test('应该正确应用函数 rowKey', async () => {
      const mockRequest = vi.fn(() =>
        Promise.resolve({
          data: mockTableData,
          total: mockTableData.length,
        }),
      );
      const rowKeyFn = vi.fn((record) => `custom_${record.id}`);

      const { container } = await render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowKey={rowKeyFn}
        />,
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      await expect(mockRequest).toHaveBeenCalled();

      const rows = container.querySelectorAll('.ant-table-tbody tr');
      await expect(rows.length).toBeGreaterThan(0);

      await expect(rowKeyFn).toHaveBeenCalled();

      await expect(rows[0]).toHaveAttribute('data-row-key', 'custom_1');
    });
  });

  describe('name 属性测试', () => {
    test('应该在提供 name 时正确显示表格标题', async () => {
      const { getByText } = await render(
        <ProTable columns={mockColumns} name="用户管理" />,
      );

      await expect(getByText('用户管理列表')).toBeInTheDocument();
    });

    test('应该在没有 name 时不显示默认标题', async () => {
      const { container } = await render(<ProTable columns={mockColumns} />);

      const headerTitle = container.querySelector(
        '.ant-pro-table-list-toolbar-title',
      );
      await expect(headerTitle).not.toBeInTheDocument();
    });

    test('应该支持自定义 toolbar title', async () => {
      const { getByText } = await render(
        <ProTable
          columns={mockColumns}
          toolbar={{
            title: '自定义标题',
          }}
        />,
      );

      await expect(getByText('自定义标题')).toBeInTheDocument();
    });
  });
});
