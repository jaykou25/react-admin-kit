/**
 * @jest-environment jsdom
 */

import {
  render,
  screen,
  waitFor,
  getByLabelText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Demo from './index';

describe('SchemaForm 集成测试', () => {
  // 1. 验证初始状态
  test('初始渲染时显示正确值', () => {
    const { container } = render(<Demo />);

    const radioGroup = container.querySelector('.ant-radio-group');

    // 获取所有单选按钮标签
    const radioLabels = container.querySelectorAll('label.ant-radio-wrapper');
    expect(radioLabels).toHaveLength(2);

    // 验证"否"被选中 - 通过检查父元素是否包含选中类名
    const noRadioLabel = getByLabelText(radioGroup, '否');
    const noRadioWrapper = noRadioLabel.closest('label');
    expect(noRadioWrapper).toHaveClass('ant-radio-wrapper-checked');

    // 验证"是"未被选中
    const yesRadioLabel = getByLabelText(radioGroup, '是');
    const yesRadioWrapper = yesRadioLabel.closest('label');
    expect(yesRadioWrapper).not.toHaveClass('ant-radio-wrapper-checked');

    // 验证用户选择框不存在
    expect(screen.queryByText('用户')).not.toBeInTheDocument();
  });

  // 2. 点击赋值按钮后的验证
  test('点击赋值按钮后更新表单值', async () => {
    const user = userEvent.setup();
    const { container } = render(<Demo />);

    // 点击赋值按钮
    const assignButton = screen.getByRole('button', { name: '赋 值' });
    await user.click(assignButton);

    // 验证单选按钮组状态
    await waitFor(() => {
      const radioGroup = container.querySelector('.ant-radio-group');

      // 验证"是"被选中 - 通过检查父元素是否包含选中类名
      const yesRadioLabel = getByLabelText(radioGroup, '是');
      const yesRadioWrapper = yesRadioLabel.closest('label');
      expect(yesRadioWrapper).toHaveClass('ant-radio-wrapper-checked');
    });

    // 验证用户选择框显示且值正确
    expect(screen.getByText('用户')).toBeInTheDocument();
    expect(screen.getByText('Jack')).toBeInTheDocument();
  });

  // 3. 点击重置按钮后的验证
  test('点击重置按钮后恢复初始值', async () => {
    const user = userEvent.setup();
    const { container } = render(<Demo />);

    // 先点击赋值按钮改变状态
    const assignButton = screen.getByRole('button', { name: '赋 值' });
    await user.click(assignButton);

    // 点击重置按钮
    const resetButton = screen.getByRole('button', { name: '重 置' });
    await user.click(resetButton);

    // 验证表单回到初始状态
    await waitFor(() => {
      const radioGroup = container.querySelector('.ant-radio-group');

      // 验证"否"被选中 - 通过检查父元素是否包含选中类名
      const noRadioLabel = getByLabelText(radioGroup, '否');
      const noRadioWrapper = noRadioLabel.closest('label');
      expect(noRadioWrapper).toHaveClass('ant-radio-wrapper-checked');

      expect(screen.queryByText('用户')).not.toBeInTheDocument();
    });
  });
});
