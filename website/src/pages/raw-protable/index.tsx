import ProTable from '@ant-design/pro-table';

export default function () {
  return (
    <div>
      <ProTable
        columns={[
          {
            title: '序号',
            valueType: 'index',
          },
          {
            title: '冲突',
            dataIndex: 'hi',

            hideInSearch: true,
            search: true,
          },
          {
            title: 'name',
            dataIndex: 'name',
          },
          {
            hideInTable: true,
            // hideInForm: true,
            hideInSearch: false,
            search: true,
            valueType: 'dependency',
            name: ['name'],
            columns: ({ name }) => {
              console.log('name', name);

              if (name && name.length > 2) {
                return [
                  {
                    title: 'num',
                    dataIndex: 'num',
                    fieldProps: {
                      placeholder: name,
                    },
                  },
                  {
                    title: 'num2',
                    dataIndex: 'num2',
                    fieldProps: {
                      placeholder: name,
                    },
                  },
                ];
              }

              return [];
            },
          },
          {
            title: 'new',
            dataIndex: 'new',
          },
        ]}
        dataSource={[
          {
            name: 'jack',
          },
        ]}
      />
    </div>
  );
}
