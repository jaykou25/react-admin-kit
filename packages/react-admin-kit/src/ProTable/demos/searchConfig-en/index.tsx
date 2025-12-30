import { ProTable } from 'react-admin-kit';

import { getColumns } from './columns';
import { mockRequest } from '../mock-api';

const SearchConfig = () => {
  return (
    <ProTable
      name="User"
      search={{
        layout: 'vertical',
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
