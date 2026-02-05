/**
 * @jest-environment jsdom
 */
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('多行删除功能集成测试', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  describe('开启多行删除', () => {
    it('通过 rowSelection 开启', async () => {
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
          search={false}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      expect(await screen.findByText('批量删除')).toBeInTheDocument();
      fireEvent.click(screen.queryByText('批量删除'));
      fireEvent.click(screen.queryByText('确 定'));
      expect(mockDelFn).toHaveBeenCalled();
    });
  });

  describe('tableAlertOption 验证', () => {
    it('enableDelete false', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          tableAlertOption={{
            enableDelete: false,
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('批量删除')).not.toBeInTheDocument();
      });
    });

    it('enableDelete 函数 返回 false', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          tableAlertOption={{
            enableDelete: () => false,
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('批量删除')).not.toBeInTheDocument();
      });
    });

    it('enableDelete 函数 返回对象 disabled', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          tableAlertOption={{
            enableDelete: () => ({ disabled: true }),
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('批量删除')).toBeInTheDocument();
        expect(screen.queryByText('批量删除').parentNode).toBeDisabled();
      });
    });

    it('enableDelete 函数 返回对象 visible', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          tableAlertOption={{
            enableDelete: () => ({ visible: false }),
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('批量删除')).not.toBeInTheDocument();
      });
    });

    it('enableDelete 函数 返回对象 danger', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          tableAlertOption={{
            enableDelete: () => ({ danger: true }),
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('批量删除')).toBeInTheDocument();
        expect(screen.queryByText('批量删除').parentNode).toHaveClass(
          'ant-btn-dangerous',
        );
      });
    });

    it('enableDelete 函数 返回对象 btnText', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          tableAlertOption={{
            enableDelete: () => ({ btnText: 'multiDelTest' }),
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('multiDelTest')).toBeInTheDocument();
      });
    });

    it('enableDelete 函数参数验证', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
      const enableDeleteFn = jest.fn();

      render(
        <ProTable
          tableAlertOption={{
            enableDelete: enableDeleteFn,
          }}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      await waitFor(() => {
        expect(enableDeleteFn).toHaveBeenCalledWith([1], [{ id: 1 }]);
      });
    });

    it('delPopconfirmProps 验证 title', async () => {
      const mockColumns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
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
          search={false}
          rowSelection={{
            selectedRowKeys: [1],
          }}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          tableAlertOption={{
            delPopconfirmProps: {
              title: 'popconfirmTitleTest',
              getPopupContainer: (node) => node.parentNode,
            },
          }}
          delConfirmType="popconfirm"
        />,
      );

      await waitFor(() => {
        expect(screen.queryByText('批量删除')).toBeInTheDocument();
        user.click(screen.queryByText('批量删除'));
        expect(screen.queryByText('popconfirmTitleTest')).toBeInTheDocument();
      });
    });
  });
});
