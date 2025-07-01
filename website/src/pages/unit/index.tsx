import { Form, Input } from 'antd';
import Demo from 'react-admin-kit/SchemaForm/cases/convention-split';
// import Demo2 from 'react-admin-kit/SchemaForm/cases/convention-init-value-raw-form-ref';
// import Demo3 from 'react-admin-kit/SchemaForm/cases/convention-init-value-raw-form';
// import Demo4 from 'react-admin-kit/SchemaForm/cases/convention-init-value-form-ref';
import MyForm from './components/MyForm';
import { useEffect, useRef } from 'react';
import { ProForm, SchemaForm, Button } from 'react-admin-kit';

const UnitTest = () => {
  const [form] = Form.useForm();
  const formRef = useRef<any>();

  // const hooks = form.getInternalHooks('RC_FORM_INTERNAL_HOOKS');

  // useEffect(() => {
  //   console.log('form', hooks);

  //   // form.setFieldsValue({ name: '2' });
  //   hooks.setInitialValues({ name: '2' });
  // }, []);

  return (
    <div>
      <Button onClick={() => form.resetFields()}>重置</Button>
      <Button
        onClick={() =>
          form.setFieldsValue({
            id: '2',
            name: 'Tom',
            dept: 'IT',
          })
        }
      >
        赋值
      </Button>

      {/* <Form initialValues={{ name: '1' }} form={form}>
        <Form.Item name="name">
          <Input />
        </Form.Item>
      </Form> */}

      <ProForm form={form} initialValues={{ id: '1', name: 'Jack' }}>
        <div>
          <SchemaForm embed columns={[]} />
        </div>
        <div>
          <SchemaForm
            embed
            columns={[
              {
                title: '部门',
                dataIndex: 'dept',
              },
            ]}
          />
        </div>
      </ProForm>
    </div>
  );
};

export default UnitTest;
