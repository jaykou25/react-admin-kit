import { Button, message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { delelteRecord, mockRequest } from '../basic/apis';

import { getColumns } from './columns';

const FormLayout = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any) => {
    console.log({ values });
    // 模拟请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success('操作成功');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <ProTable
      name="用户"
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
            新增
          </Button>,
        ],
      }}
      rowSelection={{}}
      delFunction={delelteRecord}
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
