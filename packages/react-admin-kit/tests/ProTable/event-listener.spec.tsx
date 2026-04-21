import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';
import { describe, expect, test, vi, afterEach } from 'vitest';

// Mock data
const mockData = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
];

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
  test('应该注册和移除 @proTableReload 事件监听器', async () => {
    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: mockData,
        total: mockData.length,
      }),
    );
    const { unmount } = await render(
      <ProTable
        columns={columns}
        request={mockRequest}
        rowKey="id"
        search={false}
      />,
    );
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(mockRequest).toHaveBeenCalledTimes(1);

    const event = new CustomEvent('@proTableReload');
    document.dispatchEvent(event);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(mockRequest).toHaveBeenCalledTimes(2);

    //  卸载组件，验证事件监听器被移除
    unmount();

    const event2 = new CustomEvent('@proTableReload');
    document.dispatchEvent(event2);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(mockRequest).toHaveBeenCalledTimes(2);
  });
});
