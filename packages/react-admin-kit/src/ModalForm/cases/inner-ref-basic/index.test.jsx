/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';
import { isModalClosing } from '../utils';

describe('ModalForm InnerRef 集成测试', () => {
  const user = userEvent.setup();

  it('初始状态下Modal不可见', () => {
    render(<Demo />);
    expect(screen.queryByText('基本表单')).not.toBeInTheDocument();
  });

  it('通过innerRef打开弹窗', async () => {
    const { container } = render(<Demo />);

    // 点击open按钮，通过innerRef打开弹窗
    await user.click(screen.getByTestId('open'));

    // 验证弹窗已打开
    expect(screen.getByText('基本表单')).toBeInTheDocument();
    expect(isModalClosing(container)).toBe(false);
  });

  it('打开弹窗后，点击关闭按钮可以关闭弹窗', async () => {
    const { container } = render(<Demo />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));
    expect(screen.getByText('基本表单')).toBeInTheDocument();

    // 点击关闭按钮
    await user.click(container.querySelector('button.ant-modal-close'));

    // 验证弹窗正在关闭
    expect(isModalClosing(container)).toBe(true);

    // 再一次验证
    await user.click(screen.getByTestId('open'));
    expect(screen.getByText('基本表单')).toBeInTheDocument();
    expect(isModalClosing(container)).toBe(false);
  });

  it('表单验证：空表单提交时显示错误信息', async () => {
    render(<Demo />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 点击确认按钮
    await user.click(screen.getByTestId('ok'));

    // 验证错误提示出现
    await waitFor(() => {
      const error = document.querySelector('.ant-form-item-explain-error');
      expect(error).toBeInTheDocument();
    });
  });

  it('表单提交：填写用户名后提交成功并关闭弹窗', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<Demo />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 输入用户名
    await user.type(screen.getByLabelText(/用户名/), 'testuser');

    // 点击确认按钮
    await user.click(screen.getByTestId('ok'));

    // 验证弹窗关闭
    expect(isModalClosing(container)).toBe(true);

    // 验证表单值被正确处理
    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        values: expect.objectContaining({ username: 'testuser' }),
      }),
    );
    logSpy.mockRestore();
  });
});
