import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';

import { getColumns } from './columns';

const InnerRefDataDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>(null);

  const onFinish = async (values: any) => {
    const { otherId } = innerRef.current?.data;
    console.log({ values, otherId });
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
