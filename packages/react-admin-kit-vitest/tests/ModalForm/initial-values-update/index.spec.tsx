import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import InitialValuesUpdateDemo from './index';

describe('ModalForm initialValues 简单测试', () => {
  test('当 initialValues 更新后，打开弹窗应该显示新的值', async () => {
    const { getByTestId, getByText, getByLabelText, rerender } = await render(
      <InitialValuesUpdateDemo
        initialValues={{ username: 'user1', email: 'user1@example.com' }}
        title="Test Modal"
      />,
    );

    await getByTestId('open-btn').click();

    await expect(getByText('Test Modal')).toBeInTheDocument();

    await expect(getByLabelText(/Username/)).toHaveValue('user1');

    await getByTestId('cancel').click();

    await new Promise((resolve) => setTimeout(resolve, 300));

    await expect(getByText('Test Modal')).not.toBeVisible();

    rerender(
      <InitialValuesUpdateDemo
        initialValues={{ username: 'user2', email: 'user2@example.com' }}
        title="Test Modal"
      />,
    );

    await getByTestId('open-btn').click();

    await expect(getByText('Test Modal')).toBeVisible();

    await expect(getByLabelText(/Username/)).toHaveValue('user2');
  });
});
