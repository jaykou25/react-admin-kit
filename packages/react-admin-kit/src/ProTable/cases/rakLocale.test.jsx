import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';
import SettingProvider from '../../SettingProvider';

// 测试用的英文 locale
const enLocale = {
  tableTitleAfter: ' List',
  formTypeNew: 'New',
  formTypeEdit: 'Edit',
  formTypeRead: 'View',
  exportFilename: 'Export List',
  delBtnText: 'Delete',
  delPopconfirmTitle: 'Are you sure to delete?',
  delModalConfirmTitle: 'Confirm',
  delModalConfirmContent: 'Are you sure to delete?',
  delSuccessContent: 'Deleted successfully',
  alertDelBtnText: 'Batch Delete',
  alertDelPopconfirmTitle: (rowKeys) =>
    `Are you sure to delete ${rowKeys.length} items?`,
  alertDelModalConfirmTitle: 'Confirm',
  alertDelModalConfirmContent: (rowKeys) =>
    `Are you sure to delete ${rowKeys.length} items?`,
  confirmOnCloseTitle: 'Confirm Close',
  confirmOnCloseContent: 'Form content not saved, are you sure to close?',
};

// 测试用的中文 locale
const zhLocale = {
  tableTitleAfter: '列表',
  formTypeNew: '新增',
  formTypeEdit: '编辑',
  formTypeRead: '查看',
  exportFilename: '导出列表',
  delBtnText: '删除',
  delPopconfirmTitle: '确认删除吗？',
  delModalConfirmTitle: '操作确认',
  delModalConfirmContent: '确认删除吗？',
  delSuccessContent: '删除成功',
  alertDelBtnText: '批量删除',
  alertDelPopconfirmTitle: (rowKeys) => `确认删除${rowKeys.length}条数据吗？`,
  alertDelModalConfirmTitle: '操作确认',
  alertDelModalConfirmContent: (rowKeys) =>
    `确认删除${rowKeys.length}条数据吗？`,
  confirmOnCloseTitle: '确认关闭',
  confirmOnCloseContent: '表单项内容未保存, 是否确认关闭?',
};

// 自定义测试 locale
const customLocale = {
  tableTitleAfter: ' Custom',
  formTypeNew: 'Create',
  formTypeEdit: 'Modify',
  formTypeRead: 'Read',
  delBtnText: 'MyDelete',
};

// Mock columns
const mockColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    valueType: 'text',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    valueType: 'text',
  },
  {
    title: 'option',
    valueType: 'option',
    enableDelete: true,
    render: () => [],
  },
];

// Mock request function
const mockRequest = () =>
  Promise.resolve({
    data: [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
    ],
    success: true,
    total: 2,
  });

const mockDelete = jest.fn(() =>
  Promise.resolve({
    success: true,
  }),
);

describe('ProTable rakLocale priority tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('场景1: 组件级 rakLocale 覆盖全局 locale', () => {
    it('应该在全局为中文 locale 时，使用组件级的英文 locale', async () => {
      const Wrapper = ({ children }) => (
        <SettingProvider locale={zhLocale}>{children}</SettingProvider>
      );

      render(
        <Wrapper>
          <ProTable
            search={false}
            name="User"
            columns={mockColumns}
            request={mockRequest}
            rakLocale={enLocale}
            rowKey="id"
            delFunction={mockDelete}
          />
        </Wrapper>,
      );

      // 验证使用了英文 locale 的 tableTitleAfter
      expect(screen.getByText('User List')).toBeInTheDocument();

      // 验证使用了英文 locale 的 delBtnText
      waitFor(() => {
        expect(screen.getByText('Delete')).toBeInTheDocument();
      });
    });

    it('应该在全局为英文 locale 时，使用组件级的自定义 locale', async () => {
      const Wrapper = ({ children }) => (
        <SettingProvider locale={enLocale}>{children}</SettingProvider>
      );

      render(
        <Wrapper>
          <ProTable
            name="User"
            columns={mockColumns}
            request={mockRequest}
            delFunction={mockDelete}
            rakLocale={customLocale}
            rowKey="id"
          />
        </Wrapper>,
      );

      // 验证使用了自定义 locale 的 tableTitleAfter
      waitFor(() => {
        expect(screen.getByText('User Custom')).toBeInTheDocument();
      });

      waitFor(() => {
        expect(screen.getByText('MyDelete')).toBeInTheDocument();
      });
    });
  });

  describe('场景2: 仅使用全局 locale（无组件级 rakLocale）', () => {
    it('应该使用全局中文 locale', async () => {
      const Wrapper = ({ children }) => (
        <SettingProvider locale={zhLocale}>{children}</SettingProvider>
      );

      render(
        <Wrapper>
          <ProTable
            name="User"
            columns={mockColumns}
            request={mockRequest}
            rowKey="id"
          />
        </Wrapper>,
      );

      // 验证使用了全局中文 locale
      waitFor(() => {
        expect(screen.getByText('User列表')).toBeInTheDocument();
      });
    });
  });

  describe('场景4: 既无全局 locale 也无组件级 rakLocale', () => {
    it('应该使用默认中文 locale (zhCN)', async () => {
      const Wrapper = ({ children }) => (
        <SettingProvider>{children}</SettingProvider>
      );

      render(
        <Wrapper>
          <ProTable
            name="User"
            columns={mockColumns}
            request={mockRequest}
            rowKey="id"
          />
        </Wrapper>,
      );

      // 验证使用了默认中文 locale
      waitFor(() => {
        expect(screen.getByText('User列表')).toBeInTheDocument();
      });
    });
  });
});
