import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const Readonly = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        readonly={true}
        initialValues={{
          name: '王先生',
          phone: 1202228888,
          sex: '男',
          mail: 'mail.com',
        }}
      />
    </div>
  );
};

export default Readonly;
