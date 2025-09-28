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
        name="用户"
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
              新增
            </Button>,
          ],
        }}
        pagination={{ pageSize: 5 }}
        rowSelection={{}}
        delFunction={mockDelete}
        onFinish={async (values, type, formData) => {
          if (type === 'new') {
            return mockCreate(values).then(() => {
              message.success('新增成功');
              actionRef.current?.reload();
            });
          }

          if (type === 'edit') {
            return mockUpdate({ ...values, id: formData.id }).then(() => {
              message.success('编辑成功');
              actionRef.current?.reload();
            });
          }
        }}
      />
    </div>
  );
};

export default Basic;
