import { ModalForm, SettingProvider } from 'react-admin-kit';

const Demo = ({ width }) => {
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
      <ModalForm open width={width} columns={[]} />
    </SettingProvider>
  );
};

export default Demo;
