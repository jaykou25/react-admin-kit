import { Button, Input, Modal } from 'antd';
import { useRef, useState } from 'react';
import { ModalForm, Button as RButton } from 'react-admin-kit';

const Demo = () => {
  const innerRef = useRef<any>();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => innerRef.current.openModal()}>open</Button>
      <Button onClick={() => setOpen(true)}>prue modal</Button>
      <RButton>rak button</RButton>
      <Modal onCancel={() => setOpen(false)} title="hi" open={open}>
        hi
      </Modal>
      <ModalForm
        title="test"
        innerRef={innerRef}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
          },
        ]}
      />
    </div>
  );
};

export default Demo;
