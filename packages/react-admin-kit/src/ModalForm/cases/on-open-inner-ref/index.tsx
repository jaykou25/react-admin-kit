import { useRef } from 'react';
import { Button } from 'antd';
import ModalForm from '../../index';

const Demo = ({ onOpen, onClick, title = 'Test Modal' }) => {
  const innerRef = useRef<any>();
  const container = useRef(null);

  return (
    <div>
      <Button data-testid="open-btn" onClick={() => onClick(innerRef)}>
        Open Modal
      </Button>
      <div ref={container} data-testid="dialog"></div>
      <ModalForm
        getContainer={() => container.current!}
        innerRef={innerRef}
        onOpen={onOpen}
        title={title}
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
