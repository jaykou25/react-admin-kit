import { Space } from 'antd';
import { useState } from 'react';
import { BusinessTreeSelect } from '../basic/index';

const OnLoad = () => {
  const [companyId, setCompanyId] = useState();

  return (
    <Space>
      <BusinessTreeSelect
        style={{ width: '150px' }}
        type="company"
        value={companyId}
        onLoad={(options) => {
          console.log('tree onload options', options);
          setCompanyId(options[0]?.id);
        }}
      />
    </Space>
  );
};

export default OnLoad;
