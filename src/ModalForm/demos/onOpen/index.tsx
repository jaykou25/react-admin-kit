import { Button, Space } from 'antd';
import { useRef, useState } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const TitleMap = { new: '新增', edit: '编辑', read: '查看' };

const OnOpenDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>(null);
  const [formType, setFormType] = useState('new');

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const requestData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 800);
    });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('new');
            setFormType('new');
          }}
        >
          新增
        </Button>

        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('edit');
            setFormType('edit');
          }}
        >
          编辑
        </Button>

        <Button
          type="primary"
          onClick={() => {
            innerRef.current?.openModal('read');
            setFormType('read');
          }}
        >
          查看
        </Button>
      </Space>

      <ModalForm
        title={TitleMap[formType]}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
        onOpen={(formType, formRef) => {
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
                {
                  name: 'phone',
                  value: '15800018888',
                  touched: false,
                },
              ]);
            });
          }
        }}
      />
    </div>
  );
};

export default OnOpenDemo;
