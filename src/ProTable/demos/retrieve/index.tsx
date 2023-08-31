import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

const Retrieve = () => {
  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Retrieve;
