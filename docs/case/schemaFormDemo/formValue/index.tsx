import { useRef } from 'react';
import { Button, ProFormInstance, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Space } from 'antd';

const FormValueDemo = (props) => {
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

  const onFinish = (values: any) => {
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
      <SchemaForm
        grid
        colProps={{ span: 12 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
        initialValues={initialValues}
      />
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

export default FormValueDemo;
