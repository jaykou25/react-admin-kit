import { useRef, useState } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Button, Space, type FormInstance } from 'antd';

const Readonly = () => {
  const formRef = useRef<FormInstance>();
  const [readonly, setReadonly] = useState(true);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Space style={{ marginBottom: '10px' }}>
          <Button
            onClick={() => setReadonly(true)}
            type={readonly ? 'primary' : 'default'}
          >
            只读
          </Button>
          <Button
            onClick={() => setReadonly(false)}
            type={readonly ? 'default' : 'primary'}
          >
            编辑模式
          </Button>
        </Space>
        <Button
          onClick={() =>
            formRef.current?.setFieldsValue({
              name: '马先生',
              id: 6,
              queryId: 60,
            })
          }
        >
          赋值
        </Button>
      </div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        readonly={readonly}
        initialValues={{
          name: '王先生',
          phone: 1202228888,
          mail: 'mail.com',
          chargePerson: '1',
          chargePhone: '123456789',
          id: 8,
          queryId: 80,
        }}
      />
    </div>
  );
};

export default Readonly;
