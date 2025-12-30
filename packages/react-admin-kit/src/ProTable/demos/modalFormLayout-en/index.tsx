import { Button, message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { getColumns } from './columns';
import { mockCreate, mockDelete, mockRequest, mockUpdate } from '../mock-api';

const FormLayout = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any, type, formData) => {
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
  };

  return (
    <ProTable
      name="User"
      search={false}
      columns={getColumns()}
      innerRef={innerRef}
      actionRef={actionRef}
      request={mockRequest}
      onFinish={onFinish}
      bordered
      toolbar={{
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
      delFunction={mockDelete}
      modalFormProps={{
        formProps: {
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        },
      }}
    />
  );
};

export default FormLayout;
