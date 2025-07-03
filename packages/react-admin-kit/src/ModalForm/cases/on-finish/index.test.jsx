/**
 * @jest-environment jsdom
 */
import { render, screen, act, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('ModalForm onFinish 集成测试', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    // jest.runOnlyPendingTimers();
  });

  it('1. onFinish 能收到三个参数', async () => {
    const onFinish = jest.fn();
    const user = userEvent.setup();
    render(
      <Demo
        onFinish={onFinish}
        onClick={(innerRef) =>
          innerRef.current.openModal('new', { username: 'new' })
        }
      />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));
    expect(await screen.findByText('Test Modal')).toBeInTheDocument();

    // 输入用户名
    await user.type(screen.getByLabelText('Username'), 'Jack');

    // 点击 ok
    await user.click(screen.getByTestId('ok'));

    // onFinish 应收到三个参数
    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith({ username: 'newJack' }, 'new', {
        username: 'new',
      });
    });
  });

  it('2. onFinish 为异步时，ok 按钮 loading 状态正确', async () => {
    const onFinish = jest.fn(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 1000);
        }),
    );

    const user = userEvent.setup();
    render(
      <Demo
        onFinish={onFinish}
        onClick={(innerRef) =>
          innerRef.current.openModal('new', { username: 'jack' })
        }
      />,
    );

    // 打开弹窗
    await user.click(screen.getByTestId('open-btn'));
    expect(await screen.findByText('Test Modal')).toBeInTheDocument();

    // 点击 ok
    const okBtn = screen.getByTestId('ok');
    act(() => {
      user
        .click(okBtn)
        .then(() => {
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

  // it('3. onFinish 为异步且异常时，ok 按钮 loading 状态能正确关闭', async () => {
  //   const onFinish = jest.fn(
  //     () =>
  //       new Promise((_, reject) => {
  //         setTimeout(() => reject(new Error('finish error')), 1000);
  //       }),
  //   );
  //   const user = userEvent.setup();
  //   render(
  //     <Demo
  //       onFinish={onFinish}
  //       onClick={(innerRef) => innerRef.current.openModal()}
  //     />,
  //   );

  //   // 打开弹窗
  //   await user.click(screen.getByTestId('open-btn'));
  //   expect(await screen.findByText('Test Modal')).toBeInTheDocument();

  //   // 输入用户名
  //   await user.type(screen.getByLabelText('Username'), 'Jerry');

  //   // 点击 ok
  //   let okBtn = screen.getByTestId('ok');
  //   act(() => {
  //     user
  //       .click(okBtn)
  //       .then(() => {
  //         okBtn = screen.getByTestId('ok');

  //         expect(okBtn).toHaveClass('ant-btn-loading');
  //       })
  //       .then(() => {
  //         waitFor(
  //           () => {
  //             expect(okBtn).not.toHaveClass('ant-btn-loading');
  //           },
  //           { timeout: 1200 },
  //         );
  //       });
  //   });
  // });
});
