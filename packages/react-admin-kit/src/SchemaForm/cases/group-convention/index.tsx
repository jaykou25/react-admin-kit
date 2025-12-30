import { Button, Card, Space } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';

/**
 * Group 模式下的约定式表单 Demo
 * 测试内容：
 *  1. 初始值展示：显示用户信息和部门信息
 *  2. 赋值：点击“设置字段值”按钮后更新显示
 *  3. 重置：点击“重置表单”后恢复初始值
 *  4. 提交：点击“提交表单”时返回表单内嵌结构以及经过约定式转换后的数据
 */
const GroupConventionDemo = () => {
  const formRef = useRef<ProFormInstance>();

  // 表单提交处理，将提交值显示于页面下方
  const handleFormFinish = (values: any) => {
    const resultEle = document.querySelector(
      '[data-testid="form-submit-result"]',
    );
    if (resultEle) {
      resultEle.textContent = JSON.stringify(values, null, 2);
    }
  };

  return (
    <div>
      {/* 操作按钮区域 */}
      <Space direction="vertical" style={{ marginBottom: 16 }}>
        <Button
          data-testid="set-fields-btn"
          onClick={() => {
            formRef.current?.setFieldsValue({
              id: '2',
              name: 'Bob',
              deptId: '20',
              deptName: 'IT',
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
          name: 'Alice',
          deptId: '10',
          deptName: 'HR',
        }}
        columns={[
          {
            title: '用户信息',
            valueType: 'group',
            // group 模式下，columns 属性定义组内字段
            columns: [
              {
                title: '姓名',
                dataIndex: 'id,name',
                renderFormItem: () => <DisplayComponent />,
              },
            ],
          },
          {
            title: '部门信息',
            valueType: 'group',
            columns: [
              {
                title: '部门',
                dataIndex: 'deptId,deptName',
                renderFormItem: () => <DisplayComponent num={2} />,
              },
            ],
          },
        ]}
      />

      {/* 测试结果展示区域 */}
      <div data-testid="form-submit-result" style={{ marginTop: 16 }} />
    </div>
  );
};

export default GroupConventionDemo;
