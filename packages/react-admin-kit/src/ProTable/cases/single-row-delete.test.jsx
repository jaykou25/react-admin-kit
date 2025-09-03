/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('single row delete', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  afterEach(() => {
    // 清理 DOM 中的所有弹窗和消息组件
    // document.body.innerHTML = '';
    // 清理可能存在的定时器
    jest.clearAllTimers();
    // 清理所有 mock
    jest.clearAllMocks();
  });

  describe('默认的行删除行为', () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).not.toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        await user.click(screen.queryByText('确 定'));
        expect(mockDelFn).toHaveBeenCalled();
      });
    });

    test('行删除时 loading 效果', async () => {
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
          enableDelete: (record, index) => {
            return {
              btnText: `删除${index}`,
            };
          },
          render: () => ['编辑'],
        },
      ];

      const mockRequest = jest.fn(() =>
        Promise.resolve({
          data: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
          total: 2,
        }),
      );

      const mockDelFn = () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(true), 1000);
        });
      await render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delPopconfirmProps={{
            getPopupContainer: (trigger) => trigger.parentNode,
          }}
        />,
      );

      const del0Btn = await screen.findByText('删除0');

      expect(del0Btn).toBeInTheDocument();
      expect(await screen.findByText('删除1')).toBeInTheDocument();

      await user.click(del0Btn);

      const confirmBtn = await screen.findByText('确 定');
      await user.click(confirmBtn);

      expect((await screen.findByText('删除0')).parentNode).toHaveClass(
        'ant-btn-loading',
      );
      expect((await screen.findByText('删除1')).parentNode).not.toHaveClass(
        'ant-btn-loading',
      );
    });

    test('验证 enableDelete 为函数时的参数 - record (返回 false)', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).not.toBeInTheDocument();
      });
    });

    test('验证 enableDelete 为函数时的参数 - index (返回 false)', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).not.toBeInTheDocument();
      });
    });

    test('验证 enableDelete 为函数时的参数 - record (返回 true)', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });
    });

    test('验证 enableDelete 为函数时参数 index (返回 true)', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });
    });

    test('验证 enableDelete 为函数时 返回对象 disabled', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
        expect(screen.queryByText('删除').parentNode).toBeDisabled();
      });
    });

    test('验证 enableDelete 为函数时 返回对象 visible', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).not.toBeInTheDocument();
      });
    });

    test('验证 enableDelete 为函数时 返回对象 danger', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
        expect(screen.queryByText('删除').parentNode).toHaveClass(
          'ant-btn-dangerous',
        );
      });
    });

    test('验证 enableDelete 为函数时 返回对象 btnText', async () => {
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

      await waitFor(() => {
        expect(screen.queryByText('关闭')).toBeInTheDocument();
      });
    });

    test('验证 enableDelete 为函数时 返回对象 btnIndex', async () => {
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

      const { container } = render(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();

        const spaceItems = container.querySelectorAll(
          '.optionGroup .ant-space-item',
        );
        expect(spaceItems[0].textContent).toBe('删除');
        expect(spaceItems[1].textContent).toBe('编辑');
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).not.toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('popconfirmTitleTest')).toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('popconfirmTitleTest1')).toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('popconfirmTitleTest0')).toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('popconfirmDescTest')).toBeInTheDocument();
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

      await waitFor(() => {
        expect(screen.queryByText('删除')).toBeInTheDocument();
      });

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('popconfirmDescTest1')).toBeInTheDocument();
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

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('popconfirmDescTest0')).toBeInTheDocument();
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

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('modalTitleTest')).toBeInTheDocument();
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

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('modalTitleTest1')).toBeInTheDocument();
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

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('modalTitleTest0')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - content', async () => {
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
            content: 'modalContentTest',
          }}
        />,
      );

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('modalContentTest')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - content 函数 record 参数', async () => {
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
            content: (record) => `modalContentTest${record.id}`,
          }}
        />,
      );

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('modalContentTest1')).toBeInTheDocument();
      });
    });

    test('delModalConfirmProps - content 函数 index 参数', async () => {
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
            content: (record, index) => `modalContentTest${index}`,
          }}
        />,
      );

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        expect(screen.queryByText('modalContentTest0')).toBeInTheDocument();
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

      const mockDelFn = jest.fn(() => Promise.resolve(true));

      render(
        <ProTable
          search={false}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          delSuccessProps={{ content: 'delSuccessTest' }}
        />,
      );

      // 等待表格渲染完成
      await waitFor(() => {
        expect(screen.getByText('删除')).toBeInTheDocument();
      });

      // 点击删除按钮
      await user.click(screen.getByText('删除'));

      // 等待确认弹窗出现
      await waitFor(() => {
        expect(screen.getByText('确 定')).toBeInTheDocument();
      });

      // 点击确认按钮
      await user.click(screen.getByText('确 定'));

      // 等待成功消息出现
      await waitFor(
        () => {
          expect(screen.getByText('delSuccessTest')).toBeInTheDocument();
        },
        { timeout: 3000 },
      );
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

      await waitFor(async () => {
        await user.click(screen.queryByText('删除'));
        await user.click(screen.queryByText('确 定'));
        expect(screen.queryByText('删除成功')).not.toBeInTheDocument();
      });
    });
  });
});
