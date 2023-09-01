function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { renderValueType } from '@ant-design/pro-form/es/components/SchemaForm/valueType/index';
import { LabelIconTip, omitUndefined, runFunction } from '@ant-design/pro-utils';
import { Col } from 'antd';

/**
 * 生成 formItems
 * 代码摘自 @ant-design/pro-form
 *
 */
import { jsx as _jsx } from "react/jsx-runtime";
var _genItems = function _genItems(items) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'form';
  var formInstance = arguments.length > 2 ? arguments[2] : undefined;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$labelCol = options.labelCol,
    labelCol = _options$labelCol === void 0 ? {} : _options$labelCol,
    valueBaseName = options.valueBaseName,
    grid = options.grid,
    _options$colProps = options.colProps,
    colProps = _options$colProps === void 0 ? {} : _options$colProps,
    _options$readonly = options.readonly,
    readonly = _options$readonly === void 0 ? false : _options$readonly;
  return items.filter(function (originItem) {
    return !(originItem.hideInForm && type === 'form');
  }).sort(function (a, b) {
    if (b.order || a.order) {
      return (b.order || 0) - (a.order || 0);
    }
    return (b.index || 0) - (a.index || 0);
  }).map(function (originItem, index) {
    var _item$dataIndex;
    var title = runFunction(originItem.title, originItem, 'form', /*#__PURE__*/_jsx(LabelIconTip, {
      label: originItem.title,
      tooltip: originItem.tooltip || originItem.tip
    }));
    var genDataIndex = function genDataIndex(key, base) {
      if (base) {
        if (typeof key === 'string') {
          return [base, key];
        }
        if (Array.isArray(key)) {
          return [base].concat(key);
        }
      }
      return key;
    };
    var item = omitUndefined(_objectSpread(_objectSpread({}, originItem), {}, {
      title: title,
      label: title,
      valueType: runFunction(originItem.valueType, {}),
      dataIndex: genDataIndex(originItem.key || originItem.dataIndex, valueBaseName),
      readonly: originItem.readonly || readonly,
      tooltip: originItem.tooltip || originItem.tip,
      getFieldProps: originItem.fieldProps ? function () {
        return runFunction(originItem.fieldProps, formInstance, originItem);
      } : undefined,
      getFormItemProps: originItem.formItemProps ? function () {
        return runFunction(_objectSpread({
          labelCol: labelCol
        }, originItem.formItemProps), formInstance, originItem);
      } : function () {
        return {
          labelCol: labelCol
        };
      }
    }));
    var key = item.key || ((_item$dataIndex = item.dataIndex) === null || _item$dataIndex === void 0 ? void 0 : _item$dataIndex.toString()) || index;
    item.key = key;
    item.name = item.name || item.dataIndex;
    var dom = renderValueType(item, {
      action: undefined,
      type: 'form',
      originItem: originItem,
      formRef: {
        current: formInstance
      },
      genItems: function genItems(items) {
        return _genItems(items, type, formInstance, {
          labelCol: labelCol,
          valueBaseName: valueBaseName,
          grid: grid,
          colProps: colProps,
          readonly: readonly
        });
      }
    });
    if (grid && dom && item.valueType !== 'dependency') {
      return /*#__PURE__*/_jsx(Col, _objectSpread(_objectSpread(_objectSpread({}, colProps), item.colProps), {}, {
        children: dom
      }), key);
    }
    return dom;
  }).filter(function (field) {
    return Boolean(field);
  });
};
export { _genItems as genItems };