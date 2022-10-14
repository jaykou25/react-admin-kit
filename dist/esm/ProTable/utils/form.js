var _excluded = ["patchRecord"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import merge from 'lodash/merge';
import moment from 'moment';
/**
 * 将表单的值传换成columns里transform字段对应的值
 */

export var transformValues = function transformValues() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cols = arguments.length > 1 ? arguments[1] : undefined;
  var finalResult = {};
  Object.keys(values).forEach(function (key) {
    if (values[key] === undefined || values[key] === null) {
      finalResult[key] = values[key];
      return;
    }

    var targetCol = cols.find(function (col) {
      return col.dataIndex === key;
    });

    if (!targetCol) {
      finalResult[key] = values[key];
      return;
    }

    if (targetCol.transform) {
      var val = targetCol.transform(values[key]);
      finalResult = _objectSpread(_objectSpread({}, finalResult), val);
    } else if (targetCol.valueType === 'date') {
      var _val = values[key];

      if (typeof _val === 'string') {
        finalResult[key] = _val;
      } else if (typeof _val === 'number') {
        finalResult[key] = moment(_val).format('YYYY-MM-DD');
      } else {
        finalResult[key] = values[key].format('YYYY-MM-DD');
      }
    } else {
      finalResult[key] = values[key];
    }
  });
  return finalResult;
};
/**
 * 处理表单提交时的数据, 将带有obj的对象转成值和名字
 * 比如: 传进来的values是{userObj: {value: 1, label: '张三'}}
 * 转化成: {user: 1, userName: '张三'}*
 *
 * 将Obj下划线后的值拼接上去
 * 比如: 传进来的values是{userObj_Code: {value: 1, label: '张三'}}
 * 转化成: {userCode: 1, userName: '张三'}
 *
 * 详见form.test.js测试用例
 */

export var convertObjValues = function convertObjValues(values, options) {
  var _ref = options || {},
      _ref$reg = _ref.reg,
      reg = _ref$reg === void 0 ? /Obj/ : _ref$reg,
      _ref$extraName = _ref.extraName,
      extraName = _ref$extraName === void 0 ? 'Name' : _ref$extraName;

  var result = {};
  Object.keys(values).forEach(function (key) {
    var value = values[key];

    if (value === undefined || value === null) {
      result[key] = value;
      return;
    }

    if (reg.test(key)) {
      var _key$split = key.split('_'),
          _key$split2 = _slicedToArray(_key$split, 2),
          beforeKey = _key$split2[0],
          joinKey = _key$split2[1];

      var baseKey = beforeKey.replace(reg, '');

      if (joinKey) {
        result["".concat(baseKey).concat(joinKey)] = value.value;
      } else {
        result["".concat(baseKey)] = value === null || value === void 0 ? void 0 : value.value;
      }

      result["".concat(baseKey).concat(extraName)] = value === null || value === void 0 ? void 0 : value.label;
    } else {
      result[key] = value;
    }
  });
  return result;
};
/**
 * 将数据处理成一个嵌套数据
 * 比如: 表单数据是 {info.name: 'jack', info.remark: '备注'}
 * 转成: {info: {name: 'jack', remark: '备注'}}
 
 * 详见form.test.js测试用例
 */

export var splitValues = function splitValues() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {};
  Object.keys(values).forEach(function (key) {
    var value = values[key];

    var _key$split3 = key.split('.'),
        _key$split4 = _slicedToArray(_key$split3, 2),
        baseKey = _key$split4[0],
        afterKey = _key$split4[1];

    if (afterKey) {
      if (result[baseKey]) {
        result[baseKey][afterKey] = value;
      } else {
        result[baseKey] = {};
        result[baseKey][afterKey] = value;
      }
    } else {
      // 原值不处理
      result[key] = value;
    }
  });
  return result;
};
export var handleValuesForSubmit = function handleValuesForSubmit(values, patchRecord) {
  var $values = splitValues(convertObjValues(values));

  if (patchRecord) {
    return merge($values, patchRecord(values));
  }

  return $values;
};
/**
 * 根据cols中的dataIndex值, 将传入的数据转成符合规范的数据
 * 比如: dataIndex是'info.name' , 传入的数据是{info: {name: 'jack'}}
 * 转成: {'info.name': 'jack'}
 */

