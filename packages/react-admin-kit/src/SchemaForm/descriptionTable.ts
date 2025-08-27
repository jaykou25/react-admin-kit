/**
 * SchemaForm Description Table 相关工具函数
 */
import React, { useCallback, useRef, useMemo } from 'react';

/**
 * 从 CSS 类名中提取 span 值
 * @param className CSS 类名字符串，如 'ant-col ant-col-8 ant-form-item'
 * @returns span 值，如果解析失败则返回默认值 8
 */
export const extractSpanFromClassName = (className: string): number => {
  if (!className || typeof className !== 'string') {
    return 8; // 默认值
  }

  // 匹配 ant-col-数字 的模式
  const spanMatch = className.match(/ant-col-(\d+)/);

  if (spanMatch && spanMatch[1]) {
    const span = parseInt(spanMatch[1], 10);

    // 验证 span 值的合理性（1-24）
    if (span >= 1 && span <= 24) {
      return span;
    }
  }

  // 如果没有找到或值不合理，返回默认值
  return 8;
};

/**
 * 表单项信息接口
 */
export interface FormItemInfo {
  /** 表单项标签文本 */
  label: string;
  /** 表单项内容（HTML 字符串或文本） */
  content: string;
  /** 布局 span 值（从 CSS 类名解析） */
  span: number;
  /** 原始 DOM 元素引用 */
  element: HTMLElement;
  /** 可选：数据索引（用于数据绑定） */
  dataIndex?: string;
  /** 可选：是否为空项（用于占位） */
  isEmpty?: boolean;
}

/**
 * 表格行数据接口
 */
export interface TableRow {
  /** 该行包含的表单项 */
  items: FormItemInfo[];
  /** 该行的总 span 值 */
  totalSpan: number;
  /** 行索引 */
  index: number;
}

/**
 * 扫描表单容器中的表单项
 * @param container 表单容器 DOM 元素
 * @returns 表单项信息数组
 */
