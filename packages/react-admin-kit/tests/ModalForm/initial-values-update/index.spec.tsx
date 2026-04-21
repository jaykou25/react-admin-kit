import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import InitialValuesUpdateDemo from './index';

test('当 initialValues 更新后，打开弹窗应该显示新的值', async () => {
  const { getByTestId, getByText, getByLabelText, rerender } = await render(
    <InitialValuesUpdateDemo
      initialValues={{ username: 'user1', email: 'user1@example.com' }}
    />,
  );

  await getByTestId('open-btn').click();
  await expect(getByLabelText(/Username/)).toHaveValue('user1');
  await getByTestId('cancel').click();

  await rerender(
    <InitialValuesUpdateDemo
      initialValues={{ username: 'user2', email: 'user2@example.com' }}
      title="Test Modal"
    />,
  );

  await getByTestId('open-btn').click();
  await new Promise((resolve) => setTimeout(resolve, 100));
  await expect(getByLabelText(/Username/)).toHaveValue('user2');
});
