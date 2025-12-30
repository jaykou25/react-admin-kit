import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { mockAddUser, mockEditUser } from './api';

const OnFinishDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any, formType, formData) => {
    console.log({ values, formType, formData });

    if (formType === 'new') {
      return mockAddUser(values);
    }

    if (formType === 'edit') {
      return mockEditUser({ ...values, id: formData.id });
    }
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('new', { username: '王先生' })
          }
        >
          新增
        </Button>

        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', {
              id: '1',
              username: '陈先生',
            })
          }
        >
          编辑
        </Button>
      </Space>

      <ModalForm
        title={'基本表单'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={[
          {
            title: '用户名',
            dataIndex: 'username',
            required: true,
          },
        ]}
      />
    </div>
  );
};

export default OnFinishDemo;
