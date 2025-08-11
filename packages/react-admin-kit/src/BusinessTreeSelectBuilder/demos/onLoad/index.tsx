import { Space } from 'antd';
import { useState } from 'react';
import { queryCompany } from '../apis';
import { BusinessTreeSelectBuilder } from 'react-admin-kit';

const BusinessTreeSelect = BusinessTreeSelectBuilder<'company'>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
  ],
});

const OnLoad = () => {
  const [companyId, setCompanyId] = useState();

  return (
    <Space>
      <BusinessTreeSelect
        style={{ width: '150px' }}
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
