import { Button, Space } from 'antd';
import { useRef, useState } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';

const OnOpenDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();
  const [title, setTitle] = useState('New');

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const requestData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 800);
    });
  };

  const handleOnOpen = (formType, formRef) => {
    if (formType === 'edit' || formType === 'read') {
      return requestData().then(() => {
        // We don't use setFieldsValue() here to avoid triggering field touched.
        // ModalForm's confirmOnClose property defaults to true
        formRef.current?.setFields([
          {
            name: 'username',
            value: 'Mr. Wang',
            touched: false,
          },
        ]);
      });
    }
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setTitle('New');
            innerRef.current?.openModal('new', null);
          }}
        >
          New
        </Button>

        <Button
          type="primary"
          onClick={() => {
            setTitle('Edit');
            innerRef.current?.openModal('edit', {});
          }}
        >
          Edit
        </Button>

        <Button
          type="primary"
          onClick={() => {
            setTitle('Read');
            innerRef.current?.openModal('read', {});
          }}
        >
          Read
        </Button>
      </Space>

      <ModalForm
        title={title}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={[
          {
            title: 'Username',
            dataIndex: 'username',
            required: true,
          },
        ]}
        onOpen={handleOnOpen}
      />
    </div>
  );
};

export default OnOpenDemo;
