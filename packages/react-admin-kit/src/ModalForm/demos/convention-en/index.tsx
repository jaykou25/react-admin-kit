import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const ConventionDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = async (values: any, formType, formData) => {
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
              name: 'Tom',
              deptId: '3',
              deptName: 'Sales Department',
              isMember: 1,
              gradeId: '2',
              gradeName: 'Grade B',
            })
          }
        >
          Edit
        </Button>
      </Space>

      <ModalForm
        title={'Basic Form'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default ConventionDemo;
