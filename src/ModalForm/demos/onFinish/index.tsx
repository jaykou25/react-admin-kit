import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const OnFinishDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any, formType, formData) => {
    console.log({ values, formType, formData });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => innerRef.current?.openModal('new')}
        >
          新增
        </Button>

        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', {
              id: '1',
              username: '王先生',
              phone: '15800018888',
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
        columns={columns}
      />
    </div>
  );
};

export default OnFinishDemo;
