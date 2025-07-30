import { normalizeTree } from '../../utils';

/**
 * 为列配置处理 hideInSearch 属性的默认值
 *
 * 理论上在 table 里是不能有 form 相关的列的（除了一些共通属性以外），
 * 像 valueType: dependency 这种是 form 独有的，这样的列只能出现在搜索区域。
 */
export const patchHideInSearch = (columns, defaultHideInSearch: boolean) => {
  return normalizeTree(columns, (item) => {
    if (item.hideInSearch === undefined) {
      item.hideInSearch = defaultHideInSearch;
    }

    if (item.type === 'search' || item.valueType === 'dependency') {
      item.search = true;
      item.hideInSearch = false;
      item.hideInTable = true;
      item.hideInForm = true;
    }

    return item;
  });
};
