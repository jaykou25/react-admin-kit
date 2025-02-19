import { useRef } from 'react';
import { Button, ModalForm, ModalFormInnerRefType } from 'react-admin-kit';

export default function () {
  const innerRef = useRef<ModalFormInnerRefType>();
  return (
    <div>
      <Button
        onClick={() => innerRef.current?.openModal('edit', { name: 'Jack2' })}
      >
        打开
      </Button>
      <ModalForm
        formProps={{
          initialValues: { name: 'Jack', phone: 123 },
        }}
        innerRef={innerRef}
        columns={[
          {
            title: 'name',
            dataIndex: 'name',
            initialValue: 'Hello',
          },
          {
            title: 'phone',
            dataIndex: 'phone',
          },
        ]}
      />
    </div>
  );
}
