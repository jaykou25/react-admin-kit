import { Space } from 'antd';
import { useState } from 'react';
import { BusinessSelectBuilder } from 'react-admin-kit';
import { queryBrand, queryUser } from '../apis';

const BusinessSelect = BusinessSelectBuilder<'user' | 'brand'>({
  apis: [
    {
      api: queryUser,
      type: 'user',
      pagination: false,
    },
    {
      api: queryBrand,
      type: 'brand',
      pagination: true,
    },
  ],
});

const OnLoad = () => {
  const [userId, setUserId] = useState();
  const [user2Id, setUser2Id] = useState();
  const [brandId, setBrandId] = useState();
  const [brand, setBrand] = useState<any>();

  return (
    <Space>
      <BusinessSelect
        type="user"
        value={userId}
        onChange={setUserId}
        onLoad={(options) => {
          setUserId(options[0]?.id);
        }}
        style={{ width: '120px' }}
      />
      <BusinessSelect
        type="user"
        value={user2Id}
        onChange={setUser2Id}
        queryParams={{ type: 1 }}
        onLoad={(options) => {
          setUser2Id(options[0]?.id);
        }}
        style={{ width: '120px' }}
      />
      <BusinessSelect
        type="brand"
        value={brandId}
        onChange={setBrandId}
        onLoad={(options) => {
          setBrandId(options[0]?.id);
        }}
        style={{ width: '120px' }}
      />
      <BusinessSelect
        type="brand"
        labelInValue
        value={brand}
        onChange={setBrand}
        onLoad={(options) => {
          const op = options[0];
          setBrand({ label: op.name, value: op.id });
        }}
        style={{ width: '120px' }}
      />
    </Space>
  );
};

export default OnLoad;
