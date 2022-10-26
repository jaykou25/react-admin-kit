import { ModalForm } from 'react-admin-kit';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, Space } from 'antd';
import { columns } from './columns';
import { useRef, useState } from 'react';

const OnOpenDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const handleOnOpen = async (formType, formRef) => {
    console.log({ formType });
    if (formType === 'edit' || formType === 'read') {
      return requestData().then(() => {
        formRef.current?.setFieldsValue({ username: '王先生', phone: 134 });
      });
    }
  };

  const requestData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => innerRef.current.openModal('new')}>
          新增
        </Button>

        <Button type="primary" onClick={() => innerRef.current.openModal('edit')}>
          编辑
        </Button>

        <Button type="primary" onClick={() => innerRef.current.openModal('read')}>
          查看
        </Button>
      </Space>

      <ModalForm
        title={'基本表单'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
        onOpen={handleOnOpen}
      />
    </div>
  );
};

export default OnOpenDemo;
