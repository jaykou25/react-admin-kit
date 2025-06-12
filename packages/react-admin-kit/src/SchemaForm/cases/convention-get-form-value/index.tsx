import { useRef } from 'react';
import { Button, ProFormInstance, SchemaForm } from 'react-admin-kit';

import { Space } from 'antd';
import DisplayComponent from '../components/DisplayComponent';

/**
 * 表单值获取演示组件
 * 展示不同方式获取表单值的结果:
 * 1. onFinish - 提交时获取
 * 2. getFieldsValue - 获取原始值
 * 3. validateFields - 校验并获取原始值
 * 4. getFieldsFormatValue - 获取格式化值
 * 5. validateFieldsReturnFormatValue - 校验并获取格式化值
 */
const FormValueDemo = () => {
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
      {/* 结果显示区域 */}
      <div className="result-display">
        <div id="onFinish" data-testid="onFinish"></div>
        <div id="getFieldsValue" data-testid="getFieldsValue"></div>
        <div id="validateFields" data-testid="validateFields"></div>
        <div id="getFieldsFormatValue" data-testid="getFieldsFormatValue"></div>
        <div
          id="validateFieldsReturnFormatValue"
          data-testid="validateFieldsReturnFormatValue"
        ></div>
      </div>

      {/* 表单区域 */}
      <SchemaForm
        grid
        colProps={{ span: 12 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={[
          {
            title: '用户',
            dataIndex: 'userId,userName',
            renderFormItem: () => <DisplayComponent />,
          },
        ]}
        autoFocusFirstInput={false}
        initialValues={{
          userId: '1',
          userName: 'jack',
        }}
      />

      {/* 操作按钮区域 */}
      <div style={{ textAlign: 'end' }}>
        <Space wrap>
          <Button
            data-testid="submit-btn"
            onClick={() => formRef.current?.submit()}
          >
            onFinish
          </Button>
          <Button
            data-testid="get-fields-btn"
            onClick={() => {
              const vals = formRef.current?.getFieldsValue();
              setHtml('#getFieldsValue', vals);
            }}
          >
            getFieldsValue
          </Button>
          <Button
            data-testid="validate-btn"
            onClick={() =>
              formRef.current?.validateFields().then((vals) => {
                setHtml('#validateFields', vals);
              })
            }
          >
            validateFields
          </Button>
          <Button
            data-testid="get-format-btn"
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
            data-testid="validate-format-btn"
            onClick={() => {
              formRef.current
                ?.validateFieldsReturnFormatValue?.()
                .then((vals) => {
                  setHtml('#validateFieldsReturnFormatValue', vals);
                });
            }}
          >
            validateFieldsReturnFormatValue
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default FormValueDemo;
