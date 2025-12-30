import { Button, Space } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';

/**
 * 三层嵌套的约定式表单示例
 * 演示:
 * 1. 三层嵌套的约定式初始值
 * 2. 多层级联显示
 * 3. 表单操作(设置值/重置/提交)
 */
const ConventionTripleNestDemo = () => {
  const formRef = useRef<ProFormInstance>();

  /**
   * 表单提交处理
   */
  const handleFormFinish = (values: any) => {
    const resultElement = document.querySelector(
      '[data-testid="convention-triple-nest-result"]',
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
              level1Id: '2',
              level1Name: 'Level 1-B',
            })
          }
        >
          设置第一层值
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
        initialValues={{
          level1Id: '1',
          level1Name: 'Level 1-A',
          level2Id: '2',
          level2Name: 'Level 2-A',
          level3Id: '3',
          level3Name: 'Level 3-A',
        }}
        columns={[
          // 第一层
          {
            title: '第一层',
            dataIndex: 'level1Id,level1Name',
            renderFormItem: () => <DisplayComponent />,
          },
          // 第二层(依赖第一层)
          {
            valueType: 'dependency',
            name: ['level1Id,level1Name'],
            columns: (values) => {
              const level1Value = values?.['level1Id,level1Name'];
              if (level1Value?.value === '1') {
                return [
                  {
                    title: '第二层',
                    dataIndex: 'level2Id,level2Name',
                    renderFormItem: () => <DisplayComponent num={2} />,
                  },
                  // 第三层(依赖第二层)
                  {
                    valueType: 'dependency',
                    name: ['level2Id,level2Name'],
                    columns: (values) => {
                      const level2Value = values?.['level2Id,level2Name'];
                      if (level2Value?.value === '2') {
                        return [
                          {
                            title: '第三层',
                            dataIndex: 'level3Id,level3Name',
                            renderFormItem: () => <DisplayComponent num={3} />,
                          },
                        ];
                      }
                      return [];
                    },
                  },
                ];
              }
              return [];
            },
          },
        ]}
      />

      {/* 结果展示区 */}
      <div data-testid="convention-triple-nest-result" />
    </div>
  );
};

export default ConventionTripleNestDemo;
