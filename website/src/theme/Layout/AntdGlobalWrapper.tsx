import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { SettingProvider } from 'react-admin-kit';
import ProConfigContext, { createIntl } from '@ant-design/pro-provider';
import proEnUs from '@ant-design/pro-provider/es/locale/en_US';
import zhCNRak from 'react-admin-kit/locale/zh_CN';
import enUSRak from 'react-admin-kit/locale/en_US';
import { useContext } from 'react';

export default function AntdGlobalWrapper(props: any) {
  const { i18n } = useDocusaurusContext();

  // useColorMode 这个 hook 必须放在 Layout 组件下面使用
  const { colorMode } = useColorMode();

  const antdLocale =
    {
      'zh-Hans': zhCN,
      en: enUS,
    }[i18n.currentLocale] || enUS;

  const rakLocale =
    {
      'zh-Hans': zhCNRak,
      en: enUSRak,
    }[i18n.currentLocale] || enUSRak;

  const values = useContext(ProConfigContext);
  const enUSIntl = createIntl('en_US', proEnUs);

  return (
    <ProConfigContext.Provider
      value={{
        ...values,
        intl: enUSIntl,
      }}
    >
      <ConfigProvider
        locale={antdLocale}
        theme={{
          algorithm:
            colorMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <SettingProvider locale={rakLocale}>{props.children}</SettingProvider>
      </ConfigProvider>
    </ProConfigContext.Provider>
  );
}
