import { ProTable } from 'react-admin-kit';

import { getColumns } from './columns';
import { mockDelete, mockRequest } from '../mock-api';

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
      delFunction={mockDelete}
      rowSelection={{}}
    />
  );
};

export default Destroy;
