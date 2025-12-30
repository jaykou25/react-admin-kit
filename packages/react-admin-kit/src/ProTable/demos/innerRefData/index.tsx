import { useRef } from 'react';
import { Button, InnerRefType, ProTable } from 'react-admin-kit';
import { getColumns } from './columns';

export default function () {
  const innerRef = useRef<InnerRefType>();

  return (
    <ProTable
      innerRef={innerRef}
      search={false}
      pagination={false}
      request={() =>
        Promise.resolve({
          data: [
            {
              id: 1,
              userId: 'user1',
              userName: '张三',
              deptId: '1',
              deptName: '部门A',
            },
            {
              id: 2,
              userId: 'user2',
              userName: '李四',
              deptId: '2',
              deptName: '部门B',
            },
          ],
        })
      }
      columns={getColumns()}
      toolbar={{
        actions: [
          <Button
            key={1}
            type="primary"
            onClick={() => {
              innerRef.current?.openModal('new');
            }}
          >
            新增
          </Button>,
        ],
      }}
      onFinish={(values) => {
        console.log('onFinish', { values, data: innerRef.current?.data });
      }}
    />
  );
}
