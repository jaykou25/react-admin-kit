import { message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: 'Create',
  edit: 'Edit',
  read: 'View',
};

const ConventionDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any, type, formData) => {
    console.log({ values, type, formData });
    // Mock request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success(FORM_TYPE_MAP[type] + ' successful');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <div>
      <ProTable
        name="User"
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        onFinish={onFinish}
        bordered
        search={false}
        pagination={false}
        modalFormProps={{
          formProps: {
            layout: 'horizontal',
            labelCol: { span: 4 },
          },
        }}
      />
    </div>
  );
};

export default ConventionDemo;
