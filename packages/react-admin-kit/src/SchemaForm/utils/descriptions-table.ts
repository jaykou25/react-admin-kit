/**
 * 表单项信息接口
 */
export interface FormItemInfo {
  /** 表单项标签文本 */
  label: string;
  /** 表单项内容（HTML 字符串或文本） */
  content: string;
  /** 布局 span 值（从 CSS 类名解析） */
  span: number | ResponsiveSpan;
  /** 原始 DOM 元素引用 */
  element: HTMLElement;
  /** 可选：数据索引（用于数据绑定） */
  dataIndex?: string;
  /** 可选：是否为空项（用于占位） */
  isEmpty?: boolean;
}

/**
 * 响应式断点配置
 */
export interface ResponsiveSpan {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

/**
 * 从 CSS 类名中提取 span 值
 * @param className CSS 类名字符串，如 'ant-col ant-col-8 ant-form-item' 或 'ant-col-xs-24 ant-col-md-8'
 * @returns 如果是传统 span 返回数字，如果是响应式断点返回 ResponsiveSpan 对象
 */
export const extractSpanFromClassName = (
  className: string,
): number | ResponsiveSpan => {
  if (!className || typeof className !== 'string') {
    return 24; // 默认值
  }

  // 匹配响应式断点模式: ant-col-{breakpoint}-{number}
  const responsiveMatches = className.match(
    /ant-col-(xs|sm|md|lg|xl|xxl)-(\d+)/g,
  );

  if (responsiveMatches && responsiveMatches.length > 0) {
    const responsiveSpan: ResponsiveSpan = {};

    responsiveMatches.forEach((match) => {
      const breakpointMatch = match.match(/ant-col-(xs|sm|md|lg|xl|xxl)-(\d+)/);
      if (breakpointMatch && breakpointMatch[1] && breakpointMatch[2]) {
        const breakpoint = breakpointMatch[1] as keyof ResponsiveSpan;
        const spanValue = parseInt(breakpointMatch[2], 10);

        // 验证 span 值的合理性（1-24）
        if (spanValue >= 1 && spanValue <= 24) {
          responsiveSpan[breakpoint] = spanValue;
        }
      }
    });

    // 如果有有效的响应式断点，返回对象
    if (Object.keys(responsiveSpan).length > 0) {
      return responsiveSpan;
    }
  }

  // 匹配传统 span 模式: ant-col-数字
  const spanMatch = className.match(/ant-col-(\d+)/);

  if (spanMatch && spanMatch[1]) {
    const span = parseInt(spanMatch[1], 10);

    // 验证 span 值的合理性（1-24）
    if (span >= 1 && span <= 24) {
      return span;
    }
  }

  // 如果没有找到或值不合理，返回默认值
  return 24;
};

/**
 * 扫描表单容器中的表单项
 * @returns 表单项信息数组
 */
export const scanFormItems = (
  container: HTMLElement,
  grid?: boolean,
  embed?: boolean,
): FormItemInfo[] => {
  return safeExecute(
    () => {
      const formItems: FormItemInfo[] = [];
      let selector;

      if (embed) {
        selector = grid
          ? '.form-item-wrapper > .ant-row > .ant-col'
          : '.form-item-wrapper > .ant-form-item';
      } else {
        selector = grid
          ? 'form > .ant-row > .ant-col'
          : 'form > .ant-form-item';
      }

      const antCols = container.querySelectorAll(selector);

      antCols.forEach((col) => {
        const colElement = col as HTMLElement;

        // 查找标签元素
        const labelElement = colElement.querySelector('.ant-form-item-label');
        const controlElement = colElement.querySelector(
          '.ant-form-item-control',
        );

        // 如果没有 control 元素，跳过这个项
        if (!controlElement) {
          return;
        }

        // 提取标签文本
        let label = '';
        if (labelElement) {
          label = labelElement.textContent || '';
          // 移除可能的冒号和空格
          label = label.replace(/[:：]\s*$/, '').trim();
        }

        // 提取内容
        const content =
          controlElement.innerHTML || controlElement.textContent || '';

        // 提取 span 值
        const span = extractSpanFromClassName(colElement.className);

        // 检查是否为空项（没有标签且没有有意义的内容）
        // 移除 HTML 标签后检查是否为空
        const textContent = controlElement.textContent || '';
        const isEmpty = !label && !textContent.trim();

        formItems.push({
          label,
          content: content.trim(),
          span,
          element: colElement,
          isEmpty,
        });
      });

      return formItems;
    },
    [],
    'Failed to scan form items',
  );
};

// 处理空值合并：根据列数和 span 计算出行结构，如果有空项不在行开头的，就把空项的 span 合并进前一个项中
export const mergeEmptyItems = (items, column) => {
  const mergedItems: any[] = [];
  let currentRowSpan = 0;
  let previousItem: any = null;

  for (const item of items) {
    currentRowSpan += item.span;

    if (item.isEmpty && previousItem) {
      mergedItems[mergedItems.length - 1].span += item.span;
    } else {
      mergedItems.push(item);
      previousItem = item;
    }

    // 当当前行 span 总和达到或超过列数时，处理该行
    if (currentRowSpan >= column) {
      // 重置行状态
      currentRowSpan = 0;
      previousItem = null;
    }
  }

  return mergedItems;
};

/**
 * 规范化 Descriptions items 中的 span 值
 *
 * 对于 Ant Design Descriptions 组件：
 * - 每行的 span 总和应该等于 column 值
 * - 'filled' 会自动填充剩余空间
 * - 当某个 item 的 span 会导致当前行总和超过 column 时，前一项应被设为 'filled' 来填满当前行
 *
 * @param items - Descriptions 的 items 数组（span 只会是数字）
 * @param column - Descriptions 的 column 值（默认为 3）
 * @returns 规范化后的 items 数组
 *
 * @example
 * ```ts
 * // 示例 1: 需要将某项设为 'filled'
 * normalizeSpan([{ span: 1 }, { span: 1 }, { span: 3 }], 3)
 * // => [{ span: 1 }, { span: 'filled' }, { span: 3 }]
 *
 * // 示例 2: 简单溢出
 * normalizeSpan([{ span: 2 }, { span: 2 }], 3)
 * // => [{ span: 'filled' }, { span: 2 }]
 * ```
 */
export const normalizeSpan = <T extends { span: number }>(
  items: T[],
  column: number = 3,
): T[] => {
  if (!items || items.length === 0) {
    return [];
  }

  const normalizedItems: T[] = [];
  let currentRowSpan = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const span = item.span;

    const newTotal = currentRowSpan + span;

    // 当前项自己溢出
    if (newTotal > column) {
      normalizedItems.push({ ...item, span: 'filled' } as T);
      currentRowSpan = 0;
      continue;
    }

    // 刚好填满
    if (newTotal === column) {
      normalizedItems.push(item);
      currentRowSpan = 0;
      continue;
    }

    // 未填满，检查下一项
    const nextItem = items[i + 1];

    // 没有下一项，保持当前项
    if (!nextItem) {
      normalizedItems.push(item);
      currentRowSpan = newTotal;
      continue;
    }

    const nextSpan = nextItem.span;

    // 检查：当前项 + 下一项是否会溢出
    if (newTotal + nextSpan > column) {
      // 会溢出，当前项填满当前行
      normalizedItems.push({ ...item, span: 'filled' } as T);
      currentRowSpan = 0;
    } else {
      // 不会溢出，保持当前项
      normalizedItems.push(item);
      currentRowSpan = newTotal;
    }
  }

  return normalizedItems;
};

/**
 * 安全执行函数，提供错误处理
 */
/* istanbul ignore next */
export const safeExecute = <T>(
  fn: () => T,
  fallback: T,
  errorMessage: string,
): T => {
  try {
    return fn();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[SchemaForm Description Table] ${errorMessage}:`, error);
    }
    return fallback;
  }
};
