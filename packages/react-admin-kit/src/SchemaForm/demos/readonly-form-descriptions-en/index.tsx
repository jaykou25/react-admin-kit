import { useRef, useState } from 'react';
import { SchemaForm, ProFormInstance, Button } from 'react-admin-kit';
import { columns } from './columns';
import { Space } from 'antd';

const Demo = () => {
  const formRef = useRef<ProFormInstance>();
  const [readonly, setReadonly] = useState(false);

  return (
    <div>
      <Space direction="vertical">
        <Button
          onClick={() => {
            formRef.current?.resetFields();
            setReadonly(false);
          }}
        >
          0. Initial State
        </Button>
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              name: 'Jack',
              hobbies: 'Music',
              id: 6,
            })
          }
        >
          1. Set Value from API
        </Button>
        <Button onClick={() => setReadonly(true)}>2. Set Readonly</Button>
      </Space>

      <SchemaForm
        name="demo-readonly-form-descriptions"
        style={{ marginTop: '20px' }}
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }} // not needed
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }} // not needed
        formRef={formRef}
        columns={columns}
        readonly={readonly}
        readonlyType="descriptions"
        descriptionsProps={{ bordered: true, size: 'small' }}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Demo;
