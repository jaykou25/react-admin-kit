/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DefaultProps from './index';

describe('BusinessTreeSelectBuilder DefaultProps', () => {
  it('renders tree select with default props', () => {
    render(<DefaultProps />);

    expect(screen.getByTestId('default-props-select')).toBeInTheDocument();
  });

  it('applies default props from builder and api config', () => {
    render(<DefaultProps />);

    const treeSelect = screen.getByTestId('default-props-select');

    // Check if the select element exists and has proper structure
    expect(treeSelect).toBeInTheDocument();

    // 验证 size: large
    expect(treeSelect.classList.contains('ant-select-lg')).toBe(true);

    // 验证 placeholder: 'API Default Placeholder'
    expect(screen.queryByText('API Default Placeholder')).toBeInTheDocument();

    // 验证 disabled: true
    expect(treeSelect.querySelector('input').hasAttribute('disabled')).toBe(
      true,
    );
  });
});
