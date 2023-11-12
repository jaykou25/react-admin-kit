import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { mockAdd, mockDetroy, mockRequest, mockUpdate } from './apis';

import { message } from 'antd';
import { getColumns } from './columns';

const Destroy = () => {
  const innerRef = useRef<InnerRefType>(null);
  const actionRef = useRef<ActionRefType>(null);

  return (
    <ProTable
      confirmModelType="modal"
      confirmModalProps={{ title: '确定关闭吗?' }}
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
            新增
          </Button>,
        ],
      }}
      onFinish={async (values, formType, formData) => {
        if (formType === 'new') {
          await mockAdd(values);
          message.success('新建成功!');
          actionRef.current?.reload();
        }

        if (formType === 'edit') {
          await mockUpdate({ ...values, id: formData.id });
          message.success('更新成功!');
          actionRef.current?.reload();
        }
      }}
      delFunction={mockDetroy}
      rowSelection={{}}
      tableAlertOption={{
        deleteProps: {
          btnText: '批量关闭',
          title: (n) => `确定关闭${n}条数据吗?`,
        },
      }}
    />
  );
};

export default Destroy;
