/**
 * @jest-environment jsdom
 */

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Readonly from './index';

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}

test('测试只读模式下的 render', async () => {
  render(<Readonly />);

  // 在 schemaForm 约定式的实现里有一个 50 ms 的 setTimeout 取值
  // 如果这边不等待, formRef 拿到的是未包装的实例
  await wait(100);

  const btn = screen.getByTestId('result');
  expect(btn.innerHTML).toBe('80');

  const setbtn = screen.getByText('setFieldsBtn');
  await userEvent.click(setbtn);

  expect(btn.innerHTML).toBe('60');
});
