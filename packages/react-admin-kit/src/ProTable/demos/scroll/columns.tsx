import { LinkButton, TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  // 首列固定
  {
    title: '工号',
    dataIndex: 'employeeId',
    fixed: 'left',
    width: 120,
    required: true,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
    required: true,
  },
  {
    title: '部门',
    dataIndex: 'department',
    width: 120,
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '技术部', value: 'tech' },
        { label: '产品部', value: 'product' },
        { label: '设计部', value: 'design' },
        { label: '市场部', value: 'marketing' },
      ],
    },
  },
  {
    title: '职位',
    dataIndex: 'position',
    width: 120,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    width: 130,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 180,
  },
  {
    title: '入职日期',
    dataIndex: 'hireDate',
    valueType: 'date',
    width: 120,
  },
  {
    title: '基本工资',
    dataIndex: 'baseSalary',
    valueType: 'digit',
    width: 120,
    hideInSearch: true,
  },
  {
    title: '绩效奖金',
    dataIndex: 'bonus',
    valueType: 'digit',
    width: 120,
    hideInSearch: true,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'radio',
    width: 80,
    fieldProps: {
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
      ],
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    valueType: 'digit',
    width: 80,
  },
  {
    title: '学历',
    dataIndex: 'education',
    width: 100,
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '本科', value: 'bachelor' },
        { label: '硕士', value: 'master' },
        { label: '博士', value: 'phd' },
      ],
    },
  },
  {
    title: '毕业院校',
    dataIndex: 'school',
    width: 150,
    hideInSearch: true,
  },
  {
    title: '专业',
    dataIndex: 'major',
    width: 150,
    hideInSearch: true,
  },
  {
    title: '工作经验',
    dataIndex: 'experience',
    width: 100,
    valueType: 'digit',
    hideInSearch: true,
  },
  {
    title: '紧急联系人',
    dataIndex: 'emergencyContact',
    width: 120,
    hideInSearch: true,
  },
  {
    title: '紧急联系电话',
    dataIndex: 'emergencyPhone',
    width: 140,
    hideInSearch: true,
  },
  {
    title: '居住地址',
    dataIndex: 'address',
    width: 200,
    hideInSearch: true,
  },
  {
    title: '身份证号',
    dataIndex: 'idCard',
    width: 180,
    hideInSearch: true,
  },
  {
    title: '银行卡号',
    dataIndex: 'bankAccount',
    width: 180,
    hideInSearch: true,
  },
  {
    title: '社保账号',
    dataIndex: 'socialSecurity',
    width: 150,
    hideInSearch: true,
  },
  {
    title: '公积金账号',
    dataIndex: 'housingFund',
    width: 150,
    hideInSearch: true,
  },
  // 末列固定
  {
    title: '操作',
    valueType: 'option',
    fixed: 'right',
    width: 150,
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        编辑
      </LinkButton>,
    ],
  },
];
