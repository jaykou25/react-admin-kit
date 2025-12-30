import { useRef } from 'react';
import { Button, SchemaForm } from 'react-admin-kit';

import type { FormInstance } from 'antd';
import { columns } from './columns';

const Convert = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
        submitter
      />
      <Button
        onClick={() => {
          const vals = formRef.current?.getFieldsValue();
          console.log('vals', vals);
        }}
      >
        get
      </Button>
    </div>
  );
};

export default Convert;
