import { SchemaForm, SettingProvider } from 'react-admin-kit';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      schemaFormSetting={{
        validateMessages: { required: '${label}为必填项😊' },
      }}
    >
      <SchemaForm
        name="basic"
        columns={[
          {
            title: 'user',
            dataIndex: 'user',
            required: true,
          },
        ]}
        submitter={{
          submitButtonProps: { ['data-testid']: 'submit' },
        }}
      />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
