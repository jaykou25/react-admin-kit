import { ProTable } from 'react-admin-kit';
import { mockDetroy, mockRequest } from './apis';

import { getColumns } from './columns';

const Destroy = () => {
  return (
    <ProTable
      confirmModelType="modal"
      confirmModalProps={{ title: '确定关闭吗?' }}
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
      delFunction={mockDetroy}
      rowSelection={{}}
    />
  );
};

export default Destroy;
