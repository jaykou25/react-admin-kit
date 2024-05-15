import { Button, Form, Input } from 'antd';
import { useRef } from 'react';

export default function () {
  const formRef = useRef<any>(null);
  return (
    <Form ref={formRef} initialValues={{ name: 'jack', good: true }}>
      <Form.Item name="name" label="名字">
        <Input />
      </Form.Item>
      <Form.Item name="name2" label="名字">
        <Input />
      </Form.Item>
      <Button
        onClick={() => {
          console.log('values', formRef.current?.getFieldsValue());
        }}
      >
        getFieldsValue
      </Button>
    </Form>
  );
}
