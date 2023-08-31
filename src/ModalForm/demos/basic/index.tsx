import { useState } from 'react';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const Basic = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          打开弹窗
        </Button>
      </div>

      <ModalForm
        title={'基本表单'}
        open={open}
        onCancel={() => setOpen(false)}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default Basic;
