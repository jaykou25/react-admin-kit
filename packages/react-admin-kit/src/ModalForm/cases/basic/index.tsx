import { useRef, useState } from 'react';
import { Button, ModalForm } from 'react-admin-kit';

const Basic = () => {
  const [open, setOpen] = useState(false);

  const container = useRef(null);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button data-testid="open" type="primary" onClick={() => setOpen(true)}>
          open
        </Button>
      </div>

      <div ref={container} data-testid="dialog"></div>

      <ModalForm
        getContainer={() => container.current!}
        okButtonProps={{ ['data-testid']: 'ok' }}
        title={'基本表单'}
        open={open}
        onCancel={() => setOpen(false)}
        onFinish={onFinish}
        columns={[
          {
            title: '用户名',
            dataIndex: 'username',
            required: true,
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]}
      />
    </div>
  );
};

export default Basic;
