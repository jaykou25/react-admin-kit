import { SchemaForm, Button } from 'react-admin-kit';
import DisplayComponent from '../components/DisplayComponent';
import { useRef } from 'react';

/**
 * 演示只读模式下的 render 方法
 */
const Demo = () => {
  const formRef = useRef<any>();
  return (
    <div>
      <Button
        data-testid="set-btn"
        onClick={() => {
          formRef.current?.setFieldsValue({
            userId: '1',
            userName: 'Tom',
          });
        }}
      >
        赋值
      </Button>
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '名称',
            dataIndex: 'userId,userName',
            renderFormItem: () => <DisplayComponent />,
          },
          {
            valueType: 'dependency',
            name: ['userId,userName'],
            columns: () => {
              return [
                {
                  title: '渲染',
                  readonly: true,
                  render: (dom, entity) => {
                    return (
                      <div data-testid="render-result">{entity.userName}</div>
                    );
                  },
                },
              ];
            },
          },
        ]}
      />
    </div>
  );
};

export default Demo;
