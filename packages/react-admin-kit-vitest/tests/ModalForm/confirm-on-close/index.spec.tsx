import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';
import { page, userEvent } from 'vitest/browser';

describe('ModalForm confirm-on-close 集成测试', () => {
  test('1. ModalForm confirm-on-close', async () => {
    const { getByTestId, getByText, container } = await render(<Demo />);

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeInTheDocument();

    const modal = page.getByTestId('dialog');
    const input = modal.getByLabelText(/用户名/);
    await userEvent.fill(input, 'testuser');

    await getByTestId('cancel').click();

    const confirmTitle = container.querySelector('.ant-modal-confirm-title');
    await expect(confirmTitle).toHaveTextContent('确认关闭');
  });

  test('2. 取消表单：填写用户名后取消表单有确认弹窗- false', async () => {
    const { getByTestId, getByText, container } = await render(
      <Demo confirmOnClose={false} />,
    );

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeInTheDocument();

    const modal = page.getByTestId('dialog');
    const input = modal.getByLabelText(/用户名/);
    await userEvent.fill(input, 'testuser');

    await getByTestId('cancel').click();
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 验证弹窗已关闭
    await expect(getByText('基本表单')).not.toBeVisible();
  });

  test('3. 取消表单：填写用户名后取消表单有确认弹窗 - title', async () => {
    const { getByTestId, container } = await render(
      <Demo
        confirmOnClose={{
          title: 'confirmtest',
          content: 'confirmcontent',
        }}
      />,
    );

    await getByTestId('open').click();

    const modal = page.getByTestId('dialog');
    await expect(page.getByText('基本表单')).toBeVisible();

    const input = modal.getByLabelText(/用户名/);
    await userEvent.fill(input, 'testuser');

    const cancelBtn = modal.getByTestId('cancel');
    await userEvent.click(cancelBtn);

    await expect
      .poll(() => {
        return !!container.querySelector('.ant-modal-confirm');
      })
      .toBe(true);

    const confirmTitle = container.querySelector('.ant-modal-confirm-title');
    await expect(confirmTitle).toHaveTextContent('confirmtest');

    const confirmContent = container.querySelector(
      '.ant-modal-confirm-content',
    );
    await expect(confirmContent).toHaveTextContent('confirmcontent');
  });
});
