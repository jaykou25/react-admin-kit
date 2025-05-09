import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';

export default function AntdGlobalWrapper(props: any) {
  const { i18n } = useDocusaurusContext();

  // useColorMode 这个 hook 必须放在 Layout 组件下面使用
  const { colorMode } = useColorMode();

  const antdLocale =
    {
      'zh-Hans': zhCN,
      en: enUS,
    }[i18n.currentLocale] || enUS;

  return (
    <ConfigProvider
      locale={antdLocale}
      theme={{
        algorithm:
          colorMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}
