/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm render 方法测试', () => {
  const user = userEvent.setup();

  describe('初始渲染', () => {
    it('应该正确显示初始空状态', () => {
      render(<Demo />);

      // 验证渲染结果为空
      expect(screen.getByTestId('render-result')).toBeEmpty();
    });
  });

  describe('设置值后的渲染', () => {
    it('调用 setFieldsValue 后应更新显示', async () => {
      render(<Demo />);

      // 点击设置值按钮
      await user.click(screen.getByTestId('set-btn'));

      // 验证 render 方法接收到的 entity 参数
      await waitFor(() => {
        // 检查渲染结果
        expect(screen.getByTestId('render-result')).toHaveTextContent('Tom');
      });
    });
  });
});
