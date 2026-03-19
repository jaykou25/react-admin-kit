/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import AsyncDataComponent from './index';

describe('AsyncDataComponent', () => {
  // beforeEach(() => {
  //   jest.useFakeTimers();
  // });

  // afterEach(() => {
  //   jest.useRealTimers();
  // });

  it('应该显示加载状态，然后显示异步加载的数据', async () => {
    // 准备模拟的异步函数
    const mockFetch = jest.fn(async () => {
      return new Promise((resolve) => {
        resolve([
          { id: 1, name: '数据项 1' },
          { id: 2, name: '数据项 2' },
        ]);
      });
    });

    // 渲染组件
    render(<AsyncDataComponent fetchData={mockFetch} />);

    // 验证：初始应该显示加载状态
    // expect(screen.getByText('加载中...')).toBeInTheDocument();

    // 验证：异步数据加载完成后应该显示数据
    // await act(() => {
    //   jest.advanceTimersByTime(100);
    // });

    // expect(screen.queryByText('加载中...')).not.toBeInTheDocument();
    // expect(screen.getByText('数据项 1')).toBeInTheDocument();
    // expect(screen.getByText('数据项 2')).toBeInTheDocument();

    // 上面用了 await act advanceTimersByTime 后就不需要再用 waitFor 了，因为 act 已经确保了所有相关的更新都已经处理完毕了

    await waitFor(() => {
      expect(screen.queryByText('加载中...')).not.toBeInTheDocument();
      expect(screen.getByText('数据项 1')).toBeInTheDocument();
      expect(screen.getByText('数据项 2')).toBeInTheDocument();
    });

    // 验证：fetch函数被调用一次
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
