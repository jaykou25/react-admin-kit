/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SchemaFormDemo from '../../demos/schemaForm';

describe('SettingProvider schemaFormSetting.validateMessages 集成测试', () => {
  it('显示自定义的必填校验消息', async () => {
    render(<SchemaFormDemo />);
    const user = userEvent.setup();

    // 直接点击提交按钮
    const submitBtn = screen.getByRole('button', { name: /提 交|Submit/i });
    await user.click(submitBtn);

    // 检查自定义校验消息
    expect(await screen.findByText(/为必填项😊/)).toBeInTheDocument();
  });
});
