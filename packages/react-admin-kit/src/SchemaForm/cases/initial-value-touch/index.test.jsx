/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TouchDemo from './';

test('测试 SchemaForm 有初始值时是否 touch 问题', async () => {
  const touchHandleFn = jest.fn();
  render(<TouchDemo touchHandle={touchHandleFn} />);

  const btn = screen.getByText('是否touch');
  await userEvent.click(btn);

  expect(touchHandleFn).toHaveBeenCalledWith(false);
});
