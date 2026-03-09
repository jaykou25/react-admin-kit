import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import BasePaginationSelect from '../../../../react-admin-kit/src/BusinessSelectBuilder/components/BasePaginationSelect';

describe('BasePaginationSelect Component', () => {
  const mockApi = async (params) => {
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
  };

  test('搜索完了再选中后搜索项要恢原', async () => {
    const { getByTestId } = await render(
      <BasePaginationSelect
        style={{ width: '200px' }}
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    await expect.element(getByTestId('option1')).toBeInTheDocument();

    // 找到 select 的输入框
    const input = getByTestId('base-select-search').getByRole('combobox');

    // 点击输入框并输入搜索值 'option 30'
    await input.click();
    await input.fill('option 30');

    // 等待搜索结果出现并点击选项
    await expect.element(getByTestId('option30')).toBeInTheDocument();
    await getByTestId('option30').click();

    // 预期 option1 仍在文档中（搜索后）
    await expect.element(getByTestId('option1')).toBeInTheDocument();
  });

  test('搜索完了再选中后搜索项要恢原-无缓存', async () => {
    const { getByTestId } = await render(
      <BasePaginationSelect
        noCache
        style={{ width: '200px' }}
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        open
      />,
    );

    await expect.element(getByTestId('option1')).toBeInTheDocument();

    // 找到 select 的输入框
    const input = getByTestId('base-select-search').getByRole('combobox');

    // 点击输入框并输入搜索值 'option 30'
    await input.click();
    await input.fill('option 30');

    // 等待搜索结果出现并点击选项
    await expect.element(getByTestId('option30')).toBeInTheDocument();
    await getByTestId('option30').click();

    // 预期 option1 仍在文档中（搜索后）
    await expect.element(getByTestId('option1')).toBeInTheDocument();
  });

  test('滚到第2页, search 后选中再点 clear', async () => {
    const { getByText, getByTestId, container } = await render(
      <BasePaginationSelect
        style={{ width: '200px' }}
        data-testid="base-select-search"
        type="basic"
        loadFunction={mockApi}
        getPopupContainer={(trigger) => trigger}
        virtual={false}
        open
      />,
    );

    await expect.element(getByTestId('option1')).toBeInTheDocument();
    await expect.element(getByTestId('option11')).not.toBeInTheDocument();

    const popupContainer = container.querySelector('.rc-virtual-list-holder');

    // 滚到第2页
    await popupContainer?.scrollTo({
      top: popupContainer.scrollHeight - popupContainer.clientHeight,
    });

    await expect.element(getByTestId('option11')).toBeInTheDocument();
    await expect.element(getByTestId('option20')).toBeInTheDocument();

    // 找到 select 的输入框
    const input = getByTestId('base-select-search').getByRole('combobox');

    // 点击输入框并输入搜索值 'option 30'
    await input.click();
    await input.fill('option 30');

    // 等待搜索结果出现并点击选项
    await expect.element(getByTestId('option30')).toBeInTheDocument();
    await getByTestId('option30').click();

    // 点 clear
    await container.querySelector('.ant-select-clear')?.click();

    await expect.element(getByTestId('option20')).toBeInTheDocument();

    // 滚到第3页
    await popupContainer?.scrollTo({
      top: popupContainer.scrollHeight - popupContainer.clientHeight,
    });

    await expect.element(getByTestId('option30')).toBeInTheDocument();
  });
});
