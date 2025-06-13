import { Button, Space } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';
import SimpleComponent from '../components/SimpleComponent';

/**
 * FormList 约定式数据处理演示
 * 测试内容:
 * 1. 初始值展示
 * 2. 约定式赋值
 * 3. 重置操作
 * 4. 提交数据
 */
const FormListDependencyDemo = () => {
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
      <Space style={{ marginBottom: 16 }}>
        <Button
          data-testid="set-value-btn"
          onClick={() => {
            formRef.current?.setFieldsValue({
              userList: [
                {
                  userId: '2',
                  userName: 'John',
                  deptId: '20',
                  deptName: 'IT',
                },
                {
                  userId: '3',
                  userName: 'Mike',
                  deptId: '30',
                  deptName: 'HR',
                },
              ],
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
      <SchemaForm
        formRef={formRef}
        onFinish={handleFormFinish}
        grid
        initialValues={{
          userList: [
            {
              userId: '1',
              userName: 'Alice',
              deptId: '10',
              deptName: 'Dev',
            },
          ],
        }}
        columns={[
          {
            title: '用户列表',
            dataIndex: 'userList',
            valueType: 'formList',
            columns: [
              {
                valueType: 'group',
                rowProps: { gutter: [16, 16] },
                columns: [
                  {
                    title: '用户',
                    dataIndex: 'userName',
                    colProps: { span: 12 },
                    renderFormItem: () => (
                      <SimpleComponent testid="user-name" />
                    ),
                  },
                  {
                    valueType: 'dependency',
                    name: ['userName'],
                    columns: (values) => {
                      console.log('values', values);
                      if (
                        values.userName === 'Alice' ||
                        values.userName === 'John'
                      ) {
                        return [
                          {
                            title: '部门',
                            dataIndex: 'deptId,deptName',
                            colProps: { span: 12 },
                            renderFormItem: () => <DisplayComponent />,
                          },
                        ];
                      }

                      return [];
                    },
                  },
                ],
              },
            ],
          },
        ]}
      />

      {/* 结果显示区 */}
      <div data-testid="form-result" />
    </div>
  );
};

export default FormListDependencyDemo;
