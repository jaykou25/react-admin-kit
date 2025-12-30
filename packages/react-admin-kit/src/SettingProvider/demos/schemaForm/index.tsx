import Demo from '../../../SchemaForm/demos/basic';
import { SettingProvider } from 'react-admin-kit';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      schemaFormSetting={{
        validateMessages: { required: '${label}为必填项😊' },
      }}
    >
      <Demo />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
