import { ModalForm, Button } from 'react-admin-kit';
import { columns } from './columns';
import { useState } from 'react';

const MultipleCol = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          打开弹窗
        </Button>
      </div>

      <ModalForm
        width={600}
        title={'多列排布'}
        open={open}
        onCancel={() => setOpen(false)}
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
