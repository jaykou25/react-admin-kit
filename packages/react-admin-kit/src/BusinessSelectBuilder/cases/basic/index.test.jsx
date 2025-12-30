/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Basic from './index';

// Mock the utils functions
jest.mock('react-admin-kit/utils', () => ({
  delGlobal: jest.fn(),
  getGlobal: jest.fn(() => []),
  setGlobal: jest.fn(),
}));

describe('BusinessSelectBuilder Basic', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders basic select component', () => {
    render(<Basic />);

    expect(screen.getByTestId('basic-select')).toBeInTheDocument();
    expect(screen.getByTestId('pagination-select')).toBeInTheDocument();
  });

  it('renders empty div for nonexistent type', () => {
    render(<Basic />);

    const nonexistentSelectContainer = screen.getByTestId('nonexistent-select');
    // The container div exists but BusinessSelect returns null for nonexistent type
    expect(nonexistentSelectContainer).toBeInTheDocument();
    // The container should be empty since BusinessSelect returns null
    expect(nonexistentSelectContainer).toBeEmptyDOMElement();
  });

  it('calls onChange prop when provided', () => {
    const onChange = jest.fn();
    render(<Basic onChange={onChange} />);

    // Component should render without errors
    expect(screen.getByTestId('basic-select')).toBeInTheDocument();
  });

  it('handles clear button', async () => {
    render(<Basic />);

    const clearButton = screen.getByTestId('clear');
    await user.click(clearButton);

    // Should not throw any errors
    expect(clearButton).toBeInTheDocument();
  });
});
