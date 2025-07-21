import { useState } from 'react';
import { Button, ModalForm } from 'react-admin-kit';

const Basic = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
      </div>

      <ModalForm
        title={'Basic Form'}
        open={open}
        onCancel={() => setOpen(false)}
        onFinish={onFinish}
        columns={[
          {
            title: 'Username',
            dataIndex: 'username',
            required: true,
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
          },
        ]}
      />
    </div>
  );
};

export default Basic;
