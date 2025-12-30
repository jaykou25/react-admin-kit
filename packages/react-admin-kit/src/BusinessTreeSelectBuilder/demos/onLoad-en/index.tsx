import { Space } from 'antd';
import { useState } from 'react';
import { BusinessTreeSelectBuilder } from 'react-admin-kit';

import { queryCompany } from '../apis/index-en';

const BusinessTreeSelect = BusinessTreeSelectBuilder<'company'>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
  ],
  defaultProps: {
    placeholder: 'please choose',
  },
});

const OnLoad = () => {
  const [companyId, setCompanyId] = useState();

  return (
    <Space>
      <BusinessTreeSelect
        style={{ width: '250px' }}
        type="company"
        value={companyId}
        onChange={setCompanyId}
        onLoad={(options) => {
          console.log('tree onload options', options);
          setCompanyId(options[0]?.id);
        }}
      />
    </Space>
  );
};

export default OnLoad;
