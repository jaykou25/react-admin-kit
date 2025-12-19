import { ProTable } from 'react-admin-kit';
import { getColumns } from './columns';
import { mockRequest } from '../mock-api';

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
