import { useRef } from 'react';
import { Button, SchemaForm } from 'react-admin-kit';

import { Space } from 'antd';
import type { ProFormInstance } from 'react-admin-kit';

const ConventionSimple = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
    const resultElement = document.querySelector(
      '[data-testid="result-convention-simple"]',
    );
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      <Space direction="vertical" style={{ marginBottom: '20px' }}>
        <Button onClick={() => formRef.current?.resetFields()}>
          0. Initial State
        </Button>
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              userId: '2',
              userName: 'Jennifer',
            })
          }
        >
          1. Set Convention Value
        </Button>
        <Button onClick={() => formRef.current?.submit()}>2. Submit</Button>
      </Space>
      <SchemaForm
        layout="horizontal"
        onFinish={onFinish}
        formRef={formRef}
        columns={[
          {
            title: 'User',
            dataIndex: 'userId,userName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                { label: 'Jack', value: '1' },
                { label: 'Jennifer', value: '2' },
              ],
            },
          },
        ]}
        autoFocusFirstInput={false}
      />

      <div data-testid="result-convention-simple"></div>
    </div>
  );
};

export default ConventionSimple;
