import { useState } from 'react';
import BasePaginationSelect from '../../../../packages/react-admin-kit/src/BusinessSelectBuilder/components/BasePaginationSelect';

const Demo = () => {
  const [query, setQuery] = useState({ type: undefined });

  const mockApi = async (params) => {
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
  };

  return (
    <div>
      <button data-testid="setquery" onClick={() => setQuery({ type: 5 })}>
        set
      </button>
      <BasePaginationSelect
        style={{ width: 200 }}
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

export default Demo;
