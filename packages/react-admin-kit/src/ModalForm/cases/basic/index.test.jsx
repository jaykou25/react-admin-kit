/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Basic from './index';
import { isModalClosing } from '../utils';

describe('ModalForm Basic 集成测试', () => {
  const user = userEvent.setup();

  it('0. 初始状态', () => {
    render(<Basic />);

    expect(screen.queryByText('基本表单')).not.toBeInTheDocument();
  });

  it('1. 能正常打开弹窗，关闭弹窗，再次打开弹窗', async () => {
    const { container } = render(<Basic />);
    // 打开弹窗
    await user.click(screen.getByTestId('open'));
    expect(screen.getByText('基本表单')).toBeInTheDocument();

    // 关闭弹窗
    await user.click(container.querySelector('button.ant-modal-close'));

    expect(isModalClosing(container)).toBe(true);

    // 再次打开弹窗
    await user.click(screen.getByTestId('open'));
    expect(screen.getByText('基本表单')).toBeInTheDocument();
    expect(isModalClosing(container)).toBe(false);
  });

  it('2. 打开弹窗，什么都不输入，点确认触发表单校验', async () => {
    render(<Basic />);

    await user.click(screen.getByTestId('open'));

    // 点击确认按钮
    await user.click(screen.getByRole('button', { name: /确认|OK|Submit/i }));

    // 校验错误提示出现
    await waitFor(() => {
      const error = document.querySelector('.ant-form-item-explain-error');
      expect(error).toBeInTheDocument();
    });
  });

  it('3. 输入用户名后点确认，弹窗关闭并收到表单值', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<Basic />);

    await user.click(screen.getByTestId('open'));

    // 输入用户名
    await user.type(screen.getByLabelText(/用户名/), 'testuser');

    // 点击确认按钮
    await user.click(screen.getByRole('button', { name: /确认|OK|Submit/i }));

    // 弹窗关闭
    expect(isModalClosing(container)).toBe(true);

    // 表单值被打印
    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        values: expect.objectContaining({ username: 'testuser' }),
      }),
    );
    logSpy.mockRestore();
  });
});
