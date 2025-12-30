/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import BasePaginationSelect from '../../components/BasePaginationSelect';
import { clearSelectCache } from '../../index';
import { setGlobal } from '../../../utils';
import { useState } from 'react';
import { Button } from 'antd';

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

describe('BasePaginationSelect Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
    clearSelectCache();
  });

  it('basic onChange', async () => {
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

    await render(<Demo result={result} />);

    // 等待选项
    await screen.findByText('Page Option 1');

    await user.click(screen.getByTestId('option2'));

    expect(result.val).toBe(2);
    expect(result.option).toEqual({
      value: 2,
      label: `Page Option 2`,
      'data-testid': `option2`,
    });
  });

  it('renders basic pagination select component', async () => {
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

    await screen.findByText('Page Option 1');

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

    await screen.findByText('Page Option 11');
    expect(screen.queryByText('Page Option 11')).toBeInTheDocument();
    expect(screen.queryByText('Page Option 20')).toBeInTheDocument();
    expect(screen.queryByText('Page Option 21')).not.toBeInTheDocument();

    // 模拟滚动到底部
    fireEvent.scroll(popupContainer, {
      target: {
        scrollTop: popupContainer.scrollHeight - popupContainer.clientHeight,
      },
    });

    await screen.findByText('Page Option 21');
    expect(screen.queryByText('Page Option 21')).toBeInTheDocument();
    expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
  });

  it('renders multiple basic select component only query once', async () => {
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

  it('renders multiple no cached select component', async () => {
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

  it('renders query params select component', () => {
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

  it('queryParams refetch', async () => {
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
          <Button data-testid="setquery" onClick={() => setQuery({ type: 5 })}>
            set
          </Button>
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

    await screen.findByText('Option 3');
    expect(screen.queryByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 3')).toBeInTheDocument();

    await user.click(screen.queryByTestId('setquery'));

    await screen.findByText('Option 5');
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Option 5')).toBeInTheDocument();
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

    await screen.findByText('Option 2');

    expect(screen.queryByText('Option 2')).toBeInTheDocument();
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

    await screen.findByText('Page Option 20');

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

    await screen.findAllByText('Page Option 2');

    expect(onLoad).toHaveBeenCalledTimes(1);
    expect(onLoad2).toHaveBeenCalledTimes(1);
  });

  it('with default search', async () => {
    await render(
      <BasePaginationSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    await user.type(input, 'page option 30');

    // 等待选项加载完成
    await screen.findByText('Page Option 30');

    expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
  });

  it('search 后选中', async () => {
    await render(
      <BasePaginationSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    await user.type(input, 'page option 30');

    // 等待选项加载完成
    await screen.findByText('Page Option 30');

    expect(screen.queryByText('Page Option 30')).toBeInTheDocument();

    // 选中
    user.click(screen.getByTestId('option30'));

    // 等待选项加载完成
    await screen.findByText('Page Option 1');

    expect(screen.queryByText('Page Option 1')).toBeInTheDocument();
  });

  it('search 后选中 - 无缓存', async () => {
    await render(
      <BasePaginationSelect
        noCache
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    await user.type(input, 'page option 30');

    // 等待选项加载完成
    await screen.findByText('Page Option 30');

    expect(screen.queryByText('Page Option 30')).toBeInTheDocument();

    // 选中
    user.click(screen.getByTestId('option30'));

    // 等待选项加载完成
    await screen.findByText('Page Option 1');

    expect(screen.queryByText('Page Option 1')).toBeInTheDocument();
  });

  it('滚到第2页, search 后选中再点 clear', async () => {
    const { container } = await render(
      <BasePaginationSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        virtual={false}
        open
      />,
    );

    await screen.findByText('Page Option 1');

    expect(screen.queryByText('Page Option 10')).toBeInTheDocument();
    expect(screen.queryByText('Page Option 11')).not.toBeInTheDocument();

    const popupContainer = container.querySelector('.rc-virtual-list-holder');

    // 模拟滚动到底部
    fireEvent.scroll(popupContainer, {
      target: {
        scrollTop: popupContainer.scrollHeight - popupContainer.clientHeight,
      },
    });

    await screen.findByText('Page Option 11');

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    await user.type(input, 'page option 30');

    // 等待选项加载完成
    await screen.findByText('Page Option 30');

    expect(screen.queryByText('Page Option 30')).toBeInTheDocument();

    // 选中
    user.click(screen.getByTestId('option30'));

    // 点 clear
    user.click(container.querySelector('.ant-select-clear'));

    // 等待选项加载完成
    await screen.findByText('Page Option 20');

    // 模拟滚动到底部
    fireEvent.scroll(popupContainer, {
      target: {
        scrollTop: popupContainer.scrollHeight - popupContainer.clientHeight,
      },
    });

    await screen.findByText('Page Option 30');
    expect(screen.queryByText('Page Option 30')).toBeInTheDocument();
  });
});
