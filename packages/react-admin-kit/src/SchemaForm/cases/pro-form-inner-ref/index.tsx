import { useRef } from 'react';
import { ProForm, SchemaForm, SchemaFormInnerRefType } from 'react-admin-kit';

/**
 * ProForm 内嵌 SchemaForm 的 innerRef 测试
 * 验证 fieldProps 函数中 innerRef 的取值和赋值功能
 *
 */

const Demo = () => {
  const innerRef = useRef<SchemaFormInnerRefType>();
  return (
    <div>
      <ProForm innerRef={innerRef}>
        <SchemaForm
          embed
          valueBaseName="userInfo"
          columns={[
            {
              title: 'User',
              dataIndex: 'userId',
              valueType: 'select',
              fieldProps: (form, innerRef) => ({
                open: true,
                placement: 'topLeft',
                options: [
                  {
                    'data-testid': 'user1',
                    label: '员工1',
                    value: 'user1',
                    userCode: 'c01',
                    deptName: '部门A',
                    deptId: '1',
                  },
                  {
                    'data-testid': 'user2',
                    label: '员工2',
                    value: 'user2',
                    userCode: 'c02',
                    deptName: '部门B',
                    deptId: '2',
                  },
                ],
                onChange: (val, option) => {
                  if (val) {
                    innerRef.current?.setData({ deptId: option.deptId });
                  } else {
                    innerRef.current?.setData({ deptId: undefined });
                  }

                  form?.setFieldsValue({ deptName: option.deptName });
                },
              }),
            },
          ]}
        />

        <div>
          <SchemaForm
            embed
            columns={[
              {
                valueType: 'dependency',
                name: [['userInfo', 'userId']],
                columns: () => {
                  return [
                    {
                      title: '部门',
                      dataIndex: 'deptName',
                      fieldProps: (form, innerRef) => {
                        return {
                          disabled: innerRef.current?.data.deptId === '1',
                        };
                      },
                    },
                  ];
                },
              },
            ]}
          />
        </div>
      </ProForm>
    </div>
  );
};

export default Demo;
