import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasePaginationSelect from 'rak/BusinessSelectBuilder/components/BasePaginationSelect';
import { Demo } from './Welcome';

describe('demo', () => {
  it('hi', async () => {
    const mockApi = jest.fn(async () => {
      return new Promise((resolve) => {
        resolve([
          { id: 1, name: '数据项 1' },
          { id: 2, name: '数据项 2' },
        ]);
      });
    });

    render(<Demo fetchData={mockApi} />);

    expect(screen.getByText('加载中...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('加载中...')).not.toBeInTheDocument();
      expect(screen.getByText('数据项 1')).toBeInTheDocument();
      expect(screen.getByText('数据项 2')).toBeInTheDocument();
    });
  });
});

describe('BasePaginationSelect', () => {
  it('should render greeting message', async () => {
    const mockApi = jest.fn(async (params) => {
      const { current = 1, searchValue = '' } = params || {};

      return new Promise((resolve) => {
        const allData = Array.from({ length: 30 }, (_, index) => ({
          value: index + 1,
          label: `Page Option ${index + 1}`,
          'data-testid': `option${index + 1}`,
        }));

        const filteredData = searchValue
          ? allData.filter((item) =>
              item.label.toLowerCase().includes(searchValue.toLowerCase()),
            )
          : allData;

        const pageSize = 10;
        const startIndex = (current - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        resolve({
          data: filteredData.slice(startIndex, endIndex),
          total: filteredData.length,
        });
      });
    });

    const user = userEvent.setup();

    render(
      <BasePaginationSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    await waitFor(() => {
      expect(screen.queryByText('Page Option 1')).toBeInTheDocument();
    });

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    expect(input).toBeInTheDocument();

    fireEvent.change(input!, { target: { value: 'page option 30' } });

    await waitFor(() => {
      expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
      expect(screen.queryByText('Page Option 1')).not.toBeInTheDocument();
    });

    const option = screen.queryByTestId('option30');
    expect(option).toBeInTheDocument();

    await user.click(option!);

    await waitFor(() => {
      expect(screen.queryAllByText('Page Option 30')[0]).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText('Page Option 1')).toBeInTheDocument();
    });
  });
});
