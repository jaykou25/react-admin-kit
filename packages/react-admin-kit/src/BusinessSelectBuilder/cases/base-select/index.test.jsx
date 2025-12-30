/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import BaseSelect from '../../components/BaseSelect';
import { clearSelectCache } from '../../index';
import { useState } from 'react';
import { Button } from 'antd';
import { setGlobal } from '../../../utils';

describe('BaseSelect Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    clearSelectCache();
    jest.clearAllMocks();
  });

  it('renders basic select component', async () => {
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
      <BaseSelect
        data-testid="base-select-basic"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );
    expect(screen.getByTestId('base-select-basic')).toBeInTheDocument();

    // 等待数据加载完成后再检查选项
    await screen.findByText('Option 3');
    expect(screen.queryByText('Option 3')).toBeInTheDocument();
    expect(mockApi).toHaveBeenCalledTimes(1);
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
        <BaseSelect
          data-testid="base-select-basic"
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
        />
        <BaseSelect
          data-testid="base-select-basic2"
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          open
        />
      </div>,
    );
    expect(screen.getByTestId('base-select-basic')).toBeInTheDocument();
    expect(screen.getByTestId('base-select-basic2')).toBeInTheDocument();

    expect(mockApi).toHaveBeenCalledTimes(1);
  });

  it('renders no-cache select component', () => {
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
        <BaseSelect
          data-testid="base-select-no-cache"
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          noCache
          open
        />
        <BaseSelect
          data-testid="base-select-no-cache2"
          type="basic"
          loadFunction={mockApi}
          getPopupContainer={(trigger) => trigger}
          noCache
          open
        />
      </div>,
    );
    expect(screen.getByTestId('base-select-no-cache')).toBeInTheDocument();
    expect(screen.getByTestId('base-select-no-cache2')).toBeInTheDocument();

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
      <BaseSelect
        data-testid="base-select-query-params"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
        queryParams={{ name: 1 }}
      />,
    );
    expect(screen.getByTestId('base-select-query-params')).toBeInTheDocument();

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
          <BaseSelect
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
      <BaseSelect
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
      <BaseSelect
        data-testid="base-select-custom-props"
        type="basic"
        loadFunction={mock}
        getPopupContainer={(trigger) => trigger}
        open
        fieldNames={{ value: 'id', label: 'name' }}
        onLoad={onLoad}
        noCache
      />,
    );

    await waitFor(() => {
      expect(onLoad).toHaveBeenCalledTimes(1);
    });
  });

  it('onLoad call once on cached componnets', async () => {
    const onLoad = jest.fn();

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

    setGlobal('@@selectData', {
      basic: [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
      ],
    });

    setGlobal('@@selectDataIsStart', { basic: false });
    setGlobal('@@selectDataTotal', { basic: 2 });

    await render(
      <div>
        <BaseSelect
          type="basic"
          loadFunction={mock}
          getPopupContainer={(trigger) => trigger}
          open
          fieldNames={{ value: 'id', label: 'name' }}
          onLoad={onLoad}
        />
      </div>,
    );

    expect(mock).toHaveBeenCalledTimes(0);
    expect(onLoad).toHaveBeenCalledTimes(1);
  });

  it('onLoad call once on cached componnets-并发', async () => {
    const onLoad = jest.fn();
    const onLoad2 = jest.fn();

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
    await render(
      <div>
        <BaseSelect
          type="basic"
          loadFunction={mock}
          getPopupContainer={(trigger) => trigger}
          open
          fieldNames={{ value: 'id', label: 'name' }}
          onLoad={onLoad}
        />
        <BaseSelect
          type="basic"
          loadFunction={mock}
          getPopupContainer={(trigger) => trigger}
          open
          fieldNames={{ value: 'id', label: 'name' }}
          onLoad={onLoad2}
        />
      </div>,
    );

    await screen.findAllByText('Option 2');

    expect(onLoad).toHaveBeenCalledTimes(1);
    expect(onLoad2).toHaveBeenCalledTimes(1);
  });

  it('with default search', async () => {
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

    await render(
      <BaseSelect
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    // 等待选项加载完成
    await screen.findByText('Option 3');

    const input = screen
      .getByTestId('base-select-search')
      .querySelector('input');

    await user.type(input, 'option 2');

    expect(screen.queryByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });

  it('with search filedNames', async () => {
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
      <BaseSelect
        data-testid="base-select-search-fieldNames"
        type="basic"
        loadFunction={mock}
        getPopupContainer={(trigger) => trigger}
        open
        fieldNames={{ value: 'id', label: 'name' }}
      />,
    );

    // 等待选项加载完成
    await screen.findByText('Option 2');

    const input = screen
      .getByTestId('base-select-search-fieldNames')
      .querySelector('input');

    await user.type(input, 'option 2');

    expect(screen.queryByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});
