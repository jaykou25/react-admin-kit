import { FormListContext } from '@ant-design/pro-form';
import { Select } from 'antd';
import { useContext } from 'react';

/** 写这个组件是需要用到 useContext 来拿到表单数组的 index */
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
      placeholder="请选择"
      options={[
        {
          label: '店铺A',
          value: 'a',
          area: 10,
          contacts: '张经理',
        },
        {
          label: '店铺B',
          value: 'b',
          area: 20,
          contacts: '王经理',
        },
      ]}
    />
  );
};

export default ShopSelect;
