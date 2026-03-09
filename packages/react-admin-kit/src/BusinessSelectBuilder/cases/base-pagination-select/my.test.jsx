/**
 * @jest-environment jsdom
 */

import {
  act,
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useState } from 'react';
import { setGlobal } from '../../../utils';
import { clearSelectCache } from '../../index';
import BasePaginationSelect from '../../components/BasePaginationSelect';

const mockApi = jest.fn(async (params) => {
  const { current = 1, searchValue = '' } = params || {};

  return new Promise((resolve) => {
    setTimeout(() => {
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
    }, 100);
  });
});

describe('BasePaginationSelect 基础组件', () => {
  const user = userEvent.setup({ delay: null });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('基础受控', async () => {
    const Demo = ({ result }) => {
      const [value, setValue] = useState();

      return (
        <BasePaginationSelect
          type="basic"
          virtual={false}
          open
          getPopupContainer={(trigger) => trigger}
          loadFunction={mockApi}
          value={value}
          onChange={(val, option) => {
            setValue(val);
            result.val = val;
            result.option = option;
          }}
        />
      );
    };

    const result = {};

    render(<Demo result={result} />);

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Page Option 1')).toBeInTheDocument();

    const option2 = screen.queryByTestId('option2');

    fireEvent.click(option2);

    expect(result.val).toBe(2);
    expect(result.option).toEqual({
      value: 2,
      label: `Page Option 2`,
      'data-testid': `option2`,
    });
  });

  it('考察分页功能', async () => {
    const { container } = render(
      <BasePaginationSelect
        data-testid="pagination-select-basic"
        type="basic"
        virtual={false}
        open
        getPopupContainer={(trigger) => trigger}
        loadFunction={mockApi}
      />,
    );
    expect(screen.getByTestId('pagination-select-basic')).toBeInTheDocument();

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Page Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Page Option 10')).toBeInTheDocument();
    expect(screen.queryByText('Page Option 11')).not.toBeInTheDocument();

    const popupContainer = container.querySelector('.rc-virtual-list-holder');

    // 模拟滚动到底部
    fireEvent.scroll(popupContainer, {
      target: {
        scrollTop: popupContainer.scrollHeight - popupContainer.clientHeight,
      },
    });

    // 第二页
    await waitFor(() => {
      expect(screen.queryByText('Page Option 11')).toBeInTheDocument();
      expect(screen.queryByText('Page Option 20')).toBeInTheDocument();
      expect(screen.queryByText('Page Option 21')).not.toBeInTheDocument();
    });

    // 模拟滚动到底部
    fireEvent.scroll(popupContainer, {
      target: {
        scrollTop: popupContainer.scrollHeight - popupContainer.clientHeight,
      },
    });

    // 第三页
    await waitFor(() => {
      expect(screen.queryByText('Page Option 21')).toBeInTheDocument();
      expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
      expect(screen.queryByText('Page Option 31')).not.toBeInTheDocument();
    });
  });

  it('渲染多个组件只调用一次 API', async () => {
    jest.useRealTimers();
    clearSelectCache();

    const mockApi = jest.fn(async () => {
      return new Promise((resolve) => {
        resolve({
          data: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
          ],
          total: 3,
        });
      });
    });

    render(
      <div>
        <BasePaginationSelect
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
        />
        <BasePaginationSelect
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
        />
      </div>,
    );

    expect(mockApi).toHaveBeenCalledTimes(1);
  });

  it('渲染多个非缓存组件调用两次 API', async () => {
    jest.useRealTimers();
    clearSelectCache();

    const mockApi = jest.fn(async () => {
      return new Promise((resolve) => {
        resolve({
          data: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
          ],
          total: 3,
        });
      });
    });

    render(
      <div>
        <BasePaginationSelect
          noCache
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
        />
        <BasePaginationSelect
          noCache
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
        />
      </div>,
    );

    expect(mockApi).toHaveBeenCalledTimes(2);
  });

  it('考察 queryParams 功能', () => {
    const mockApi = jest.fn(async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
            ],
            total: 3,
          });
        }, 100);
      });
    });

    render(
      <BasePaginationSelect
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
        queryParams={{ name: 1 }}
      />,
    );

    expect(mockApi).toHaveBeenCalledWith({ name: 1 });
  });

  it('考察 queryParams 变更后是否重新正确请求', async () => {
    const mockApi = jest.fn(async (params) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (params.type === 1) {
            resolve({
              data: [{ value: 1, label: 'Option 1' }],
              total: 1,
            });
          } else if (params.type === 5) {
            resolve({
              data: [{ value: 5, label: 'Option 5' }],
              total: 1,
            });
          } else {
            resolve({
              data: [
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' },
              ],
              total: 3,
            });
          }
        }, 100);
      });
    });

    const Demo = () => {
      const [query, setQuery] = useState({ type: undefined });

      return (
        <div>
          <button data-testid="setquery" onClick={() => setQuery({ type: 5 })}>
            set
          </button>
          <BasePaginationSelect
            data-testid="base-select-query-refetch"
            type="basic"
            loadFunction={mockApi}
            getPopupContainer={(trigger) => trigger}
            open
            queryParams={query}
          />
        </div>
      );
    };

    render(<Demo />);

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 3')).toBeInTheDocument();
    expect(screen.queryByText('Option 5')).not.toBeInTheDocument();

    const setQueryBtn = screen.queryByTestId('setquery');
    fireEvent.click(setQueryBtn);

    expect(mockApi).toHaveBeenCalledWith({ type: 5 });

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Option 5')).toBeInTheDocument();
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });

  it('renders custom props select component', async () => {
    const mock = jest.fn(async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              { id: 1, name: 'Option 1' },
              { id: 2, name: 'Option 2' },
            ],
            total: 2,
          });
        }, 100);
      });
    });
    render(
      <BasePaginationSelect
        data-testid="base-select-custom-props"
        type="basic"
        loadFunction={mock}
        getPopupContainer={(trigger) => trigger}
        open
        fieldNames={{ value: 'id', label: 'name' }}
      />,
    );
    expect(screen.getByTestId('base-select-custom-props')).toBeInTheDocument();

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });

  it('onLoad call once', async () => {
    const onLoad = jest.fn();

    const { container } = render(
      <BasePaginationSelect
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
        onLoad={onLoad}
        noCache
        virtual={false}
      />,
    );

    await screen.findByText('Page Option 1');

    const popupContainer = container.querySelector('.rc-virtual-list-holder');

    // 模拟滚动到底部
    fireEvent.scroll(popupContainer, {
      target: {
        scrollTop: popupContainer.scrollHeight - popupContainer.clientHeight,
      },
    });

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(onLoad).toHaveBeenCalledTimes(1);
  });

  it('onLoad call once on cached componnets', async () => {
    const onLoad = jest.fn();

    setGlobal('@@selectData', {
      basic: Array.from({ length: 10 }, (_, index) => ({
        value: index + 1,
        label: `Page Option ${index + 1}`,
      })),
    });

    setGlobal('@@selectDataIsStart', { basic: false });
    setGlobal('@@selectDataTotal', { basic: 30 });

    await render(
      <div>
        <BasePaginationSelect
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
          onLoad={onLoad}
        />
      </div>,
    );

    expect(onLoad).toHaveBeenCalledTimes(1);
  });

  it('onLoad call once on cached componnets-并发', async () => {
    const onLoad = jest.fn();
    const onLoad2 = jest.fn();

    await render(
      <div>
        <BasePaginationSelect
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
          onLoad={onLoad}
        />
        <BasePaginationSelect
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
          onLoad={onLoad2}
        />
      </div>,
    );

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(onLoad).toHaveBeenCalledTimes(1);
    expect(onLoad2).toHaveBeenCalledTimes(1);
  });

  it('with default search', async () => {
    render(
      <BasePaginationSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    fireEvent.change(input, { target: { value: 'page option 30' } });

    await waitFor(() => {
      expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
      expect(screen.queryByText('Page Option 29')).not.toBeInTheDocument();
    });
  });

  it('搜索完了再选中后', async () => {
    render(
      <BasePaginationSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.queryByText('Page Option 1')).toBeInTheDocument();

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    fireEvent.change(input, { target: { value: 'page option 30' } });

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() => {
      expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
    });

    const option = screen.queryByTestId('option30');
    expect(option).toBeInTheDocument();

    // let option;

    // await waitFor(() => {
    //   option = screen.queryByTestId('option30');
    //   expect(option).toBeInTheDocument();
    // });

    await user.click(option);

    // fireEvent.click(option);
    // expect(screen.queryByText('Page Option 1')).toBeInTheDocument();

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() => {
      expect(screen.queryByText('Page Option 1')).toBeInTheDocument();
    });
  });
});
