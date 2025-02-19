import { useRef } from 'react';
import { Button, ProForm, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ProFormInstance } from 'react-admin-kit';
import { Form } from 'antd';

const ConventionValueBaseName = (props) => {
  const formRef = useRef<ProFormInstance>();

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log({ values });
    if (props.onFinish) {
      props.onFinish(values);
    }
  };

  return (
    <>
      <ProForm
        onFinish={onFinish}
        form={form}
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
      </ProForm>

      <div style={{ textAlign: 'end' }}>
        <Button
          data-testid="setBtn"
          style={{ marginRight: '10px' }}
          onClick={() => {
            formRef.current?.setFieldsValue({
              info: {
                name: 'jack',
                deptId: '2',
                deptName: '技术部',
                isMember: 1,
                gradeId: '1',
                gradeName: 'A',
              },
            });
          }}
        >
          赋值
        </Button>
        <Button
          data-testid="resetDeptBtn"
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([['info', 'deptId,deptName']])
          }
        >
          重置部门
        </Button>
        <Button
          data-testid="resetGradeBtn"
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
    </>
  );
};

export default ConventionValueBaseName;
