import { SchemaForm } from 'react-admin-kit';
import { BusinessSelect } from '../basic';

const Search = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        autoFocusFirstInput={false}
        columns={[
          {
            title: '分页查询',
            renderFormItem: () => <BusinessSelect type="brand" />,
          },
        ]}
      />
    </div>
  );
};

export default Search;
