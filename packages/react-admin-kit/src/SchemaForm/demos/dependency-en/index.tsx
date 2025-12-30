import { SchemaForm } from 'react-admin-kit';

const DependencyDemo = () => {
  return (
    <div>
      <SchemaForm
        name="demo-dependency"
        columns={[
          {
            title: 'Show Phone',
            dataIndex: 'showPhone',
            valueType: 'radio',
            initialValue: 0,
            fieldProps: {
              options: [
                { label: 'Yes', value: 1 },
                { label: 'No', value: 0 },
              ],
            },
          },
          {
            valueType: 'dependency',
            name: ['showPhone'], // You can specify multiple fields here to observe multiple values
            columns: ({ showPhone }) => {
              if (showPhone) {
                return [
                  {
                    title: 'Phone',
                    dataIndex: 'phone',
                  },
                ];
              } else {
                return [];
              }
            },
          },
        ]}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default DependencyDemo;
