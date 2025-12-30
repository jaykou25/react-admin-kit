import { Button, Card, Space } from 'antd';
import { useRef } from 'react';
import { ProForm, SchemaForm, ProFormInstance } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';
import SimpleComponent from '../components/SimpleComponent';

/**
 * 内嵌模式功能演示
 * 测试:
 * 1. 内嵌表单的初始值
 * 2. 内嵌表单的赋值
 * 3. 内嵌表单的约定式数据处理
 * 4. 内嵌表单的值获取
 */
const EmbedConventionDemo = () => {
  const formRef = useRef<ProFormInstance>();

  /**
   * 表单提交处理
   */
  const handleFormFinish = (values: any) => {
    const resultElement = document.querySelector('[data-testid="form-result"]');
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      {/* 操作按钮区 */}
      <Space>
        <Button
          data-testid="set-value-btn"
          onClick={() => {
            formRef.current?.setFieldsValue({
              baseInfo: {
                userId: '2',
                userName: 'John',
                phone: 8,
              },
              business: {
                deptId: '2',
                deptName: 'IT',
              },
            });
          }}
        >
          设置值
        </Button>
        <Button
          data-testid="reset-btn"
          onClick={() => formRef.current?.resetFields()}
        >
          重置
        </Button>
        <Button
          data-testid="submit-btn"
          onClick={() => formRef.current?.submit()}
        >
          提交
        </Button>
      </Space>

      {/* 表单区域 */}
      <ProForm
        formRef={formRef}
        onFinish={handleFormFinish}
        initialValues={{
          baseInfo: {
            userId: '1',
            userName: 'Tom',
            phone: 4,
          },
          business: {
            deptId: '1',
            deptName: 'HR',
          },
        }}
      >
        <Card title="基本信息">
          <SchemaForm
            embed
            columns={[
              {
                title: '用户',
                dataIndex: 'userId,userName',
                renderFormItem: () => <DisplayComponent />,
              },
              {
                title: '手机',
                dataIndex: 'phone',
                renderFormItem: () => <SimpleComponent testid="phone-value" />,
              },
            ]}
            valueBaseName="baseInfo"
          />
        </Card>

        <Card title="业务信息">
          <SchemaForm
            embed
            columns={[
              {
                title: '部门',
                dataIndex: 'deptId,deptName',
                renderFormItem: () => <DisplayComponent num={2} />,
              },
            ]}
            valueBaseName="business"
          />
        </Card>
      </ProForm>

      {/* 结果显示区 */}
      <div data-testid="form-result" />
    </div>
  );
};

export default EmbedConventionDemo;
