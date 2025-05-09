import { message } from 'antd';
import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { delelteRecord } from '../basic/apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const Demo = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <ProTable
      name="用户"
      defaultHideInSearch={true}
      columns={getColumns()}
      request={(params) => {
        console.log('请求参数', params);
        return Promise.resolve({
          data: [
            {
              id: 1,
              username: '用户1',
              passwor: '123456',
              createTime: 1695655397070,
            },
          ],
        });
      }}
      bordered
      innerRef={innerRef}
      actionRef={actionRef}
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
  );
};

export default Demo;
