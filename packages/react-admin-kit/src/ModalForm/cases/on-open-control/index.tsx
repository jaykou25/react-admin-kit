import { useState } from 'react';
import { Button } from 'antd';
import ModalForm from '../../index';

const OnOpenControlDemo = ({ onOpen }) => {
  const [open, setOpen] = useState(false);

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
      <ModalForm
        open={open}
        onOpen={onOpen}
        title="Test Modal"
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
