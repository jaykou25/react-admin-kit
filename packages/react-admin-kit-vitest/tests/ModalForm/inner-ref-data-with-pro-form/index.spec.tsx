import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';
import { vi } from 'vitest';

describe('ModalForm 嵌在 ProForm 中的 innerRefData 集成测试', () => {
  test('考察 innerRef 在 ProForm 和 ModalForm 中各自独立不干扰', async () => {
    const onModalFinish = vi.fn();
    const fieldPropsFn = vi.fn();
    const onProFormFinish = vi.fn();
    const proFieldPropsFn = vi.fn();

    const { getByTestId, getByLabelText } = await render(
      <Demo
        onProFormFinish={onProFormFinish}
        proFieldPropsFn={proFieldPropsFn}
        onModalFinish={onModalFinish}
        fieldPropsFn={fieldPropsFn}
        onProFormSet={(innerRef) => {
          innerRef.current.setData({ protest: '100' });
        }}
        onModalFormSet={(innerRef) => {
          innerRef.current.setData({ modaltest: '200' });
        }}
      />,
    );

    await getByTestId('pro-form-set-btn').click();

    await getByTestId('modal-form-set-btn').click();

    await getByLabelText('proform').click();

    await getByTestId('proUserOption1').click();

    await getByTestId('pro-submit-btn').click();

    await expect
      .poll(() => onProFormFinish)
      .toHaveBeenCalledWith({ proUserId: 'prouser1' });

    await expect
      .poll(() => proFieldPropsFn)
      .toHaveBeenCalledWith({ protest: '100' });

    await getByTestId('open-btn').click();

    await expect(getByLabelText('nameinput')).toBeVisible();

    await getByLabelText('nameinput').click();

    await getByTestId('userOption1').click();

    await getByTestId('modal-submit-btn').click();

    await expect
      .poll(() => onModalFinish)
      .toHaveBeenCalledWith({ userId: 'user1' }, 'new', {});

    await expect
      .poll(() => fieldPropsFn)
      .toHaveBeenCalledWith({ modaltest: '200' });
  });
});
