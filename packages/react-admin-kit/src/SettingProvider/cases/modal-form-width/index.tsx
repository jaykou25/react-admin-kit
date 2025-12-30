import { ModalForm, SettingProvider } from 'react-admin-kit';
import { ConfigProvider } from 'antd';

const Demo = ({ width }) => {
  return (
    <ConfigProvider theme={{ hashed: false }}>
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
    </ConfigProvider>
  );
};

export default Demo;
