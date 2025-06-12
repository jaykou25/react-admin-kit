import { useRef } from 'react';
import { ProForm, SchemaForm, ProFormInstance } from 'react-admin-kit';
import { Button, Card, Space } from 'antd';
import DisplayComponent from '../components/DisplayComponent';

/**
 * ProForm 内嵌模式下取值演示组件
 * 主要测试:
 * 1. 内嵌表单初始值显示
 * 2. 使用 getFieldsValue 获取原始值
 * 3. 使用 getFieldsFormatValue 获取格式化(约定式)值
 * 4. 使用 validateFields 获取经过校验的原始值
 * 5. 提交时 onFinish 返回原始值
 */
const ProFormGetValueDemo = () => {
  const formRef = useRef<ProFormInstance>();

  /**
   * 更新结果显示，将传入的值转换为 JSON 格式显示在指定 DOM 节点内
   * @param selector 目标选择器
   * @param value 要显示的值
   */
  const updateResult = (selector: string, value: any) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent =
        typeof value === 'object'
          ? JSON.stringify(value, null, 2)
          : String(value);
    }
  };

  // 提交时回调，将表单原始值显示在 #submit-result 节点
  const onFinish = (values: any) => {
    updateResult('#submit-result', values);
  };

  return (
    <div>
      {/* 按钮操作区域 */}
      <Space style={{ marginBottom: 16 }}>
        <Button
          data-testid="submit-btn"
          onClick={() => formRef.current?.submit()}
        >
          Submit
        </Button>
        <Button
          data-testid="get-raw-btn"
          onClick={() => {
            const vals = formRef.current?.getFieldsValue();
            updateResult('#raw-result', vals);
          }}
        >
          Get Raw Values
        </Button>
        <Button
          data-testid="get-format-btn"
          onClick={() => {
            const vals = formRef.current?.getFieldsFormatValue?.();
            updateResult('#format-result', vals);
          }}
        >
          Get Format Values
        </Button>
        <Button
          data-testid="validate-btn"
          onClick={() =>
            formRef.current?.validateFields().then((vals) => {
              updateResult('#validate-result', vals);
            })
          }
        >
          Validate Fields
        </Button>
        <Button
          data-testid="validate-format-btn"
          onClick={() =>
            formRef.current
              ?.validateFieldsReturnFormatValue?.()
              .then((vals) => {
                updateResult('#validate-format-result', vals);
              })
          }
        >
          Validate Fields
        </Button>
      </Space>

      {/* 结果展示区域 */}
      <div className="result-display" style={{ marginBottom: 16 }}>
        <div id="submit-result" data-testid="submit-result" />
        <div id="raw-result" data-testid="raw-result" />
        <div id="format-result" data-testid="format-result" />
        <div id="validate-result" data-testid="validate-result" />
        <div id="validate-format-result" data-testid="validate-format-result" />
      </div>

      {/* 表单区域 */}
      <ProForm
        formRef={formRef}
        onFinish={onFinish}
        initialValues={{
          baseInfo: {
            userId: '1',
            userName: 'Alice',
          },
          business: {
            deptId: '10',
            deptName: 'HR',
          },
        }}
      >
        <Card title="基本信息">
          <SchemaForm
            embed
            valueBaseName="baseInfo"
            columns={[
              {
                title: '用户',
                dataIndex: 'userId,userName',
                renderFormItem: () => <DisplayComponent />,
              },
            ]}
          />
        </Card>

        <Card title="业务信息">
          <SchemaForm
            embed
            valueBaseName="business"
            columns={[
              {
                title: '部门',
                dataIndex: 'deptId,deptName',
                renderFormItem: () => <DisplayComponent num={2} />,
              },
            ]}
          />
        </Card>
      </ProForm>
    </div>
  );
};

export default ProFormGetValueDemo;
