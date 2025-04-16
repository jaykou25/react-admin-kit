// 拷贝自官网的默认主题. 为的是想修改 navbar 的跳转地址, 使地址结尾加斜杠. 因为 github pages 的行为, 当访问 /about 时会重定向到 /about/. 这种重定向可能会影响  SEO
/* eslint-disable @typescript-eslint/no-use-before-define */
import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import { Link, useLocation, useNavData, history } from 'dumi';
import NavbarExtra from 'dumi/theme/slots/NavbarExtra';
import React, { useEffect, useState, type FC } from 'react';
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

const NavbarItem: FC<{ data: ReturnType<typeof useNavData>[0] }> = ({
  data,
}) => {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return data.children?.some((item) => {
      const activePath = item.activePath || item.link;

      return activePath && pathname.startsWith(activePath);
    });
  });
  const CollapsedBtn = data.children && (
    <button
      className="dumi-default-navbar-collapse-btn"
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setIsCollapsed((v) => !v);
      }}
      data-collapsed={isCollapsed || undefined}
    >
      <IconDown />
    </button>
  );
  const NestedNav = data.children && (
    <ul
      className="dumi-default-navbar-dropdown"
      data-collapsed={isCollapsed || undefined}
    >
      <NavbarContent data={data.children} />
    </ul>
  );
  // user custom nav has no activePath, so fallback to link
  const activePath = data.activePath || data.link;
  const extraProps =
    activePath && pathname.startsWith(activePath)
      ? { className: 'active' }
      : {};

  return data.link ? (
    <>
      <Link to={ensureTrailingSlash(data.link)} {...extraProps}>
        {data.title}
      </Link>
      {CollapsedBtn}
      {NestedNav}
    </>
  ) : (
    <>
      <span
        onClick={(e) => {
          e.stopPropagation();
          setIsCollapsed((v) => !v);
        }}
        {...extraProps}
      >
        {data.title}
      </span>
      {CollapsedBtn}
      {NestedNav}
    </>
  );
};

const NavbarContent: FC<{ data: ReturnType<typeof useNavData> }> = ({
  data,
}) => {
  return (
    <>
      {data.map((item) => (
        <li key={item.activePath || item.link || item.title}>
          {item.link && /^(\w+:)\/\/|^(mailto|tel):/.test(item.link) ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <NavbarItem data={item} />
          )}
        </li>
      ))}
    </>
  );
};

const Navbar: FC = () => {
  const nav = useNavData();

  const location = useLocation();
  const { pathname, search, hash } = location;

  useEffect(() => {
    console.log('实施重定向', pathname);
    if (pathname === '/') {
      const newPath = `${pathname}${search}${hash}`;
      history.replace(newPath);
    }

    if (!pathname.endsWith('/')) {
      const newPath = `${pathname}/${search}${hash}`;
      history.replace(newPath);
    }
  }, []);

  return (
    <ul className="dumi-default-navbar">
      <NavbarContent data={nav} />
      <NavbarExtra />
    </ul>
  );
};

export default Navbar;
