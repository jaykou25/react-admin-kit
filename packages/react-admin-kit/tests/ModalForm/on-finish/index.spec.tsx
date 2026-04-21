import { render } from 'vitest-browser-react';
import Demo from './index';
import { describe, expect, test, vi } from 'vitest';

describe('ModalForm onFinish 集成测试', () => {
  test('1. onFinish 能收到三个参数', async () => {
    const onFinish = vi.fn();

    const { getByTestId, getByText, getByLabelText } = await render(
      <Demo
        onFinish={onFinish}
        onClick={(innerRef) =>
          innerRef.current.openModal('new', { username: 'new' })
        }
      />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    await expect(getByText('Test Modal')).toBeInTheDocument();

    // 输入用户名
    await getByLabelText('Username').fill('Jack');

    // 点击 ok
    await getByTestId('ok').click();

    // onFinish 应收到三个参数
    await expect(onFinish).toHaveBeenCalledWith({ username: 'Jack' }, 'new', {
      username: 'new',
    });
  });

  test('2. onFinish 为异步时，ok 按钮 loading 状态正确', async () => {
    const onFinish = vi.fn(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 1000);
        }),
    );

    const { container, getByTestId, getByText } = await render(
      <Demo
        onFinish={onFinish}
        onClick={(innerRef) =>
          innerRef.current.openModal('new', { username: 'jack' })
        }
      />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    await expect(getByText('Test Modal')).toBeInTheDocument();

    // 点击 ok
    await getByTestId('ok').click();
    const okBtn = await getByTestId('ok').element();

    await expect(okBtn.classList.contains('ant-btn-loading')).toBe(true);

    // 等待2s
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await expect(getByText('Test Modal')).not.toBeInTheDocument();
  });

  test('3. onFinish 为异步且异常时，ok 按钮 loading 状态能正确关闭', async () => {
    const onFinish = vi.fn(
      () =>
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('finish error')), 1000);
        }),
    );

    const { getByTestId, getByText } = await render(
      <Demo
        onFinish={onFinish}
        onClick={(innerRef) => innerRef.current.openModal()}
      />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    await expect(getByText('Test Modal')).toBeInTheDocument();

    // 输入用户名
    await getByTestId('username').fill('testuser');

    // 点击 OK 按钮
    await getByTestId('ok').click();
    const okBtn = await getByTestId('ok').element();

    expect(okBtn.classList.contains('ant-btn-loading')).toBe(true);

    // 等待异步操作完成后，验证 loading 类消失
    await expect
      .poll(async () => {
        const okBtn = await getByTestId('ok').element();
        return okBtn.classList.contains('ant-btn-loading');
      })
      .toBe(false);
  });
});
