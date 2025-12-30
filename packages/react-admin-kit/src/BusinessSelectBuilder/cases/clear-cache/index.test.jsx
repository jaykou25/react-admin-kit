/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ClearCache from './index';
import BusinessSelectBuilder, { clearSelectCache } from '../..';

const mockApi = async () => {
  return {
    data: [
      { id: 1, name: 'Cached Option 1' },
      { id: 2, name: 'Cached Option 2' },
    ],
    total: 2,
  };
};

const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      type: 'cached',
      api: mockApi,
    },
  ],
});

describe('BusinessSelectBuilder ClearCache', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('验证默认的缓存逻辑', async () => {
    render(<BusinessSelect data-testid="cached-select" type="cached" />);

    await waitFor(() => {
      expect(global['@@selectData'].cached).toEqual([
        { id: 1, name: 'Cached Option 1' },
        { id: 2, name: 'Cached Option 2' },
      ]);

      expect(global['@@selectDataIsStart'].cached).toBe(false);
      expect(global['@@selectDataTotal'].cached).toBe(2);
    });
  });

  it('clears all cache when clear all button is clicked', async () => {
    render(<BusinessSelect data-testid="cached-select" type="cached" />);

    clearSelectCache();

    await waitFor(() => {
      expect(global['@@selectData']).toBe(undefined);

      expect(global['@@selectDataIsStart']).toBe(undefined);
      expect(global['@@selectDataTotal']).toBe(undefined);
    });
  });

  it('clears specific cache when clear specific button is clicked', async () => {
    render(
      <div>
        <button
          data-testid="clearbtn"
          onClick={() => clearSelectCache('cached')}
        >
          clear
        </button>
        <BusinessSelect data-testid="cached-select" type="cached" />
      </div>,
    );

    expect(screen.queryByTestId('clearbtn')).toBeInTheDocument();
    await user.click(screen.queryByTestId('clearbtn'));

    await waitFor(() => {
      expect(global['@@selectData'].cached).toBe(undefined);

      expect(global['@@selectDataIsStart'].cached).toBe(undefined);
      expect(global['@@selectDataTotal'].cached).toBe(undefined);
    });
  });
});
