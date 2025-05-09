import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const ReadonlyDemo = () => {
  const ref = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => ref.current?.openModal()}>
          打开弹窗
        </Button>
        <Button
          type="primary"
          onClick={() =>
            ref.current?.openModal('read', {
              username: '王先生',
              phone: 134,
              isMember: '1',
              grade: '一级',
              other: '额外',
            })
          }
        >
          只读模式
        </Button>
      </Space>

      <ModalForm
        innerRef={ref}
        title={'基本表单非受控'}
        onFinish={onFinish}
        columns={columns}
        formProps={{
          layout: 'horizontal',
          labelCol: { span: 6 },
        }}
      />
    </div>
  );
};

export default ReadonlyDemo;
