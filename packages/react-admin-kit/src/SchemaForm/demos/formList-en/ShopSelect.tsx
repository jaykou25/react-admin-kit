import { FormListContext } from '@ant-design/pro-form';
import { Select } from 'antd';
import { useContext } from 'react';

/** This component uses useContext to get the index of the form list */
const ShopSelect = (props) => {
  const field = useContext(FormListContext);
  const { value, onChange, form } = props;
  return (
    <Select
      value={value}
      onChange={(val, option: any) => {
        onChange(val, option);
        const { area, contacts } = option;

        const newData = form.getFieldValue('shopList');
        const index = field.name;
        newData[index] = { ...newData[index], area, contacts };

        form.setFieldsValue({ shopList: newData });
      }}
      options={[
        {
          label: 'Shop A',
          value: 'a',
          area: 10,
          contacts: 'Manager Zhang',
        },
        {
          label: 'Shop B',
          value: 'b',
          area: 20,
          contacts: 'Manager Wang',
        },
      ]}
    />
  );
};

export default ShopSelect;
