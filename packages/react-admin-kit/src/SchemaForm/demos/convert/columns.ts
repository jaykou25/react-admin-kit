import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '时间范围',
    dataIndex: 'time',
    valueType: 'dateRange',
    transform: (vals) => {
      return {
        startTime: vals[0],
        endTime: vals[1],
      };
    },
  },
];
