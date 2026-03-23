import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';
import { page, userEvent } from 'vitest/browser';

describe('ModalForm confirm-on-close 集成测试', () => {
  test('1. 取消表单：填写用户名后取消表单有确认弹窗', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(<Demo />);

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeInTheDocument();

    await getByLabelText(/用户名/).fill('testuser');

    await getByTestId('cancel').click();

    await expect(getByText('表单项内容未保存')).toBeInTheDocument();
  });

  test('2. 取消表单：填写用户名后取消表单有确认弹窗- false', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(
      <Demo confirmOnClose={false} />,
    );

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeInTheDocument();

    await getByLabelText(/用户名/).fill('testuser');

    await getByTestId('cancel').click();
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 验证弹窗已关闭
    await expect(getByText('基本表单')).not.toBeVisible();
  });

  test('3. 取消表单：填写用户名后取消表单有确认弹窗 - title', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(
      <Demo
        confirmOnClose={{
          title: 'confirmtest888',
          content: 'confirmcontent',
        }}
      />,
    );

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeVisible();

    await getByLabelText(/用户名/).fill('testuser');

    await getByTestId('cancel').click();
    console.log('debug', getByText('confirmtest888'));

    await expect(getByText('confirmtest888')[0]).toBeVisible();

    await expect(getByText('confirmcontent')).toBeVisible();
  });
});
