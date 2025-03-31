import React, { memo, type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { groupBlogSidebarItemsByYear } from '@docusaurus/plugin-content-blog/client';
import Heading from '@theme/Heading';
import type { Props } from '@theme/BlogSidebar/Content';

function BlogSidebarYearGroup({
  year,
  yearGroupHeadingClassName,
  children,
}: {
  year: string;
  yearGroupHeadingClassName?: string;
  children: ReactNode;
}) {
  return (
    <div role="group">
      <Heading as="h4" className={yearGroupHeadingClassName}>
        {year}
      </Heading>
      {children}
    </div>
  );
}

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: Props): ReactNode {
  const themeConfig = useThemeConfig();
  if (themeConfig.blog.sidebar.groupByYear) {
    // title的命名格式 docName:docIndex:groupName:groupIndex
    const $items = items.map((item) => {
      const { title, ...rest } = item;
      const [docName, docIndex = 0, groupName = '', groupIndex = 0] =
        title.split(':');
      return { ...rest, title: docName, docIndex, groupName, groupIndex };
    });

    // 按groupName进行分组, 同时按groupIndex进行排序
    const groups = $items.reduce((acc, item) => {
      const { groupName } = item;
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(item);
      return acc;
    }, {});

    // 组内按docIndex进行排序
    Object.values(groups).forEach((group: any[]) => {
      group.sort((a, b) => Number(a.docIndex) - Number(b.docIndex));
    });

    // 分组按groupIndex进行排序
    const sortedGroups = Object.entries(groups).sort(
      ([groupNameA], [groupNameB]) => {
        const groupIndexA = parseInt(groups[groupNameA][0].groupIndex);
        const groupIndexB = parseInt(groups[groupNameB][0].groupIndex);
        return groupIndexA - groupIndexB;
      },
    );

    return (
      <>
        {sortedGroups.map(([groupName, yearItems]) => (
          <BlogSidebarYearGroup
            key={groupName}
            year={groupName}
            yearGroupHeadingClassName={yearGroupHeadingClassName}
          >
            <ListComponent items={yearItems} />
          </BlogSidebarYearGroup>
        ))}
      </>
    );
  } else {
    return <ListComponent items={items} />;
  }
}

export default memo(BlogSidebarContent);
