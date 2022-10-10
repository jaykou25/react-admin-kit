import { SchemaForm } from 'react-admin-kit';
import { Button } from 'antd';
import { columns } from './columns';
import { useRef } from 'react';

import type { FormInstance } from 'antd';

const GridHorizontal = () => {
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
      />

      <div style={{ textAlign: 'end' }}>
        <Button style={{ marginRight: '10px' }} onClick={() => formRef.current?.resetFields()}>
          重置
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default GridHorizontal;
