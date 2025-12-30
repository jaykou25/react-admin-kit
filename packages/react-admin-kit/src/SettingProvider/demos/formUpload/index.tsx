import { SettingProvider } from 'react-admin-kit';
import Example from '../../../FormUpload/demos/basic';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      formUploadSetting={{ headers: { authorization: 'authorization-text' } }}
    >
      <Example />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
