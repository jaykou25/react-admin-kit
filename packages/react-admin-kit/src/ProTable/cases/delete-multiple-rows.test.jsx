/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('多行删除功能集成测试', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('批量删除')).toBeInTheDocument();

        await user.click(screen.getByText('批量删除删除'));
        await user.click(screen.getByText('确认'));
        expect(mockDelFn).toHaveBeenCalled();
      });
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('批量删除')).not.toBeInTheDocument();
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('批量删除')).not.toBeInTheDocument();
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('批量删除')).toBeInTheDocument();
        expect(screen.getByText('批量删除')).toBeDisabled();
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('批量删除')).not.toBeInTheDocument();
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('批量删除')).toBeInTheDocument();
        expect(screen.getByText('批量删除')).toHaveClass('ant-btn-dangerous');
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

        expect(screen.getByText('multiDelTest')).toBeInTheDocument();
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
          rowSelection={{}}
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));

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
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFn}
          tableAlertOption={{
            delPopconfirmProps: {
              title: 'popconfirmTitleTest',
            },
          }}
          delConfirmType="popconfirm"
        />,
      );

      waitFor(async () => {
        await user.click(screen.getByLabelText('Select all'));
        await user.click(screen.getByText('批量删除'));
        expect(screen.getByText('popconfirmTitleTest')).toBeInTheDocument();
      });
    });
  });
});
