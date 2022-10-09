import { ModalForm } from 'react-admin-toolkit';
import { Button, Modal } from 'antd';
import { columns } from './columns';
import { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
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
      />
    </div>
  );
};

export default Basic;
