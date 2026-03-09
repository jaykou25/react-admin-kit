/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InitialValuesUpdateDemo from './index';

describe('ModalForm initialValues 简单测试', () => {
  it('当 initialValues 更新后，打开弹窗应该显示新的值', async () => {
    const user = userEvent.setup();

    // 第一次渲染
    const { rerender, container } = render(
      <InitialValuesUpdateDemo
        initialValues={{ username: 'user1', email: 'user1@example.com' }}
        title="Test Modal"
      />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));
    await waitFor(() =>
      expect(screen.queryByText('Test Modal')).toBeInTheDocument(),
    );

    // 验证显示 user1
    expect(screen.getByDisplayValue('user1')).toBeInTheDocument();

    // 关闭弹窗
    await user.click(container.querySelector('button.ant-modal-close'));

    // 重新渲染，使用新的 initialValues
    rerender(
      <InitialValuesUpdateDemo
        initialValues={{ username: 'user2', email: 'user2@example.com' }}
        title="Test Modal"
      />,
    );

    // 再次打开弹窗
    await user.click(screen.getByTestId('open-btn'));
    await waitFor(() =>
      expect(screen.queryByText('Test Modal')).toBeInTheDocument(),
    );

    // 验证显示 user2
    await waitFor(() => {
      expect(screen.queryByDisplayValue('user2')).toBeInTheDocument();
    });
  });
});
