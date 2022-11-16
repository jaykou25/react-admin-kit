import { ModalForm, Button } from 'react-admin-kit';
import { columns } from './columns';
import { useRef } from 'react';

import type { ModalFormInnerRefType } from 'react-admin-kit';

const InnerRefDemo = () => {
  const ref = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any, formType, formData) => {
    console.log({ formType, values, formData });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button
          type="primary"
          onClick={() => ref.current?.openModal('new', { username: '王先生', phone: 134 })}
        >
          打开弹窗
        </Button>
      </div>

      <ModalForm innerRef={ref} title={'基本表单非受控'} onFinish={onFinish} columns={columns} />
    </div>
  );
};

export default InnerRefDemo;
