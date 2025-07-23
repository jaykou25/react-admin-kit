/**
 * @jest-environment jsdom
 */
import React, { useRef, useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

// Mock data
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

const mockRequest = jest.fn().mockResolvedValue({
  data: mockData,
  total: 3,
  success: true,
});

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    type: 'form',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    type: 'form',
    valueType: 'digit',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    type: 'form',
    valueType: 'text',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: () => [<a key="edit">编辑</a>, <a key="delete">删除</a>],
  },
];

describe('ProTable innerRef 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('应该正确初始化 innerRef', async () => {
    const TestComponent = () => {
      const innerRef = useRef();

      return (
        <ProTable
          innerRef={innerRef}
          columns={columns}
          request={mockRequest}
          rowKey="id"
          search={false}
          pagination={{
            pageSize: 10,
            current: 1,
          }}
        />
      );
    };

    const { container } = render(<TestComponent />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalled();
    });

    // 检查表格是否渲染
    expect(container.querySelector('.ant-table')).toBeTruthy();
  });

  test('应该在请求成功后正确设置 innerRef 的数据属性', async () => {
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

    // 等待请求完成和数据设置
    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalled();
    });

    await waitFor(
      () => {
        expect(capturedInnerRef).toBeDefined();
        expect(capturedInnerRef.total).toBe(3);
        expect(capturedInnerRef.dataSource).toEqual(mockData);
        expect(capturedInnerRef.params).toBeDefined();
      },
      { timeout: 2000 },
    );
  });

  test('应该包含 openModal 方法', async () => {
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
          modalFormProps={{
            title: '用户信息',
          }}
        />
      );
    };

    render(<TestComponent />);

    await waitFor(
      () => {
        expect(capturedInnerRef).toBeDefined();
        expect(typeof capturedInnerRef.openModal).toBe('function');
      },
      { timeout: 2000 },
    );
  });

  test('应该能够通过 setData 方法设置数据', async () => {
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
        const testData = { testKey: 'testValue', anotherKey: 123 };
        capturedInnerRef.setData(testData);

        expect(capturedInnerRef.data.testKey).toBe('testValue');
        expect(capturedInnerRef.data.anotherKey).toBe(123);
      },
      { timeout: 2000 },
    );
  });

  test('应该在不同的请求参数下正确更新 params', async () => {
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
          request={(params) => {
            return mockRequest(params).then((res) => {
              return {
                ...res,
                params: params,
              };
            });
          }}
          rowKey="id"
          search={{
            labelWidth: 'auto',
          }}
          pagination={{
            current: 1,
            pageSize: 10,
          }}
        />
      );
    };

    render(<TestComponent />);

    await waitFor(
      () => {
        expect(capturedInnerRef?.params).toBeDefined();
      },
      { timeout: 2000 },
    );

    // 验证 params 包含分页信息
    expect(capturedInnerRef?.params).toMatchObject({
      current: 1,
      pageSize: 10,
    });
  });
});
