import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { SettingProvider } from 'react-admin-kit';
import ProConfigContext, { createIntl } from '@ant-design/pro-provider';
import proEnUs from '@ant-design/pro-provider/es/locale/en_US';
import proZhCn from '@ant-design/pro-provider/es/locale/zh_CN';
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
  const proLocale =
    {
      'zh-Hans': proZhCn,
      en: proEnUs,
    }[i18n.currentLocale] || proEnUs;

  const proIntl = createIntl(
    {
      'zh-Hans': 'zh_CN',
      en: 'en_US',
    }[i18n.currentLocale] || 'en_US',
    proLocale,
  );

  return (
    <ProConfigContext.Provider
      value={{
        ...values,
        intl: proIntl,
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
