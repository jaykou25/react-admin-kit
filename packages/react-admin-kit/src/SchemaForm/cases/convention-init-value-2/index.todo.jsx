/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm convention-init-value 集成测试', () => {
  it('1. 初始值显示正确', () => {
    const { container } = render(<Demo />);

    // 验证下拉框显示初始值
    const selectElement = container.querySelector('.test-select-1');
    expect(selectElement).toHaveTextContent('Jennifer');

    const selectElement2 = container.querySelector('.test-select-2');
    expect(selectElement2).toHaveTextContent('Tom');
  });

  it('2. 赋值后再重置，下拉框显示恢复正确', async () => {
    const { container } = render(<Demo />);

    // 点击 setFields 按钮赋新值
    const setButton = screen.getByText('setFields');
    fireEvent.click(setButton);

    // 验证新值是否正确
    await waitFor(() => {
      const selectElement = container.querySelector('.test-select-1');
      expect(selectElement).toHaveTextContent('John');

      // 验证该元素不存在
      const selectElement2 = container.querySelector('.test-select-2');
      expect(selectElement2).not.toBeInTheDocument();
    });

    // 点击重置按钮
    const resetButton = screen.getByText('reset');
    fireEvent.click(resetButton);

    // 验证是否恢复到初始值
    await waitFor(() => {
      const selectElement = container.querySelector('.test-select-1');
      expect(selectElement).toHaveTextContent('Jennifer');

      const selectElement2 = container.querySelector('.test-select-2');
      expect(selectElement2).toHaveTextContent('Tom');
    });
  });

  it('3. 选择新值并提交，返回值正确', async () => {
    render(<Demo />);

    // 点击 setFields 按钮设置新值
    const setButton = screen.getByText('setFields');
    fireEvent.click(setButton);

    // 点击重置按钮
    const resetButton = screen.getByText('reset');
    fireEvent.click(resetButton);

    // 点击提交按钮
    const submitButton = screen.getByText('submit');
    fireEvent.click(submitButton);

    // 验证提交结果
    await waitFor(() => {
      const resultElement = screen.getByTestId(
        'result-convention-init-value-2',
      );
      expect(resultElement.textContent).toBe(
        JSON.stringify(
          {
            id: '1',
            name: 'Jennifer',
            id2: '3',
            name2: 'Tom',
          },
          null,
          2,
        ),
      );
    });
  });
});
