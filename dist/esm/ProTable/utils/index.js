function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 处理ProTable request中的参数, 将sort转化成符合后端排序的格式
 */
export var handleRequestParams = function handleRequestParams(params, sort) {
  // sort对象是{createdTime: 'ascend'}, 要转成{sort: 'createdTime,asc'}
  if (Object.keys(sort).length < 1) {
    return params;
  }

  var sortMap = {
    ascend: 'asc',
    descend: 'desc'
  };
  var sortKey = Object.keys(sort)[0];
  var sortParams = {
    sort: "".concat(sortKey, ",").concat(sortMap[sort[sortKey]])
  };
  return _objectSpread(_objectSpread({}, params), sortParams);
};
/**
 * ProTable Columns中的排序属性
 */

export var withSorter = function withSorter(dataIndex) {
  var defaultSorter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  var orderMap = {
    asc: 'ascend',
    desc: 'descend'
  };
  var directions = defaultSorter === 'asc' ? ['ascend', 'descend', 'ascend'] : ['descend', 'ascend', 'descend'];
  return {
    defaultSortOrder: orderMap[defaultSorter],
    sortDirections: directions,
    sorter: true
  };
};