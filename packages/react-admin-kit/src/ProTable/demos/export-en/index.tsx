import * as ExcelJS from 'exceljs';
import { ProTable, Button, InnerRefType } from 'react-admin-kit';
import { mockRequestForExport } from './apis';

import { getColumns } from './columns';
import { useRef } from 'react';

const Export = () => {
  const innerRef = useRef<InnerRefType>();
  return (
    <div>
      <ProTable
        innerRef={innerRef}
        name="User"
        search={false}
        toolbar={{
          actions: [
            <Button
              key={'1'}
              type="primary"
              onClick={() =>
                innerRef.current?.export(innerRef.current?.dataSource, ExcelJS)
              }
            >
              Export
            </Button>,
          ],
        }}
        columns={getColumns()}
        request={mockRequestForExport}
        bordered
      />
    </div>
  );
};

export default Export;
