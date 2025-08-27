/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

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
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('最少属性渲染', () => {
    test('应该使用最少属性正确渲染', async () => {
      const { container } = render(<ProTable columns={mockColumns} />);

      waitFor(() => {
        // 验证表格容器存在
        expect(container.querySelector('.ant-pro-table')).toBeInTheDocument();

        // 验证表格头部存在
        expect(container.querySelector('.ant-table-thead')).toBeInTheDocument();

        // 验证列标题正确显示
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('姓名')).toBeInTheDocument();
        expect(screen.getByText('年龄')).toBeInTheDocument();
        expect(screen.getByText('邮箱')).toBeInTheDocument();
        expect(screen.getByText('状态')).toBeInTheDocument();
        expect(screen.getByText('创建时间')).toBeInTheDocument();
        expect(screen.getByText('操作')).toBeInTheDocument();
      });
    });

    test('应该在没有数据时显示空状态', async () => {
      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [],
          total: 0,
        }),
      );

      render(<ProTable columns={mockColumns} request={mockRequest} />);

      waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('暂无数据')).toBeInTheDocument();
      });
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
      render(<ProTable columns={nestedColumns} search={false} />);
      // 验证分组标题显示
      expect(screen.getByText('用户信息')).toBeInTheDocument();
      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('姓名')).toBeInTheDocument();
    });
  });

  describe('rowKey 属性测试', () => {
    test('应该正确应用字符串 rowKey', async () => {
      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: mockTableData,
          total: mockTableData.length,
        }),
      );

      const { container } = render(
        <ProTable columns={mockColumns} request={mockRequest} rowKey="id" />,
      );

      waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证数据行存在且有正确的 key
      waitFor(() => {
        const rows = container.querySelectorAll('.ant-table-tbody tr');
        expect(rows.length).toBeGreaterThan(0);

        // 验证第一行数据
        expect(rows[0]).toHaveAttribute('data-row-key', '1');
      });
    });

    test('应该正确应用函数 rowKey', async () => {
      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: mockTableData,
          total: mockTableData.length,
        }),
      );
      const rowKeyFn = jest.fn((record) => `custom_${record.id}`);

      const { container } = render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowKey={rowKeyFn}
        />,
      );

      waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      waitFor(() => {
        const rows = container.querySelectorAll('.ant-table-tbody tr');
        expect(rows.length).toBeGreaterThan(0);

        // 验证 rowKey 函数被调用
        expect(rowKeyFn).toHaveBeenCalled();

        // 验证自定义 key 格式
        expect(rows[0]).toHaveAttribute('data-row-key', 'custom_1');
      });
    });
  });

  describe('name 属性测试', () => {
    test('应该在提供 name 时正确显示表格标题', async () => {
      render(<ProTable columns={mockColumns} name="用户管理" />);

      // 验证标题显示
      expect(screen.getByText('用户管理列表')).toBeInTheDocument();
    });

    test('应该在没有 name 时不显示默认标题', async () => {
      const { container } = render(<ProTable columns={mockColumns} />);

      // 验证没有默认标题
      const headerTitle = container.querySelector(
        '.ant-pro-table-list-toolbar-title',
      );
      expect(headerTitle).not.toBeInTheDocument();
    });

    test('应该支持自定义 toolbar title', async () => {
      render(
        <ProTable
          columns={mockColumns}
          toolbar={{
            title: '自定义标题',
          }}
        />,
      );

      expect(screen.getByText('自定义标题')).toBeInTheDocument();
    });
  });
});
