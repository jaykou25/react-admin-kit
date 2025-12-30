import { useRef } from 'react';
import { Button, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Space } from 'antd';
import type { ProFormInstance } from 'react-admin-kit';

const ConventionSimple = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
    const resultElement = document.querySelector('[data-testid="result"]');
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      <Space direction="vertical" style={{ marginBottom: '20px' }}>
        <Button onClick={() => formRef.current?.resetFields()}>
          0. 初始状态
        </Button>
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              userId: '2',
              userName: 'Jennifer',
            })
          }
        >
          1. 约定式赋值
        </Button>
        <Button onClick={() => formRef.current?.submit()}>2. 提交</Button>
      </Space>
      <SchemaForm
        layout="horizontal"
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div data-testid="result"></div>
    </div>
  );
};

export default ConventionSimple;
