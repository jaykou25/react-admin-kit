/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import GroupConventionDemo from './index';

describe('GroupConventionDemo 集成测试', () => {
  const user = userEvent.setup();

  describe('初始值展示', () => {
    it('应正确显示初始值', () => {
      render(<GroupConventionDemo />);

      // DisplayComponent 显示约定式转换的 label 值
      expect(screen.getByTestId('display-label')).toHaveTextContent('Alice');
      expect(screen.getByTestId('display-value')).toHaveTextContent('1');
      expect(screen.getByTestId('display-label2')).toHaveTextContent('HR');
      expect(screen.getByTestId('display-value2')).toHaveTextContent('10');
    });
  });

  describe('表单操作', () => {
    it('设置字段值后应更新显示', async () => {
      render(<GroupConventionDemo />);

      // 点击设置字段值按钮，更新为新值
      await user.click(screen.getByTestId('set-fields-btn'));

      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent('Bob');
        expect(screen.getByTestId('display-value')).toHaveTextContent('2');
        expect(screen.getByTestId('display-label2')).toHaveTextContent('IT');
        expect(screen.getByTestId('display-value2')).toHaveTextContent('20');
      });
    });

    it('重置后应恢复初始值', async () => {
      render(<GroupConventionDemo />);

      // 设置新值
      await user.click(screen.getByTestId('set-fields-btn'));
      // 点击重置按钮恢复初始值
      await user.click(screen.getByTestId('reset-btn'));

      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent('Alice');
        expect(screen.getByTestId('display-value')).toHaveTextContent('1');
        expect(screen.getByTestId('display-label2')).toHaveTextContent('HR');
        expect(screen.getByTestId('display-value2')).toHaveTextContent('10');
      });
    });
  });

  describe('表单提交', () => {
    it('提交后应返回正确的嵌套结构和约定式转换数据', async () => {
      render(<GroupConventionDemo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-fields-btn'));
      // 再提交表单
      await user.click(screen.getByTestId('submit-btn'));

      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('form-submit-result').textContent || '{}',
        );
        // 提交返回的值为原始数据（未经过转换）
        expect(result).toEqual({
          id: '2',
          name: 'Bob',
          deptId: '20',
          deptName: 'IT',
        });
      });
    });
  });
});
