import { Button, Space } from 'antd';
import { useRef, useState } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';

const TitleMap = { new: '新增', edit: '编辑', read: '查看' };

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
            innerRef.current?.openModal('new', null, reRender);
          }}
        >
          新增
        </Button>

        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('edit', {}, reRender);
          }}
        >
          编辑
        </Button>

        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('read', {}, reRender);
          }}
        >
          查看
        </Button>
      </Space>

      <ModalForm
        title={TitleMap[innerRef.current?.formType || 'new']}
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
