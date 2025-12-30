import { Button, Space } from 'antd';
import { useRef, useState } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';

const OnOpenDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();
  const [title, setTitle] = useState('新增');

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
        // 这里没有使用setFieldsValue()是不想引起field touched.
        // ModalForm的属性confirmOnClose默认是true
        formRef.current?.setFields([
          {
            name: 'username',
            value: '王先生',
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
            setTitle('新增');
            innerRef.current?.openModal('new', null);
          }}
        >
          新增
        </Button>

        <Button
          type="primary"
          onClick={() => {
            setTitle('编辑');
            innerRef.current?.openModal('edit', {});
          }}
        >
          编辑
        </Button>

        <Button
          type="primary"
          onClick={() => {
            setTitle('查看');
            innerRef.current?.openModal('read', {});
          }}
        >
          查看
        </Button>
      </Space>

      <ModalForm
        title={title}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={[
          {
            title: '用户名',
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
