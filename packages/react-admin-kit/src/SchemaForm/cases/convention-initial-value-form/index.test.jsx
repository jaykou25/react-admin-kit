/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm convention-init-value-form 集成测试', () => {
  // 初始化用户事件
  const user = userEvent.setup();

  describe('表单值展示', () => {
    it('应该正确显示初始值', () => {
      render(<Demo />);

      // 验证初始值显示
      expect(screen.getByTestId('display-value')).toHaveTextContent('1');
      expect(screen.getByTestId('display-label')).toHaveTextContent('Jennifer');
    });
  });

  describe('表单操作', () => {
    it('设置字段值后应该更新显示', async () => {
      render(<Demo />);

      // 点击设置字段值按钮
      await user.click(screen.getByTestId('set-fields-btn'));

      // 验证新值显示
      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent('John');
      });
    });

    it('重置后应该恢复初始值', async () => {
      render(<Demo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-fields-btn'));

      // 然后重置
      await user.click(screen.getByTestId('reset-btn'));

      // 验证值恢复
      await waitFor(() => {
        expect(screen.getByTestId('display-value')).toHaveTextContent('1');
        expect(screen.getByTestId('display-label')).toHaveTextContent(
          'Jennifer',
        );
      });
    });
  });

  describe('表单提交', () => {
    it('提交后应该返回正确的表单值', async () => {
      render(<Demo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-fields-btn'));

      // 然后重置
      await user.click(screen.getByTestId('reset-btn'));

      // 点击提交按钮
      await user.click(screen.getByTestId('submit-btn'));

      // 验证提交结果
      await waitFor(() => {
        const result = screen.getByTestId('form-submit-result');
        expect(JSON.parse(result.textContent || '{}')).toEqual({
          id: '1',
          name: 'Jennifer',
        });
      });
    });
  });
});
