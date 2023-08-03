import { SchemaForm } from 'react-admin-kit';
import { BusinessSelect } from '../basic';

const OneQuery = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        onFinish={(values) => console.log({ values })}
        autoFocusFirstInput={false}
        columns={[
          {
            title: '颜色',
            dataIndex: 'color',
            renderFormItem: () => <BusinessSelect type="color" />,
          },
          {
            title: '颜色2',
            dataIndex: 'color2',
            renderFormItem: () => <BusinessSelect type="color" />,
          },
          {
            title: '颜色3',
            dataIndex: 'color3',
            renderFormItem: () => <BusinessSelect type="color" />,
          },
        ]}
      />
    </div>
  );
};

export default OneQuery;
