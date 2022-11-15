import { SchemaForm, Button } from 'react-admin-kit';
import { columns } from './columns';
import { useRef } from 'react';

import type { ProFormInstance } from 'react-admin-kit';

const Convention = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
        initialValues={{
          name: 'tom',
          deptId: '3',
          deptName: '销售部',
          isMember: 1,
          gradeId: '2',
          gradeName: 'B',
        }}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              name: 'jack',
              deptId: '2',
              deptName: '技术部',
              isMember: 1,
              gradeId: '1',
              gradeName: 'A',
            })
          }
        >
          赋值
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields(['deptId,deptName'])}
        >
          重置部门
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields(['deptId,deptName', 'gradeId,gradeName'])}
        >
          重置部门等级
        </Button>
        <Button style={{ marginRight: '10px' }} onClick={() => formRef.current?.resetFields()}>
          重置所有
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default Convention;
