/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FieldPropsSetDemo from './index';

test('测试 columns 里 fieldProps 的 form 约定式赋值问题', async () => {
  // 选择一个下拉, 会给另一个下拉赋上值 (约定式的)
  render(<FieldPropsSetDemo />);

  const select = screen.getByTestId('targetOption');
  await userEvent.click(select.firstChild);

  // 期望是选中的状态
  const resultOption = screen.getByTestId('resultOption');

  // 判断它有 ant-select-item-option-selected 类名
  expect(resultOption).toHaveClass('ant-select-item-option-selected');
});
