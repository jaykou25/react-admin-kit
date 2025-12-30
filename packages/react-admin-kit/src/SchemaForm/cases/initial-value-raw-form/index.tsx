import { Button, Space, Form } from 'antd';
import { SchemaForm } from 'react-admin-kit';
import SimpleComponent from '../components/SimpleComponent';

/**
 * 确保基础 initialValue 功能可用
 */
const Demo = () => {
  // 使用原生 Form 实例
  const [form] = Form.useForm();

  /**
   * 表单提交处理
   * @param values 表单值
   */
  const handleFormFinish = (values: any) => {
    const resultElement = document.querySelector('[data-testid="form-result"]');
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      {/* 操作按钮区域 */}
      <Space direction="vertical">
        <Button
          data-testid="set-value-btn"
          onClick={() => {
            form.setFieldsValue({ id: '2' });
          }}
        >
          设置值
        </Button>
        <Button data-testid="reset-btn" onClick={() => form.resetFields()}>
          重置
        </Button>
        <Button data-testid="submit-btn" onClick={() => form.submit()}>
          提交
        </Button>
      </Space>

      {/* 表单区域 */}
      <SchemaForm
        form={form}
        onFinish={handleFormFinish}
        initialValues={{
          id: '1',
        }}
        columns={[
          {
            title: '姓名',
            dataIndex: 'id',
            renderFormItem: () => <SimpleComponent />,
          },
        ]}
      />

      {/* 测试结果展示区域 */}
      <div data-testid="form-result" />
    </div>
  );
};

export default Demo;
