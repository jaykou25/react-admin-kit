import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import DefaultProps from './index';

test('applies default props from builder and api config', async () => {
  const { getByTestId, getByText } = await render(<DefaultProps />);

  const treeSelect = getByTestId('default-props-select');

  // Check if the select element exists and has proper structure
  expect(treeSelect).toBeInTheDocument();

  // 验证 size: large
  expect(treeSelect.element().classList.contains('ant-select-lg')).toBe(true);

  // 验证 placeholder: 'API Default Placeholder'
  expect(getByText('API Default Placeholder')).toBeInTheDocument();

  // 验证 disabled: true
  expect(
    treeSelect.element().querySelector('input')!.hasAttribute('disabled'),
  ).toBe(true);
});
