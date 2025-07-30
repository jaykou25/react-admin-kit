import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

const SearchConfig = () => {
  return (
    <ProTable
      name="用户"
      search={{
        layout: 'horizontal',
        labelWrap: true,
        defaultCollapsed: false,
        span: 8,
      }}
      columns={getColumns()}
      request={mockRequest}
      bordered
      // 仅用于在文档示例中区分 name
      modalFormProps={{
        formProps: {
          name: 'search-config',
        },
      }}
    />
  );
};

export default SearchConfig;