export var flattenValues = function flattenValues(values) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 ? arguments[2] : undefined;

  var result = _objectSpread({}, values);

  cols.forEach(function (col) {
    var dataIndex = col.dataIndex;
    if (!dataIndex) return;

    var _dataIndex$split = dataIndex.split('.'),
        _dataIndex$split2 = _slicedToArray(_dataIndex$split, 2),
        baseKey = _dataIndex$split2[0],
        afterKey = _dataIndex$split2[1];

    if (afterKey) {
      result[dataIndex] = initValueForObjDataIndex(afterKey, values[baseKey], options);
    } else {
      result[dataIndex] = initValueForObjDataIndex(dataIndex, values, options);
    }
  });
  return result;
};
/**
 * 1. dataIndex: 'userObj'; record: {user: '1', userName: 'jack'}; => {value: '1', label: 'jack'}
 * 2. dataIndex: 'userObj_code'; value: {userCode: '1', userName: 'jack'}; => {value: '1', label: 'jack'}
 * 3. dataIndex: 'user'; => value: {user: '1'}; => '1'
 */

export function initValueForObjDataIndex(dataIndex) {
  var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 ? arguments[2] : undefined;

  var _ref2 = options || {},
      _ref2$reg = _ref2.reg,
      reg = _ref2$reg === void 0 ? /Obj/ : _ref2$reg,
      _ref2$extraName = _ref2.extraName,
      extraName = _ref2$extraName === void 0 ? 'Name' : _ref2$extraName;

  if (reg.test(dataIndex)) {
    var _dataIndex$split3 = dataIndex.split('_'),
        _dataIndex$split4 = _slicedToArray(_dataIndex$split3, 2),
        beforeKey = _dataIndex$split4[0],
        joinKey = _dataIndex$split4[1];

    var baseKey = beforeKey.replace(reg, '');

    if (joinKey) {
      return record[baseKey + joinKey] ? {
        value: record[baseKey + joinKey],
        label: record["".concat(baseKey).concat(extraName)]
      } : undefined;
    }

    return record[baseKey] ? {
      value: record[baseKey],
      label: record["".concat(baseKey).concat(extraName)]
    } : undefined;
  } // 原值不处理


  return record[dataIndex];
}
export var handleValuesForEdit = function handleValuesForEdit(values, cols, options) {
  var _ref3 = options || {},
      patchRecord = _ref3.patchRecord,
      rest = _objectWithoutProperties(_ref3, _excluded);

  if (patchRecord) {
    return _objectSpread(_objectSpread({}, flattenValues(values, cols, rest)), patchRecord(values));
  }

  return flattenValues(values, cols, rest);
};
export function renderDateRange(startDate, endDate, format) {
  var $format = format || 'YYYY.MM.DD';
  var start = startDate ? moment(startDate).format($format) : '-';
  var end = endDate ? moment(endDate).format($format) : '-';
  return "".concat(start, " - ").concat(end);
}
export function renderDate(date, format) {
  var $format = format || 'YYYY-MM-DD';
  return date && moment(date).format($format);
}
/**
 * 根据columns中的colSize来得到每一行的项
 */

export var getPrintCols = function getPrintCols(cols) {
  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var final = [];
  var row = [];
  var spanSum = 0;

  function addRow(item) {
    row.push(item);
    spanSum += item.colSize || 1;
  }

  function rowFull(item) {
    row.push(item);
    final.push(row);
    row = [];
    spanSum = 0;
  }

  function rowOver(item) {
    // 分两种情况: 1. row里已经有值了 2.row里没有值
    if (row.length < 1) {
      final.push([item]);
    } else {
      final.push(row);
      final.push([item]);
      row = [];
      spanSum = 0;
    }
  }

  cols.forEach(function (col) {
    var sum = spanSum + (col.colSize || 1);

    if (sum < span) {
      addRow(col);
      return;
    }

    if (sum === span) {
      rowFull(col);
      return;
    }

    if (sum > span) {
      rowOver(col);
      return;
    }
  });

  if (row.length > 0) {
    final.push(row);
  }

  return final;
};