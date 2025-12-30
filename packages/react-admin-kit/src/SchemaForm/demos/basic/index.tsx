import { useRef } from 'react';
import { ProFormInstance, SchemaForm } from 'react-admin-kit';

import { Button } from 'antd';
import { columns } from './columns';

const Basic = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        name="basic"
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
        initialValues={{ gender: '男' }}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          重置
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default Basic;
