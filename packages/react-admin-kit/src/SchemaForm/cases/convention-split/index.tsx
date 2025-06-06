import { Space } from 'antd';
import { useEffect, useRef } from 'react';
import { SchemaForm, Button } from 'react-admin-kit';
import type { ProFormInstance } from 'react-admin-kit';

const Comp = (props: any) => {
  const { value = {}, onChange } = props;

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div>
      <span data-testid="comp-value">{value.id}</span>
      <span data-testid="comp-name">{value.name}</span>
    </div>
  );
};

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
    const resultElement = document.querySelector(
      '[data-testid="result-split"]',
    );
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Button onClick={() => formRef.current?.resetFields()}>
          0. 初始状态
        </Button>
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              id: '1',
              name: 'Jennifer',
            })
          }
        >
          1. 约定式赋值
        </Button>
        <Button onClick={() => formRef.current?.submit()}>2. 提交</Button>
      </Space>

      <SchemaForm
        formRef={formRef}
        onFinish={onFinish}
        columns={[
          {
            title: 'custom',
            dataIndex: 'id,name_id,name',
            renderFormItem: () => <Comp />,
          },
        ]}
      />

      <div data-testid="result-split"></div>
    </div>
  );
};

export default Demo;
