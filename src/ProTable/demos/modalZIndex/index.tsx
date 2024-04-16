import { Button, Drawer, message } from 'antd';
import { useRef, useState } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { delelteRecord, mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const ModalZIndex = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>打开侧边弹窗</Button>
      <Drawer
        width={700}
        zIndex={1000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ProTable
          name="用户"
          columns={getColumns()}
          request={mockRequest}
          search={false}
          bordered
          innerRef={innerRef}
          actionRef={actionRef}
          rowSelection={{}}
          delFunction={delelteRecord}
          onFinish={(values, type) => {
            console.log({ values });
            // 模拟请求
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(true);

                message.success(FORM_TYPE_MAP[type] + '成功');
                actionRef.current?.reload();
              }, 1000);
            });
          }}
        />
      </Drawer>
    </div>
  );
};

export default ModalZIndex;
