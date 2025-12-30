import { Button, message } from 'antd';
import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import {
  mockCreate,
  mockDelete,
  mockRequest,
  mockUpdate,
} from '../mock-api/index';

import { getColumns } from './columns';

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
        pagination={{ pageSize: 5 }}
        rowSelection={{}}
        delFunction={mockDelete}
        onFinish={(values, type, formData) => {
          if (type === 'new') {
            return mockCreate(values).then(() => {
              message.success('Add success');
              actionRef.current?.reload();
            });
          }

          if (type === 'edit') {
            return mockUpdate({ ...values, id: formData.id }).then(() => {
              message.success('Edit success');
              actionRef.current?.reload();
            });
          }
        }}
      />
    </div>
  );
};

export default Basic;
