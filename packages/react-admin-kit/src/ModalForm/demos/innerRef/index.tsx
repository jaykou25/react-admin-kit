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
          打开弹窗
        </Button>
      </div>

      <ModalForm
        innerRef={innerRef}
        title={'基本表单非受控'}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default InnerRefDemo;
