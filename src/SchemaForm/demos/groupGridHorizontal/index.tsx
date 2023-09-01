import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const GroupGridHorizontal = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        // 👇这是设置给外层的👇
        grid
        // 👆这是设置给外层的👆
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
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

export default GroupGridHorizontal;
