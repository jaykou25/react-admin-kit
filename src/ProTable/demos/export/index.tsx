import { ProTable } from 'react-admin-kit';
import { mockRequestForExport } from './apis';

import { getColumns } from './columns';

const Export = () => {
  return (
    <div>
      <ProTable
        noPadding
        name="用户"
        search={false}
        columns={getColumns()}
        request={mockRequestForExport}
        bordered
        rowSelection={{}}
        tableAlertOption={{ enableExport: true }}
      />
    </div>
  );
};

export default Export;
