import type { ReactNode } from 'react';
import { omitUndefined } from '@ant-design/pro-utils';

interface TreeSelectOptions {
  titleKey?: string; // title的取值字段, 默认是title
  valueKey?: string; // value的取值字段, 默认是id
  icon?: ReactNode | ((props: any) => ReactNode);
}

function normalizeTreeItem(item, titleKey, valueKey, options?: any) {
  const { parentKey, icon, isTop } = options || {};

  if (item.children) {
    return {
      ...item,
      key: item[valueKey],
      title: item[titleKey],
      nodeId: parentKey,
      isTop,
      icon,
      children: item.children.map((child) =>
        normalizeTreeItem(child, titleKey, valueKey, {
          parentKey: item[valueKey],
          icon,
        }),
      ),
    };
  }

  return {
    ...item,
    key: item[valueKey],
    title: item[titleKey],
    nodeId: parentKey,
    isTop,
  };
}

/**
 * 规范化tree的数据, 可以指定title和key的取值字段.
 * 同时给每个节点增加nodeId字段, 方便取父节点id
 * 增加isTop字段, 判断是不是第一级
 */
export function normalizeTree(treeData, options?: TreeSelectOptions) {
  const { titleKey = 'title', valueKey = 'id', icon } = options || {};
  return treeData.map((row) =>
    normalizeTreeItem(row, titleKey, valueKey, {
      parentKey: '',
      icon: icon || row.icon,
      isTop: true,
    }),
  );
}

function normalizeTreeSelectItem(item, titleKey, valueKey) {
  if (item.children) {
    return {
      ...item,
      value: item[valueKey],
      title: item[titleKey],
      children: item.children.map((child) =>
        normalizeTreeSelectItem(child, titleKey, valueKey),
      ),
    };
  }
  return {
    ...item,
    value: item[valueKey],
    title: item[titleKey],
  };
}

/**
 * 规范化treeSelect的数据, 可以指定title和value的取值字段.
 * treeSelect和上文的tree的数据结构不一样, 一个是key, 一个是value
 */
export function normalizeTreeSelect(treeData, options?: TreeSelectOptions) {
  const { titleKey = 'label', valueKey = 'id' } = options || {};
  return treeData.map((row) =>
    normalizeTreeSelectItem(row, titleKey, valueKey),
  );
}

interface SelectOptions {
  labelKey?: string; // title的取值字段, 默认是title
  valueKey?: string; // value的取值字段, 默认是id
  renderLabel?: (node: any) => any; // 自定义文本显示
}

/**
 * 规范化select的数据, 可以指定label和value的取值字段, 也可以传入renderLabel函数自定显示文本
 *
 */
export function normalizeSelect(data = [], options?: SelectOptions) {
  const { labelKey = 'name', valueKey = 'id', renderLabel } = options || {};

  return data.map((row) => {
    /**
     * antd Select 组件的 options 接受以下字段:
     * label: 文本显示
     * title: 原生 title 提示
     * value: 下拉值
     */
    const { disabled, title, options: selectOptions, className } = row;

    let label;
    if (renderLabel) {
      label = renderLabel(row);
    } else {
      label = row[labelKey];
    }

    const _options = selectOptions
      ? normalizeSelect(selectOptions, options)
      : undefined;

    return omitUndefined({
      label,
      value: row[valueKey],
      disabled,
      title,
      className,
      options: _options,
    });
  });
}

function withDisabledItem(item, func) {
  if (item.children) {
    return {
      ...item,
      disabled: func && func(item),
      children: item.children.map((child) => withDisabledItem(child, func)),
    };
  }

  return {
    ...item,
    disabled: func && func(item),
  };
}

/**
 * 这个一个装饰器函数, 用于给treeData的每一个节点添加disabled属性
 * 这样通过传入一个函数就可以控制节点是否为disabled
 * 函数的参数是node(节点)
 */
export function withDisabled(treeData, func?: (node: any) => boolean) {
  if (!func) return treeData;

  return treeData.map((row) => withDisabledItem(row, func));
}

function withCheckableItem(item, func) {
  if (item.children) {
    return {
      ...item,
      checkable: func && func(item),
      children: item.children.map((child) => withCheckableItem(child, func)),
    };
  }

  return {
    ...item,
    checkable: func && func(item),
  };
}

/**
 * 这个一个装饰器函数, 用于给treeData的每一个节点添加checkable属性
 * 这样通过传入一个函数就可以控制节点是否为可勾选
 * 函数的参数是node(节点)
 */
export function withCheckable(treeData, func?: (node: any) => boolean) {
  if (!func) return treeData;

  return treeData.map((row) => withCheckableItem(row, func));
}

/**
 * 遍历tree, 找到目标节点, 找不到返回undefined
 */
export function findTreeItem(data = [], key, valueKey = 'id') {
  let result;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const target = findTreeItemLoop(data[i], key, valueKey);

    if (target) {
      result = target;
      break;
    }
  }

  return result;
}

function findTreeItemLoop(data, key, valueKey) {
  if (data[valueKey] === key) {
    return data;
  }
  if (data.children && data.children.length) {
    return findTreeItem(data.children, key, valueKey);
  }
  return undefined;
}
