import { ModalForm } from 'react-admin-kit';
import { Button } from 'antd';
import { columns } from './columns';
import { useRef, useState } from 'react';

const ReadonlyDemo = () => {
  const ref = useRef();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button
          type="primary"
          onClick={() => ref.current?.openModal('read', { username: '王先生', phone: 134 })}
        >
          打开弹窗
        </Button>
      </div>

      <ModalForm innerRef={ref} title={'基本表单非受控'} onFinish={onFinish} columns={columns} />
    </div>
  );
};

export default ReadonlyDemo;
