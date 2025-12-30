import { useRef } from 'react';
import type { SchemaFormInnerRefType } from 'react-admin-kit';
import { SchemaForm } from 'react-admin-kit';

import { getColumns } from './columns';

const Demo = () => {
  const innerRef = useRef<SchemaFormInnerRefType>();

  const onFinish = async (values: any) => {
    console.log({ values, otherValues: innerRef.current?.data });
  };

  return (
    <SchemaForm
      columns={getColumns()}
      innerRef={innerRef}
      onFinish={onFinish}
      submitter
      autoFocusFirstInput={false}
    />
  );
};

export default Demo;
