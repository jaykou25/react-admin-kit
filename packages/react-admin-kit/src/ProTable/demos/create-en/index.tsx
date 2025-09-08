import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { mockAdd, mockRequest } from './apis';

import { message } from 'antd';
import { getColumns } from './columns';

const Create = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
      innerRef={innerRef}
      toolbar={{
        actions: [
          <Button
            key={1}
            type="primary"
            onClick={() => innerRef.current?.openModal()}
          >
            Create
          </Button>,
        ],
      }}
      onFinish={async (values, formType) => {
        if (formType === 'new') {
          await mockAdd(values);
          message.success('Created successfully');
          actionRef.current?.reload();
        }
      }}
    />
  );
};

export default Create;
