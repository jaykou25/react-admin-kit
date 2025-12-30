/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OnOpenAsyncDemo from './index';

describe('ProTable onOpen 异步测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const user = userEvent.setup();

  test('1. onOpen 为异步函数时，弹窗确认按钮的 loading 状态正确', async () => {
    let resolveFn;
    const onOpen = jest.fn(
      () =>
        new Promise((resolve) => {
          resolveFn = resolve;
          setTimeout(resolve, 1000);
        }),
    );

    render(<OnOpenAsyncDemo onOpen={onOpen} title="异步测试弹窗" />);

    // 等待组件渲染完成
    await waitFor(() => {
      expect(screen.getByTestId('open-new-btn')).toBeInTheDocument();
    });

    // 点击新建按钮打开弹窗
    await user.click(screen.getByTestId('open-new-btn'));

    // 等待弹窗打开
    await waitFor(() => {
      expect(screen.getByText('异步测试弹窗')).toBeInTheDocument();
    });

    // 验证 onOpen 被调用
    expect(onOpen).toHaveBeenCalledWith(
      'new',
      expect.anything(),
      expect.anything(),
    );

    // 确认按钮应为 loading 状态
    const okBtn = screen.getByTestId('ok');
    expect(okBtn).toHaveClass('ant-btn-loading');

    // 等待异步操作完成
    await waitFor(
      () => {
        expect(okBtn).not.toHaveClass('ant-btn-loading');
      },
      { timeout: 2000 },
    );
  });

  test('2. onOpen 为异步函数且抛出异常时，弹窗确认按钮的 loading 状态能正确关闭', async () => {
    const onOpen = jest.fn(
      () =>
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('异步操作失败')), 500);
        }),
    );

    render(<OnOpenAsyncDemo onOpen={onOpen} title="异常测试弹窗" />);

    // 等待组件渲染完成
    await waitFor(() => {
      expect(screen.getByTestId('open-edit-btn')).toBeInTheDocument();
    });

    // 点击编辑按钮打开弹窗
    await user.click(screen.getByTestId('open-edit-btn'));

    // 等待弹窗打开
    await waitFor(() => {
      expect(screen.getByText('异常测试弹窗')).toBeInTheDocument();
    });

    // 验证 onOpen 被调用
    expect(onOpen).toHaveBeenCalledWith(
      'edit',
      expect.anything(),
      expect.objectContaining({ id: 1, name: '张三' }),
    );

    // 确认按钮应为 loading 状态
    const okBtn = screen.getByTestId('ok');
    expect(okBtn).toHaveClass('ant-btn-loading');

    // 等待异步操作失败后 loading 状态关闭
    await waitFor(
      () => {
        expect(okBtn).not.toHaveClass('ant-btn-loading');
      },
      { timeout: 1000 },
    );
  });

  test('3. onOpen 为同步函数时，确认按钮不应有 loading 状态', async () => {
    const onOpen = jest.fn();

    render(<OnOpenAsyncDemo onOpen={onOpen} title="同步测试弹窗" />);

    // 等待组件渲染完成
    await waitFor(() => {
      expect(screen.getByTestId('open-new-btn')).toBeInTheDocument();
    });

    // 点击新建按钮打开弹窗
    await user.click(screen.getByTestId('open-new-btn'));

    // 等待弹窗打开
    await waitFor(() => {
      expect(screen.getByText('同步测试弹窗')).toBeInTheDocument();
    });

    // 验证 onOpen 被调用
    expect(onOpen).toHaveBeenCalledWith(
      'new',
      expect.anything(),
      expect.anything(),
    );

    // 确认按钮不应有 loading 状态
    const okBtn = screen.getByTestId('ok');
    expect(okBtn).not.toHaveClass('ant-btn-loading');
  });

  test('4. 不传 onOpen 时，弹窗应正常打开且确认按钮无 loading 状态', async () => {
    render(<OnOpenAsyncDemo title="无回调测试弹窗" />);

    // 等待组件渲染完成
    await waitFor(() => {
      expect(screen.getByTestId('open-new-btn')).toBeInTheDocument();
    });

    // 点击新建按钮打开弹窗
    await user.click(screen.getByTestId('open-new-btn'));

    // 等待弹窗打开
    await waitFor(() => {
      expect(screen.getByText('无回调测试弹窗')).toBeInTheDocument();
    });

    // 确认按钮不应有 loading 状态
    const okBtn = screen.getByTestId('ok');
    expect(okBtn).not.toHaveClass('ant-btn-loading');
  });

  test('5. onOpen 异步函数执行过程中可以取消弹窗', async () => {
    const onOpen = jest.fn(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 2000);
        }),
    );

    render(<OnOpenAsyncDemo onOpen={onOpen} title="取消测试弹窗" />);

    // 等待组件渲染完成
    await waitFor(() => {
      expect(screen.getByTestId('open-new-btn')).toBeInTheDocument();
    });

    // 点击新建按钮打开弹窗
    await user.click(screen.getByTestId('open-new-btn'));

    // 等待弹窗打开
    await waitFor(() => {
      expect(screen.getByText('取消测试弹窗')).toBeInTheDocument();
    });

    // 验证确认按钮为 loading 状态
    const okBtn = screen.getByTestId('ok');
    expect(okBtn).toHaveClass('ant-btn-loading');

    // 点击取消按钮
    await user.click(screen.getByTestId('cancel'));

    // 验证弹窗已关闭（检查 Modal 的 open 状态）
    await waitFor(
      () => {
        const modal = document.querySelector('.ant-modal');
        expect(modal).not.toBeVisible();
      },
      { timeout: 1000 },
    );
  });
});
