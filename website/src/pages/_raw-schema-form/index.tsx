import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { useRef } from 'react';

export default function () {
  const formRef = useRef<any>();

  return (
    <div style={{ padding: 24 }}>
      <BetaSchemaForm
        formRef={formRef}
        initialValues={
          {
            // name: '组件上的 initialValues',
          }
        }
        columns={[
          {
            title: '名称',
            dataIndex: 'name',
            initialValue: 'column 上的 initialValue',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            initialValue: 18,
          },
        ]}
        layoutType="Form"
        submitter={false}
      />
      <Button
        onClick={() => {
          const current = formRef.current?.getFieldValue('name') || '';
          formRef.current?.setFieldsValue({ name: current + '1' });
        }}
        style={{ marginTop: 16 }}
      >
        给 name 增值
      </Button>
      <Button
        onClick={() => {
          formRef.current?.setFieldsValue({ name: undefined });
        }}
        style={{ marginTop: 16, marginLeft: 8 }}
      >
        清空 name
      </Button>
    </div>
  );
}
