/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('ProTable 行删除功能', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('默认的行删除', () => {
    test('默认在行上不显示删除', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).not.toBeInTheDocument();
      });
    });

    test('开启行上的删除', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        await user.click(screen.getByText('确认'));
        expect(mockDelFn).toHaveBeenCalled();
      });
    });

    test('enableDelete 为函数- 参数 record - false', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => record.id !== 1,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).not.toBeInTheDocument();
      });
    });

    test('enableDelete 为函数- 参数 index - false', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => index !== 0,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).not.toBeInTheDocument();
      });
    });

    test('enableDelete 为函数 - 参数 record - true', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record) => record.id === 1,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        await user.click(screen.getByText('确认'));
        expect(mockDelFn).toHaveBeenCalled();
      });
    });

    test('enableDelete 为函数 - 参数 index - true', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => index === 0,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        await user.click(screen.getByText('确认'));
        expect(mockDelFn).toHaveBeenCalled();
      });
    });

    test('enableDelete 为函数 - 返回对象 disabled', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => ({ disabled: true }),
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
        expect(screen.getByText('删除')).toBeDisabled();
      });
    });

    test('enableDelete 为函数 - 返回对象 visible', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => ({ visible: false }),
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).not.toBeInTheDocument();
      });
    });

    test('enableDelete 为函数 - 返回对象 danger', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => ({ danger: true }),
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
        expect(screen.getByText('删除')).toHaveClass('ant-btn-dangerous');
      });
    });

    test('enableDelete 为函数 - 返回对象 btnText', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => ({ btnText: '关闭' }),
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('关闭')).toBeInTheDocument();
      });
    });

    test('enableDelete 为函数 - 返回对象 btnIndex', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: (record, index) => ({ btnIndex: 0 }),
          className: 'optionGroup',
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
        const optionGroup = screen.querySelector('.optionGroup');
        const spaceItems = optionGroup.querySelectorAll('.ant-space-item');
        expect(spaceItems[0]).toHaveTextContent('删除');
        expect(spaceItems[1]).toHaveTextContent('编辑');
      });
    });
  });

  describe('删除权限 delPermission', () => {
    test('delPermission 函数返回 true', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delPermission={() => true}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });
    });

    test('delPermission 函数返回 false', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delPermission={() => false}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).not.toBeInTheDocument();
      });
    });
  });

  describe('delPopconfirmProps', () => {
    test('delPopconfirmProps - title', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            title: 'popconfirmTitleTest',
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('popconfirmTitleTest')).toBeInTheDocument();
      });
    });

    test('delPopconfirmProps - title 函数 record 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            title: (record) => `popconfirmTitleTest${record.id}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('popconfirmTitleTest1')).toBeInTheDocument();
      });
    });

    test('delPopconfirmProps - title 函数 index 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            title: (record, index) => `popconfirmTitleTest${index}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('popconfirmTitleTest0')).toBeInTheDocument();
      });
    });

    test('delPopconfirmProps - description', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            description: 'popconfirmDescTest',
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('popconfirmDescTest')).toBeInTheDocument();
      });
    });

    test('delPopconfirmProps - description 函数 record 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            description: (record) => `popconfirmDescTest${record.id}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('popconfirmDescTest1')).toBeInTheDocument();
      });
    });

    test('delPopconfirmProps - description 函数 index 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            description: (record, index) => `popconfirmDescTest${index}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('popconfirmDescTest0')).toBeInTheDocument();
      });
    });
  });

  describe('delModalConfirmProps', () => {
    test('delModalConfirmProps - title', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="modal"
          delModalConfirmProps={{
            title: 'modalTitleTest',
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('modalTitleTest')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - title 函数 record 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="modal"
          delModalConfirmProps={{
            title: (record) => `modalTitleTest${record.id}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('modalTitleTest1')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - title 函数 index 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="modal"
          delModalConfirmProps={{
            title: (record, index) => `modalTitleTest${index}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('modalTitleTest0')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - description', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="modal"
          delModalConfirmProps={{
            description: 'modalDescTest',
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('modalDescTest')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - description 函数 record 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="popconfirm"
          delPopconfirmProps={{
            description: (record) => `modalDescTest${record.id}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('modalDescTest1')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - description 函数 index 参数', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delConfirmType="modal"
          delModalConfirmProps={{
            description: (record, index) => `modalDescTest${index}`,
          }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        expect(screen.getByText('modalDescTest0')).toBeInTheDocument();
      });
    });
  });

  describe('delSuccessProps', () => {
    test('成功后的文字', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delSuccessProps={{ content: 'delSuccessTest' }}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        await user.click(screen.getByText('确认'));
        expect(screen.getByText('delSuccessTest')).toBeInTheDocument();
      });
    });

    test('不显示提示消息', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '操作',
          valueType: 'option',
          enableDelete: true,
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
          ],
          total: 1,
        }),
      );

      const mockDelFn = jest.fn();

      render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delSuccessProps={false}
        />,
      );

      // 验证空状态显示
      waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      waitFor(async () => {
        await user.click(screen.getByText('删除'));
        await user.click(screen.getByText('确认'));
        expect(screen.getByText('删除成功')).not.toBeInTheDocument();
      });
    });
  });
});
