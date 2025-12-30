import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { getColumns } from './columns';

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
      // 仅用于在文档示例中区分 name
      modalFormProps={{
        formProps: {
          name: 'column-type',
        },
      }}
    />
  );
};

export default Demo;
