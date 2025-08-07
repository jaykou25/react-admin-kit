import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand } from '../apis';

export const BusinessSelect = BusinessSelectBuilder<'brand'>({
  apis: [
    {
      api: queryBrand,
      type: 'brand',
      pagination: true,
    },
  ],
  defaultProps: {
    placeholder: 'please choose or search',
  },
});

const Search = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        autoFocusFirstInput={false}
        columns={[
          {
            title: 'Pagination and Search',
            renderFormItem: () => <BusinessSelect type="brand" />,
          },
        ]}
      />
    </div>
  );
};

export default Search;
