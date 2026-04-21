import { useRef } from 'react';
import Button from 'react-admin-kit/Button';
import ModalForm from 'react-admin-kit/ModalForm';
import type { ModalFormInnerRefType } from 'react-admin-kit';

const Demo = ({ onFinish }) => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const container = useRef(null);

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button
          data-testid="open"
          type="primary"
          onClick={() => innerRef.current?.openModal()}
        >
          open
        </Button>
      </div>

      <div ref={container} data-testid="dialog"></div>

      <ModalForm
        innerRef={innerRef}
        getContainer={() => container.current!}
        okButtonProps={{ ['data-testid']: 'ok' }}
        cancelButtonProps={{ ['data-testid']: 'cancel' }}
        title={'基本表单'}
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

export default Demo;
