import { ProTable } from 'react-admin-kit';
import { mockDetroy, mockRequest } from './apis';

import { getColumns } from './columns';

const Destroy = () => {
  return (
    <ProTable
      delConfirmType="modal"
      delModalConfirmProps={{
        content: 'Are you sure to close?',
      }}
      delSuccessProps={{
        content: 'Closed successfully',
      }}
      tableAlertOption={{
        enableDelete: () => ({
          btnText: 'Batch Close',
        }),
        delModalConfirmProps: {
          content: (keys) => `Are you sure to close ${keys.length} records?`,
        },
      }}
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
      delFunction={mockDetroy}
      rowSelection={{}}
    />
  );
};

export default Destroy;
