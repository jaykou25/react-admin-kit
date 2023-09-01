import { Select } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '是否显示电话',
    dataIndex: 'showPhone',
    renderFormItem: () => (
      <Select
        options={[
          { label: '是', value: 1 },
          { label: '否', value: 0 },
        ]}
      />
    ),
    render: (text) => (text ? '是' : '否'),
  },
  {
    valueType: 'dependency',
    name: ['showPhone'],
    columns: ({ showPhone }) => {
      if (showPhone) {
        return [
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ];
      } else {
        return [];
      }
    },
  },
];
