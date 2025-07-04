/**
 * @jest-environment jsdom
 */

/**
 * 提示词
 * 给./index.tsx 组件生成测试用例
 * 检查 justifyContent 属性是否正确
 * 检查提交按钮是否是 loading 状态
 * 检查重置按钮是否是 danger 状态
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Demo from './index';

describe('Submitter 属性', () => {
  it('正确传递 submitter 属性到 SchemaForm', async () => {
    const { container } = render(<Demo />);

    // submitter-case 的 div 存在
    const div = container.querySelector('.submitter-case');
    expect(div).toBeInTheDocument();

    // 检查 justifyContent 样式
    await (() => {
      expect(div).toHaveStyle('justify-content: end');
    });

    // 检查提交按钮的 loading 状态
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toHaveClass('ant-btn-loading');

    // 检查重置按钮的 danger 状态
    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toHaveClass('ant-btn-dangerous');
  });
});
