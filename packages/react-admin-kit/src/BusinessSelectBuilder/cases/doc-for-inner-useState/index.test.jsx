/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AsyncDataComponent from './index';

describe('AsyncDataComponent', () => {
  const user = userEvent.setup({ delay: null });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('应该显示加载状态，然后显示异步加载的数据', async () => {
    // 准备模拟的异步函数
    const mockFetch = jest.fn(async (params) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (params && params.query === 'test') {
            resolve([
              { id: 1, name: '数据项 3' },
              { id: 2, name: '数据项 4' },
            ]);
          } else {
            resolve([
              { id: 1, name: '数据项 1' },
              { id: 2, name: '数据项 2' },
            ]);
          }
        }, 100);
      });
    });

    // 渲染组件
    render(<AsyncDataComponent fetchData={mockFetch} />);

    // 验证：初始应该显示加载状态
    expect(screen.getByText('加载中...')).toBeInTheDocument();

    // 验证：异步数据加载完成后应该显示数据
    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('加载中...')).not.toBeInTheDocument();
    expect(screen.getByText('数据项 1')).toBeInTheDocument();
    expect(screen.getByText('数据项 2')).toBeInTheDocument();

    const setBtn = screen.queryByTestId('setquery');
    await user.click(setBtn);

    // 验证：初始应该显示加载状态
    expect(screen.getByText('加载中...')).toBeInTheDocument();

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('数据项 1')).not.toBeInTheDocument();
    expect(screen.getByText('数据项 4')).toBeInTheDocument();

    // 验证：fetch函数被调用一次
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });
});
