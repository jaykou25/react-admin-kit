import { useRef, useState } from 'react';
import { Button } from 'antd';
import ModalForm from '../../index';

const OnOpenControlDemo = ({ onOpen, title = 'Test Modal' }) => {
  const [open, setOpen] = useState(false);

  const container = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button data-testid="open-btn" onClick={handleOpen}>
        Open Modal
      </Button>
      <div ref={container} data-testid="dialog"></div>
      <ModalForm
        getContainer={() => container.current!}
        open={open}
        onOpen={onOpen}
        title={title}
        columns={[
          {
            title: 'Username',
            dataIndex: 'username',
            required: true,
          },
        ]}
        onCancel={handleClose}
        okButtonProps={{ ['data-testid']: 'ok' }}
      />
    </div>
  );
};

export default OnOpenControlDemo;
