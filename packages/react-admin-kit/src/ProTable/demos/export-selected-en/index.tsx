import * as ExcelJS from 'exceljs';
import { ProTable, InnerRefType, LinkButton } from 'react-admin-kit';

import { getColumns } from './columns';
import { useRef } from 'react';
import { Space } from 'antd';
import { mockRequest } from '../mock-api';

const Export = () => {
  const innerRef = useRef<InnerRefType>();
  return (
    <div>
      <ProTable
        innerRef={innerRef}
        name="User"
        search={false}
        rowSelection={{}}
        tableAlertOptionRender={(
          { selectedRows, onCleanSelected },
          { cancelDom },
        ) => {
          return (
            <Space>
              <LinkButton
                onClick={() => {
                  innerRef.current?.export(selectedRows, ExcelJS);
                  onCleanSelected();
                }}
              >
                Export
              </LinkButton>
              {cancelDom}
            </Space>
          );
        }}
        columns={getColumns()}
        request={mockRequest}
        bordered
      />
    </div>
  );
};

export default Export;
