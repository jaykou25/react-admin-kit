/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('ProForm 内嵌 SchemaForm innerRef 联动测试', () => {
  const user = userEvent.setup();

  it('选择员工1时部门输入框应禁用', async () => {
    render(<Demo />);

    // 选择员工1
    const user1Option = screen.getByTestId('user1');
    await user.click(user1Option);

    // 等待并验证部门输入框状态
    await waitFor(() => {
      const deptInput = screen.getByLabelText('部门');

      expect(deptInput).toBeDisabled();
    });

    // 等待并验证部门输入框的值
    await waitFor(() => {
      const deptInput = screen.getByLabelText('部门');
      expect(deptInput).toHaveValue('部门A');
    });
  });

  it('选择员工2时部门输入框应可用', async () => {
    render(<Demo />);

    // 选择员工1
    const user1Option = screen.getByTestId('user1');
    await user.click(user1Option);

    // 选择员工2
    const user2Option = screen.getByTestId('user2');
    await user.click(user2Option);

    // 等待并验证部门输入框状态
    await waitFor(() => {
      const deptInput = screen.getByLabelText('部门');
      expect(deptInput).toBeEnabled();
    });

    // 等待并验证部门输入框的值
    await waitFor(() => {
      const deptInput = screen.getByLabelText('部门');
      expect(deptInput).toHaveValue('部门B');
    });
  });
});
