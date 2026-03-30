import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';
import { describe, expect, test, vi, beforeEach } from 'vitest';
import { useRef, useEffect } from 'react';
import { Button } from 'antd';

// Mock data
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

const mockRequest = vi.fn().mockResolvedValue({
  data: mockData,
  total: 3,
  success: true,
});

let fieldPropsFn: any;

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
    type: 'form',
    title: 'nameinput',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form: any, _innerRef: any) => {
      return {
        open: true,
        options: [
          {
            'data-testid': 'userOption1',
            label: '员工1',
            value: 'user1',
          },
          {
            label: '员工2',
            value: 'user2',
          },
        ],
        onChange: () => {
          fieldPropsFn(_innerRef?.current?.data);
        },
      };
    },
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
    vi.clearAllMocks();
    fieldPropsFn = vi.fn();
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

    const { container } = await render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 100));

    await expect(mockRequest).toHaveBeenCalled();

    // 检查表格是否渲染
    await expect(container.querySelector('.ant-table')).toBeInTheDocument();
  });

  test('应该在请求成功后正确设置 innerRef 的数据属性', async () => {
    let capturedInnerRef: any;

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

    await render(<TestComponent />);

    // 等待请求完成和数据设置
    await new Promise((resolve) => setTimeout(resolve, 100));

    await expect(mockRequest).toHaveBeenCalled();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await expect(capturedInnerRef).toBeDefined();
    await expect(capturedInnerRef.total).toBe(3);
    await expect(capturedInnerRef.dataSource).toEqual(mockData);
    await expect(capturedInnerRef.params).toBeDefined();
  });

  test('应该包含 openModal 方法', async () => {
    let capturedInnerRef: any;

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

    await render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await expect(capturedInnerRef).toBeDefined();
    await expect(typeof capturedInnerRef.openModal).toBe('function');
  });

  test('应该能够通过 setData 方法设置数据', async () => {
    const TestComponent = ({ onSet, fieldPropsFn }: any) => {
      const innerRef = useRef();

      return (
        <>
          <Button data-testid="set-btn" onClick={() => onSet(innerRef)}>
            set
          </Button>
          <Button
            data-testid="open-btn"
            onClick={() => innerRef.current.openModal()}
          >
            open
          </Button>
          <ProTable
            innerRef={innerRef}
            columns={[
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
                type: 'form',
                title: 'nameinput',
                dataIndex: 'userId',
                valueType: 'select',
                fieldProps: (form: any, _innerRef: any) => {
                  return {
                    open: true,
                    options: [
                      {
                        'data-testid': 'userOption1',
                        label: '员工1',
                        value: 'user1',
                      },
                      {
                        label: '员工2',
                        value: 'user2',
                      },
                    ],
                    onChange: () => {
                      fieldPropsFn(_innerRef?.current?.data);
                    },
                  };
                },
              },
              {
                title: '操作',
                valueType: 'option',
                key: 'option',
                render: () => [
                  <a key="edit">编辑</a>,
                  <a key="delete">删除</a>,
                ],
              },
            ]}
            request={mockRequest}
            rowKey="id"
            search={false}
          />
        </>
      );
    };

    const testData = { testKey: 'testValue', anotherKey: 123 };
    const { getByTestId } = await render(
      <TestComponent
        onSet={(innerRef: any) => innerRef.current.setData(testData)}
        fieldPropsFn={fieldPropsFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByTestId('set-btn').click();
    await getByTestId('open-btn').click();

    await new Promise((resolve) => setTimeout(resolve, 500));

    const userOption1 = getByTestId('userOption1');
    await userOption1.click();

    await expect(fieldPropsFn).toHaveBeenCalledWith({
      testKey: 'testValue',
      anotherKey: 123,
    });
  });

  test('应该在不同的请求参数下正确更新 params', async () => {
    let capturedInnerRef: any;

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

    await render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await expect(capturedInnerRef?.params).toBeDefined();

    await expect(capturedInnerRef?.params).toMatchObject({
      current: 1,
      pageSize: 10,
    });
  });
});
