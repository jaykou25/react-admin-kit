/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ClearCache from './index';
import { clearSelectCache } from '../../index';

// Mock the utils functions
jest.mock('react-admin-kit/utils', () => ({
  delGlobal: jest.fn(),
  getGlobal: jest.fn(() => []),
  setGlobal: jest.fn(),
}));

const { delGlobal: mockDelGlobal } = require('react-admin-kit/utils');

describe('BusinessSelectBuilder ClearCache', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders clear cache component', () => {
    render(<ClearCache />);

    expect(screen.getByTestId('cached-select')).toBeInTheDocument();
    expect(screen.getByTestId('clear-all')).toBeInTheDocument();
    expect(screen.getByTestId('clear-specific')).toBeInTheDocument();
  });

  it('clears all cache when clear all button is clicked', async () => {
    render(<ClearCache />);

    const clearAllButton = screen.getByTestId('clear-all');
    await user.click(clearAllButton);

    // Should call delGlobal for all cache types
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectData');
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectDataIsStart');
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectDataTotal');
  });

  it('clears specific cache when clear specific button is clicked', async () => {
    render(<ClearCache />);

    const clearSpecificButton = screen.getByTestId('clear-specific');
    await user.click(clearSpecificButton);

    // Should call delGlobal for specific type
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectData', 'cached');
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectDataIsStart', 'cached');
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectDataTotal', 'cached');
  });

  it('clearSelectCache function works without parameters', () => {
    clearSelectCache();

    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectData');
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectDataIsStart');
    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectDataTotal');
  });

  it('clearSelectCache function works with type parameter', () => {
    clearSelectCache('test-type');

    expect(mockDelGlobal).toHaveBeenCalledWith('@@selectData', 'test-type');
    expect(mockDelGlobal).toHaveBeenCalledWith(
      '@@selectDataIsStart',
      'test-type',
    );
    expect(mockDelGlobal).toHaveBeenCalledWith(
      '@@selectDataTotal',
      'test-type',
    );
  });
});
