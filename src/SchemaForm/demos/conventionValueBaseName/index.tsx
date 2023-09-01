import { useRef } from 'react';
import { Button, ProForm, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ProFormInstance } from 'react-admin-kit';

const ConventionValueBaseName = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = async (values: any) => {
    console.log({ values });
  };

  return (
    <ProForm
      onFinish={onFinish}
      formRef={formRef}
      autoFocusFirstInput={false}
      submitter={false}
      initialValues={{
        info: {
          name: 'tom',
          deptId: '3',
          deptName: '销售部',
          isMember: 1,
          gradeId: '2',
          gradeName: 'B',
        },
      }}
    >
      <SchemaForm embed valueBaseName="info" columns={columns} />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              info: {
                name: 'jack',
                deptId: '2',
                deptName: '技术部',
                isMember: 1,
                gradeId: '1',
                gradeName: 'A',
              },
            })
          }
        >
          赋值
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([['info', 'deptId,deptName']])
          }
        >
          重置部门
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([
              ['info', 'deptId,deptName'],
              ['info', 'gradeId,gradeName'],
            ])
          }
        >
          重置部门等级
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          重置所有
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </ProForm>
  );
};

export default ConventionValueBaseName;
