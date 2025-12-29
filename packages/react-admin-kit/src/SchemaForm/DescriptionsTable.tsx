import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Descriptions, DescriptionsProps, Grid } from 'antd';
import {
  scanFormItems,
  FormItemInfo,
  ResponsiveSpan,
  mergeEmptyItems,
  normalizeSpan,
} from './utils/descriptions-table';

const { useBreakpoint } = Grid;

export interface DescriptionsTableProps {
  formContainerRef: React.RefObject<HTMLDivElement>;
  grid?: boolean;
  embed?: boolean;
  layout?: 'vertical' | 'horizontal';
  descriptionsProps?: DescriptionsProps;
}

const DescriptionsTable: React.FC<DescriptionsTableProps> = ({
  formContainerRef,
  grid,
  embed,
  layout,
  descriptionsProps = {},
}) => {
  const screens = useBreakpoint();
  const [formItems, setFormItems] = useState<FormItemInfo[]>([]);

  const scanAndUpdateFormItems = useCallback(() => {
    if (!formContainerRef.current) {
      setFormItems([]);
      return;
    }

    const scannedItems = scanFormItems(formContainerRef.current, grid, embed);
    setFormItems(scannedItems);
  }, [formContainerRef]);

  useEffect(() => {
    // 初始扫描
    scanAndUpdateFormItems();

    // 设置 MutationObserver 监听 DOM 变化
    if (!formContainerRef.current) {
      return;
    }

    /* istanbul ignore next */
    const observer = new MutationObserver((mutations) => {
      // 检查是否有相关的 DOM 变化
      const shouldUpdate = mutations.some((mutation) => {
        // 监听元素增删、属性变化（特别是 class 变化会影响 span 值）
        return (
          mutation.type === 'childList' ||
          (mutation.type === 'attributes' && mutation.attributeName === 'class')
        );
      });

      if (shouldUpdate) {
        scanAndUpdateFormItems();
      }
    });

    // 开始监听
    observer.observe(formContainerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });

    // 清理函数
    return () => {
      observer.disconnect();
    };
  }, [formContainerRef, scanAndUpdateFormItems]);

  const { descriptionItems, column } = useMemo(() => {
    // 获取当前有效的断点，按优先级排序
    const activeBreakpoints = Object.entries(screens)
      .filter(([_, isActive]) => isActive)
      .map(([breakpoint]) => breakpoint)
      .sort((a, b) => {
        const breakpointOrder = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
        return breakpointOrder.indexOf(a) - breakpointOrder.indexOf(b);
      });

    // 计算每个表单项在当前屏幕下的实际 span 值
    const resolvedSpans = formItems.map((item) => {
      const span = item.span;

      // 如果是数字，直接使用
      if (typeof span === 'number') {
        return span;
      }

      // 如果是响应式对象，按断点优先级查找合适的值
      const responsiveSpan = span as ResponsiveSpan;

      // 按优先级查找第一个有效的断点值
      for (const breakpoint of activeBreakpoints) {
        if (responsiveSpan[breakpoint as keyof ResponsiveSpan] !== undefined) {
          return responsiveSpan[breakpoint as keyof ResponsiveSpan]!;
        }
      }

      // 如果没有找到响应式值，返回默认值 24
      return 24;
    });

    // 找到最小的 span 值
    const minSpan = resolvedSpans.length > 0 ? Math.min(...resolvedSpans) : 24;

    // 计算列数：24 / 最小 span，向上取整
    const calculatedColumn = minSpan > 0 ? Math.ceil(24 / minSpan) : 1;

    // 计算每个表单项在 Descriptions 中的 span 值
    const descriptionItems = formItems.map((item, index) => {
      const currentSpan = resolvedSpans[index];
      const descriptionsSpan = Math.ceil(currentSpan / minSpan);

      return {
        label: item.label,
        children: <div dangerouslySetInnerHTML={{ __html: item.content }} />,
        span: Math.max(1, descriptionsSpan),
        isEmpty: item.isEmpty,
      };
    });

    const handledEmptyItems = mergeEmptyItems(
      descriptionItems,
      calculatedColumn,
    );
    const normalizedSpanItems = normalizeSpan(
      handledEmptyItems,
      calculatedColumn,
    );

    return {
      descriptionItems: normalizedSpanItems,
      column: calculatedColumn,
    };
  }, [formItems, screens]);

  if (descriptionItems.length === 0) {
    return null;
  }

  return (
    <Descriptions
      layout={layout}
      {...descriptionsProps}
      column={column}
      items={descriptionItems}
    />
  );
};

export default DescriptionsTable;
