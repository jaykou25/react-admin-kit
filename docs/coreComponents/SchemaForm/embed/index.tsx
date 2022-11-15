import { ProForm, SchemaForm } from 'react-admin-kit';
import { Button, Card } from 'antd';
import { getBaseColumns } from './baseColumns';
import getBusinessColumns from './businessColumns';
import { useRef, useState } from 'react';

import type { FormInstance } from 'antd';

import 'antd/dist/antd.min.css';

const Embed = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
    return true;
  };

  const [readonly, setReadonly] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleFillData = () => {
    setLoading(true);
    setTimeout(() => {
      formRef.current?.setFieldsValue({
        base: {
          username: '王先生',
          phone: '15588888',
          nickName: 'wang',
          sex: '男',
          idNumber: 3202335566,
        },
        business: { company: '信息技术有限公司', address: '江苏省无锡市', serviceName: '1' },
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <ProForm
        layout="horizontal"
        onFinish={onFinish}
        submitter={false}
        formRef={formRef}
        readonly={readonly} // 也可以单独设在某个SchemaForm上
      >
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
            columns={getBaseColumns()}
            valueBaseName="base"
          />
        </Card>

        <Card size="small" title="业务信息" headStyle={{ background: '#ebebeb' }}>
          <SchemaForm
            embed
            columns={getBusinessColumns()}
            labelCol={{ span: 3 }}
            valueBaseName="business"
          />
        </Card>
      </ProForm>

      <div style={{ marginTop: '10px', textAlign: 'end' }}>
        <Button style={{ marginRight: '10px' }} onClick={() => setReadonly((val) => !val)}>
          切换只读
        </Button>
        <Button loading={loading} style={{ marginRight: '20px' }} onClick={handleFillData}>
          回显数据
        </Button>
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
