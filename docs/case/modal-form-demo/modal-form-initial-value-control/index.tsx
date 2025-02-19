import { useRef, useState } from 'react';
import { Button, ModalForm } from 'react-admin-kit';

export default function () {
  const [open, setOpen] = useState(false);
  const formDataRef = useRef<any>({});
  return (
    <div>
      <Button
        onClick={() => {
          formDataRef.current = { name: 'Jack2', phone: 123 };
          setOpen(true);
        }}
      >
        打开
      </Button>
      <ModalForm
        open={open}
        onCancel={() => setOpen(false)}
        formProps={{
          initialValues: formDataRef.current,
        }}
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
