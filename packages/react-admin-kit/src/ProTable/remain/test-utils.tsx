/**
 * ProTable 测试工具函数和 Mock 数据
 */
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import SettingProvider from '../../SettingProvider';
import type { TableColumnType } from '../types';
import type { FormType } from '../../ModalForm/types';

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

// 大数据集测试数据
export const generateLargeDataSet = (count: number = 1000) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `用户${index + 1}`,
    age: 20 + (index % 50),
    email: `user${index + 1}@example.com`,
    status: index % 2 === 0 ? 'active' : 'inactive',
    createTime: `2023-${String(Math.floor(index / 30) + 1).padStart(
      2,
      '0',
    )}-${String((index % 30) + 1).padStart(2, '0')}`,
    department: ['IT', 'HR', 'Finance', 'Marketing'][index % 4],
  }));
};

// 标准列配置
export const mockColumns: TableColumnType[] = [
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

// 表单列配置
export const mockFormColumns: TableColumnType[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
    formItemProps: {
      rules: [{ required: true, message: '请输入姓名' }],
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'digit',
    formItemProps: {
      rules: [{ required: true, message: '请输入年龄' }],
    },
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    valueType: 'text',
    formItemProps: {
      rules: [
        { required: true, message: '请输入邮箱' },
        { type: 'email', message: '请输入有效的邮箱地址' },
      ],
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '激活', value: 'active' },
        { label: '未激活', value: 'inactive' },
      ],
    },
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: 'IT部门', value: 'IT' },
        { label: '人事部门', value: 'HR' },
        { label: '财务部门', value: 'Finance' },
        { label: '市场部门', value: 'Marketing' },
      ],
    },
  },
];

// Mock 请求函数
export const createMockRequest = (
  data: any[] = mockTableData,
  delay: number = 100,
  shouldFail: boolean = false,
) => {
  return jest.fn().mockImplementation((params: any) => {
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

// Mock 删除函数
export const createMockDelFunction = (
  delay: number = 100,
  shouldFail: boolean = false,
) => {
  return jest
    .fn()
    .mockImplementation((selectedIds: (string | number)[], record: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error('Delete failed'));
            return;
          }
          resolve(true);
        }, delay);
      });
    });
};

// Mock onFinish 函数
export const createMockOnFinish = (
  delay: number = 100,
  shouldFail: boolean = false,
) => {
  return jest
    .fn()
    .mockImplementation((values: any, formType: FormType, formData: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error('Submit failed'));
            return;
          }
          resolve(values);
        }, delay);
      });
    });
};

// Mock onOpen 函数
export const createMockOnOpen = (
  delay: number = 100,
  shouldFail: boolean = false,
) => {
  return jest
    .fn()
    .mockImplementation((formType: FormType, formRef: any, formData: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error('Open failed'));
            return;
          }
          resolve(undefined);
        }, delay);
      });
    });
};

// 自定义渲染函数，支持多语言和全局配置
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: 'zh' | 'en';
  settingProviderProps?: any;
}

export const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {},
) => {
  const { locale = 'zh', settingProviderProps, ...renderOptions } = options;

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ConfigProvider locale={locale === 'zh' ? zhCN : enUS}>
      <SettingProvider {...settingProviderProps}>{children}</SettingProvider>
    </ConfigProvider>
  );

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

// 等待异步操作完成的工具函数
export const waitForAsyncOperation = (timeout: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// 模拟文件导出
export const mockExcelJS = {
  Workbook: jest.fn().mockImplementation(() => ({
    addWorksheet: jest.fn().mockReturnValue({
      properties: { defaultColWidth: 30 },
      columns: [],
      addRows: jest.fn(),
      mergeCells: jest.fn(),
    }),
    xlsx: {
      writeBuffer: jest.fn().mockResolvedValue(new ArrayBuffer(8)),
    },
  })),
};

// 模拟 DOM API
export const mockDOMAPIs = () => {
  // Mock URL.createObjectURL
  global.URL.createObjectURL = jest.fn(() => 'mock-url');
  global.URL.revokeObjectURL = jest.fn();

  // Mock document.createElement
  const originalCreateElement = document.createElement;
  document.createElement = jest.fn().mockImplementation((tagName) => {
    if (tagName === 'a') {
      return {
        href: '',
        download: '',
        click: jest.fn(),
      };
    }
    return originalCreateElement.call(document, tagName);
  });

  // Mock Blob
  global.Blob = jest.fn().mockImplementation((content, options) => ({
    content,
    options,
  }));
};

// 清理 Mock
export const cleanupMocks = () => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
};

// 测试数据验证工具
export const validateTableData = (data: any[]) => {
  expect(Array.isArray(data)).toBe(true);
  data.forEach((item) => {
    expect(item).toHaveProperty('id');
    expect(typeof item.id).toBe('number');
  });
};

// 验证请求参数
export const validateRequestParams = (params: any) => {
  expect(params).toHaveProperty('current');
  expect(params).toHaveProperty('pageSize');
  expect(typeof params.current).toBe('number');
  expect(typeof params.pageSize).toBe('number');
};

// 验证删除参数
export const validateDeleteParams = (selectedIds: any[], record: any) => {
  expect(Array.isArray(selectedIds)).toBe(true);
  expect(selectedIds.length).toBeGreaterThan(0);
  expect(record).toBeDefined();
};

// 验证表单数据
export const validateFormData = (values: any) => {
  expect(typeof values).toBe('object');
  expect(values).not.toBeNull();
};
