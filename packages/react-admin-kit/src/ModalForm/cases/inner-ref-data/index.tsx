import { Button } from 'antd';
import { useRef } from 'react';
import { ModalForm } from 'react-admin-kit';

const Demo = ({ onFinish, fieldPropsFn, onSet }) => {
  const innerRef = useRef<any>();

  return (
    <>
      <Button data-testid="set-btn" onClick={() => onSet(innerRef)}>
        set
      </Button>
      <Button
        data-testid="open-btn"
        onClick={() => innerRef.current?.openModal()}
      >
        open
      </Button>
      <ModalForm
        onFinish={onFinish}
        innerRef={innerRef}
        okButtonProps={{
          'data-testid': 'submit-btn',
        }}
        columns={[
          {
            title: 'nameinput',
            dataIndex: 'userId',
            valueType: 'select',
            fieldProps: (form, _innerRef) => {
              return {
                open: true,
                options: [
                  {
                    'data-testid': 'userOption1',
                    label: '员工1',
                    value: 'user1',
                    userCode: 'c01',
                    deptName: '部门A',
                    deptId: '1',
                  },
                  {
                    label: '员工2',
                    value: 'user2',
                    userCode: 'c02',
                    deptName: '部门B',
                    deptId: '2',
                  },
                ],
                onChange: () => {
                  fieldPropsFn(_innerRef?.current?.data);
                },
              };
            },
          },
        ]}
      />
    </>
  );
};

export default Demo;
