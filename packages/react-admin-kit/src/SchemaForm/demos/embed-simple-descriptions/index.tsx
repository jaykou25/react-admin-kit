import { Button, Card, Space } from 'antd';
import { useRef } from 'react';
import { ProForm, SchemaForm, SchemaFormInnerRefType } from 'react-admin-kit';
import { getBaseColumns } from './baseColumns';
import { getBusinessColumns } from './businessColumns';

const Demo = () => {
  const formRef = useRef<any>();

  return (
    <div>
      <ProForm
        readonly
        readonlyType="descriptions"
        descriptionsProps={{ bordered: true, size: 'small' }}
        formRef={formRef}
        initialValues={{
          baseInfo: { username: '王俊凯', idNumber: 'xxx' },
          business: { serviceName: '2' },
        }}
      >
        <Card style={{ marginBottom: '24px' }} size="small" title="基本信息">
          <SchemaForm
            embed
            grid={true}
            colProps={{ span: 24 }}
            columns={getBaseColumns()}
            valueBaseName="baseInfo"
          />
        </Card>

        <Card style={{ marginBottom: '12px' }} size="small" title="业务信息">
          <SchemaForm
            embed
            grid={true}
            columns={getBusinessColumns()}
            rowProps={{ gutter: [12, 0] }}
            colProps={{ span: 12 }}
            valueBaseName="business"
          />
        </Card>
      </ProForm>
      <Space>
        <Button onClick={() => formRef.current.resetFields()}>重置</Button>
        <Button
          type="primary"
          onClick={() => {
            formRef.current?.setFieldsValue({
              baseInfo: {},
              business: {
                company: 'RAK',
                address: 'Wuxi China',
                serviceName: '1',
              },
            });
          }}
        >
          赋值
        </Button>
      </Space>
    </div>
  );
};

export default Demo;
