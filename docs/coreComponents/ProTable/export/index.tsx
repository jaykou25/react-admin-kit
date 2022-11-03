import { ProTable } from 'react-admin-kit';
import { mockRequestForExport } from '../basic/apis';

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
        tableAlertOption={{ hideExport: false }}
      />
    </div>
  );
};

export default Export;
