import { Button } from 'antd';
import { useRef } from 'react';
import { ModalForm } from 'react-admin-kit';
import { getColumns } from './columns';

const InitValueDemo = () => {
  const innerRef = useRef<any>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => innerRef.current.openModal()}>
          打开弹窗
        </Button>
      </div>

      <ModalForm
        title={'基本表单'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={getColumns()}
        formProps={{ initialValues: { showPhone: 0 } }}
      />
    </div>
  );
};

export default InitValueDemo;
