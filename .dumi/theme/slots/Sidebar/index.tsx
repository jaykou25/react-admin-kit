import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React, { type FC } from 'react';
import './index.less';

/**
 * 确保路径以斜杠结尾
 * @param {string} path - 输入的路径字符串
 * @returns {string} - 以斜杠结尾的路径
 */
function ensureTrailingSlash(path) {
  // 如果路径为空，返回根路径
  if (!path) return '/';

  // 如果路径不以斜杠结尾，添加斜杠
  if (!path.endsWith('/')) {
    return `${path}/`;
  }

  // 如果路径已经以斜杠结尾，直接返回
  return path;
}

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  return (
    <div className="dumi-default-sidebar">
      {sidebar.map((item, i) => (
        <dl className="dumi-default-sidebar-group" key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link}>
              <NavLink
                to={ensureTrailingSlash(child.link)}
                title={child.title}
                end
              >
                {child.title}
              </NavLink>
              {child.link === pathname && meta.frontmatter.toc === 'menu' && (
                <Toc />
              )}
            </dd>
          ))}
        </dl>
      ))}
    </div>
  );
};

export default Sidebar;
