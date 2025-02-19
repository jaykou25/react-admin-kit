import { useRef } from 'react';
import { Button, ProForm, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Space } from 'antd';
import type { ProFormInstance } from 'react-admin-kit';

const ProFormValueDemo = (props) => {
  const {
    initialValues = {
      userId: '2',
      userName: '李四',
    },
  } = props;
  const formRef = useRef<ProFormInstance>();

  const setHtml = (query, vals) => {
    const ele = document.querySelector(query);
    if (ele) {
      ele.innerHTML = typeof vals === 'object' ? JSON.stringify(vals) : vals;
    }
  };

  const onFinish = async (values: any) => {
    setHtml('#onFinish', values);
  };

  return (
    <div>
      <div id="onFinish" data-testid="onFinish"></div>
      <div id="getFieldsValue" data-testid="getFieldsValue"></div>
      <div id="validateFields" data-testid="validateFields"></div>
      <div id="getFieldsFormatValue" data-testid="getFieldsFormatValue"></div>
      <div
        id="validateFieldsReturnFormatValue"
        data-testid="validateFieldsReturnFormatValue"
      ></div>
      <ProForm
        onFinish={onFinish}
        formRef={formRef}
        submitter={false}
        initialValues={initialValues}
      >
        <SchemaForm embed grid colProps={{ span: 12 }} columns={columns} />
      </ProForm>
      <div style={{ textAlign: 'end' }}>
        <Space wrap>
          <Button onClick={() => formRef.current?.submit()}>onFinish</Button>
          <Button
            onClick={() => {
              const vals = formRef.current?.getFieldsValue();
              setHtml('#getFieldsValue', vals);
            }}
          >
            getFieldsValue
          </Button>
          <Button
            onClick={() =>
              formRef.current?.validateFields().then((vals) => {
                setHtml('#validateFields', vals);
              })
            }
          >
            validateFields
          </Button>
          <Button
            onClick={() =>
              setHtml(
                '#getFieldsFormatValue',
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
                  setHtml('#validateFieldsReturnFormatValue', vals);
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

export default ProFormValueDemo;
