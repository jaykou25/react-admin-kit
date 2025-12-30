import cloneDeepWith from 'lodash/cloneDeepWith';
import isElement from 'lodash/isElement';
import { isValidElement } from 'react';

/** jsx 元素和 element 元素不做深拷贝 */
function clone(value) {
  return cloneDeepWith(value, (val) => {
    if (isElement(val) || isValidElement(val)) {
      return true;
    }
  });
}

function normalizeTreeItem(item, patchItem?: PatchFunctionType, options?: any) {
  const { replace } = options || {};
  const patchResult = patchItem ? patchItem(item) || {} : {};

  const mergeItem = replace ? { ...patchResult } : { ...item, ...patchResult };

  if (!mergeItem.children) {
    const { children, ...rest } = mergeItem;
    return rest;
  }

  return {
    ...mergeItem,
    children: mergeItem.children
      ? mergeItem.children.map((child) =>
          normalizeTreeItem(child, patchItem, options),
        )
      : [],
  };
}

type PatchFunctionType = (item: any) => Record<string, any> | undefined | void;
/**
 * 利用一个 patchItem 方法来处理 tree item
 * @param data
 * @param patchFunction
 * @param options patch 结果是否覆盖
 * @returns
 */
export function normalizeTree(
  data: any[] = [],
  patchFunction?: PatchFunctionType,
  options?: { replace: boolean },
): any[] {
  const { replace = false } = options || {};
  return data.map((row) => normalizeTreeItem(row, patchFunction, { replace }));
}

type FilterType = (item: any) => boolean;

/**
 * 通过传入一个函数来过滤树, 不符合条件的tree item 会被过滤掉
 * @param data
 * @param filter
 * @returns
 */
export function filterTree(_data: any = [], filter: FilterType, depth = 0) {
  const data = depth === 0 ? clone(_data) : _data;

  const result: any = [];
  data.forEach((item) => {
    const verified = filter(item);

    if (!verified) return;

    if (verified && item.children) {
      item.children = filterTree(item.children, filter, depth + 1);
    }

    return result.push(item);
  });

  return result;
}

/**
 * 寻找树中的目标节点.
 * 如果找不到返回 []
 * 如果找到返回从头到目标节点的数组链
 * @param {Array} data
 * @param {string | number} value
 * @param {string} keyName
 * @returns
 */
export function getTreeChain(
  _data = [],
  findFunction: (node: any) => boolean,
  chain = [],
  depth = 0,
) {
  let result;

  const data = depth === 0 ? clone(_data) : _data;

  for (let i = 0; i < data.length; i++) {
    const node = data[i];

    const target = findTreeItem(node, findFunction, chain, depth);

    if (target) {
      result = target;
      break;
    } else {
      chain.splice(depth);
    }
  }

  return depth > 0 ? result : chain;
}

function findTreeItem(node, findFunction, chain, depth) {
  chain.push(node);
  if (findFunction(node)) {
    return node;
  }

  if (node.children && node.children.length) {
    return getTreeChain(node.children, findFunction, chain, depth + 1);
  }
  return undefined;
}
