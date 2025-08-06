import { ProTable } from 'react-admin-kit';
import { mockDetroy, mockRequest } from './apis';

import { getColumns } from './columns';

const Destroy = () => {
  return (
    <ProTable
      delConfirmType="modal"
      delModalConfirmProps={{
        content: '确认关闭吗？',
      }}
      delSuccessProps={{
        content: '关闭成功',
      }}
      tableAlertOption={{
        enableDelete: () => ({
          btnText: '批量关闭',
        }),
        delModalConfirmProps: {
          content: (keys) => `确认关闭${keys.length}条数据吗？`,
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
