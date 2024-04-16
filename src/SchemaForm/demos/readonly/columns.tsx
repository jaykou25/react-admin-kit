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
    tooltip:
      '这里演示了在只读模式下使用 render 函数自定义显示的用法. render 函数的第二个参数 record 里不仅包含了表单里的所有值, 还包括了 initialValues 里的值和 setFieldsValue 里的值, 使用非常方便. \n但是有一点需要注意的是如果在 render 函数里用到了表单项里的值, 在 setFieldsValue 时 render 函数并不会被及时执行, 如果是这种情况可以使用 valueType: dependency',
    render: (dom, record, ...rest) => {
      return (
        <LinkButton
          onClick={() =>
            (window.location.href = `/?id=${record.id}&queryId=${record.queryId}&name=${record.name}`)
          }
        >
          id: {record.id} queryId: {record.queryId} name: {record.name}
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
            return `hi ${record.name}`;
          },
        },
      ];
    },
  },
];
