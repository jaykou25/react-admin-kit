/**
 * @jest-environment jsdom
 */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SchemaFormDemo from './index';

describe('SettingProvider schemaFormSetting.validateMessages 集成测试', () => {
  it('显示自定义的必填校验消息', async () => {
    render(<SchemaFormDemo />);
    const user = userEvent.setup();

    // 直接点击提交按钮
    const submitBtn = screen.getByTestId('submit');

    act(() => {
      user.click(submitBtn).then(() => {
        expect(screen.getByText(/为必填项😊/)).toBeInTheDocument();
      });
    });
  });
});
