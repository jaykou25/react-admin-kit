import { useRouteMeta, useSidebarData, useSiteData } from 'dumi';
import { type FC, type ReactNode } from 'react';
import './heti.scss';
import './index.less';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const Content: FC<{ children: ReactNode }> = (props) => {
  const sidebar = useSidebarData();
  const { themeConfig } = useSiteData();
  const { frontmatter } = useRouteMeta();

  return (
    <div
      className={`dumi-default-content ${frontmatter.class}`}
      data-no-sidebar={!sidebar || frontmatter.sidebar === false || undefined}
      data-no-footer={themeConfig.footer === false || undefined}
    >
      <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>
    </div>
  );
};

export default Content;
