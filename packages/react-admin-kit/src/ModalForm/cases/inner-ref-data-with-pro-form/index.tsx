import { Button } from 'antd';
import { useRef } from 'react';
import { ModalForm, ProForm, SchemaForm } from 'react-admin-kit';

const Demo = ({
  onModalFinish,
  onProFormFinish,
  fieldPropsFn,
  proFieldPropsFn,
  onProFormSet,
  onModalFormSet,
}) => {
  const proFormInnerRef = useRef<any>();
  const modalFormInnerRef = useRef<any>();

  return (
    <>
      <Button
        data-testid="pro-form-set-btn"
        onClick={() => onProFormSet(proFormInnerRef)}
      >
        proFormSet
      </Button>
      <Button
        data-testid="modal-form-set-btn"
        onClick={() => onModalFormSet(modalFormInnerRef)}
      >
        modalFormSet
      </Button>
      <Button
        data-testid="open-btn"
        onClick={() => modalFormInnerRef.current?.openModal()}
      >
        open
      </Button>
      <ProForm
        innerRef={proFormInnerRef}
        onFinish={onProFormFinish}
        submitter={{
          submitButtonProps: {
            'data-testid': 'pro-submit-btn',
          },
        }}
      >
        <SchemaForm
          embed
          columns={[
            {
              title: 'proform',
              dataIndex: 'proUserId',
              valueType: 'select',
              fieldProps: (form, _innerRef) => {
                return {
                  open: true,
                  options: [
                    {
                      'data-testid': 'proUserOption1',
                      label: '员工1',
                      value: 'prouser1',
                    },
                    {
                      label: '员工2',
                      value: 'prouser2',
                    },
                  ],
                  onChange: () => {
                    proFieldPropsFn(_innerRef?.current?.data);
                  },
                };
              },
            },
          ]}
        />

        <ModalForm
          onFinish={onModalFinish}
          innerRef={modalFormInnerRef}
          okButtonProps={{
            'data-testid': 'modal-submit-btn',
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
      </ProForm>
    </>
  );
};

export default Demo;
