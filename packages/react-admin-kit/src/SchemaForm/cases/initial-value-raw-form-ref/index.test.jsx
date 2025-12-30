/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm initial-value-raw-form-ref 集成测试', () => {
  // 初始化用户事件
  const user = userEvent.setup();

  it('1. 初始值显示正确', () => {
    render(<Demo />);

    // 验证姓名字段显示初始值
    expect(screen.getByTestId('display-value')).toHaveTextContent('1');
  });

  it('设置值后应该更新显示', async () => {
    render(<Demo />);

    // 点击设置值按钮
    await user.click(screen.getByTestId('set-value-btn'));

    // 验证新值显示
    await waitFor(() => {
      expect(screen.getByTestId('display-value')).toHaveTextContent('2');
    });
  });

  it('重置后应该恢复初始值', async () => {
    render(<Demo />);

    // 先设置新值再重置
    await user.click(screen.getByTestId('set-value-btn'));
    await user.click(screen.getByTestId('reset-btn'));

    // 验证值恢复
    await waitFor(() => {
      expect(screen.getByTestId('display-value')).toHaveTextContent('1');
    });
  });

  it('3. 重置后提交，返回值正确', async () => {
    render(<Demo />);

    // 先设置新值再重置
    await user.click(screen.getByTestId('set-value-btn'));
    await user.click(screen.getByTestId('reset-btn'));
    await user.click(screen.getByTestId('submit-btn'));

    // 验证提交结果
    await waitFor(() => {
      const result = screen.getByTestId('form-result');
      expect(JSON.parse(result.textContent || '{}')).toEqual({
        id: '1',
      });
    });
  });
});
