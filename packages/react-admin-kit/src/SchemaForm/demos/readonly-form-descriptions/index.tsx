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
          0. 初始状态
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
          1. 请求接口赋值
        </Button>
        <Button onClick={() => setReadonly(true)}>2. 设为只读</Button>
      </Space>

      <SchemaForm
        name="demo-readonly-form-descriptions"
        style={{ marginTop: '20px' }}
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }} // 不再需要了
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }} // 不再需要了
        formRef={formRef}
        columns={columns}
        readonly={readonly}
        readonlyType="descriptions"
        descriptionsProps={{
          bordered: true,
          size: 'small',
        }}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Demo;
