var _excluded = ["hideInForm", "formItemProps"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * 过滤出导出的columns
 */
export var filterExportCols = function filterExportCols(columns) {
  return columns.filter(function (col) {
    return !col.hideInTable;
  }).filter(function (col) {
    var valueType = typeof col.valueType === 'string' ? col.valueType : '';
    return !['option', 'index'].includes(valueType);
  });
};

/**
 * 过滤出search区域的columns
 */
export var filterSearchCols = function filterSearchCols(columns) {
  return columns.filter(function (col) {
    return !col.hideInSearch;
  }).filter(function (col) {
    var valueType = typeof col.valueType === 'string' ? col.valueType : '';
    return !['option', 'index'].includes(valueType);
  }).map(function (col) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var hideInForm = col.hideInForm,
      formItemProps = col.formItemProps,
      restCol = _objectWithoutProperties(col, _excluded);
    return restCol;
  });
};

/**
 * 过滤出modalForm区域的columns
 */
export var filterFormCols = function filterFormCols(columns) {
  return columns.filter(function (col) {
    return !col.hideInForm;
  }).filter(function (col) {
    var valueType = typeof col.valueType === 'string' ? col.valueType : '';
    return !['option', 'index'].includes(valueType);
  });
};

/**
 * 过滤出table区域的columns
 */
export var filterTableCols = function filterTableCols(columns) {
  return columns.filter(function (col) {
    return !col.hideInTable;
  });
};

/**
 * 获取到columns中的sort参数
 * return {createTime: 'descend'}
 */
export var getSorter = function getSorter(columns) {
  var result = {};
  columns.filter(function (col) {
    return col.sorter === true;
  }).forEach(function (col) {
    var defaultSort = col.defaultSortOrder || 'descend';
    result[col.dataIndex] = defaultSort;
  });
  return result;
};