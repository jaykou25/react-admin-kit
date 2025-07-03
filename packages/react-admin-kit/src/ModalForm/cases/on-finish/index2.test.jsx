/**
 * @jest-environment jsdom
 */
import { render, screen, act, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

// todo: 这个测试块放在 on-finish/index.test.jsx 中就会报错。也就是说 2，3放在一起就会报错，不知道什么原因。所以这边把它拆成单独文件
describe('ModalForm onFinish 集成测试', () => {
  it('3. onFinish 为异步且异常时，ok 按钮 loading 状态能正确关闭', async () => {
    const onFinish = jest.fn(
      () =>
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('finish error')), 1000);
        }),
    );
    const user = userEvent.setup();
    render(
      <Demo
        onFinish={onFinish}
        onClick={(innerRef) => innerRef.current.openModal()}
      />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));
    expect(await screen.findByText('Test Modal')).toBeInTheDocument();

    // 输入用户名
    await user.type(screen.getByLabelText('Username'), 'Jerry');

    // 点击 ok
    let okBtn = screen.getByTestId('ok');
    act(() => {
      user
        .click(okBtn)
        .then(() => {
          okBtn = screen.getByTestId('ok');

          expect(okBtn).toHaveClass('ant-btn-loading');
        })
        .then(() => {
          waitFor(
            () => {
              expect(okBtn).not.toHaveClass('ant-btn-loading');
            },
            { timeout: 1200 },
          );
        });
    });
  });
});
