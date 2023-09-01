function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["type"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { delGlobal } from "../utils";
import BaseTreeSelect from "./BaseTreeSelect";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 数据挂在window上作为缓存, 避免重复请求
 */
export var CacheName = '@@treeSelectData';
export var CacheStatusName = '@@treeSelectDataIsStart';
function BusinessTreeSelectBuilder(_ref) {
  var _ref$apis = _ref.apis,
    apis = _ref$apis === void 0 ? [] : _ref$apis,
    _ref$defaultProps = _ref.defaultProps,
    defaultProps = _ref$defaultProps === void 0 ? {} : _ref$defaultProps;
  return function (props) {
    var type = props.type,
      rest = _objectWithoutProperties(props, _excluded);
    var target = apis.find(function (item) {
      return item.type === type;
    });
    if (!target) return null;
    return /*#__PURE__*/_jsx(BaseTreeSelect, _objectSpread(_objectSpread(_objectSpread({
      type: type
    }, defaultProps), target.defaultProps || {}), {}, {
      loadFunction: target.api
    }, rest));
  };
}
export default BusinessTreeSelectBuilder;
export var clearTreeSelectCache = function clearTreeSelectCache(type) {
  if (type) {
    delGlobal(CacheName, type);
    delGlobal(CacheStatusName, type);
  } else {
    delGlobal(CacheName);
    delGlobal(CacheStatusName);
  }
};

// 用于生成api文档
export var Api = function Api() {
  return null;
};

// 用于生成api文档
export var Self = function Self() {
  return null;
};