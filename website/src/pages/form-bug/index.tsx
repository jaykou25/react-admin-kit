import { Form } from 'antd';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { useEffect, useRef } from 'react';
import { Button } from 'react-admin-kit';

const Demo = (props) => {
  const [form] = Form.useForm();
  const formInstanceRef = useRef(form);
  const selfFormRef = useRef();

  useEffect(() => {
    if (formInstanceRef.current) {
      const { setFieldsValue } = formInstanceRef.current;
      formInstanceRef.current.hi = 'jay';

      formInstanceRef.current.setFieldsValue = (values) => {
        console.log('执行包装 setFieldsValue');
        setFieldsValue(values);
      };
    }
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          console.log('form', formInstanceRef.current);

          formInstanceRef.current.setFieldsValue();

          console.log('formRef', selfFormRef.current);
        }}
      >
        查看form
      </Button>
      <BetaSchemaForm form={form} formRef={selfFormRef} columns={[]} />
    </div>
  );
};

export default Demo;
