function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * 表单 onFinish 时，将符合约定规范的 dataIndex 转成需要的数据, 看下面的例子
 *
 * {'user,userName': {value: '1', label: 'jack'}}  => {user: '1', userName: 'jack}
 *
 * 自定义取值:
 * {'user,userName_id,name': {id: '1', name: 'jack'}}  => {user: '1', userName: 'jack}
 *
 * 套嵌数据也能处理:
 * {info: {'user,userName': {value: '1', label: 'jack'}}} => {info: {user: '1, userName: 'jack'}}
 */

export function splitValues() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {};
  Object.keys(values).forEach(function (key) {
    var value = values[key];

    // 处理套嵌
    if (_typeof(value) === 'object') {
      value = splitValues(value);
    }
    var _key$split = key.split('_'),
      _key$split2 = _slicedToArray(_key$split, 2),
      before = _key$split2[0],
      after = _key$split2[1];
    var names = before.split(',');
    if (names.length > 1) {
      var _value, _value2;
      var _names = _slicedToArray(names, 2),
        valueName = _names[0],
        labelName = _names[1];
      var _ref = after ? after.split(',') : [],
        _ref2 = _slicedToArray(_ref, 2),
        _ref2$ = _ref2[0],
        toValueName = _ref2$ === void 0 ? 'value' : _ref2$,
        _ref2$2 = _ref2[1],
        toLabelName = _ref2$2 === void 0 ? 'label' : _ref2$2;
      result[valueName] = (_value = value) === null || _value === void 0 ? void 0 : _value[toValueName];
      result[labelName] = (_value2 = value) === null || _value2 === void 0 ? void 0 : _value2[toLabelName];
    } else {
      result[key] = value;
    }
  });
  return result;
}

/**
 * 分析 dataIndex， 根据约定的规范，输出一个约定的值
 *
 * 1. 参数: values: {userId: '1', userName: 'jack'} dataIndex: 'userId,userName',
 *    输出 {value: '1', label: 'jack'}
 * 2. 参数: values: {userId: '1', userName: 'jack'}  dataIndex: 'userId,userName_id,name'
 *    输出: {id: '1', name: 'jack'}
 * 3. dataIndex不含逗号原样输出
 *
 */
function getConventionValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dataIndex = arguments.length > 1 ? arguments[1] : undefined;
  var _dataIndex$split = dataIndex.split('_'),
    _dataIndex$split2 = _slicedToArray(_dataIndex$split, 2),
    before = _dataIndex$split2[0],
    after = _dataIndex$split2[1];
  var names = before.split(',');
  if (names.length > 1) {
    var _ref5;
    var _names2 = _slicedToArray(names, 2),
      valueName = _names2[0],
      labelName = _names2[1];
    var _ref3 = after ? after.split(',') : [],
      _ref4 = _slicedToArray(_ref3, 2),
      _ref4$ = _ref4[0],
      toValueName = _ref4$ === void 0 ? 'value' : _ref4$,
      _ref4$2 = _ref4[1],
      toLabelName = _ref4$2 === void 0 ? 'label' : _ref4$2;
    return _ref5 = {}, _defineProperty(_ref5, toValueName, values[valueName]), _defineProperty(_ref5, toLabelName, values[labelName]), _ref5;
  } else {
    return values[dataIndex];
  }
}

/**
 * 根据约定的规范, 分析 dataIndex, 将 values 转换成约定的数据
 * @参数 values 是需要转换的数据.
 * @参数 allVals 是通过 getFieldsValue 收集到的所有的表单值，通过它可以拿到所有的 dataIndex
 *
 * 1.
 * 参数values: {userId: '1', userName: 'jack}
 * 参数allVals: {'userId,userName': undefined}
 * => {'userId,userName': {value: '1', label: 'jack'}, userId: '1', userName: 'jack'}
 *
 * 2. 自定义取值:
 * 参数values: {userId: '1', userName: 'jack}
 * 参数allVals: {'userId,userName_id,name': undefined}
 * => {'userId,userName_id,name': {id: '1', name: 'jack'}, userId: '1', userName: 'jack'}
 *
 * 3. 套嵌数据也能处理:
 * 参数values: {info: {userId: '1', userName: 'jack'}}
 * 参数allVals: {info: {'userId,userName': undefined}}
 * => {info: {'userId,userName': {value: '1', label: 'jack'}, userId: '1', userName: 'jack'}}
 */

export function convertValues(values) {
  var allVals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!values) return values;
  Object.keys(allVals).forEach(function (dataIndex) {
    var val = allVals[dataIndex];

    // 处理套嵌数据
    if (_typeof(val) === 'object') {
      convertValues(values[dataIndex], val);
    }
    values[dataIndex] = getConventionValue(values, dataIndex);
  });
  return values;
}