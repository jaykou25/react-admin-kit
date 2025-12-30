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
              userName: 'John',
              deptId: '1',
              deptName: 'Dept A',
            },
            {
              id: 2,
              userId: 'user2',
              userName: 'Jane',
              deptId: '2',
              deptName: 'Dept B',
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
            Create
          </Button>,
        ],
      }}
      onFinish={(values) => {
        console.log('onFinish', { values, data: innerRef.current?.data });
      }}
    />
  );
}
