import { ModalForm } from 'react-admin-toolkit';
import { Button } from 'antd';
import { columns } from './columns';
import { useState } from 'react';

const OnOpenDemo = () => {
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const handleOnOpen = async (formRef) => {
    return requestData().then(() => {
      formRef.current?.setFieldsValue({ username: '王先生', phone: 134 });
    });
  };

  const requestData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => setVisible(true)}>
          打开弹窗
        </Button>
      </div>

      <ModalForm
        title={'基本表单'}
        open={visible}
        onCancel={() => setVisible(false)}
        onFinish={onFinish}
        columns={columns}
        onOpen={handleOnOpen}
      />
    </div>
  );
};

export default OnOpenDemo;
