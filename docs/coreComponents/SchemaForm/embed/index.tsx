import { SchemaForm } from 'react-admin-kit';
import { Button, Card, Form } from 'antd';
import { ProForm } from '@ant-design/pro-form';
import { baseColumns } from './baseColumns';
import { businessColumns } from './businessColumns';
import { useRef } from 'react';

import type { FormInstance } from 'antd';

import 'antd/dist/antd.min.css';

const Embed = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
    return true;
  };

  return (
    <div>
      <ProForm submitter={false} layout="horizontal" onFinish={onFinish} formRef={formRef}>
        <Card
          style={{ marginBottom: '24px' }}
          size="small"
          headStyle={{ background: '#ebebeb' }}
          title="基本信息"
        >
          <SchemaForm
            embed
            grid={true}
            rowProps={{ gutter: [0, 0] }}
            colProps={{ span: 8 }}
            labelCol={{ span: 9 }}
            columns={baseColumns}
          />
        </Card>

        <Card size="small" title="业务信息" headStyle={{ background: '#ebebeb' }}>
          <SchemaForm embed columns={businessColumns} />
        </Card>
      </ProForm>

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

export default Embed;
