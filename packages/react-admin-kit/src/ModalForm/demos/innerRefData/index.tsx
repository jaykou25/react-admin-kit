import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';

import { getColumns } from './columns';

const InnerRefDataDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = async (values: any) => {
    console.log({ values, data: innerRef.current?.data });
  };

  return (
    <div>
      <Button type="primary" onClick={() => innerRef.current?.openModal()}>
        新建表单
      </Button>
      <ModalForm
        columns={getColumns()}
        innerRef={innerRef}
        onFinish={onFinish}
      />
    </div>
  );
};

export default InnerRefDataDemo;
