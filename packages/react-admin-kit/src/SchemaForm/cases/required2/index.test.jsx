/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm 必填校验测试', () => {
  const user = userEvent.setup();

  describe('表单提交校验', () => {
    it('Name 为空时提交应显示错误信息', async () => {
      render(<Demo />);

      // 点击提交按钮
      const submitButton = screen.getByText('提 交');
      await user.click(submitButton);

      // 等待并验证错误信息
      await waitFor(() => {
        // antd 的错误信息会显示在这个类名下
        const errorMessage = document.querySelector(
          '.ant-form-item-explain-error',
        );
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('请输入Name');
      });
    });

    it('填写 Name 后应能正常提交', async () => {
      render(<Demo />);

      // 填写 Name 字段
      const nameInput = screen.getByRole('textbox');
      await user.type(nameInput, 'Test User');

      // 点击提交按钮
      const submitButton = screen.getByText('提 交');
      await user.click(submitButton);

      // 验证没有错误信息
      await waitFor(() => {
        const errorMessage = document.querySelector(
          '.ant-form-item-explain-error',
        );
        expect(errorMessage).not.toBeInTheDocument();
      });
    });
  });

  describe('表单字段校验', () => {
    it('Name 字段应显示必填标记', () => {
      render(<Demo />);

      // 检查必填标记是否存在
      const requiredMark = document.querySelector('.ant-form-item-required');
      expect(requiredMark).toBeInTheDocument();
    });
  });
});
