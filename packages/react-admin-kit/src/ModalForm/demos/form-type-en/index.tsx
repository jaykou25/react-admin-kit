import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const Demo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => innerRef.current?.openModal()}>
          New
        </Button>
        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', {
              username: 'Mr. Wang',
              isMember: '1',
              grade: 'Level 1',
              other: 'Extra',
            })
          }
        >
          Edit
        </Button>
        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('read', {
              username: 'Mr. Chen',
              isMember: '1',
              grade: 'Level 2',
              other: 'Extra 2',
            })
          }
        >
          Read Only
        </Button>
      </Space>

      <ModalForm
        innerRef={innerRef}
        title={'Form Types'}
        onFinish={onFinish}
        columns={columns}
        formProps={{
          layout: 'horizontal',
          labelCol: { span: 8 },
        }}
        confirmOnClose={false}
      />
    </div>
  );
};

export default Demo;
