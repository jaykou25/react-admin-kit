import { Button, Space } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';

/**
 * 演示约定式赋值
 * 使用 formRef
 */
const ConventionFormRefDemo = () => {
  const formRef = useRef<ProFormInstance>();

  // 表单提交处理
  const handleFormFinish = (values: any) => {
    // 将结果显示到测试结果区域
    const resultElement = document.querySelector(
      '[data-testid="form-submit-result"]',
    );
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      {/* 操作按钮区域 */}
      <Space direction="vertical">
        <Button
          data-testid="set-fields-btn"
          onClick={() => {
            formRef.current?.setFieldsValue({
              id: '2',
              name: 'John',
            });
          }}
        >
          设置字段值
        </Button>
        <Button
          data-testid="reset-btn"
          onClick={() => formRef.current?.resetFields()}
        >
          重置表单
        </Button>
        <Button
          data-testid="submit-btn"
          onClick={() => formRef.current?.submit()}
        >
          提交表单
        </Button>
      </Space>

      {/* 表单区域 */}
      <SchemaForm
        formRef={formRef}
        onFinish={handleFormFinish}
        initialValues={{
          id: '1',
          name: 'Jennifer',
        }}
        columns={[
          {
            title: '姓名',
            dataIndex: 'id,name',
            renderFormItem: () => <DisplayComponent />,
          },
        ]}
      />

      {/* 测试结果展示区域 */}
      <div data-testid="form-submit-result" />
    </div>
  );
};

export default ConventionFormRefDemo;
