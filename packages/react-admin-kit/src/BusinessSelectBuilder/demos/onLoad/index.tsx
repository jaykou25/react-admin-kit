import { Space } from 'antd';
import { useState } from 'react';
import BusinessSelect from '../BusinessSelect';

const OnLoad = () => {
  const [userId, setUserId] = useState();
  const [user2Id, setUser2Id] = useState();
  const [brandId, setBrandId] = useState();
  const [brand, setBrand] = useState<any>();

  return (
    <Space>
      <BusinessSelect
        style={{ width: '120px' }}
        value={userId}
        type="user"
        onLoad={(options) => {
          setUserId(options[0]?.id);
        }}
      />
      <BusinessSelect
        style={{ width: '120px' }}
        type="user"
        value={user2Id}
        queryParams={{ type: 1 }}
        onLoad={(options) => {
          setUser2Id(options[0]?.id);
        }}
      />
      <BusinessSelect
        style={{ width: '120px' }}
        type="brand"
        value={brandId}
        onLoad={(options) => {
          setBrandId(options[0]?.id);
        }}
      />
      <BusinessSelect
        style={{ width: '120px' }}
        type="brand"
        labelInValue
        value={brand}
        onLoad={(options) => {
          const op = options[0];
          setBrand({ label: op.name, value: op.id });
        }}
      />
    </Space>
  );
};

export default OnLoad;
