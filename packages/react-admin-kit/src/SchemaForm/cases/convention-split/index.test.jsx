/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('ConventionSplit 集成测试', () => {
  it('1. 约定式赋值后，组件正确显示', async () => {
    const { container } = render(<Demo />);
    const setValueButton = screen.getByText('1. 约定式赋值');
    fireEvent.click(setValueButton);

    const valueElement = screen.getByTestId('comp-value');
    expect(valueElement).toHaveTextContent('1');

    const nameElement = screen.getByTestId('comp-name');
    expect(nameElement).toHaveTextContent('Jennifer');
  });

  it('2. 提交后，onFinish 返回正确的值', async () => {
    render(<Demo />);

    // 1. 点击赋值按钮
    const setValueButton = screen.getByText('1. 约定式赋值');
    fireEvent.click(setValueButton);

    // 2. 点击提交按钮
    const submitButton = screen.getByText('2. 提交');
    fireEvent.click(submitButton);

    // 3. 验证结果
    await waitFor(() => {
      const resultElement = screen.getByTestId('result-split');
      expect(resultElement.textContent).toContain(
        JSON.stringify(
          {
            id: '1',
            name: 'Jennifer',
          },
          null,
          2,
        ),
      );
    });
  });
});
