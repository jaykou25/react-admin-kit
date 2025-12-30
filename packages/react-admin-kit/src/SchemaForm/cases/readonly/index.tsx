import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Button, type FormInstance } from 'antd';

const Readonly = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          onClick={() => {
            formRef.current?.setFieldsValue({
              name: '马先生',
              id: 6,
              queryId: 60,
            });
          }}
        >
          setFieldsBtn
        </Button>
      </div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        readonly={true}
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
