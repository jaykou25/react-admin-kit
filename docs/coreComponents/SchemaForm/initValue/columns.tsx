import { Select } from 'antd';

export const getColumns = () => [
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
