import { Button, message } from 'antd';
import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { delelteRecord, mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: 'Create',
  edit: 'Edit',
  read: 'View',
};

const Basic = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <div>
      <ProTable
        name="User"
        columns={getColumns()}
        request={mockRequest}
        bordered
        innerRef={innerRef}
        actionRef={actionRef}
        toolbar={{
          tooltip: "it's a tooltip",
          actions: [
            <Button
              key={1}
              type="primary"
              onClick={() => {
                innerRef.current?.openModal();
              }}
            >
              Create
            </Button>,
          ],
        }}
        rowSelection={{}}
        delFunction={delelteRecord}
        onFinish={(values, type) => {
          console.log({ values });
          // Mock request
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);

              message.success(FORM_TYPE_MAP[type] + ' successful');
              actionRef.current?.reload();
            }, 1000);
          });
        }}
      />
    </div>
  );
};

export default Basic;
