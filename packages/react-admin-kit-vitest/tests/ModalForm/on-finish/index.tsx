import { useRef } from 'react';
import { Button } from 'antd';
import ModalForm from 'react-admin-kit/ModalForm';

const Demo = ({ onFinish, onClick }) => {
  const innerRef = useRef<any>(null);

  return (
    <div>
      <Button data-testid="open-btn" onClick={() => onClick(innerRef)}>
        Open Modal
      </Button>
      <ModalForm
        destroyOnHidden
        innerRef={innerRef}
        onFinish={onFinish}
        title="Test Modal"
        columns={[
          {
            title: 'Username',
            dataIndex: 'username',
            required: true,
            fieldProps: {
              'data-testid': 'username',
            },
          },
        ]}
        okButtonProps={{ ['data-testid']: 'ok' }}
      />
    </div>
  );
};

export default Demo;
