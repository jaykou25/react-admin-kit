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

const Scroll = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <div>
      <ProTable
        name="员工信息"
        columns={getColumns()}
        request={mockRequest}
        bordered
        innerRef={innerRef}
        actionRef={actionRef}
        toolbar={{
          tooltip: '演示列固定与横向滚动',
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
        scroll={{ x: 3000 }}
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

export default Scroll;
