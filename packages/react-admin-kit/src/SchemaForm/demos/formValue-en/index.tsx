import { Space } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';
import type { ProFormInstance } from 'react-admin-kit';
import { Button, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const FormValueDemo = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 12 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
        initialValues={{
          tags: ['tag01', 'tag02'],
          validDate: [dayjs('2024-10-1'), dayjs('2024-10-7')],
        }}
      />
      <div style={{ textAlign: 'end' }}>
        <Space wrap>
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
