import { SchemaForm } from 'react-admin-kit';
import { Button } from 'antd';
import { getColumns } from './columns';
import { useRef, useState } from 'react';

import type { FormInstance } from 'antd';

const InitValueDemo = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={getColumns()}
        autoFocusFirstInput={false}
        initialValues={{ showPhone: 0 }}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.setFieldsValue({ showPhone: 1 })}
        >
          赋值
        </Button>
        <Button style={{ marginRight: '10px' }} onClick={() => formRef.current?.resetFields()}>
          重置
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default InitValueDemo;
