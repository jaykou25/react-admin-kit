var _excluded = ["type", "valueKey", "labelKey"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import BasePaginationSelect from "./components/BasePaginationSelect";
import BaseSelect from "./components/BaseSelect";
import { jsx as _jsx } from "react/jsx-runtime";

/**
 * select数据挂在window上作为缓存, 避免重复请求
 */
export var SelectName = '@@selectData';
export var SelectStatusName = '@@selectDataIsStart';
export var SelectTotalName = '@@selectDataTotal';

var BusinessSelectBuilder = function BusinessSelectBuilder(_ref) {
  var _ref$apis = _ref.apis,
      apis = _ref$apis === void 0 ? [] : _ref$apis;

  /**
   * 初始化window挂载
   */
  window[SelectName] = {};
  window[SelectStatusName] = {};
  window[SelectTotalName] = {};
  return function (props) {
    var type = props.type,
        valueKey = props.valueKey,
        labelKey = props.labelKey,
        rest = _objectWithoutProperties(props, _excluded);

    var target = apis.find(function (item) {
      return item.type === type;
    });
    if (!target) return null;

    if (target.pagination) {
      return /*#__PURE__*/_jsx(BasePaginationSelect, _objectSpread({
        type: type,
        loadFunction: target.api,
        noCache: target.noCache,
        valueKey: valueKey || target.valueKey || 'id',
        labelKey: labelKey || target.labelKey || 'name'
      }, rest));
    }

    return /*#__PURE__*/_jsx(BaseSelect, _objectSpread({
      type: type,
      loadFunction: target.api,
      noCache: target.noCache,
      valueKey: valueKey || target.valueKey || 'id',
      labelKey: labelKey || target.labelKey || 'name'
    }, rest));
  };
};

export default BusinessSelectBuilder;