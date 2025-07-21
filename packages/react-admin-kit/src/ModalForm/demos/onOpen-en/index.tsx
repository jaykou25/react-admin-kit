import { Button, Space } from 'antd';
import { useRef, useState } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';

const TitleMap = { new: 'New', edit: 'Edit', read: 'Read' };

const OnOpenDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();
  const [render, setRender] = useState(1);
  const reRender = () => setRender((val) => val + 1);

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
            innerRef.current?.openModal('new', null, reRender);
          }}
        >
          New
        </Button>

        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('edit', {}, reRender);
          }}
        >
          Edit
        </Button>

        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('read', {}, reRender);
          }}
        >
          Read
        </Button>
      </Space>

      <ModalForm
        title={TitleMap[innerRef.current?.formType || 'new']}
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
