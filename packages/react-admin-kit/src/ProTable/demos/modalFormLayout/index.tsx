import { Button } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from '../basic/apis';

import { getColumns } from './columns';

const FormLayout = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  return (
    <ProTable
      name="用户"
      search={false}
      columns={getColumns()}
      innerRef={innerRef}
      actionRef={actionRef}
      request={mockRequest}
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
            新增
          </Button>,
        ],
      }}
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
