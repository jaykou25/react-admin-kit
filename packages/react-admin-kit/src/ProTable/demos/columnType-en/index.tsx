import { message } from 'antd';
import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { delelteRecord } from '../basic/apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: 'Create',
  edit: 'Edit',
  read: 'View',
};

const Demo = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <ProTable
      name="User"
      defaultHideInSearch={true}
      columns={getColumns()}
      request={(params) => {
        console.log('Request params', params);
        return Promise.resolve({
          data: [
            {
              id: 1,
              username: 'User1',
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
            Create
          </Button>,
        ],
      }}
      rowSelection={{}}
      delFunction={delelteRecord}
      onFinish={(values, type) => {
        console.log({ values });
        // Mock request
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);

            message.success(FORM_TYPE_MAP[type] + ' successful');
            actionRef.current?.reload();
          }, 1000);
        });
      }}
      // Only used to distinguish name in documentation examples
      modalFormProps={{
        formProps: {
          name: 'column-type',
        },
      }}
    />
  );
};

export default Demo;
