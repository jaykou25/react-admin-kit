/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DefaultProps from './index';

// Mock the utils functions
jest.mock('react-admin-kit/utils', () => ({
  delGlobal: jest.fn(),
  getGlobal: jest.fn(() => []),
  setGlobal: jest.fn(),
}));

describe('BusinessSelectBuilder DefaultProps', () => {
  it('renders select with default props', () => {
    render(<DefaultProps />);

    expect(screen.getByTestId('default-props-select')).toBeInTheDocument();
  });

  it('applies default props from builder and api config', () => {
    render(<DefaultProps />);

    const select = screen.getByTestId('default-props-select');

    // Check if the select element exists and has proper structure
    expect(select).toBeInTheDocument();

    // 验证 size: large
    expect(select.classList.contains('ant-select-lg')).toBe(true);

    // 验证 placeholder: 'API Default Placeholder'
    expect(screen.queryByText('API Default Placeholder')).toBeInTheDocument();

    // 验证 disabled: true
    expect(select.querySelector('input').hasAttribute('disabled')).toBe(true);
  });
});
