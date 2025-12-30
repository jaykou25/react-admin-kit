/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('ProTable request 异常处理测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const mockColumns = [{ title: 'Title' }];
  test('request 函数抛出异常时应正确处理', async () => {
    const mockRequest = jest.fn(() =>
      Promise.reject(new Error('Network error')),
    );

    render(<ProTable columns={mockColumns} request={mockRequest} />);

    await waitFor(() => {
      expect(screen.queryAllByText('暂无数据')).toHaveLength(2);
    });
  });

  test('request 函数同步抛出异常时应正确处理', async () => {
    const mockRequest = jest.fn(() => {
      throw new Error('Synchronous error');
    });

    render(<ProTable columns={mockColumns} request={mockRequest} />);

    await waitFor(() => {
      expect(screen.queryAllByText('暂无数据')).toHaveLength(2);
    });
  });

  test('request 函数返回 rejected promise 时应正确处理', async () => {
    const mockRequest = jest.fn(() =>
      Promise.reject({
        message: 'API error',
        status: 500,
      }),
    );

    render(<ProTable columns={mockColumns} request={mockRequest} />);

    await waitFor(() => {
      expect(screen.queryAllByText('暂无数据')).toHaveLength(2);
    });
  });
});
