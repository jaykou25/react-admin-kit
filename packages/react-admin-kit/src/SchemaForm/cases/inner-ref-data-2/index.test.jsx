/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm innerRefData 集成测试2', () => {
  const user = userEvent.setup();

  it('赋值后能取到值', async () => {
    const onFinish = jest.fn();
    const fieldPropsFn = jest.fn();

    render(
      <Demo
        onFinish={onFinish}
        onSet={(innerRef) => {
          innerRef.current.setData({ test: '1' });
        }}
        fieldPropsFn={fieldPropsFn}
      />,
    );

    await user.click(screen.getByTestId('set-btn'));

    // 1. 模拟用户选择员工1
    const userOption1 = await screen.findByTestId('userOption1');
    await user.click(userOption1);

    // 提交表单
    await user.click(screen.getByTestId('submit-btn'));

    expect(onFinish).toHaveBeenCalledWith({ userId: 'user1' });

    expect(fieldPropsFn).toHaveBeenCalledWith({ test: '1' });
  });
});
