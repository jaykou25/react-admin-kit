function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["globalUpdate", "dispatch", "type", "loadFunction", "labelKey", "valueKey", "renderLabel", "onChange", "queryParams", "noCache"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { normalizeSelect } from "./tree";
import { Select } from 'antd';
import { Component } from 'react';
import { debounce } from 'lodash';
import isEqual from 'lodash/isEqual';
import { SelectName, SelectStatusName, SelectTotalName } from '..';
/**
 * 分页选择组件
 *
 */

import { jsx as _jsx } from "react/jsx-runtime";

var BasePaginationSelect = /*#__PURE__*/function (_Component) {
  _inherits(BasePaginationSelect, _Component);

  var _super = _createSuper(BasePaginationSelect);

  function BasePaginationSelect(props) {
    var _this;

    _classCallCheck(this, BasePaginationSelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "reRender", function (e) {
      if (e.detail.type === _this.props.type) {
        _this.setState({
          loading: false,
          dataSource: window[SelectName][_this.props.type] || [],
          total: window[SelectTotalName][_this.props.type] || 0
        });

        window[SelectStatusName][_this.props.type] = false;
      }
    });

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
          dispatch = _this$props2.dispatch; // 如果同时有多个请求, 后面的请求return掉

      if (window[SelectStatusName][type]) {
        _this.setState({
          loading: true
        });

        return;
      } // 如果window.selectData中有数据则不请求后台
      // 同时对于依赖参数变化的请求不缓存


      if (window[SelectName][type]) {
        return;
      }

      window[SelectStatusName][type] = true;

      _this.setState({
        loading: true
      });

      loadFunction({}).then(function (res) {
        window[SelectName][type] = res.data;
        window[SelectTotalName][type] = res.total;
        var event = new CustomEvent('selectGlobalUpdate', {
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
          queryParams = _this$props3.queryParams;

      _this.setState({
        loading: true
      });

      loadFunction(queryParams).then(function (res) {
        _this.setState({
          dataSource: res.data,
          total: res.total
        });
      }).finally(function () {
        _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTotal", function () {
      if (_this.isNoCache()) {
        return _this.state.total;
      }

      return window[SelectTotalName][_this.props.type];
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var type = _this.props.type;

      _this.setState({
        searchValue: undefined,
        dataSource: window[SelectName][type] || [],
        total: window[SelectTotalName][type],
        current: 1
      }); // bugfix: 针对没缓存的需要重新获取数据


      if (_this.isNoCache()) {
        _this.handleLoadData();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (val) {
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          _this$props4$valueKey = _this$props4.valueKey,
          valueKey = _this$props4$valueKey === void 0 ? 'id' : _this$props4$valueKey,
          labelInValue = _this$props4.labelInValue; // 如果是点的clear

      if (!val) {
        _this.reset();

        if (onChange) {
          // @ts-ignore
          onChange(val, {});
        }

        return;
      }

      if (onChange) {
        onChange(val, _this.state.dataSource.find(function (row) {
          if (labelInValue) {
            return row[valueKey] === (val === null || val === void 0 ? void 0 : val.value);
          }

          return row[valueKey] === val;
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdateData", function () {
      var _this$state = _this.state,
          current = _this$state.current,
          searchValue = _this$state.searchValue,
          dataSource = _this$state.dataSource;

      _this.setState({
        loading: true
      });

      _this.props.loadFunction({
        current: current,
        searchValue: searchValue
      }).then(function (res) {
        _this.setState({
          dataSource: dataSource.concat(res.data),
          loading: false,
          total: res.total
        });
        /**
         * 非search的时候把返回的数据存到缓存
         */


        if (!searchValue) {
          window[SelectName][_this.props.type] = dataSource.concat(res.data);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchData", function () {
      var searchValue = _this.state.searchValue;

      _this.setState({
        loading: true
      });

      _this.props.loadFunction({
        current: 1,
        searchValue: searchValue
      }).then(function (res) {
        _this.setState({
          dataSource: res.data,
          loading: false,
          total: res.total
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePopupScroll", function (e) {
      e.persist();
      var target = e.target;
      var current = _this.state.current;

      if (_this.toBottomNeedLoad(target)) {
        _this.setState({
          current: current + 1
        }, _this.handleUpdateData);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toBottomNeedLoad", function (target) {
      var _this$state2 = _this.state,
          dataSource = _this$state2.dataSource,
          loading = _this$state2.loading;
      return !loading && _this.toBottom(target) && dataSource.length < _this.getTotal();
    });

    _defineProperty(_assertThisInitialized(_this), "toBottom", function (target) {
      return target.scrollTop + target.clientHeight + 10 > target.scrollHeight;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (value) {
      if (value) {
        _this.setState({
          searchValue: value,
          current: 1
        }, function () {
          return _this.handleSearchData();
        });

        return;
      } // 没值的话恢复初始状态


      _this.reset();
    });

    _this.state = {
      dataSource: window[SelectName][props.type] || [],
      total: window[SelectTotalName][props.type] || 0,
      loading: false,
      searchValue: '',
      current: 1
    };
    return _this;
  }

  _createClass(BasePaginationSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleLoadData();
      document.addEventListener('selectGlobalUpdate', this.reRender);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('selectGlobalUpdate', this.reRender);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.queryParams, this.props.queryParams)) {
        this.handleLoadData();
      }
    } // 判断是不是不要缓存

  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          globalUpdate = _this$props5.globalUpdate,
          dispatch = _this$props5.dispatch,
          type = _this$props5.type,
          loadFunction = _this$props5.loadFunction,
          labelKey = _this$props5.labelKey,
          valueKey = _this$props5.valueKey,
          renderLabel = _this$props5.renderLabel,
          onChange = _this$props5.onChange,
          queryParams = _this$props5.queryParams,
          noCache = _this$props5.noCache,
          rest = _objectWithoutProperties(_this$props5, _excluded);

      return /*#__PURE__*/_jsx(Select, _objectSpread(_objectSpread({}, rest), {}, {
        placeholder: "\u8BF7\u9009\u62E9",
        loading: this.state.loading,
        onChange: this.handleOnChange,
        options: normalizeSelect(this.state.dataSource, {
          labelKey: labelKey,
          valueKey: valueKey,
          renderLabel: renderLabel
        }) // 搜索部分
        ,
        showSearch: true,
        allowClear: true,
        filterOption: false,
        onPopupScroll: this.handlePopupScroll,
        onSearch: debounce(this.handleSearch, 500)
      }));
    }
  }]);

  return BasePaginationSelect;
}(Component);

export default BasePaginationSelect;