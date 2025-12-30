import Example from '../../../ModalForm/demos/basic-en';
import { SettingProvider } from 'react-admin-kit';

const ModalDemo = () => {
  return (
    <SettingProvider
      modalFormSetting={{
        width: {
          xs: '100%',
          sm: '90%',
          md: '80%',
          lg: '70%',
          xl: '50%',
          xxl: '40%',
        },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default ModalDemo;
