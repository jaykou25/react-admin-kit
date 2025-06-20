import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

import type { FormInstance } from 'antd';

const GridHorizontal = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        name="grid-demo-horizontal"
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        // 以整个一行作为 24 份。每个表单项占 8 份。
        // 假设每个 label 占据 3 份
        // n = 3
        labelCol={{ flex: '0 0 37.5%' }} // 3 / 8 = 0.375
        onFinish={onFinish}
        formRef={formRef}
        columns={getColumns()}
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

export default GridHorizontal;
