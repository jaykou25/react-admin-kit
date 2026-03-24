import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Basic from './index';
import { vi } from 'vitest';

describe('ModalForm Basic 集成测试', () => {
  test('1. 初始状态下Modal不可见', async () => {
    const { getByText } = await render(<Basic />);
    await expect(getByText('基本表单')).not.toBeInTheDocument();
  });

  test('2. 能正常打开弹窗，关闭弹窗，再次打开弹窗', async () => {
    const { getByTestId, getByText } = await render(<Basic />);

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeInTheDocument();

    await getByTestId('cancel').click();
    await new Promise((resolve) => setTimeout(resolve, 300));

    await expect(getByText('基本表单')).not.toBeVisible();

    await getByTestId('open').click();
    await expect(getByText('基本表单')).toBeVisible();
  });

  test('3. 打开弹窗，什么都不输入，点确认触发表单校验', async () => {
    const { getByTestId, getByText } = await render(<Basic />);

    await getByTestId('open').click();

    await getByTestId('ok').click();
    await new Promise((resolve) => setTimeout(resolve, 300));

    await expect(getByText('请输入用户名')).toBeVisible();
  });

  test('4. 输入用户名后点确认，弹窗关闭并收到表单值', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByText, getByLabelText } = await render(
      <Basic onFinish={onFinish} />,
    );

    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeVisible();

    await getByLabelText(/用户名/).fill('testuser');

    await getByTestId('ok').click();

    await expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({
        username: 'testuser',
      }),
      'new',
      expect.any(Object),
    );
  });
});
