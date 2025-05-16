import { SchemaForm } from 'react-admin-kit';
import BusinessSelect from '../BusinessSelect';

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
