import { TableColumnType } from './types';

/**
 * 过滤出导出的columns
 */
export const filterExportCols = (columns: TableColumnType[]) => {
  return columns
    .filter((col) => !col.hideInTable)
    .filter((col) => {
      const valueType = typeof col.valueType === 'string' ? col.valueType : '';
      return !['option', 'index'].includes(valueType);
    });
};

/**
 * 过滤出search区域的columns
 */
export const filterSearchCols = (columns) => {
  return columns
    .filter((col) => !col.hideInSearch)
    .filter((col) => {
      const valueType = typeof col.valueType === 'string' ? col.valueType : '';
      return !['option', 'index'].includes(valueType);
    })
    .map((col) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hideInForm, formItemProps, ...restCol } = col;
      return restCol;
    });
};

/**
 * 过滤出modalForm区域的columns
 */
export const filterFormCols = (columns) => {
  return columns
    .filter((col) => !col.hideInForm)
    .filter((col) => {
      const valueType = typeof col.valueType === 'string' ? col.valueType : '';
      return !['option', 'index'].includes(valueType);
    });
};

/**
 * 过滤出table区域的columns
 */
export const filterTableCols = (columns) => {
  return columns.filter((col) => !col.hideInTable);
};

/**
 * 获取到columns中的sort参数
 * return {createTime: 'descend'}
 */
export const getSorter = (columns) => {
  const result = {};
  columns
    .filter((col) => col.sorter === true)
    .forEach((col) => {
      const defaultSort = col.defaultSortOrder || 'descend';
      result[col.dataIndex] = defaultSort;
    });

  return result;
};
