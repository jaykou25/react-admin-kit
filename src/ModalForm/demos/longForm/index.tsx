import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const LongForm = () => {
  const innerRef = useRef<ModalFormInnerRefType>(null);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => innerRef.current?.openModal()}>
          打开弹窗
        </Button>
      </div>

      <ModalForm
        title={'长表单验证'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default LongForm;