export const scanFormItems = (container: HTMLElement): FormItemInfo[] => {
  return safeExecute(
    () => {
      const formItems: FormItemInfo[] = [];

      // 查找所有的 .ant-col 元素
      const antCols = container.querySelectorAll('form .ant-row .ant-col');

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

/**
 * 根据表单项的 span 值计算表格布局
 * @param items 表单项信息数组
 * @returns 表格行数组
 */
export const calculateTableLayout = (items: FormItemInfo[]): TableRow[] => {
  return safeExecute(
    () => {
      const rows: TableRow[] = [];
      let currentRow: FormItemInfo[] = [];
      let currentSpan = 0;

      items.forEach((item) => {
        // 如果当前行加上新项会超过 24，则换行
        if (currentSpan + item.span > 24) {
          // 保存当前行
          if (currentRow.length > 0) {
            rows.push({
              items: [...currentRow],
              totalSpan: currentSpan,
              index: rows.length,
            });
          }

          // 开始新行
          currentRow = [item];
          currentSpan = item.span;
        } else {
          // 添加到当前行
          currentRow.push(item);
          currentSpan += item.span;
        }
      });

      // 处理最后一行
      if (currentRow.length > 0) {
        rows.push({
          items: [...currentRow],
          totalSpan: currentSpan,
          index: rows.length,
        });
      }

      return rows;
    },
    [],
    'Failed to calculate table layout',
  );
};

/**
 * 描述表格配置选项
 */
export interface DescriptionsTableOptions {
  className?: string;
  style?: React.CSSProperties;
  bordered?: boolean;
  size?: 'small' | 'default' | 'large';
}

/**
 * 构建表格 DOM 元素
 * @param rows 表格行数据
 * @param options 表格配置选项
 * @returns HTML 表格元素
 */
export const buildTableElement = (
  rows: TableRow[],
  options: DescriptionsTableOptions = {},
): HTMLTableElement => {
  return safeExecute(
    () => {
      const {
        className = '',
        style = {},
        bordered = true,
        size = 'default',
      } = options;

      // 创建表格元素
      const table = document.createElement('table');

      // 构建 CSS 类名
      const classNames = ['schema-form-description-table'];
      if (bordered === false) {
        classNames.push('borderless');
      } else {
        classNames.push('bordered');
      }
      if (size !== 'default') {
        classNames.push(size);
      }
      if (className) {
        classNames.push(className);
      }

      table.className = classNames.join(' ');

      // 应用样式
      Object.assign(table.style, {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '16px',
        ...style,
      });

      // 创建 tbody
      const tbody = document.createElement('tbody');

      rows.forEach((row) => {
        const tr = document.createElement('tr');
        row.items.forEach((item) => {
          // 创建 th (标签)
          const th = document.createElement('th');
          th.textContent = item.label;
          Object.assign(th.style, {
            backgroundColor: '#fafafa',
            border: bordered ? '1px solid #d9d9d9' : 'none',
            padding: '8px 12px',
            textAlign: 'left',
            fontWeight: '500',
            width: '120px',
            minWidth: '120px',
            verticalAlign: 'top',
          });

          // 创建 td (内容)
          const td = document.createElement('td');
          td.innerHTML = item.content;
          Object.assign(td.style, {
            border: bordered ? '1px solid #d9d9d9' : 'none',
            padding: '8px 12px',
            wordBreak: 'break-word',
            verticalAlign: 'top',
          });

          tr.appendChild(th);
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      return table;
    },
    document.createElement('table'),
    'Failed to build table element',
  );
};

/**
 * useDescriptionTable Hook 选项
 */
export interface UseDescriptionTableOptions {
  formContainerRef: React.RefObject<HTMLDivElement>;
  readonlyDescriptionsContainerRef: React.RefObject<HTMLDivElement>;
  descriptionsProps?: DescriptionsTableOptions;
}

/**
 * useDescriptionTable Hook 返回值
 */
export interface UseDescriptionTableReturn {
  generateTable: () => void;
  clearTable: () => void;
}

/**
 * 描述表格 Hook
 * @param options Hook 配置选项
 * @returns Hook 返回值
 */
export const useDescriptionsTable = (
  options: UseDescriptionTableOptions,
): UseDescriptionTableReturn => {
  const {
    formContainerRef,
    readonlyDescriptionsContainerRef,
    descriptionsProps = {},
  } = options;

  const tableRef = useRef<HTMLTableElement | null>(null);

  const generateTable = useCallback(() => {
    safeExecute(
      () => {
        // 清理之前的表格
        clearTable();

        // 检查容器是否存在
        if (
          !formContainerRef.current ||
          !readonlyDescriptionsContainerRef.current
        ) {
          return;
        }

        // 扫描表单项
        const formItems = scanFormItems(formContainerRef.current);

        console.log('debug - formItems', formItems);

        if (formItems.length === 0) {
          return;
        }

        // 计算表格布局
        const rows = calculateTableLayout(formItems);

        console.log('debug - rows', rows);

        if (rows.length === 0) {
          return;
        }

        // 构建表格元素
        const table = buildTableElement(rows, descriptionsProps);
        tableRef.current = table;

        // 插入到容器中
        readonlyDescriptionsContainerRef.current.appendChild(table);
      },
      undefined,
      'Failed to generate description table',
    );
  }, [formContainerRef, readonlyDescriptionsContainerRef, descriptionsProps]);

  const clearTable = useCallback(() => {
    safeExecute(
      () => {
        // 清理之前的表格
        if (tableRef.current && tableRef.current.parentNode) {
          tableRef.current.parentNode.removeChild(tableRef.current);
        }
        tableRef.current = null;

        // 清空容器
        if (readonlyDescriptionsContainerRef.current) {
          readonlyDescriptionsContainerRef.current.innerHTML = '';
        }
      },
      undefined,
      'Failed to clear description table',
    );
  }, [readonlyDescriptionsContainerRef]);

  return {
    generateTable,
    clearTable,
  };
};

/**
 * 安全执行函数，提供错误处理
 */
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
