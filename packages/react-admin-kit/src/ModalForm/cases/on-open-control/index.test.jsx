/**
 * @jest-environment jsdom
 */
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OnOpenControlDemo from './index';
import { isModalHidden, isModalShowing } from '../utils';

describe('ModalForm onOpen 控制集成测试', () => {
  it('1. 点击按钮能打开并触发 onOpen 回调', async () => {
    const onOpen = jest.fn();
    const user = userEvent.setup();
    const { container } = render(<OnOpenControlDemo onOpen={onOpen} />);

    // 初始弹窗未打开
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(isModalHidden(container)).toBe(true);

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));
    expect(isModalShowing(container)).toBe(true);

    expect(onOpen).toHaveBeenCalledWith(
      'new',
      expect.anything(),
      expect.anything(),
    );
  });

  it('2. onOpen 为异步函数时，ok 按钮 loading 状态正确', async () => {
    let resolveFn;
    const onOpen = jest.fn(
      () =>
        new Promise((resolve) => {
          resolveFn = resolve;
          setTimeout(resolve, 1000);
        }),
    );
    const user = userEvent.setup();
    const { container } = render(
      <OnOpenControlDemo onOpen={onOpen} title="Test2" />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));

    expect(screen.getByText('Test2')).toBeInTheDocument();
    expect(isModalShowing(container)).toBe(true);

    act(() => {
      // ok 按钮应为 loading 状态
      const okBtn = screen.getByTestId('ok');
      expect(okBtn).toHaveClass('ant-btn-loading');

      // 1秒后 loading 消失
      new Promise((r) => setTimeout(r, 1100)).then(() => {
        expect(okBtn).not.toHaveClass('ant-btn-loading');
      });
    });
  });

  it('3. onOpen 为异步函数且抛出异常时，ok 按钮 loading 状态能正确关闭', async () => {
    const onOpen = jest.fn(
      () =>
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('open error')), 500);
        }),
    );
    const user = userEvent.setup();
    const { container } = render(
      <OnOpenControlDemo onOpen={onOpen} title="Test3" />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));

    expect(screen.getByText('Test3')).toBeInTheDocument();
    expect(isModalShowing(container)).toBe(true);

    // ok 按钮应为 loading 状态
    const okBtn = screen.getByTestId('ok');
    expect(okBtn).toHaveClass('ant-btn-loading');

    // 0.6秒后 loading 状态应关闭
    new Promise((r) => setTimeout(r, 600)).then(() => {
      expect(okBtn).not.toHaveClass('ant-btn-loading');
    });
  });
});
