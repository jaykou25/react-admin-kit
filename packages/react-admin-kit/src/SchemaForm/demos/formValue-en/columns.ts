import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Multiple Tags',
    dataIndex: 'tags',
    valueType: 'select',
    fieldProps: {
      mode: 'multiple',
      options: [
        { label: 'Tall', value: 'tag01' },
        { label: 'Handsome', value: 'tag02' },
        { label: 'Wealthy', value: 'tag03' },
      ],
    },
    transform: (val) => {
      return { tagIds: val.join(',') };
    },
  },
  {
    title: 'Valid Period',
    dataIndex: 'validDate',
    valueType: 'dateRange',
  },
];
