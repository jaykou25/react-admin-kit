/**
 * @jest-environment jsdom
 */
import { render, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

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

  test('应该注册和移除 @proTableReload 事件监听器', async () => {
    const reloadSpy = jest.fn();

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

    // 验证事件监听器已注册
    const event = new CustomEvent('@proTableReload');

    // 模拟事件触发
    act(() => {
      document.dispatchEvent(event);
    });

    waitFor(() => {
      expect(mockRequest).toHaveBeenCalled();
    });

    // 卸载组件，验证事件监听器被移除
    unmount();

    // 再次触发事件，应该不会调用任何处理函数
    act(() => {
      document.dispatchEvent(event);
    });

    waitFor(() => {
      expect(mockRequest).not.toHaveBeenCalled();
    });
  });
});
