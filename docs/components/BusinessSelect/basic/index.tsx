import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { useRef } from 'react';

import { Button, message } from 'antd';

import 'antd/dist/antd.min.css';

const queryColor = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([]), 1000);
  });
};

const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      api: queryColor,
      type: 'color',
      pagination: false,
    },
    {
      api: queryColor,
      type: 'brand',
      pagination: false,
    },
    {
      api: queryColor,
      type: 'company',
      pagination: true,
    },
  ],
});

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      columns={[
        {
          title: '颜色-不分页',
          renderFormItem: () => <BusinessSelect options={[{ label: 1, value: 1 }]} />,
        },
        {
          title: '品牌-不分页',
          renderFormItem: () => <BusinessSelect options={[{ label: 2, value: 1 }]} />,
        },
        {
          title: '公司-分页',
          renderFormItem: () => <BusinessSelect options={[{ label: 2, value: 1 }]} />,
        },
      ]}
    />
  );
};

export default Basic;
