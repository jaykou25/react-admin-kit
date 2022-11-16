import type { ProFormColumnsType, ProFormInstance } from '@ant-design/pro-form';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { SchemaForm } from 'react-admin-kit';
import { Button } from 'antd';
import { useRef } from 'react';

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: 'name',
    dataIndex: 'name',
    colProps: { span: 8 },
  },
  {
    title: 'code',
    dataIndex: 'code',
    colProps: { span: 8 },
  },
];

export default () => {
  const formRef = useRef<ProFormInstance>();
  return (
    <div>
      <BetaSchemaForm
        initialValues={{ name: 'hi' }}
        formRef={formRef}
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
      <Button
        onClick={() => {
          const isTouched = formRef.current?.isFieldsTouched();
          alert(isTouched);
        }}
      >
        isTouch
      </Button>
    </div>
  );
};
