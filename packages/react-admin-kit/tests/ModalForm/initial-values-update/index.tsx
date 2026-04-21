import { useRef, useState } from 'react';
import { Button } from 'antd';
import { ModalForm } from 'react-admin-kit';

const InitialValuesUpdateDemo = (props) => {
  const { initialValues, title } = props;

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
        title={title}
        formProps={{ initialValues }}
        columns={[
          {
            title: 'Username',
            dataIndex: 'username',
            required: true,
          },
          {
            title: 'Email',
            dataIndex: 'email',
          },
        ]}
        onCancel={handleClose}
        okButtonProps={{ ['data-testid']: 'ok' }}
        cancelButtonProps={{ ['data-testid']: 'cancel' }}
      />
    </div>
  );
};

export default InitialValuesUpdateDemo;
