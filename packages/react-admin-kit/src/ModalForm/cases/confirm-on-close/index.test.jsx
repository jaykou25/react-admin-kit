/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';
import { isModalClosing } from '../utils';

describe('ModalForm confirm-on-close 集成测试', () => {
  const user = userEvent.setup();

  it('取消表单：填写用户名后取消表单有确认弹窗', async () => {
    const { container } = render(<Demo />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 输入用户名
    await user.type(screen.getByLabelText(/用户名/), 'testuser');

    // 点击确认按钮
    await user.click(screen.getByTestId('cancel'));

    // 验证确认弹窗
    expect(screen.getByText('确认关闭')).toBeInTheDocument();
  });

  it('取消表单：填写用户名后取消表单有确认弹窗- false', async () => {
    const { container } = render(<Demo confirmOnClose={false} />);

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 输入用户名
    await user.type(screen.getByLabelText(/用户名/), 'testuser');

    // 点击确认按钮
    await user.click(screen.getByTestId('cancel'));

    // 验证确认弹窗
    expect(screen.queryByText('确认关闭')).not.toBeInTheDocument();

    // 验证弹窗正在关闭
    expect(isModalClosing(container)).toBe(true);
  });

  it('取消表单：填写用户名后取消表单有确认弹窗- title', async () => {
    const { container } = render(
      <Demo
        confirmOnClose={{ title: 'confirmtest', content: 'confirmcontent' }}
      />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open'));

    // 输入用户名
    await user.type(screen.getByLabelText(/用户名/), 'testuser');

    // 点击确认按钮
    await user.click(screen.getByTestId('cancel'));

    // 验证确认弹窗
    expect(screen.getByText('confirmtest')).toBeInTheDocument();
    expect(screen.getByText('confirmcontent')).toBeInTheDocument();

    // 验证弹窗正在关闭
    expect(isModalClosing(container)).toBe(false);
  });
});
