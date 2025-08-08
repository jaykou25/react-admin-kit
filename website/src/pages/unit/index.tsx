import Demo from '../../../../packages/react-admin-kit/src/BusinessSelectBuilder/cases/default-props';
import BaseSelect from '../../../../packages/react-admin-kit/src/BusinessSelectBuilder/components/BasePaginationSelect';
import { clearSelectCache, LinkButton } from 'react-admin-kit';

const mockApi = async (params) => {
  const { current = 1, searchValue = '' } = params || {};
  console.log('query', { current, searchValue });

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

const UnitTest = () => {
  return (
    <>
      <div>
        <LinkButton onClick={() => clearSelectCache()}>clear</LinkButton>
        <BaseSelect
          data-testid="base-select-basic"
          virtual={false}
          type="unit"
          loadFunction={mockApi}
          open
          getPopupContainer={(trigger) => trigger}
          style={{ width: '200px' }}
        />
      </div>
    </>
  );
};

export default UnitTest;
