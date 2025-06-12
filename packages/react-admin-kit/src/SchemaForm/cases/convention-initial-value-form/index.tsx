import { Button, Space, Form } from 'antd';
import { SchemaForm } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';

/**
 * 演示约定式赋值
 * 使用 form
 */
const Demo = () => {
  const [form] = Form.useForm();

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
            form.setFieldsValue({
              id: '2',
              name: 'John',
            });
          }}
        >
          设置字段值
        </Button>
        <Button data-testid="reset-btn" onClick={() => form.resetFields()}>
          重置表单
        </Button>
        <Button data-testid="submit-btn" onClick={() => form.submit()}>
          提交表单
        </Button>
      </Space>

      {/* 表单区域 */}
      <SchemaForm
        form={form}
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

export default Demo;
