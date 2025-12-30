import React from 'react';
import { SettingProvider, SchemaForm } from 'react-admin-kit';

const SchemaFormDemo: React.FC = () => {
  return (
    <SettingProvider
      schemaFormSetting={{
        descriptionsProps: {
          size: 'small',
        },
      }}
    >
      <SchemaForm
        readonly
        readonlyType="descriptions"
        descriptionsProps={{
          bordered: true,
        }}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            valueType: 'text',
          },
        ]}
        initialValues={{
          name: 'test value',
        }}
      />
    </SettingProvider>
  );
};

export default SchemaFormDemo;