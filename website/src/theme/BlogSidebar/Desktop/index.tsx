import React, { memo, type ReactNode } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { useVisibleBlogSidebarItems } from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type { BlogSidebarItem } from '@docusaurus/plugin-content-blog';
import type { Props as BlogSidebarContentProps } from '@theme/BlogSidebar/Content';
import type { Props } from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

export function BlogSidebarItemList({
  items,
  ulClassName,
  liClassName,
  linkClassName,
  linkActiveClassName,
}: {
  items: BlogSidebarItem[];
  ulClassName?: string;
  liClassName?: string;
  linkClassName?: string;
  linkActiveClassName?: string;
}): ReactNode {
  return (
    <ul className={ulClassName}>
      {items.map((item) => (
        <li key={item.permalink} className={liClassName}>
          <Link
            title={item.title}
            isNavLink
            to={item.permalink}
            className={linkClassName}
            activeClassName={linkActiveClassName}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({ items }) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};

function BlogSidebarDesktop({ sidebar }: Props) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}
      >
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        />
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
