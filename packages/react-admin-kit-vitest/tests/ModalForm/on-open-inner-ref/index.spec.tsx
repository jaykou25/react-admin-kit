import { describe, expect, test, vi } from 'vitest';
import Demo from './index';
import { render } from 'vitest-browser-react';

describe('ModalForm onOpen innerRef 集成测试', () => {
  test('1. 点击按钮能打开并触发 onOpen 回调', async () => {
    const onOpen = vi.fn();
    const { getByText, getByTestId } = await render(
      <Demo
        onOpen={onOpen}
        onClick={(innerRef) =>
          innerRef.current.openModal('new', { name: 'hi' })
        }
      />,
    );

    // 初始弹窗未打开
    await expect(getByText('Test Modal')).not.toBeInTheDocument();

    // 打开弹窗
    await getByTestId('open-btn').click();

    await expect(getByText('Test Modal')).toBeInTheDocument();

    expect(onOpen).toHaveBeenCalledWith('new', expect.anything(), {
      name: 'hi',
    });
  });

  test('2. 点击按钮能打开并触发 onOpen 回调 edit', async () => {
    const onOpen = vi.fn();
    const { getByText, getByTestId } = await render(
      <Demo
        onOpen={onOpen}
        onClick={(innerRef) =>
          innerRef.current.openModal('edit', { name: 'edit' })
        }
      />,
    );

    // 初始弹窗未打开
    await expect(getByText('Test Modal')).not.toBeInTheDocument();

    // 打开弹窗
    await getByTestId('open-btn').click();
    expect(getByText('Test Modal')).toBeInTheDocument();

    expect(onOpen).toHaveBeenCalledWith('edit', expect.anything(), {
      name: 'edit',
    });
  });

  test('3. onOpen 为异步函数时，ok 按钮 loading 状态正确', async () => {
    let resolveFn;
    const onOpen = vi.fn(
      () =>
        new Promise((resolve) => {
          resolveFn = resolve;
          setTimeout(resolve, 1000);
        }),
    );

    const { getByTestId } = await render(
      <Demo
        onOpen={onOpen}
        onClick={(innerRef) => innerRef.current.openModal()}
      />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    const okBtn = getByTestId('ok');
    expect(okBtn).toHaveClass('ant-btn-loading');

    await resolveFn();
    await new Promise((r) => setTimeout(r, 200));

    await expect(okBtn).not.toHaveClass('ant-btn-loading');
  });

  test('4. onOpen 为异步函数且抛出异常时，ok 按钮 loading 状态能正确关闭', async () => {
    const onOpen = vi.fn(
      () =>
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('open error')), 500);
        }),
    );

    const { getByTestId } = await render(
      <Demo
        onOpen={onOpen}
        onClick={(innerRef) => innerRef.current.openModal()}
        title="test3"
      />,
    );

    // 打开弹窗
    await getByTestId('open-btn').click();

    const okBtn = getByTestId('ok');
    expect(okBtn).toHaveClass('ant-btn-loading');

    await new Promise((r) => setTimeout(r, 600));

    await expect(okBtn).not.toHaveClass('ant-btn-loading');
  });
});
