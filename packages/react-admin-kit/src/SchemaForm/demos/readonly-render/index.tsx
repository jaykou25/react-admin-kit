import { useRef, useState } from 'react';
import { SchemaForm, ProFormInstance, Button } from 'react-admin-kit';
import { columns } from './columns';
import { Space } from 'antd';

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <div>
      <Space direction="vertical">
        <Button
          onClick={() => {
            formRef.current?.setFieldsValue({
              name: undefined,
              hobbies: undefined,
              id: undefined,
            });
          }}
        >
          0. 初始状态
        </Button>
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              name: 'Jack',
              hobbies: 'Music',
              id: 6,
            })
          }
        >
          1. 请求接口赋值
        </Button>
      </Space>

      <SchemaForm
        name="demo-readonly-render"
        style={{ marginTop: '20px' }}
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 12 }}
        labelCol={{ span: 9 }}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Demo;
