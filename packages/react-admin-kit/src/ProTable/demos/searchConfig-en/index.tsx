import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

const SearchConfig = () => {
  return (
    <ProTable
      name="User"
      search={{
        layout: 'horizontal',
        labelWrap: true,
        defaultCollapsed: false,
        span: 8,
      }}
      columns={getColumns()}
      request={mockRequest}
      bordered
      // Only used to distinguish name in documentation examples
      modalFormProps={{
        formProps: {
          name: 'search-config',
        },
      }}
    />
  );
};

export default SearchConfig;
