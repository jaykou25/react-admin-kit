import { Button, Space } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';

/**
 * 嵌套约定式表单示例
 * 演示:
 * 1. 约定式初始值
 * 2. 嵌套依赖显示
 * 3. 表单操作(设置值/重置/提交)
 */
const ConventionNestDemo = () => {
  const formRef = useRef<ProFormInstance>();

  /**
   * 表单提交处理
   */
  const handleFormFinish = (values: any) => {
    const resultElement = document.querySelector(
      '[data-testid="convention-nest-result"]',
    );
    if (resultElement) {
      resultElement.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      {/* 操作按钮区 */}
      <Space direction="vertical">
        <Button
          data-testid="set-value-btn"
          onClick={() =>
            formRef.current?.setFieldsValue({
              id: '2',
              name: 'John',
            })
          }
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
      <SchemaForm
        formRef={formRef}
        onFinish={handleFormFinish}
        // 设置初始值
        initialValues={{
          id: '1',
          name: 'Jennifer',
          id2: '3',
          name2: 'Tom',
        }}
        columns={[
          // 主要名称字段
          {
            title: '主要名称',
            dataIndex: 'id,name',
            renderFormItem: () => <DisplayComponent />,
          },
          // 依赖显示的次要名称字段
          {
            valueType: 'dependency',
            name: ['id,name'],
            columns(values) {
              const mainNameValue = values?.['id,name'] || {};
              // 仅当主要名称值为'1'时显示次要名称
              if (mainNameValue.value === '1') {
                return [
                  {
                    title: '次要名称',
                    dataIndex: 'id2,name2',
                    renderFormItem: () => <DisplayComponent num={2} />,
                  },
                ];
              }
              return [];
            },
          },
        ]}
      />

      {/* 结果展示区 */}
      <div data-testid="convention-nest-result" />
    </div>
  );
};

export default ConventionNestDemo;
