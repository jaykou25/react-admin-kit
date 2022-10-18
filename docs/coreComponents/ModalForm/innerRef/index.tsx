import { ModalForm } from 'react-admin-kit';
import { Button } from 'antd';
import { columns } from './columns';
import { useRef, useState } from 'react';

const InnerRefDemo = () => {
  const ref = useRef();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const handleOnOpen = async (formRef) => {
    return requestData().then(() => {
      formRef.current?.setFieldsValue({ username: '王先生', phone: 134 });
    });
  };

  const requestData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button
          type="primary"
          onClick={() => ref.current?.openModal({ username: '王先生', phone: 134 })}
        >
          打开弹窗
        </Button>
      </div>

      <ModalForm innerRef={ref} title={'基本表单非受控'} onFinish={onFinish} columns={columns} />
    </div>
  );
};

export default InnerRefDemo;
