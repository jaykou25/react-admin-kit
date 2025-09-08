import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { mockAdd, mockDetroy, mockRequest, mockUpdate } from './apis';

import { message } from 'antd';
import { getColumns } from './columns';

const Destroy = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <ProTable
      actionRef={actionRef}
      confirmModelType="modal"
      confirmModalProps={{ title: 'Are you sure to close?' }}
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
      onFinish={async (values, formType, formData) => {
        if (formType === 'new') {
          await mockAdd(values);
          message.success('Created successfully');
          actionRef.current?.reload();
        }

        if (formType === 'edit') {
          await mockUpdate({ ...values, id: formData.id });
          message.success('Updated successfully');
          actionRef.current?.reload();
        }
      }}
      delFunction={mockDetroy}
      rowSelection={{}}
      tableAlertOption={{
        deleteProps: {
          btnText: 'Batch Close',
          title: (n) => `Are you sure to close ${n} records?`,
        },
      }}
    />
  );
};

export default Destroy;
