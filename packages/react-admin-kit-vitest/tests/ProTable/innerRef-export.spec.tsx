import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';

import { describe, expect, test, vi } from 'vitest';
import { useRef, useEffect } from 'react';

// Mock data
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
];

const mockExportTable = vi.fn(() => Promise.resolve());

vi.mock('react-admin-kit/ProTable/utils', async () => {
  const actual = await vi.importActual<
    typeof import('react-admin-kit/ProTable/utils')
  >('react-admin-kit/ProTable/utils');
  return {
    ...actual,
    exportTable: (...args: any) => mockExportTable(...args),
  };
});

const mockRequest = vi.fn(() =>
  Promise.resolve({
    data: mockData,
    total: 2,
    success: true,
  }),
);

const columns: any = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    type: 'form',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

describe('ProTable innerRef export 功能测试', () => {
  test('应该为 innerRef 设置 export 方法', async () => {
    let capturedInnerRef: any;

    const TestComponent = () => {
      const innerRef = useRef<any>(undefined);

      useEffect(() => {
        const timer = setTimeout(() => {
          capturedInnerRef = innerRef.current;
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      return (
        <ProTable
          innerRef={innerRef}
          columns={columns}
          request={mockRequest}
          rowKey="id"
          search={false}
        />
      );
    };

    await render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(capturedInnerRef).toBeDefined();
    expect(typeof capturedInnerRef.export).toBe('function');
  });

  test('export 方法应该正确调用 exportTable', async () => {
    let capturedInnerRef: any;

    const TestComponent = () => {
      const innerRef = useRef<any>(undefined);

      useEffect(() => {
        const timer = setTimeout(() => {
          capturedInnerRef = innerRef.current;
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      return (
        <ProTable
          innerRef={innerRef}
          columns={columns}
          request={mockRequest}
          rowKey="id"
          search={false}
        />
      );
    };

    await render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(capturedInnerRef).toBeDefined();

    const mockExcelJS = {};
    const mockRows = mockData;
    const options = { filename: 'test-export' };

    capturedInnerRef.export(mockRows, mockExcelJS, options);

    expect(mockExportTable).toHaveBeenCalledWith(
      expect.arrayContaining([
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '年龄',
          dataIndex: 'age',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          hideInSearch: true,
        },
      ]),
      mockRows,
      mockExcelJS,
      expect.objectContaining({
        filename: 'test-export',
      }),
    );
  });

  test('应该使用默认文件名当没有提供 options.filename', async () => {
    let capturedInnerRef: any;

    const TestComponent = () => {
      const innerRef = useRef<any>(undefined);

      useEffect(() => {
        const timer = setTimeout(() => {
          capturedInnerRef = innerRef.current;
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      return (
        <ProTable
          name="用户"
          innerRef={innerRef}
          columns={columns}
          request={mockRequest}
          rowKey="id"
          search={false}
        />
      );
    };

    await render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    expect(capturedInnerRef).toBeDefined();

    const mockExcelJS = {};
    capturedInnerRef.export(mockData, mockExcelJS);

    expect(mockExportTable).toHaveBeenCalledWith(
      expect.any(Array),
      mockData,
      mockExcelJS,
      expect.objectContaining({
        filename: '用户列表',
      }),
    );
  });
});
