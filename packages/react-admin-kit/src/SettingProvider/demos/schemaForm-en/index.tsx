import Demo from '../../../SchemaForm/demos/basic-en';
import { SettingProvider } from 'react-admin-kit';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      schemaFormSetting={{
        validateMessages: { required: '${label} is required 😊' },
      }}
    >
      <Demo />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
