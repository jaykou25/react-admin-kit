import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const MultipleCol = () => {
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
        width={600}
        title={'多列排布'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
        formProps={{
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        }}
      />
    </div>
  );
};

export default MultipleCol;
