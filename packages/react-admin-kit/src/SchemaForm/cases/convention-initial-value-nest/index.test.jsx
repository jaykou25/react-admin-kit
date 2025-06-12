/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ConventionNestDemo from './index';

describe('SchemaForm 嵌套约定式表单测试', () => {
  const user = userEvent.setup();

  describe('表单初始状态', () => {
    it('应正确显示初始值', () => {
      render(<ConventionNestDemo />);

      // 验证主要名称显示
      expect(screen.getByTestId('display-label')).toHaveTextContent('Jennifer');

      // 验证次要名称显示(因为初始id为'1')
      expect(screen.getByTestId('display-label2')).toHaveTextContent('Tom');
    });
  });

  describe('表单交互操作', () => {
    it('设置新值后,应更新显示并隐藏次要名称', async () => {
      render(<ConventionNestDemo />);

      // 点击设置值按钮
      await user.click(screen.getByTestId('set-value-btn'));

      // 验证主要名称更新
      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent('John');
      });

      // 验证次要名称隐藏(因为新id为'2')
      expect(screen.queryByTestId('display-label2')).not.toBeInTheDocument();
    });

    it('重置后应恢复初始状态', async () => {
      render(<ConventionNestDemo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-value-btn'));
      // 再重置
      await user.click(screen.getByTestId('reset-btn'));

      // 验证主要名称恢复
      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent(
          'Jennifer',
        );
      });

      // 验证次要名称重新显示
      expect(screen.getByTestId('display-label2')).toHaveTextContent('Tom');
    });
  });

  describe('表单提交', () => {
    it('提交时应包含所有显示字段的值', async () => {
      render(<ConventionNestDemo />);

      // 点击提交按钮
      await user.click(screen.getByTestId('submit-btn'));

      // 验证提交结果包含所有字段
      await waitFor(() => {
        const result = screen.getByTestId('convention-nest-result');
        expect(JSON.parse(result.textContent || '{}')).toEqual({
          id: '1',
          name: 'Jennifer',
          id2: '3',
          name2: 'Tom',
        });
      });
    });

    it('设置新值后提交应只包含主要名称字段', async () => {
      render(<ConventionNestDemo />);

      // 设置新值后提交
      await user.click(screen.getByTestId('set-value-btn'));
      await user.click(screen.getByTestId('submit-btn'));

      // 验证提交结果只包含主要名称
      await waitFor(() => {
        const result = screen.getByTestId('convention-nest-result');
        expect(JSON.parse(result.textContent || '{}')).toEqual({
          id: '2',
          name: 'John',
        });
      });
    });
  });
});
