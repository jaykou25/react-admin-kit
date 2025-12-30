/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('ModalForm 嵌在 ProForm 中的 innerRefData 集成测试', () => {
  const user = userEvent.setup();

  it('考察 innerRef 在 ProForm 和 ModalForm 中各自独立不干扰', async () => {
    const onModalFinish = jest.fn();
    const fieldPropsFn = jest.fn();

    const onProFormFinish = jest.fn();
    const proFieldPropsFn = jest.fn();

    render(
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

    // proform 赋值
    await user.click(screen.getByTestId('pro-form-set-btn'));

    // modalform 赋值
    await user.click(screen.getByTestId('modal-form-set-btn'));

    // proform 模拟用户选择员工1
    const proUserOption1 = await screen.findByTestId('proUserOption1');
    await user.click(proUserOption1);

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));

    // modalform 模拟用户选择员工1
    const userOption1 = await screen.findByTestId('userOption1');
    await user.click(userOption1);

    // 提交proform表单
    await user.click(screen.getByTestId('pro-submit-btn'));

    expect(onProFormFinish).toHaveBeenCalledWith({ proUserId: 'prouser1' });

    expect(proFieldPropsFn).toHaveBeenCalledWith({ protest: '100' });

    // 提交modalform表单
    await user.click(screen.getByTestId('modal-submit-btn'));

    expect(onModalFinish).toHaveBeenCalledWith({ userId: 'user1' }, 'new', {});

    expect(fieldPropsFn).toHaveBeenCalledWith({ modaltest: '200' });
  });
});
