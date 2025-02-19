import { message } from 'antd';
import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const Basic = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <div>
      <ProTable
        columns={getColumns()}
        request={mockRequest}
        bordered
        innerRef={innerRef}
        actionRef={actionRef}
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
    </div>
  );
};

export default Basic;
