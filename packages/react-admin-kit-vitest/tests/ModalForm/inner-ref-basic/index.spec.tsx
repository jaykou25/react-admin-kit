import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';
import { vi } from 'vitest';

describe('ModalForm InnerRef 集成测试', () => {
  test('1. 初始状态下Modal不可见', async () => {
    const { getByText } = await render(<Demo onFinish={console} />);
    await expect(getByText('基本表单')).not.toBeInTheDocument();
  });

  test('2. 通过innerRef打开弹窗', async () => {
    const { getByText, getByTestId } = await render(
      <Demo onFinish={console} />,
    );

    // 点击open按钮，通过innerRef打开弹窗
    await getByTestId('open').click();

    // 验证弹窗已打开
    await expect(getByText('基本表单')).toBeInTheDocument();
  });

  test('3. 打开弹窗后，点击关闭按钮可以关闭弹窗', async () => {
    const { container, getByTestId, getByText } = await render(
      <Demo onFinish={console} />,
    );

    // 打开弹窗
    await getByTestId('open').click();

    // 验证弹窗已打开
    await expect(getByText('基本表单')).toBeInTheDocument();

    // 点击关闭按钮
    await getByTestId('cancel').click();
    // 等待弹窗关闭动画
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 验证弹窗正在关闭
    await expect(getByText('基本表单')).not.toBeVisible();

    // 再一次验证
    await getByTestId('open').click();
    await expect(getByText('基本表单')).toBeVisible();
  });

  test('4. 表单验证：空表单提交时显示错误信息', async () => {
    const { getByTestId, getByText } = await render(
      <Demo onFinish={console} />,
    );

    // 打开弹窗
    await getByTestId('open').click();

    // 点击确认按钮
    await getByTestId('ok').click();
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 验证错误提示出现
    await expect(getByText('请输入用户名')).toBeVisible();
  });

  test('5. 表单提交：填写用户名并提交', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByText, getByLabelText } = await render(
      <Demo onFinish={onFinish} />,
    );

    // 打开弹窗
    await getByTestId('open').click();

    await expect(getByText('基本表单')).toBeVisible();

    //  在 Modal 内操作
    await getByLabelText(/用户名/).fill('testuser');

    await getByTestId('ok').click();

    //  验证
    await expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({
        username: 'testuser',
      }),
      'new',
      expect.any(Object),
    );
  });
});
