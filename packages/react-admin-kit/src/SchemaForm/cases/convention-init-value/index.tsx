import { Button, Space, Form } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log('onfinish', values);
    const resultElement = document.querySelector(
      '[data-testid="result-convention-init-value"]',
    );
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Button
          onClick={() => {
            console.log('日志', 'click');
            formRef.current?.setFieldsValue({
              id: '2',
              name: 'John',
            });
          }}
        >
          setFields
        </Button>
        <Button onClick={() => formRef.current?.resetFields()}>reset</Button>
        <Button onClick={() => formRef.current?.submit()}>submit</Button>
      </Space>

      <SchemaForm
        formRef={formRef}
        onFinish={onFinish}
        initialValues={{
          id: '1',
          name: 'Jennifer',
        }}
        columns={[
          {
            title: 'Name',
            dataIndex: 'id,name',
            valueType: 'select',
            fieldProps: {
              className: 'test-select-1',
              labelInValue: true,
              options: [
                { label: 'Jennifer', value: '1' },
                { label: 'John', value: '2' },
              ],
            },
          },
        ]}
      />

      <div data-testid="result-convention-init-value"></div>
    </div>
  );
};

export default Demo;
