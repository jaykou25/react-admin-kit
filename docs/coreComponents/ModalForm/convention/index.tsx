import { ModalForm } from 'react-admin-kit';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, Space } from 'antd';
import { columns } from './columns';
import { useRef } from 'react';

const ConventionDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any, formType, formData) => {
    console.log({ values, formType, formData });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', {
              id: '1',
              name: 'tom',
              deptId: '3',
              deptName: '销售部',
              isMember: 1,
              gradeId: '2',
              gradeName: 'B',
            })
          }
        >
          编辑
        </Button>
      </Space>

      <ModalForm title={'基本表单'} innerRef={innerRef} onFinish={onFinish} columns={columns} />
    </div>
  );
};

export default ConventionDemo;
