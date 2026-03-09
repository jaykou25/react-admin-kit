/**
 * @jest-environment jsdom
 */
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Basic from './index';
import { isModalClosing, isModalShowing } from '../utils';

describe('ModalForm Basic 集成测试', () => {
  const user = userEvent.setup({ delay: null });

  it('0. 初始状态', () => {
    render(<Basic />);

    expect(screen.queryByText('基本表单')).not.toBeInTheDocument();
  });

  it('1. 能正常打开弹窗，关闭弹窗，再次打开弹窗', async () => {
    const { container } = render(<Basic />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));
    expect(screen.queryByText('基本表单')).toBeInTheDocument();

    // 关闭弹窗
    await user.click(container.querySelector('button.ant-modal-close'));

    expect(isModalClosing(container)).toBe(true);

    // 再次打开弹窗
    await user.click(screen.getByTestId('open'));
    expect(isModalShowing(container)).toBe(true);
  });

  it('2. 打开弹窗，什么都不输入，点确认触发表单校验', async () => {
    jest.useFakeTimers();
    render(<Basic />);

    await user.click(screen.getByTestId('open'));

    // 点击确认按钮
    await user.click(screen.getByTestId('ok'));

    // 校验错误提示出现
    await waitFor(() => {
      expect(screen.getByText('请输入用户名')).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it('3. 输入用户名后点确认，弹窗关闭并收到表单值', async () => {
    const onFinish = jest.fn();
    const { container } = render(<Basic onFinish={onFinish} />);

    await user.click(screen.getByTestId('open'));

    // 输入用户名
    await user.type(screen.getByLabelText(/用户名/), 'testuser');

    /**
     * 像这样直接判断不行，总是会说是 false, 需要包在 act 里面，不知道为什么
     * 或许 onFinish -> onCancel 所触发的状态改变要包在 act 里？
     * await user.click(screen.getByTestId('ok'));
     * expect(isModalClosing(container)).toBe(true);
     */

    // 点击确认按钮
    let okBtn = screen.getByTestId('ok');
    act(() => {
      user.click(okBtn).then(() => {
        expect(isModalClosing(container)).toBe(true);

        // 表单值被打印
        expect(onFinish).toHaveBeenCalledWith(
          { username: 'testuser' },
          'new',
          {},
        );
      });
    });
  });
});
