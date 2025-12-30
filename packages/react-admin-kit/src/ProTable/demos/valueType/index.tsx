import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';
import { getColumns } from './columns';

const ValueType = () => {
  return (
    <ProTable
      cardProps={false}
      columns={getColumns()}
      request={mockRequest}
      search={false}
      pagination={false}
    />
  );
};

export default ValueType;
