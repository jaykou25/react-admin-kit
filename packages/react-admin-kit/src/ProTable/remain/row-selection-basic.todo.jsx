/**
 * @jest-environment jsdom
 */
import React from 'react';
import { waitFor, screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';
// Simplified test utilities for this test
const mockTableData = [
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

const mockColumns = [
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
    key: 'option',
    render: () => ['编辑', '删除'],
  },
];

const createMockRequest = (
  data = mockTableData,
  delay = 100,
  shouldFail = false,
) => {
  return jest.fn().mockImplementation((params) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Request failed'));
          return;
        }

        const { current = 1, pageSize = 10, ...searchParams } = params || {};

        // 模拟搜索过滤
        let filteredData = [...data];
        Object.keys(searchParams).forEach((key) => {
          if (searchParams[key] !== undefined && searchParams[key] !== '') {
            filteredData = filteredData.filter((item) =>
              String(item[key])
                .toLowerCase()
                .includes(String(searchParams[key]).toLowerCase()),
            );
          }
        });

        // 模拟分页
        const start = (current - 1) * pageSize;
        const end = start + pageSize;
        const pageData = filteredData.slice(start, end);

        resolve({
          data: pageData,
          total: filteredData.length,
          success: true,
        });
      }, delay);
    });
  });
};

const customRender = (ui, options = {}) => {
  return {
    user: null,
    ...render(ui, options),
  };
};

const cleanupMocks = () => {
  jest.clearAllMocks();
};
import './setup';

