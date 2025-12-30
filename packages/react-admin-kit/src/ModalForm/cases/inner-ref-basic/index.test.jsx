/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';
import { isModalClosing, isModalShowing } from '../utils';

describe('ModalForm InnerRef 集成测试', () => {
  const user = userEvent.setup();

  it('1. 初始状态下Modal不可见', () => {
    render(<Demo />);

    expect(screen.queryByText('基本表单')).not.toBeInTheDocument();
  });

  it('2. 通过innerRef打开弹窗', async () => {
    const { container } = render(<Demo />);

    // 点击open按钮，通过innerRef打开弹窗
    await user.click(screen.getByTestId('open'));

    // 验证弹窗已打开
    expect(screen.queryByText('基本表单')).toBeInTheDocument();
  });

  it('3. 打开弹窗后，点击关闭按钮可以关闭弹窗', async () => {
    const { container } = render(<Demo />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 验证弹窗已打开
    expect(screen.queryByText('基本表单')).toBeInTheDocument();

    // 点击关闭按钮
    await user.click(container.querySelector('button.ant-modal-close'));

    // 验证弹窗正在关闭
    expect(isModalClosing(container)).toBe(true);

    // 再一次验证
    await user.click(screen.getByTestId('open'));

    expect(isModalShowing(container)).toBe(true);
  });

  it('4. 表单验证：空表单提交时显示错误信息', async () => {
    render(<Demo />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 点击确认按钮
    await user.click(screen.getByTestId('ok'));

    // 验证错误提示出现
    waitFor(() => {
      const error = document.querySelector('.ant-form-item-explain-error');
      expect(error).toBeInTheDocument();
    });
  });

  it('5. 表单提交：填写用户名后提交成功并关闭弹窗', async () => {
    const onFinish = jest.fn();
    const { container } = render(<Demo onFinish={onFinish} />);

    // 打开弹窗
    waitFor(() => {
      const openBtn = screen.getByTestId('open');
      user.click(openBtn);
    });

    waitFor(() => {
      const userInput = screen.getByLabelText(/用户名/);

      // 输入用户名
      user.type(userInput, 'testuser');

      // 点击确认按钮
      user.click(screen.getByTestId('ok'));

      // 验证表单值被正确处理
      expect(onFinish).toHaveBeenCalledWith({ username: 'testuser' });

      // 验证弹窗关闭
      expect(isModalClosing(container)).toBe(true);
    });
  });
});
