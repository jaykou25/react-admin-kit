/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ConventionTripleNestDemo from './index';

describe('SchemaForm 三层嵌套约定式表单测试', () => {
  const user = userEvent.setup();

  describe('表单初始状态', () => {
    it('应正确显示所有层级的初始值', () => {
      render(<ConventionTripleNestDemo />);

      // 验证三层字段都显示
      expect(screen.getByTestId('display-label')).toHaveTextContent(
        'Level 1-A',
      );
      expect(screen.getByTestId('display-label2')).toHaveTextContent(
        'Level 2-A',
      );
      expect(screen.getByTestId('display-label3')).toHaveTextContent(
        'Level 3-A',
      );
    });
  });

  describe('表单交互操作', () => {
    it('设置第一层新值后,应隐藏第二层和第三层', async () => {
      render(<ConventionTripleNestDemo />);

      // 点击设置值按钮
      await user.click(screen.getByTestId('set-value-btn'));

      // 验证第一层更新
      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent(
          'Level 1-B',
        );
      });

      // 验证第二、三层隐藏
      expect(screen.queryByTestId('display-label2')).not.toBeInTheDocument();
      expect(screen.queryByTestId('display-label3')).not.toBeInTheDocument();
    });

    it('重置后应恢复所有层级的显示', async () => {
      render(<ConventionTripleNestDemo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-value-btn'));
      // 再重置
      await user.click(screen.getByTestId('reset-btn'));

      // 验证所有层级恢复显示
      await waitFor(() => {
        expect(screen.getByTestId('display-label')).toHaveTextContent(
          'Level 1-A',
        );
        expect(screen.getByTestId('display-label2')).toHaveTextContent(
          'Level 2-A',
        );
        expect(screen.getByTestId('display-label3')).toHaveTextContent(
          'Level 3-A',
        );
      });
    });
  });

  describe('表单提交', () => {
    it('初始状态提交时应包含所有层级的值', async () => {
      render(<ConventionTripleNestDemo />);

      // 点击提交
      await user.click(screen.getByTestId('submit-btn'));

      // 验证提交结果包含所有层级
      await waitFor(() => {
        const result = screen.getByTestId('convention-triple-nest-result');
        expect(JSON.parse(result.textContent || '{}')).toEqual({
          level1Id: '1',
          level1Name: 'Level 1-A',
          level2Id: '2',
          level2Name: 'Level 2-A',
          level3Id: '3',
          level3Name: 'Level 3-A',
        });
      });
    });

    it('设置新值后提交应只包含第一层的值', async () => {
      render(<ConventionTripleNestDemo />);

      // 设置新值后提交
      await user.click(screen.getByTestId('set-value-btn'));
      await user.click(screen.getByTestId('submit-btn'));

      // 验证提交结果只包含第一层
      await waitFor(() => {
        const result = screen.getByTestId('convention-triple-nest-result');
        expect(JSON.parse(result.textContent || '{}')).toEqual({
          level1Id: '2',
          level1Name: 'Level 1-B',
        });
      });
    });
  });
});
