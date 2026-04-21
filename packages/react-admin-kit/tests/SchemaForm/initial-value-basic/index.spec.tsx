import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Demo from './index';

describe('SchemaForm 集成测试', () => {
  // 1. 验证初始状态
  test('初始渲染时显示正确值', async () => {
    const { getByText, getByLabelText } = await render(<Demo />);

    expect(getByLabelText('否')).toBeChecked();
    expect(getByLabelText('是')).not.toBeChecked();

    // 验证用户选择框不存在
    expect(getByText('用户选择框')).not.toBeInTheDocument();
  });

  // 2. 点击赋值按钮后的验证
  test('点击赋值按钮后更新表单值', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(<Demo />);

    // 点击赋值按钮
    const assignButton = getByTestId('setbtn');
    await assignButton.click();

    expect(getByLabelText('是')).toBeChecked();

    // 验证用户选择框显示且值正确
    expect(getByText('用户选择框')).toBeInTheDocument();
    expect(getByText('Jack')).toBeInTheDocument();
  });

  // 3. 点击重置按钮后的验证
  test('点击重置按钮后恢复初始值', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(<Demo />);

    // 先点击赋值按钮改变状态
    const assignButton = getByTestId('setbtn');
    await assignButton.click();

    // 点击重置按钮
    const resetButton = getByTestId('resetbtn');
    await resetButton.click();

    // 验证表单回到初始状态
    expect(getByLabelText('否')).toBeChecked();
    expect(getByLabelText('是')).not.toBeChecked();

    // 验证用户选择框不存在
    expect(getByText('用户选择框')).not.toBeInTheDocument();
  });
});
