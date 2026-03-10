import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import Demo from './index';

test('BusinessSelectBuilder Default Props', async () => {
  const { getByTestId, getByText } = await render(<Demo />);

  const select = getByTestId('default-props-select');

  await expect.element(select).toBeInTheDocument();

  // 验证 size: large
  expect(select.element().classList.contains('ant-select-lg')).toBe(true);

  // 验证 placeholder: 'API Default Placeholder'
  await expect
    .element(getByText('API Default Placeholder'))
    .toBeInTheDocument();

  // 验证 disabled: true
  expect(
    select.element().querySelector('input')!.hasAttribute('disabled'),
  ).toBe(true);
});
