/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import EmbedConventionDemo from './index';

describe('SchemaForm 内嵌约定式表单测试', () => {
  const user = userEvent.setup();

  describe('初始渲染', () => {
    it('应正确显示内嵌表单的初始值', () => {
      render(<EmbedConventionDemo />);

      // 验证用户字段显示
      expect(screen.getByTestId('display-label')).toHaveTextContent('Tom');
      expect(screen.getByTestId('phone-value')).toHaveTextContent(4);

      // 验证部门字段显示
      expect(screen.getByTestId('display-label2')).toHaveTextContent('HR');
    });
  });

  describe('表单操作', () => {
    it('设置值后应正确更新显示', async () => {
      render(<EmbedConventionDemo />);

      // 点击设置值按钮
      await user.click(screen.getByTestId('set-value-btn'));

      // 验证新值显示
      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent('John');
        expect(screen.getByTestId('phone-value')).toHaveTextContent(8);
        expect(screen.getByTestId('display-label2')).toHaveTextContent('IT');
      });
    });

    it('重置后应恢复初始值', async () => {
      render(<EmbedConventionDemo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-value-btn'));
      // 再重置
      await user.click(screen.getByTestId('reset-btn'));

      // 验证值恢复
      await waitFor(() => {
        // 验证用户字段显示
        expect(screen.getByTestId('display-label')).toHaveTextContent('Tom');
        expect(screen.getByTestId('phone-value')).toHaveTextContent(4);

        // 验证部门字段显示
        expect(screen.getByTestId('display-label2')).toHaveTextContent('HR');
      });
    });
  });

  describe('表单提交', () => {
    it('提交时应返回正确的嵌套结构和约定式数据', async () => {
      render(<EmbedConventionDemo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-value-btn'));
      // 再重置
      await user.click(screen.getByTestId('reset-btn'));

      // 点击提交按钮
      await user.click(screen.getByTestId('submit-btn'));

      // 验证提交结果
      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('form-result').textContent,
        );
        expect(result).toEqual({
          baseInfo: {
            userId: '1',
            userName: 'Tom',
            phone: 4,
          },
          business: {
            deptId: '1',
            deptName: 'HR',
          },
        });
      });
    });
  });
});
