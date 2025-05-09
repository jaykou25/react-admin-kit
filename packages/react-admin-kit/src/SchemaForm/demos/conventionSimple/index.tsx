import { useRef } from 'react';
import { Button, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import { Space } from 'antd';
import type { ProFormInstance } from 'react-admin-kit';

const ConventionSimple = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />
      <div style={{ textAlign: 'end' }}>
        <Space>
          <Button
            onClick={() =>
              formRef.current?.setFieldsValue({
                userId: '2',
                userName: '李四',
              })
            }
          >
            赋值
          </Button>
          <Button type="primary" onClick={() => formRef.current?.submit()}>
            提交
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ConventionSimple;
