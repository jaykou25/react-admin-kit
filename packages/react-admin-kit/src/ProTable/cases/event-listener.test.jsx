/**
 * @jest-environment jsdom
 */
import { render, act, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';
import { afterEach } from 'node:test';

// Mock data
const mockData = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
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
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
];

describe('ProTable 事件监听器测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  test('应该注册和移除 @proTableReload 事件监听器', async () => {
    const TestComponent = () => {
      return (
        <ProTable
          columns={columns}
          request={mockRequest}
          rowKey="id"
          search={false}
        />
      );
    };

    const { unmount } = render(<TestComponent />);

    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    // 模拟事件触发
    act(() => {
      const event = new CustomEvent('@proTableReload');
      document.dispatchEvent(event);
    });

    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalledTimes(2);
    });

    // 卸载组件，验证事件监听器被移除
    unmount();

    act(() => {
      const event = new CustomEvent('@proTableReload');
      document.dispatchEvent(event);
    });

    await waitFor(() => {
      expect(mockRequest).toHaveBeenCalledTimes(2);
    });
  });
});
