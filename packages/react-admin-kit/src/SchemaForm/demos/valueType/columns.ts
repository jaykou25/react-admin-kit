import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: 'money',
    dataIndex: 'money',
    valueType: 'money',
    initialValue: 1234.25,
    fieldProps: {
      precision: 2,
      style: { width: '80%' },
    },
  },
  {
    title: 'digit',
    dataIndex: 'digit',
    valueType: 'digit',
    initialValue: 8,
  },
  {
    title: 'date',
    dataIndex: 'date',
    valueType: 'date',
    initialValue: new Date(),
  },
  {
    title: 'dateRange',
    dataIndex: 'dateRange',
    valueType: 'dateRange',
    initialValue: ['2023-8-1', new Date()],
    colProps: { span: 16 },
  },
  {
    title: 'select',
    dataIndex: 'select',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: 'option 1', value: 1 },
        { label: 'option 2', value: 2 },
      ],
    },
    initialValue: 1,
  },
  {
    title: 'radio',
    dataIndex: 'radio',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    },
    initialValue: 1,
  },
  {
    title: 'textarea',
    dataIndex: 'textarea',
    valueType: 'textarea',
    initialValue: 'The only way to do great work is to love what you do.',
  },
];
