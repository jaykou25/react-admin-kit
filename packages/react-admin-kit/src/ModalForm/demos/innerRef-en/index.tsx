import { useRef } from 'react';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ModalFormInnerRefType } from 'react-admin-kit';

const InnerRefDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', { username: 'Jack' })
          }
        >
          Open Modal
        </Button>
      </div>

      <ModalForm
        innerRef={innerRef}
        title={'Basic Uncontrolled Form'}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default InnerRefDemo;
