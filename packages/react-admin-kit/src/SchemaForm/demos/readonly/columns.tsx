import type { FormColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '联系人',
    dataIndex: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    fieldProps: { style: { display: 'none' } },
    render: () => null,
  },
  {
    title: '负责人',
    dataIndex: 'chargePerson',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '张总', value: '1' },
        { label: '王总', value: '2' },
      ],
    },
  },
  {
    title: '负责人电话',
    dataIndex: 'chargePhone',
  },
  {
    fieldProps: { style: { display: 'none' } },
    render: () => null,
  },
  {
    title: '额外信息',
    dataIndex: 'id',
    readonly: true,
    colProps: { span: 16 },
    formItemProps: {
      labelCol: { flex: '0 0 18.75%' },
    },
    tooltip: {
      title: (
        <div>
          <div style={{ marginBottom: '10px' }}>
            这里演示了只读模式下的自定义显示.
          </div>
          <div style={{ marginBottom: '10px' }}>
            render 函数的第二个参数 record 里不仅包含了表单里的所有值, 还包括了
            initialValues 里的值和 setFieldsValue 里的值.
          </div>
          <div>
            不过需要注意的是如果在 render 函数里用到了表单项里的值, 在
            setFieldsValue 后 render 函数并不会被立即执行. 如果是这种情况请使用
            valueType: dependency
          </div>
        </div>
      ),
      color: '#1a1a1a',
      overlayStyle: {
        maxWidth: '270px',
      },
      overlayInnerStyle: {
        letterSpacing: '0.3px',
        color: '#e1e1e1',
        padding: '10px 18px',
      },
    },

    render: (dom, record, ...rest) => {
      return (
        <LinkButton
          onClick={() =>
            (window.location.href = `/?id=${record.id}&queryId=${record.queryId}&name=${record.name}`)
          }
        >
          queryId: {record.queryId}
        </LinkButton>
      );
    },
  },
  {
    valueType: 'dependency',
    name: ['name'],
    columns: () => {
      return [
        {
          readonly: true,
          title: '依赖演示',
          dataIndex: 'other',
          render: (dom, record) => {
            return `Hi ${record.name}`;
          },
        },
      ];
    },
  },
];
