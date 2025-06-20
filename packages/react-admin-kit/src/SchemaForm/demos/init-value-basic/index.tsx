import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import { getColumns } from './columns';

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <div>
      <SchemaForm
        name="demo-initial-value-basic"
        formRef={formRef}
        columns={getColumns()}
        autoFocusFirstInput={false}
        initialValues={{ showUser: 0 }}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              showUser: 1,
              user: '1',
              userName: 'Jack',
            })
          }
        >
          赋值
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          重置
        </Button>
      </div>
    </div>
  );
};

export default Demo;
