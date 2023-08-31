import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockAdd, mockRequest, mockUpdate } from './apis';

import { getColumns } from './columns';

const OnFinishDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  return (
    <div>
      <ProTable
        name="用户"
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        bordered
        search={false}
        onFinish={async (values, formType, formData) => {
          if (formType === 'new') {
            await mockAdd(values);
          }

          if (formType === 'edit') {
            await mockUpdate({ ...values, id: formData.id });
          }

          actionRef.current.reload();
        }}
      />
    </div>
  );
};

export default OnFinishDemo;
