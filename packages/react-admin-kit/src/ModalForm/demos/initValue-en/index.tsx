import { Button } from 'antd';
import { useRef } from 'react';
import { ModalForm, ModalFormInnerRefType } from 'react-admin-kit';
import { getColumns } from './columns';

const InitValueDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => innerRef.current?.openModal()}>
          Open Modal
        </Button>
      </div>

      <ModalForm
        title={'Basic Form'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={getColumns()}
        formProps={{ initialValues: { showPhone: 0 } }}
        confirmOnClose={false}
      />
    </div>
  );
};

export default InitValueDemo;
