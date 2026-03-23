import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';
import { vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

describe('ModalForm innerRefData 集成测试', () => {
  test('modal 未弹开前先赋值，然后在 form 中能取到值', async () => {
    const onFinish = vi.fn();
    const fieldPropsFn = vi.fn();

    const { getByTestId } = await render(
      <Demo
        onFinish={onFinish}
        onSet={(innerRef) => {
          innerRef.current?.setData({ test: '10' });
        }}
        fieldPropsFn={fieldPropsFn}
      />,
    );

    await getByTestId('set-btn').click();

    await getByTestId('open-btn').click();

    await expect.poll(() => !!document.querySelector('.ant-modal')).toBe(true);

    const selectDropdown = document.querySelector(
      '.ant-select-selector',
    ) as HTMLElement;
    selectDropdown?.click();

    await new Promise((resolve) => setTimeout(resolve, 300));

    const userOption1 = page.getByTestId('userOption1');
    await userEvent.click(userOption1);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const submitBtn = document.querySelector(
      '[data-testid="submit-btn"]',
    ) as HTMLElement;
    submitBtn?.click();

    await expect
      .poll(() => onFinish)
      .toHaveBeenCalledWith({ userId: 'user1' }, 'new', {});

    await expect.poll(() => fieldPropsFn).toHaveBeenCalledWith({ test: '10' });
  });
});
