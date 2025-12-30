import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '多选标签',
    dataIndex: 'tags',
    valueType: 'select',
    fieldProps: {
      mode: 'multiple',
      options: [
        { label: '高大', value: 'tag01' },
        { label: '英俊', value: 'tag02' },
        { label: '富有', value: 'tag03' },
      ],
    },
    transform: (val) => {
      return { tagIds: val.join(',') };
    },
  },
  {
    title: '有效期',
    dataIndex: 'validDate',
    valueType: 'dateRange',
  },
];
