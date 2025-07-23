import { Button } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';

const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    fieldProps: (form, innerRef) => {
      return {
        onChange: () => {
          console.log('onchange', innerRef);
        },
      };
    },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    type: 'form',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    type: 'form',
    valueType: 'digit',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    type: 'form',
    valueType: 'text',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: () => [<a key="edit">编辑</a>, <a key="delete">删除</a>],
  },
];

const UnitTest = () => {
  const innerRef = useRef();
  return (
    <>
      <div>
        <ProTable
          rowKey="id"
          innerRef={innerRef}
          toolbar={{
            actions: [
              <Button
                key={'open'}
                onClick={() => {
                  innerRef.current?.openModal();
                }}
              >
                open
              </Button>,
              <Button
                key={'innerref'}
                onClick={() => {
                  console.log('innerRef', innerRef);
                }}
              >
                innerRef
              </Button>,
              <Button
                key={'set'}
                onClick={() => {
                  innerRef.current.setData({ hi: 4 });
                }}
              >
                set
              </Button>,
            ],
          }}
          request={() =>
            Promise.resolve({
              data: mockData,
              total: 3,
              success: true,
            })
          }
          columns={columns}
        />
      </div>
    </>
  );
};

export default UnitTest;
