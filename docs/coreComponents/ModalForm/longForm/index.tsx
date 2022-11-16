import { ModalForm, Button } from 'react-admin-kit';
import { columns } from './columns';
import { useState } from 'react';

const LongForm = () => {
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
        title={'长表单验证'}
        open={open}
        onCancel={() => setOpen(false)}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default LongForm;