describe('ProTable 行选择基础功能测试', () => {
  beforeEach(() => {
    cleanupMocks();
  });

  describe('启用 rowSelection 时复选框显示', () => {
    test('应该在启用 rowSelection 时显示复选框', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{}}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 等待数据加载完成
      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 验证表头复选框存在
      const headerCheckbox = container.querySelector(
        '.ant-table-thead .ant-checkbox-input',
      );
      expect(headerCheckbox).toBeInTheDocument();

      // 验证数据行复选框存在
      const rowCheckboxes = container.querySelectorAll(
        '.ant-table-tbody .ant-checkbox-input',
      );
      expect(rowCheckboxes.length).toBe(mockTableData.length);
    });

    test('应该在未启用 rowSelection 时不显示复选框', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable columns={mockColumns} request={mockRequest} />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 验证没有复选框
      const checkboxes = container.querySelectorAll('.ant-checkbox-input');
      expect(checkboxes.length).toBe(0);
    });

    test('应该支持自定义 rowSelection 配置', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onSelectChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            type: 'checkbox',
            onChange: onSelectChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 验证复选框类型正确
      const checkboxes = container.querySelectorAll(
        '.ant-checkbox-input[type="checkbox"]',
      );
      expect(checkboxes.length).toBeGreaterThan(0);
    });

    test('应该支持单选模式', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            type: 'radio',
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 验证单选按钮存在
      const radioButtons = container.querySelectorAll(
        '.ant-table-tbody .ant-radio-input',
      );
      expect(radioButtons.length).toBe(mockTableData.length);

      // 验证表头没有全选按钮（单选模式下）
      const headerRadio = container.querySelector(
        '.ant-table-thead .ant-radio-input',
      );
      expect(headerRadio).not.toBeInTheDocument();
    });
  });

  describe('选择行时 selectedRowKeys 更新', () => {
    test('应该在选择行时更新内部 selectedRowKeys 状态', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 点击第一行的复选框
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      expect(firstRowCheckbox).toBeInTheDocument();

      fireEvent.click(firstRowCheckbox);

      // 验证 onChange 被调用，且参数正确
      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(
          [1], // selectedRowKeys
          [mockTableData[0]], // selectedRows
        );
      });
    });

    test('应该支持多行选择', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择第一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      await waitFor(() => {
        expect(onChange).toHaveBeenLastCalledWith([1], [mockTableData[0]]);
      });

      // 选择第二行
      const secondRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:nth-child(2) .ant-checkbox-input',
      );
      fireEvent.click(secondRowCheckbox);

      await waitFor(() => {
        expect(onChange).toHaveBeenLastCalledWith(
          [1, 2],
          [mockTableData[0], mockTableData[1]],
        );
      });
    });

    test('应该支持全选功能', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 点击表头全选复选框
      const headerCheckbox = container.querySelector(
        '.ant-table-thead .ant-checkbox-input',
      );
      expect(headerCheckbox).toBeInTheDocument();

      fireEvent.click(headerCheckbox);

      // 验证全选回调
      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(
          [1, 2, 3], // 所有行的 keys
          mockTableData, // 所有行的数据
        );
      });
    });

    test('应该支持取消选择', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 先选择一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      await waitFor(() => {
        expect(onChange).toHaveBeenLastCalledWith([1], [mockTableData[0]]);
      });

      // 再次点击取消选择
      fireEvent.click(firstRowCheckbox);

      await waitFor(() => {
        expect(onChange).toHaveBeenLastCalledWith([], []);
      });
    });
  });

  describe('选择行时表格警告显示', () => {
    test('应该在选择行时显示表格警告', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{}}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 初始状态下没有警告
      expect(
        container.querySelector('.ant-pro-table-alert'),
      ).not.toBeInTheDocument();

      // 选择一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      // 验证警告出现
      await waitFor(() => {
        expect(
          container.querySelector('.ant-pro-table-alert'),
        ).toBeInTheDocument();
      });

      // 验证警告内容包含选择信息
      await waitFor(() => {
        expect(screen.getByText(/已选择/)).toBeInTheDocument();
        expect(screen.getByText(/1/)).toBeInTheDocument();
      });
    });

    test('应该显示正确的选择数量', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{}}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择两行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      const secondRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:nth-child(2) .ant-checkbox-input',
      );

      fireEvent.click(firstRowCheckbox);
      fireEvent.click(secondRowCheckbox);

      // 验证显示选择了2项
      await waitFor(() => {
        expect(screen.getByText(/已选择/)).toBeInTheDocument();
        expect(screen.getByText(/2/)).toBeInTheDocument();
      });
    });

    test('应该在取消所有选择时隐藏警告', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{}}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      // 验证警告出现
      await waitFor(() => {
        expect(
          container.querySelector('.ant-pro-table-alert'),
        ).toBeInTheDocument();
      });

      // 取消选择
      fireEvent.click(firstRowCheckbox);

      // 验证警告消失
      await waitFor(() => {
        expect(
          container.querySelector('.ant-pro-table-alert'),
        ).not.toBeInTheDocument();
      });
    });

    test('应该显示取消选择按钮', async () => {
      const mockRequest = createMockRequest(mockTableData);

      customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{}}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择一行
      const firstRowCheckbox = document.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      // 验证取消选择按钮出现
      await waitFor(() => {
        expect(screen.getByText('取消选择')).toBeInTheDocument();
      });
    });

    test('应该支持点击取消选择按钮清除选择', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      await waitFor(() => {
        expect(onChange).toHaveBeenLastCalledWith([1], [mockTableData[0]]);
      });

      // 点击取消选择按钮
      const cancelButton = screen.getByText('取消选择');
      fireEvent.click(cancelButton);

      // 验证选择被清除
      await waitFor(() => {
        expect(onChange).toHaveBeenLastCalledWith([], []);
      });

      // 验证警告消失
      await waitFor(() => {
        expect(
          container.querySelector('.ant-pro-table-alert'),
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('受控模式测试', () => {
    test('应该支持受控的 selectedRowKeys', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();
      const selectedRowKeys = [1, 2];

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            selectedRowKeys,
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 验证预选中的行
      const checkedCheckboxes = container.querySelectorAll(
        '.ant-table-tbody .ant-checkbox-wrapper-checked',
      );
      expect(checkedCheckboxes.length).toBe(2);

      // 验证警告显示选中数量
      await waitFor(() => {
        expect(screen.getByText(/已选择/)).toBeInTheDocument();
        expect(screen.getByText(/2/)).toBeInTheDocument();
      });
    });

    test('应该在受控模式下正确处理选择变化', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{
            selectedRowKeys: [1],
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 点击未选中的行
      const secondRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:nth-child(2) .ant-checkbox-input',
      );
      fireEvent.click(secondRowCheckbox);

      // 验证 onChange 被调用，但组件状态不会自动更新（受控模式）
      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(
          [1, 2],
          [mockTableData[0], mockTableData[1]],
        );
      });
    });
  });

  describe('边界情况测试', () => {
    test('应该处理空数据的行选择', async () => {
      const mockRequest = createMockRequest([]);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowSelection={{}}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证表头复选框存在但禁用
      const headerCheckbox = container.querySelector(
        '.ant-table-thead .ant-checkbox-input',
      );
      expect(headerCheckbox).toBeInTheDocument();

      // 验证没有数据行复选框
      const rowCheckboxes = container.querySelectorAll(
        '.ant-table-tbody .ant-checkbox-input',
      );
      expect(rowCheckboxes.length).toBe(0);
    });

    test('应该处理自定义 rowKey 的行选择', async () => {
      const customData = [
        { customId: 'a1', name: '张三' },
        { customId: 'b2', name: '李四' },
      ];
      const mockRequest = createMockRequest(customData);
      const onChange = jest.fn();

      const { container } = customRender(
        <ProTable
          columns={[
            { title: 'ID', dataIndex: 'customId' },
            { title: '姓名', dataIndex: 'name' },
          ]}
          request={mockRequest}
          rowKey="customId"
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择第一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      // 验证使用自定义 rowKey
      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(['a1'], [customData[0]]);
      });
    });

    test('应该处理函数类型的 rowKey', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const onChange = jest.fn();
      const rowKeyFn = (record) => `key_${record.id}`;

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          rowKey={rowKeyFn}
          rowSelection={{
            onChange,
          }}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText('张三')).toBeInTheDocument();
      });

      // 选择第一行
      const firstRowCheckbox = container.querySelector(
        '.ant-table-tbody tr:first-child .ant-checkbox-input',
      );
      fireEvent.click(firstRowCheckbox);

      // 验证使用函数生成的 rowKey
      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(['key_1'], [mockTableData[0]]);
      });
    });
  });
});
