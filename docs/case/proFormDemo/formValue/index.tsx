import { useRef } from 'react';
import { Button, ProForm, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Space } from 'antd';
import type { ProFormInstance } from 'react-admin-kit';

const FormValueDemo = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = async (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <ProForm
        onFinish={onFinish}
        formRef={formRef}
        submitter={false}
        initialValues={{
          userId: '2',
          userName: '李四',
        }}
      >
        <SchemaForm embed grid colProps={{ span: 12 }} columns={columns} />
      </ProForm>
      <div style={{ textAlign: 'end' }}>
        <Space wrap>
          <Button
            onClick={() =>
              formRef.current?.setFieldsValue({ userId: '1', userName: '张三' })
            }
          >
            赋值
          </Button>
          <Button onClick={() => formRef.current?.submit()}>onFinish</Button>
          <Button
            onClick={() =>
              console.log('getFieldsValue:', formRef.current?.getFieldsValue())
            }
          >
            getFieldsValue
          </Button>
          <Button
            onClick={() =>
              formRef.current?.validateFields().then((vals) => {
                console.log('validateFields:', vals);
              })
            }
          >
            validateFields
          </Button>
          <Button
            onClick={() =>
              console.log(
                'getFieldsFormatValue:',
                formRef.current?.getFieldsFormatValue?.(),
              )
            }
          >
            getFieldsFormatValue
          </Button>
          <Button
            onClick={() =>
              formRef.current
                ?.validateFieldsReturnFormatValue?.()
                .then((vals) => {
                  console.log('validateFieldsReturnFormatValue:', vals);
                })
            }
          >
            validateFieldsReturnFormatValue
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default FormValueDemo;
