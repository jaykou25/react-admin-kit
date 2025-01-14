import { useRef } from 'react';
import { Button, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ProFormInstance } from 'react-admin-kit';

const Convention = (props) => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log('values', values);
    if (props.onFinish) {
      props.onFinish(values);
    }
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

      <div style={{ textAlign: 'end', marginTop: '100px' }}>
        <Button
          data-testid="setBtn"
          style={{ marginRight: '10px' }}
          onClick={() => {
            formRef.current?.setFieldsValue({
              name: 'jack',
              deptId: '2',
              deptName: '技术部',
              isMember: 1,
              gradeId: '1',
              gradeName: 'A',
            });
          }}
        >
          赋值
        </Button>
        <Button
          data-testid="resetDeptBtn"
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields(['deptId,deptName'])}
        >
          重置部门
        </Button>
        <Button
          data-testid="resetGradeBtn"
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([
              'deptId,deptName',
              'gradeId,gradeName',
            ])
          }
        >
          重置部门等级
        </Button>
        <Button
          data-testid="resetAllBtn"
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          重置所有
        </Button>
        <Button
          data-testid="submitBtn"
          type="primary"
          onClick={() => formRef.current?.submit()}
        >
          提交
        </Button>
      </div>
    </div>
  );
};

export default Convention;
