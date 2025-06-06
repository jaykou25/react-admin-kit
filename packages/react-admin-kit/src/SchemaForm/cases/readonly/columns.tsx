import type { FormColumnType } from 'react-admin-kit';

let n = 1;

export const columns: FormColumnType[] = [
  {
    title: 'name',
    dataIndex: 'name',
  },

  {
    title: '额外信息',
    dataIndex: 'id',
    readonly: true,
    render: (dom, record) => {
      // console.log(`in render ${n}`, record.queryId);
      n++;
      return <div data-testid="result">{record.queryId}</div>;
    },
  },
];
