var _excluded = ["labelKey", "valueKey", "type", "loadFunction", "nodeDisabled", "style", "value", "onChange", "queryParams", "noCache"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { TreeSelect } from 'antd';
import { isEqual } from 'lodash-es';
import { Component } from 'react';
import { getGlobal, setGlobal } from "../utils";
import { normalizeTreeSelect, withDisabled } from "../utils/tree";
import { CacheName, CacheStatusName } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
var BaseTreeSelect = /*#__PURE__*/function (_Component) {
  _inherits(BaseTreeSelect, _Component);
  var _super = _createSuper(BaseTreeSelect);
  function BaseTreeSelect(props) {
    var _this;
    _classCallCheck(this, BaseTreeSelect);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "reRender", function (e) {
      if (e.detail.type === _this.props.type && !_this.isNoCache()) {
        _this.setState({
          loading: false,
          dataSource: getGlobal(CacheName, _this.props.type) || []
        });
        setGlobal(CacheStatusName, _defineProperty({}, _this.props.type, false));
      }
    });
    // 判断是不是不要缓存
    _defineProperty(_assertThisInitialized(_this), "isNoCache", function () {
      // queryParams为依赖列表, 依赖列表有值则不缓存
      var _this$props = _this.props,
        _this$props$queryPara = _this$props.queryParams,
        queryParams = _this$props$queryPara === void 0 ? {} : _this$props$queryPara,
        noCache = _this$props.noCache;
      return Object.keys(queryParams).length > 0 || noCache;
    });
    _defineProperty(_assertThisInitialized(_this), "handleLoadData", function () {
      if (_this.isNoCache()) {
        _this.loadDataWithoutCache();
      } else {
        _this.loadDataForCache();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "loadDataForCache", function () {
      var _this$props2 = _this.props,
        type = _this$props2.type,
        loadFunction = _this$props2.loadFunction,
        _this$props2$valueKey = _this$props2.valueKey,
        valueKey = _this$props2$valueKey === void 0 ? 'id' : _this$props2$valueKey,
        _this$props2$labelKey = _this$props2.labelKey,
        labelKey = _this$props2$labelKey === void 0 ? 'name' : _this$props2$labelKey;

      // 如果同时有多个请求, 后面的请求return掉
      if (getGlobal(CacheStatusName, type)) {
        _this.setState({
          loading: true
        });
        return;
      }

      // 如果window.selectData中有数据则不请求后台
      // 同时对于依赖参数变化的请求不缓存
      if (getGlobal(CacheName, type)) {
        return;
      }
      setGlobal(CacheStatusName, _defineProperty({}, type, true));
      _this.setState({
        loading: true
      });
      loadFunction({}).then(function (res) {
        setGlobal(CacheName, _defineProperty({}, type, normalizeTreeSelect(res, {
          titleKey: labelKey,
          valueKey: valueKey
        })));
        var event = new CustomEvent('treeSelectGlobalUpdate', {
          detail: {
            type: type
          }
        });
        document.dispatchEvent(event);
      }).finally(function () {
        _this.setState({
          loading: false
        });
      });
    });
    _defineProperty(_assertThisInitialized(_this), "loadDataWithoutCache", function () {
      var _this$props3 = _this.props,
        loadFunction = _this$props3.loadFunction,
        queryParams = _this$props3.queryParams,
        _this$props3$valueKey = _this$props3.valueKey,
        valueKey = _this$props3$valueKey === void 0 ? 'id' : _this$props3$valueKey,
        _this$props3$labelKey = _this$props3.labelKey,
        labelKey = _this$props3$labelKey === void 0 ? 'name' : _this$props3$labelKey;
      _this.setState({
        loading: true
      });
      loadFunction(queryParams).then(function (res) {
        _this.setState({
          dataSource: normalizeTreeSelect(res, {
            titleKey: labelKey,
            valueKey: valueKey
          })
        });
      }).finally(function () {
        _this.setState({
          loading: false
        });
      });
    });
    _this.state = {
      loading: false,
      dataSource: getGlobal(CacheName, props.type) || []
    };
    return _this;
  }
  _createClass(BaseTreeSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleLoadData();
      document.addEventListener('treeSelectGlobalUpdate', this.reRender);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('treeSelectGlobalUpdate', this.reRender);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.queryParams, this.props.queryParams)) {
        this.handleLoadData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        labelKey = _this$props4.labelKey,
        valueKey = _this$props4.valueKey,
        type = _this$props4.type,
        loadFunction = _this$props4.loadFunction,
        nodeDisabled = _this$props4.nodeDisabled,
        _this$props4$style = _this$props4.style,
        style = _this$props4$style === void 0 ? {} : _this$props4$style,
        value = _this$props4.value,
        _onChange = _this$props4.onChange,
        queryParams = _this$props4.queryParams,
        noCache = _this$props4.noCache,
        rest = _objectWithoutProperties(_this$props4, _excluded);
      return /*#__PURE__*/_jsx(TreeSelect, _objectSpread(_objectSpread({
        showSearch: true,
        treeNodeFilterProp: "title",
        allowClear: true,
        placeholder: "\u8BF7\u9009\u62E9"
      }, rest), {}, {
        style: _objectSpread({
          width: '100%'
        }, style),
        loading: this.state.loading,
        value: value,
        onChange: function onChange(val, label, extra) {
          if (_onChange) _onChange(val, label, extra);
        },
        treeData: withDisabled(this.state.dataSource || [], nodeDisabled)
      }));
    }
  }]);
  return BaseTreeSelect;
}(Component);
export default BaseTreeSelect;