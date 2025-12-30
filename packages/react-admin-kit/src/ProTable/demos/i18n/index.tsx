import { useContext } from 'react';
import { ConfigProvider } from 'antd';
import ProConfigContext, { createIntl } from '@ant-design/pro-provider';
import { SettingProvider } from 'react-admin-kit';
import App from '../basic-en/index';

import enUS from 'antd/locale/en_US';
import enUsPro from '@ant-design/pro-provider/es/locale/en_US';
import enUSRak from 'react-admin-kit/locale/en_US';

const Wrapper = () => {
  const values = useContext(ProConfigContext);
  const enUSPro = createIntl('en_US', enUsPro);

  return (
    <ConfigProvider locale={enUS}>
      <ProConfigContext.Provider
        value={{
          ...values,
          intl: enUSPro,
        }}
      >
        <SettingProvider locale={enUSRak}>
          <App />
        </SettingProvider>
      </ProConfigContext.Provider>
    </ConfigProvider>
  );
};

export default Wrapper;
