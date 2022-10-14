import { Select } from 'antd';
import { useState } from 'react';
import BaseSelect from './components/BaseSelect';

const BusinessSelectBuilder = ({ apis = [] }) => {
  return (props) => {
    const { type, ...rest } = props;

    const [golbalDataSource, setGlobalDataSource] = useState({});
    console.log('hello');

    const target = apis.find((item) => item.type === type);

    return null;

    if (target.pagination) {
      return <div>page</div>;
    }

    return <BaseSelect loadFunction={target.api} {...rest} />;
  };
};

export default BusinessSelectBuilder;
