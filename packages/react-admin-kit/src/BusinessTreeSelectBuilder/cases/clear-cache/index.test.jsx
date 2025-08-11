/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ClearCache from './index';

describe('BusinessTreeSelectBuilder ClearCache', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders clear cache component', async () => {
    await render(<ClearCache />);

    expect(screen.getByTestId('cached-select')).toBeInTheDocument();
    expect(screen.getByTestId('clear-all')).toBeInTheDocument();
    expect(screen.getByTestId('clear-specific')).toBeInTheDocument();

    expect(global['@@treeSelectData'].cached).toEqual([
      { id: 1, name: 'Cached Option 1' },
      { id: 2, name: 'Cached Option 2' },
    ]);

    expect(global['@@treeSelectDataIsStart'].cached).toBe(false);
  });

  it('clears all cache when clear all button is clicked', async () => {
    await render(<ClearCache />);

    const clearAllButton = screen.getByTestId('clear-all');
    await user.click(clearAllButton);

    expect(global['@@treeSelectData']).toBe(undefined);

    expect(global['@@treeSelectDataIsStart']).toBe(undefined);
  });

  it('clears specific cache when clear specific button is clicked', async () => {
    await render(<ClearCache />);

    const clearSpecificButton = screen.getByTestId('clear-specific');
    await user.click(clearSpecificButton);

    waitFor(() => {
      expect(global['@@treeSelectData'].cached).toBe(undefined);

      expect(global['@@treeSelectDataIsStart'].cached).toBe(undefined);
    });
  });
});
