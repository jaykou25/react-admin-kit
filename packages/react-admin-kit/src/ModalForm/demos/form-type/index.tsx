import { Button, Space } from 'antd';
import { useRef, useState } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const Demo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const [readonly, setReadonly] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setReadonly(false);
            innerRef.current?.openModal();
          }}
        >
          新增
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setReadonly(false);
            innerRef.current?.openModal('edit', {
              username: '王先生',
              isMember: '1',
              grade: '一级',
              other: '额外',
            });
          }}
        >
          编辑
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setReadonly(true);
            innerRef.current?.openModal('read', {
              username: '陈先生',
              isMember: '1',
              grade: '二级',
              other: '额外2',
            });
          }}
        >
          只读模式
        </Button>
      </Space>

      <ModalForm
        innerRef={innerRef}
        title={'表单类型'}
        onFinish={onFinish}
        columns={columns}
        formProps={{
          layout: 'horizontal',
          labelCol: { span: 6 },
          readonlyType: 'descriptions',
          descriptionsProps: {
            bordered: true,
            size: 'small',
          },
          grid: true,
          colProps: {
            span: readonly ? 12 : 24,
          },
        }}
      />
    </div>
  );
};

export default Demo;
