import { Card } from 'antd';
import { useRef } from 'react';
import { ProForm, SchemaForm, SchemaFormInnerRefType } from 'react-admin-kit';
import { getBaseColumns } from './baseColumns';
import { getBusinessColumns } from './businessColumns';

const Demo = () => {
  const innerRef = useRef<SchemaFormInnerRefType>();
  const formRef = useRef<any>();

  const onFinish = async (values: any) => {
    console.log({
      values: { ...values, other: innerRef.current?.data.other },
    });
    return true;
  };

  return (
    <ProForm
      onFinish={onFinish}
      submitter
      formRef={formRef}
      innerRef={innerRef}
      initialValues={{
        baseInfo: { username: 'Bruce Lee' },
        business: { serviceName: '2' },
      }}
    >
      <Card
        style={{ marginBottom: '24px' }}
        size="small"
        title="Basic Information"
      >
        <SchemaForm
          embed
          grid={true}
          colProps={{ span: 24 }}
          columns={getBaseColumns()}
          valueBaseName="baseInfo"
        />
      </Card>

      <Card
        style={{ marginBottom: '12px' }}
        size="small"
        title="Business Information"
      >
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
  );
};

export default Demo;
