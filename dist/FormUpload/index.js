function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["value", "onChange", "multiple", "children", "onFinish", "errorHandle", "responseToFileList", "nameKey", "urlKey"],
  _excluded2 = ["urlKey", "nameKey", "responseToFileList", "errorHandle"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Upload } from 'antd';
import { useContext, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { FormUploadContext } from "../SettingProvider/context";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 给 file 对象赋上默认的 status: done
 * initialValues 和 setFieldsValue 两种情况下的 file 对象需要带上 status, 否则表单收集不到.
 * beforeUpload 为 false 的 file 对象也会进到 fileList, 它的 status 为空, 所以表单不收集
 * @param files
 */
function withDefaultStatus() {
  var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return files.map(function (file) {
    if (!file.status) {
      file.status = 'done';
    }
    return file;
  });
}
function FormUpload(props) {
  var value = props.value,
    onChange = props.onChange,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? true : _props$multiple,
    children = props.children,
    onFinish = props.onFinish,
    errorHandle = props.errorHandle,
    responseToFileList = props.responseToFileList,
    nameKey = props.nameKey,
    urlKey = props.urlKey,
    rest = _objectWithoutProperties(props, _excluded);
  var _ref = useContext(FormUploadContext) || {},
    urlKeyContext = _ref.urlKey,
    nameKeyContext = _ref.nameKey,
    responseToFileListContext = _ref.responseToFileList,
    errorHandleContext = _ref.errorHandle,
    restUploadProps = _objectWithoutProperties(_ref, _excluded2);
  var $nameKey = nameKey || nameKeyContext || 'name';
  var $urlKey = urlKey || urlKeyContext || 'url';

  /**
   * 如果先前的 value 有值 [{name: '', url: ''}], 通过 setFieldsValue 设成空数组[]后, value 会变成 [undefined]
   */
  var $value = value ? value.filter(Boolean).map(function (val) {
    return _objectSpread(_objectSpread({}, val), {}, {
      name: val[$nameKey],
      url: val[$urlKey]
    });
  }) : value;

  // 是否有调用父组件的 onChange 函数
  var emitChangeRef = useRef(null);
  var firstTimeRef = useRef(true);
  var _useState = useState(withDefaultStatus($value)),
    _useState2 = _slicedToArray(_useState, 2),
    innerFileList = _useState2[0],
    setInnerFileList = _useState2[1];

  /**
   * 监听 value 变动, 当 value 不是由内部通过 props.onChnage 引起的
   * 触发 setInnerFileList
   */
  useEffect(function () {
    // 忽略第一次
    if (firstTimeRef.current) {
      firstTimeRef.current = false;
      return;
    }

    /**
     * 不是由内部引起的 value 变动
     */
    if (!emitChangeRef.current) {
      setInnerFileList(withDefaultStatus($value));
    }
    emitChangeRef.current = false;
  }, [JSON.stringify($value)]);
  var handleOnChange = function handleOnChange(info) {
    var fileList = _toConsumableArray(info.fileList);
    var $fileList = fileList.map(function (file) {
      /**
       * 将后端的返回合并进file对象
       */
      if (file.response) {
        var res = file.response;
        var resToFileList = responseToFileList || responseToFileListContext;
        var resObj = resToFileList ? resToFileList(res) : {};
        return _objectSpread(_objectSpread({}, file), resObj);
      }
      return file;
    });
    if (info.file.status === 'error') {
      var $errorHandle = errorHandle || errorHandleContext;
      if ($errorHandle) {
        $errorHandle(info.file.response || {});
      }
    }
    flushSync(function () {
      return setInnerFileList($fileList);
    });

    //  beforeUpload为false的文件也会进到onChange里
    if ($fileList.every(function (file) {
      return file.status !== 'uploading';
    })) {
      var successFiles = $fileList.filter(function (file) {
        return ['done', 'success'].includes(file.status);
      });
      if (onChange) {
        onChange(successFiles);
        emitChangeRef.current = true;
      }
      if (onFinish) onFinish(successFiles);
    }
  };
  return /*#__PURE__*/_jsx(Upload, _objectSpread(_objectSpread(_objectSpread({
    multiple: multiple
  }, restUploadProps), {}, {
    fileList: innerFileList,
    onChange: handleOnChange
  }, rest), {}, {
    children: children
  }));
}
export default FormUpload;

// 用于生成api文档
export var FormUploadType = function FormUploadType() {
  return null;
};