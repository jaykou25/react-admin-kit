import { Button } from 'antd';
import { useRef, useState } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

import type { FormInstance } from 'antd';

const InitValueDemo = () => {
  const formRef = useRef<FormInstance>();

  const [readonly, setReadonly] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <h4>有初始值</h4>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={getColumns()}
        autoFocusFirstInput={false}
        readonly={readonly}
        initialValues={{ showUser: 1, user: '2', userName: '用户2' }}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => setReadonly(!readonly)}
        >
          切换只读
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              showUser: 1,
              user: '3',
              userName: '用户3',
            })
          }
        >
          赋值
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          重置
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default InitValueDemo;
