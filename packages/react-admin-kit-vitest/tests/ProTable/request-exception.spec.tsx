import { describe, expect, test, vi } from 'vitest';
import ProTable from 'react-admin-kit/ProTable';
import { render } from 'vitest-browser-react';

describe('ProTable request 异常处理测试', () => {
  const mockColumns = [{ title: 'Title' }];

  test('request 函数抛出异常时应正确处理', async () => {
    const mockRequest = vi.fn(() => Promise.reject(new Error('Network error')));

    const { getByText } = await render(
      <ProTable columns={mockColumns} request={mockRequest} />,
    );

    expect(getByText('暂无数据')).toHaveLength(2);
  });

  test('request 函数同步抛出异常时应正确处理', async () => {
    const mockRequest = vi.fn(() => {
      throw new Error('Synchronous error');
    });

    const { getByText } = await render(
      <ProTable columns={mockColumns} request={mockRequest} />,
    );

    expect(getByText('暂无数据')).toHaveLength(2);
  });

  test('request 函数返回 rejected promise 时应正确处理', async () => {
    const mockRequest = vi.fn(() =>
      Promise.reject({
        message: 'API error',
        status: 500,
      }),
    );

    const { getByText } = await render(
      <ProTable columns={mockColumns} request={mockRequest} />,
    );

    expect(getByText('暂无数据')).toHaveLength(2);
  });
});
