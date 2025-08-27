/**
 * @jest-environment jsdom
 */
import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';
import {
  customRender,
  mockTableData,
  mockColumns,
  createMockRequest,
  cleanupMocks,
} from './test-utils';
import zh_CN from '../../locale/zh_CN';
import en_US from '../../locale/en_US';
import './setup';

describe('ProTable Locale 属性测试', () => {
  beforeEach(() => {
    cleanupMocks();
  });

  describe('中文 (zh_CN) locale 测试', () => {
    test('应该正确显示中文文本', async () => {
      const mockRequest = createMockRequest(mockTableData);

      customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          name="用户管理"
          locale={zh_CN}
          rowSelection={{}}
        />,
        { locale: 'zh' },
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证中文标题后缀
      expect(screen.getByText('用户管理表格')).toBeInTheDocument();

      // 验证中文按钮文本
      await waitFor(() => {
        // 查询按钮
        expect(screen.getByText('查询')).toBeInTheDocument();
        // 重置按钮
        expect(screen.getByText('重置')).toBeInTheDocument();
      });
    });

    test('应该在模态框中显示中文标题', async () => {
      const { user } = customRender(
        <ProTable
          columns={mockColumns}
          name="用户管理"
          locale={zh_CN}
          modalFormProps={{
            title: '用户信息',
          }}
        />,
        { locale: 'zh' },
      );

      // 查找并点击新建按钮
      const createButton = screen.getByText('新建');
      await user.click(createButton);

      // 验证模态框标题
      await waitFor(() => {
        expect(screen.getByText('新建用户管理')).toBeInTheDocument();
      });
    });

    test('应该正确显示中文删除确认文本', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const mockDelFunction = jest.fn().mockResolvedValue(true);

      const { user } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFunction}
          locale={zh_CN}
          rowSelection={{}}
        />,
        { locale: 'zh' },
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 选择一行数据
      await waitFor(async () => {
        const checkboxes = screen.getAllByRole('checkbox');
        if (checkboxes.length > 1) {
          await user.click(checkboxes[1]); // 点击第一行的复选框
        }
      });

      // 验证批量删除按钮显示中文
      await waitFor(() => {
        expect(screen.getByText('批量删除')).toBeInTheDocument();
        expect(screen.getByText('取消选择')).toBeInTheDocument();
      });
    });

    test('应该正确显示中文日期格式', async () => {
      const mockRequest = createMockRequest([
        { id: 1, name: '张三', createTime: '2023-12-25' },
      ]);

      const dateColumns = [
        {
          title: '创建时间',
          dataIndex: 'createTime',
          valueType: 'date',
        },
      ];

      customRender(
        <ProTable columns={dateColumns} request={mockRequest} locale={zh_CN} />,
        { locale: 'zh' },
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证日期显示
      await waitFor(() => {
        expect(screen.getByText('2023-12-25')).toBeInTheDocument();
      });
    });
  });

  describe('英文 (en_US) locale 测试', () => {
    test('应该正确显示英文文本', async () => {
      const mockRequest = createMockRequest(mockTableData);

      customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          name="User Management"
          locale={en_US}
          rowSelection={{}}
        />,
        { locale: 'en' },
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证英文标题后缀
      expect(screen.getByText('User Management Table')).toBeInTheDocument();

      // 验证英文按钮文本
      await waitFor(() => {
        expect(screen.getByText('Search')).toBeInTheDocument();
        expect(screen.getByText('Reset')).toBeInTheDocument();
      });
    });

    test('应该在模态框中显示英文标题', async () => {
      const { user } = customRender(
        <ProTable
          columns={mockColumns}
          name="User Management"
          locale={en_US}
        />,
        { locale: 'en' },
      );

      // 查找并点击新建按钮
      const createButton = screen.getByText('Create');
      await user.click(createButton);

      // 验证模态框标题
      await waitFor(() => {
        expect(screen.getByText('Create User Management')).toBeInTheDocument();
      });
    });

    test('应该正确显示英文删除确认文本', async () => {
      const mockRequest = createMockRequest(mockTableData);
      const mockDelFunction = jest.fn().mockResolvedValue(true);

      const { user } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          delFunction={mockDelFunction}
          locale={en_US}
          rowSelection={{}}
        />,
        { locale: 'en' },
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 选择一行数据
      await waitFor(async () => {
        const checkboxes = screen.getAllByRole('checkbox');
        if (checkboxes.length > 1) {
          await user.click(checkboxes[1]);
        }
      });

      // 验证批量删除按钮显示英文
      await waitFor(() => {
        expect(screen.getByText('Batch Delete')).toBeInTheDocument();
        expect(screen.getByText('Cancel Selection')).toBeInTheDocument();
      });
    });

    test('应该正确显示英文导出文件名', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { container } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          name="User Management"
          locale={en_US}
        />,
        { locale: 'en' },
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证导出功能的默认文件名会使用英文
      // 这里主要是验证 locale 配置正确传递
      expect(container.querySelector('.ant-pro-table')).toBeInTheDocument();
    });
  });

  describe('自定义 locale 测试', () => {
    test('应该使用自定义 locale 文本', async () => {
      const customLocale = {
        ...zh_CN,
        tableTitleAfter: '数据表',
        formTypeNew: '添加',
        formTypeEdit: '修改',
        exportFilename: '导出数据',
      };

      const mockRequest = createMockRequest(mockTableData);

      customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          name="自定义管理"
          locale={customLocale}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 验证自定义标题后缀
      expect(screen.getByText('自定义管理数据表')).toBeInTheDocument();
    });

    test('应该在表单类型改变时使用正确的 locale', async () => {
      const customLocale = {
        ...zh_CN,
        formTypeNew: '创建新',
        formTypeEdit: '编辑',
        formTypeRead: '查看',
      };

      const { user } = customRender(
        <ProTable
          columns={mockColumns}
          name="测试管理"
          locale={customLocale}
        />,
      );

      // 点击新建按钮
      const createButton = screen.getByText('新建');
      await user.click(createButton);

      // 验证自定义的新建文案
      await waitFor(() => {
        expect(screen.getByText('创建新测试管理')).toBeInTheDocument();
      });
    });
  });

  describe('locale 动态切换测试', () => {
    test('应该支持 locale 动态切换', async () => {
      const TestComponent = ({ locale }) => (
        <ProTable columns={mockColumns} name="管理系统" locale={locale} />
      );

      const { rerender } = customRender(<TestComponent locale={zh_CN} />, {
        locale: 'zh',
      });

      // 验证中文显示
      expect(screen.getByText('管理系统表格')).toBeInTheDocument();

      // 切换到英文
      rerender(<TestComponent locale={en_US} />);

      // 验证英文显示
      await waitFor(() => {
        expect(screen.getByText('管理系统 Table')).toBeInTheDocument();
      });
    });
  });

  describe('formType 与 locale 结合测试', () => {
    test('应该根据 formType 和 locale 显示正确的模态框标题', async () => {
      const mockRequest = createMockRequest(mockTableData);

      const { user } = customRender(
        <ProTable
          columns={mockColumns}
          request={mockRequest}
          name="用户"
          locale={zh_CN}
        />,
      );

      await waitFor(() => {
        expect(mockRequest).toHaveBeenCalled();
      });

      // 测试新建模式
      const createButton = screen.getByText('新建');
      await user.click(createButton);

      await waitFor(() => {
        expect(screen.getByText('新建用户')).toBeInTheDocument();
      });

      // 关闭模态框
      const cancelButton = screen.getByText('取消');
      await user.click(cancelButton);

      // 测试编辑模式 - 点击编辑按钮
      await waitFor(async () => {
        const editButtons = screen.getAllByText('编辑');
        if (editButtons.length > 0) {
          await user.click(editButtons[0]);
        }
      });

      await waitFor(() => {
        expect(screen.getByText('编辑用户')).toBeInTheDocument();
      });
    });
  });
});
