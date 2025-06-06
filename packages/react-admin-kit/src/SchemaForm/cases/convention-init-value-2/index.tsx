import { Button, Space } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    const resultElement = document.querySelector(
      '[data-testid="result-convention-init-value-2"]',
    );
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              id: '2',
              name: 'John',
            })
          }
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
          id2: '3',
          name2: 'tom',
        }}
        columns={[
          {
            title: 'Name',
            dataIndex: 'id,name',
            valueType: 'select',
            fieldProps: {
              className: 'test-select-1',
              options: [
                { label: 'Jennifer', value: '1' },
                { label: 'John', value: '2' },
              ],
            },
          },
          {
            valueType: 'dependency',
            name: ['id,name'],
            columns(values) {
              const obj = values?.['id,name'] || {};
              console.log('dependency values', values);
              if (obj.value === '1') {
                return [
                  {
                    title: 'Name2',
                    dataIndex: 'id2,name2',
                    valueType: 'select',
                    fieldProps: {
                      className: 'test-select-2',
                      options: [
                        { label: 'tom', value: '3' },
                        { label: 'tim', value: '4' },
                      ],
                    },
                  },
                ];
              }
              return [];
            },
          },
        ]}
      />

      <div data-testid="result-convention-init-value-2"></div>
    </div>
  );
};

export default Demo;
