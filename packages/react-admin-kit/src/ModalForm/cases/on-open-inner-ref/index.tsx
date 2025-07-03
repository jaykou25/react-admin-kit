import { useRef } from 'react';
import { Button } from 'antd';
import ModalForm from '../../index';

const Demo = ({ onOpen, onClick }) => {
  const innerRef = useRef<any>();

  return (
    <div>
      <Button data-testid="open-btn" onClick={() => onClick(innerRef)}>
        Open Modal
      </Button>
      <ModalForm
        innerRef={innerRef}
        onOpen={onOpen}
        title="Test Modal"
        columns={[
          {
            title: 'Username',
            dataIndex: 'username',
            required: true,
          },
        ]}
        okButtonProps={{ ['data-testid']: 'ok' }}
      />
    </div>
  );
};

export default Demo;
