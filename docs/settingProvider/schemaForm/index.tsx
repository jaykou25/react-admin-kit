import { SettingProvider } from 'react-admin-kit';
import Example from '../../coreComponents/SchemaForm/basic';

const SchemaFormDemo = () => {
  return (
    <SettingProvider schemaFormSetting={{ validateMessages: { required: '${label}为必填项' } }}>
      <Example />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
