/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConventionSimple from './index';

describe('ConventionSimple 集成测试', () => {
  it('1. 约定式赋值后，select 正确选中', async () => {
    const { container } = render(<ConventionSimple />);
    const setValueButton = screen.getByText('1. 约定式赋值');
    fireEvent.click(setValueButton);

    const selectElement = container.querySelector('.ant-select-selector');
    expect(selectElement).toHaveTextContent('Jennifer');
  });

  it('2. 提交后，onFinish 返回正确的值', async () => {
    render(<ConventionSimple />);

    // 1. 点击赋值按钮
    const setValueButton = screen.getByText('1. 约定式赋值');
    fireEvent.click(setValueButton);

    // 2. 点击提交按钮
    const submitButton = screen.getByText('2. 提交');
    fireEvent.click(submitButton);

    // 3. 验证结果
    await waitFor(() => {
      const resultElement = screen.getByTestId('result');
      expect(resultElement.textContent).toContain(
        JSON.stringify(
          {
            userId: '2',
            userName: 'Jennifer',
          },
          null,
          2,
        ),
      );
    });
  });
});
