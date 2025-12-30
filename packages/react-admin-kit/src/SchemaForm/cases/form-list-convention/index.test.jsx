/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormListConventionDemo from './index';

describe('FormList 约定式处理测试', () => {
  const user = userEvent.setup();

  describe('初始渲染', () => {
    it('应正确显示初始约定式数据', () => {
      render(<FormListConventionDemo />);

      // 验证第一个条目的显示
      const userFields = screen.getAllByTestId('display-label');
      const deptFields = screen.getAllByTestId('display-label2');

      expect(userFields[0]).toHaveTextContent('Alice');
      expect(deptFields[0]).toHaveTextContent('Dev');
    });
  });

  describe('表单操作', () => {
    it('设置值后应正确显示新的约定式数据', async () => {
      render(<FormListConventionDemo />);

      // 点击设置值按钮
      await user.click(screen.getByTestId('set-value-btn'));

      // 验证新值显示
      await waitFor(() => {
        const userFields = screen.getAllByTestId('display-label');
        const deptFields = screen.getAllByTestId('display-label2');

        // 验证第一条数据
        expect(userFields[0]).toHaveTextContent('John');
        expect(deptFields[0]).toHaveTextContent('IT');

        // 验证第二条数据
        expect(userFields[1]).toHaveTextContent('Mike');
        expect(deptFields[1]).toHaveTextContent('HR');
      });
    });

    it('重置后应恢复初始约定式数据', async () => {
      render(<FormListConventionDemo />);

      // 先设置新值
      await user.click(screen.getByTestId('set-value-btn'));
      // 再点击重置
      await user.click(screen.getByTestId('reset-btn'));

      // 验证恢复初始值
      await waitFor(() => {
        const userFields = screen.getAllByTestId('display-label');
        const deptFields = screen.getAllByTestId('display-label2');

        expect(userFields).toHaveLength(1);
        expect(userFields[0]).toHaveTextContent('Alice');
        expect(deptFields[0]).toHaveTextContent('Dev');
      });
    });
  });

  describe('表单提交', () => {
    it('提交时应返回正确的数组结构和原始数据', async () => {
      render(<FormListConventionDemo />);

      await user.click(screen.getByTestId('submit-btn'));

      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('form-result').textContent,
        );
        expect(result).toEqual({
          userList: [
            {
              userId: '1',
              userName: 'Alice',
              deptId: '10',
              deptName: 'Dev',
            },
          ],
        });
      });
    });
  });
});
