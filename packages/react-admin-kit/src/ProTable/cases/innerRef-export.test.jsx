/**
 * @jest-environment jsdom
 */
import { useRef, useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

// Mock data
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
];

const mockRequest = jest.fn().mockResolvedValue({
  data: mockData,
  total: 2,
  success: true,
});

const columns = [
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

// Mock exportTable function
import * as utils from '../utils/index';
jest.spyOn(utils, 'exportTable').mockImplementation(() => Promise.resolve());

import { exportTable } from '../utils/index';

describe('ProTable innerRef export 功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('应该为 innerRef 设置 export 方法', async () => {
    let capturedInnerRef;

    const TestComponent = () => {
      const innerRef = useRef();

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

    render(<TestComponent />);

    await waitFor(
      () => {
        expect(capturedInnerRef).toBeDefined();
        expect(typeof capturedInnerRef.export).toBe('function');
      },
      { timeout: 2000 },
    );
  });

  test('export 方法应该正确调用 exportTable', async () => {
    let capturedInnerRef;

    const TestComponent = () => {
      const innerRef = useRef();

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

    render(<TestComponent />);

    await waitFor(
      () => {
        expect(capturedInnerRef).toBeDefined();

        // 调用 export 方法
        const mockExcelJS = {};
        const mockRows = mockData;
        const options = { filename: 'test-export' };

        capturedInnerRef.export(mockRows, mockExcelJS, options);

        // 验证 exportTable 被正确调用
        expect(exportTable).toHaveBeenCalledWith(
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
      },
      { timeout: 2000 },
    );
  });

  test('应该使用默认文件名当没有提供 options.filename', async () => {
    let capturedInnerRef;

    const TestComponent = () => {
      const innerRef = useRef();

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

    render(<TestComponent />);

    await waitFor(
      () => {
        expect(capturedInnerRef).toBeDefined();

        // 调用 export 方法但不提供 filename
        const mockExcelJS = {};
        capturedInnerRef.export(mockData, mockExcelJS);

        // 验证 exportTable 使用了默认文件名
        expect(exportTable).toHaveBeenCalledWith(
          expect.any(Array),
          mockData,
          mockExcelJS,
          expect.objectContaining({
            filename: '用户列表',
          }),
        );
      },
      { timeout: 2000 },
    );
  });
});
