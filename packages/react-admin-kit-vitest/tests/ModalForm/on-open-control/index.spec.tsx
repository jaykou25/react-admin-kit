import { render } from 'vitest-browser-react';
import { describe, expect, test, vi } from 'vitest';
import OnOpenControlDemo from './index';

describe('ModalForm onOpen 控制集成测试', () => {
  test('1. 点击按钮能打开并触发 onOpen 回调', async () => {
    const onOpen = vi.fn();
    const { getByText, getByTestId, container } = await render(
      <OnOpenControlDemo onOpen={onOpen} />,
    );

    // 初始弹窗未打开 (通过 container.querySelector 判断)
    expect(container.querySelector('.ant-modal-title')).toBeNull();

    // 打开弹窗
    await getByTestId('open-btn').click();
    await expect(getByText('Test Modal')).toBeInTheDocument();

    expect(onOpen).toHaveBeenCalledWith(
      'new',
      expect.anything(),
      expect.anything(),
    );
  });

  test('2. onOpen 为异步函数时，ok 按钮 loading 状态正确', async () => {
    const onOpen = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        }),
    );
    const { getByTestId, getByText } = await render(
      <OnOpenControlDemo onOpen={onOpen} title="Test2" />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    await expect(getByText('Test2')).toBeInTheDocument();

    // ok 按钮应为 loading 状态
    const okBtn = await getByTestId('ok').element();
    expect(okBtn.classList.contains('ant-btn-loading')).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    await expect(okBtn.classList.contains('ant-btn-loading')).toBe(false);
  });

  test('3. onOpen 为异步函数且抛出异常时，ok 按钮 loading 状态能正确关闭', async () => {
    const onOpen = vi.fn(
      () =>
        new Promise<void>((_, reject) => {
          setTimeout(() => reject(new Error('open error')), 500);
        }),
    );
    const { getByTestId, getByText } = await render(
      <OnOpenControlDemo onOpen={onOpen} title="Test3" />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    await expect(getByText('Test3')).toBeInTheDocument();

    // ok 按钮应为 loading 状态
    const okBtn = await getByTestId('ok').element();
    expect(okBtn.classList.contains('ant-btn-loading')).toBe(true);

    // 使用 expect.poll 等待 loading 消失
    await expect
      .poll(async () => {
        const okBtn = await getByTestId('ok').element();
        return okBtn.classList.contains('ant-btn-loading');
      })
      .toBe(false);
  });
});
