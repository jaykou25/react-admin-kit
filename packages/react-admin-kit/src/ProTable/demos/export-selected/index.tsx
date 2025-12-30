import * as ExcelJS from 'exceljs';
import { ProTable, InnerRefType, LinkButton } from 'react-admin-kit';
import { mockRequestForExport } from './apis';

import { getColumns } from './columns';
import { useRef } from 'react';
import { Space } from 'antd';

const Export = () => {
  const innerRef = useRef<InnerRefType>();
  return (
    <div>
      <ProTable
        innerRef={innerRef}
        name="用户"
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
                导出
              </LinkButton>
              {cancelDom}
            </Space>
          );
        }}
        columns={getColumns()}
        request={mockRequestForExport}
        bordered
      />
    </div>
  );
};

export default Export;
