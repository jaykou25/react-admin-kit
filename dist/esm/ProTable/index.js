function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["rowKey", "name", "columns", "options", "pagination", "formColumns", "scroll", "onFinish", "tableAlertOption", "rowSelection", "sticky", "className", "optionColSpaceSize", "search", "request", "modalProps", "formProps"],
    _excluded2 = ["modalProps", "formProps", "searchConfig"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

import { Component } from 'react';
import produce from 'immer';
import ModalForm from "../ModalForm";
import AntProTable from '@ant-design/pro-table';
import { message, Popconfirm, Space } from 'antd';
import LinkButton from "../LinkButton";
import { exportAntTableDataToExcel } from "./utils/excel";
import { filterExportCols } from "./filterCols";
import { handleRequestParams } from "./utils";
import "./styles.less";
import cs from 'classnames';
import { handleValuesForEdit, handleValuesForSubmit } from "./utils/form";
import { ProTableContext } from "../SettingProvider/context";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

/**
 * 表单类型的映射
 */
export var FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看'
};

var ProTable = /*#__PURE__*/function (_Component) {
  _inherits(ProTable, _Component);

  var _super = _createSuper(ProTable);

  function ProTable(props) {
    var _this;

    _classCallCheck(this, ProTable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "targetId", void 0);

    _defineProperty(_assertThisInitialized(_this), "context", void 0);

    _defineProperty(_assertThisInitialized(_this), "getTitle", function () {
      var _this$props = _this.props,
          name = _this$props.name,
          _this$props$toolbar = _this$props.toolbar,
          toolbar = _this$props$toolbar === void 0 ? {} : _this$props$toolbar;
      var title = toolbar.title;
      return title || "".concat(name, "\u5217\u8868") || '';
    });

    _defineProperty(_assertThisInitialized(_this), "getModalTitle", function () {
      var _this$props$name = _this.props.name,
          name = _this$props$name === void 0 ? '' : _this$props$name;
      var formType = _this.state.formType;
      return "".concat(FORM_TYPE_MAP[formType]).concat(name) || '';
    });

    _defineProperty(_assertThisInitialized(_this), "setInnerRef", function (newValue) {
      if (_this.props.innerRef) {
        var values = _this.props.innerRef.current;
        _this.props.innerRef.current = _objectSpread(_objectSpread({}, values), newValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openModal", function () {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'new';

      var _initialData = arguments.length > 1 ? arguments[1] : undefined;

      var initialData = handleValuesForEdit(_initialData || {}, _this.props.columns);

      _this.setInnerRef({
        formType: type,
        formData: initialData || {}
      });

      _this.setState({
        formVisible: true,
        formType: type,
        formData: initialData || {}
      });
    });

    _defineProperty(_assertThisInitialized(_this), "patchColumn", function ($cols) {
      var innerRef = _this.props.innerRef;
      return produce($cols, function (cols) {
        cols.forEach(function (col) {
          var renderFormItem = col.renderFormItem,
              render = col.render; // 给renderFormItem增加ref参数

          if (renderFormItem) {
            col.renderFormItem = function (a, b, c) {
              return renderFormItem(a, b, c, innerRef);
            };
          } // 给valueType为optione列的render增加ref参数


          if (col.valueType === 'option' && render) {
            col.render = function (text, record, index, actionRef) {
              return render(text, record, index, actionRef, innerRef);
            };
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "enableDelete", function ($cols) {
      // props
      var _this$props2 = _this.props,
          _this$props2$rowKey = _this$props2.rowKey,
          rowKey = _this$props2$rowKey === void 0 ? 'id' : _this$props2$rowKey,
          delPermission = _this$props2.delPermission,
          delFunction = _this$props2.delFunction;
      var hasDelPermission = delPermission ? delPermission() : true; // state

      var delLoading = _this.state.delLoading; // 使用produce是为了改变columns的引用, 从而可以重渲染

      return produce($cols, function (cols) {
        cols.forEach(function (col) {
          var render = col.render,
              _col$enableDelete = col.enableDelete,
              enableDelete = _col$enableDelete === void 0 ? false : _col$enableDelete; // 如果列上开启了删除enableDelete, 复写render

          if (col.valueType === 'option' && delFunction && hasDelPermission && enableDelete && render) {
            col.render = function (text, record, index, actionRef, innerRef) {
              var key = typeof rowKey === 'function' ? rowKey(record) : rowKey;
              var $enableDelete = typeof enableDelete === 'function' ? enableDelete(record, index) : {}; // enabledDelete为true时的默认值

              var _$enableDelete$disabl = $enableDelete.disabled,
                  disabled = _$enableDelete$disabl === void 0 ? false : _$enableDelete$disabl,
                  _$enableDelete$visibl = $enableDelete.visible,
                  visible = _$enableDelete$visibl === void 0 ? true : _$enableDelete$visibl,
                  danger = $enableDelete.danger;
              var renderDom = render(text, record, index, actionRef, innerRef);

              if (Array.isArray(renderDom) && visible) {
                var deleteDom = /*#__PURE__*/_jsx(Popconfirm, {
                  title: "\u786E\u5B9A\u5220\u9664\u5417?",
                  onConfirm: function onConfirm(e) {
                    e === null || e === void 0 ? void 0 : e.stopPropagation();

                    _this.handleDelete([record[key]], record);
                  },
                  onCancel: function onCancel(e) {
                    return e === null || e === void 0 ? void 0 : e.stopPropagation();
                  },
                  children: /*#__PURE__*/_jsx(LinkButton, {
                    disabled: disabled,
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    loading: delLoading && record[key] === _this.targetId,
                    danger: danger,
                    children: "\u5220\u9664"
                  })
                }, renderDom.length + 1);

                renderDom.push(deleteDom);
              }

              return renderDom;
            };
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRowSelection", function () {
      // props
      var rowSelection = _this.props.rowSelection; //state

      var selectedRowKeys = _this.state.selectedRowKeys;

      if (rowSelection && !rowSelection.selectedRowKeys) {
        return _objectSpread(_objectSpread({}, rowSelection), {}, {
          selectedRowKeys: selectedRowKeys,
          onChange: function onChange(keys) {
            return _this.setState({
              selectedRowKeys: keys
            });
          }
        });
      }

      return rowSelection;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (selectedIds, record, callback) {
      var _this$props3 = _this.props,
          _this$props3$rowKey = _this$props3.rowKey,
          rowKey = _this$props3$rowKey === void 0 ? 'id' : _this$props3$rowKey,
          delFunction = _this$props3.delFunction,
          _this$props3$rowSelec = _this$props3.rowSelection,
          rowSelection = _this$props3$rowSelec === void 0 ? {} : _this$props3$rowSelec;
      var key = typeof rowKey === 'function' ? rowKey(record) : rowKey;

      _this.setState({
        delLoading: true
      });

      if (record[key]) {
        _this.targetId = record[key];
      }

      if (delFunction) {
        delFunction(selectedIds, record).then(function () {
          var _this$props$actionRef;

          message.success('删除成功!');
          if (callback) callback(); // bugfix: 如果在多选选中后, 点的行上的删除, 不是点的批量删除, 删除后要去除掉selectedKeys

          if (record[key]) {
            var ids = (selectedIds || []).filter(function (_key) {
              return _key !== record[key];
            });

            if (rowSelection.selectedRowKeys) {
              if (rowSelection.onChange) rowSelection.onChange(ids);
            } else {
              _this.setState({
                selectedRowKeys: ids
              });
            }
          }

          var action = (_this$props$actionRef = _this.props.actionRef) === null || _this$props$actionRef === void 0 ? void 0 : _this$props$actionRef.current;

          if (action) {
            // bugfix: 假如数据一共有两页, 并且第二页只有一条数据, 删除该数据后应该自动切到上一页
            var _action$pageInfo = action.pageInfo,
                current = _action$pageInfo.current,
                total = _action$pageInfo.total,
                pageSize = _action$pageInfo.pageSize; // 判断当前是否为空

            var deleteRecordLength = record.id ? 1 : (selectedIds || []).length;
            var isCurrentEmpty = total - deleteRecordLength === (current - 1) * pageSize;

            if (current > 1 && isCurrentEmpty) {
              action.setPageInfo({
                current: current - 1
              });
              return;
            }

            action.reload();
          }
        }).finally(function () {
          _this.setState({
            delLoading: false
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "tableAlertOptionRender", function (_ref) {
      var _selectedRowKeys = _ref.selectedRowKeys,
          onCleanSelected = _ref.onCleanSelected,
          selectedRows = _ref.selectedRows;
      // state
      var delLoading = _this.state.delLoading; // props

      var _this$props4 = _this.props,
          _this$props4$tableAle = _this$props4.tableAlertOption,
          tableAlertOption = _this$props4$tableAle === void 0 ? {} : _this$props4$tableAle,
          columns = _this$props4.columns,
          name = _this$props4.name,
          delFunction = _this$props4.delFunction,
          delPermission = _this$props4.delPermission; // tableAlertOption

      var _tableAlertOption$hid = tableAlertOption.hideDelete,
          hideDelete = _tableAlertOption$hid === void 0 ? false : _tableAlertOption$hid,
          _tableAlertOption$hid2 = tableAlertOption.hideExport,
          hideExport = _tableAlertOption$hid2 === void 0 ? true : _tableAlertOption$hid2,
          _tableAlertOption$act = tableAlertOption.actions,
          alertActions = _tableAlertOption$act === void 0 ? [] : _tableAlertOption$act,
          exportName = tableAlertOption.exportName;
      var hasDelPermission = delPermission ? delPermission() : true;
      return /*#__PURE__*/_jsxs(Space, {
        size: 'middle',
        children: [!hideExport && /*#__PURE__*/_jsx(LinkButton, {
          onClick: function onClick() {
            exportAntTableDataToExcel(selectedRows, filterExportCols(columns), exportName || "".concat(name || '导出', "\u5217\u8868"));
            onCleanSelected();
          },
          children: "\u5BFC\u51FA\u6240\u9009"
        }), !hideDelete && delFunction && hasDelPermission && /*#__PURE__*/_jsx(Popconfirm, {
          overlayStyle: {
            width: '180px'
          },
          title: "\u786E\u5B9A\u5220\u9664".concat(_selectedRowKeys.length, "\u6761\u6570\u636E\u5417?"),
          onConfirm: function onConfirm() {
            _this.handleDelete(_selectedRowKeys, {}, onCleanSelected);
          },
          okButtonProps: {
            loading: delLoading
          },
          children: /*#__PURE__*/_jsx(LinkButton, {
            loading: delLoading,
            children: "\u6279\u91CF\u5220\u9664"
          })
        }), alertActions, /*#__PURE__*/_jsx("a", {
          onClick: onCleanSelected,
          children: "\u53D6\u6D88\u9009\u62E9"
        })]
      });
    });

    _this.state = {
      formVisible: false,
      formType: '',
      formData: {},
      delLoading: false,
      selectedRowKeys: []
    };
    _this.targetId = '';

    if (props.innerRef) {
      props.innerRef.current = {};
      props.innerRef.current.openModal = _this.openModal;
      props.innerRef.current.setInnerRef = _this.setInnerRef;
    }

    return _this;
  }

  _createClass(ProTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          _this$props5$rowKey = _this$props5.rowKey,
          rowKey = _this$props5$rowKey === void 0 ? 'id' : _this$props5$rowKey,
          name = _this$props5.name,
          columns = _this$props5.columns,
          _this$props5$options = _this$props5.options,
          options = _this$props5$options === void 0 ? false : _this$props5$options,
          _this$props5$paginati = _this$props5.pagination,
          pagination = _this$props5$paginati === void 0 ? {} : _this$props5$paginati,
          formColumns = _this$props5.formColumns,
          _this$props5$scroll = _this$props5.scroll,
          scroll = _this$props5$scroll === void 0 ? {
        x: '100%'
      } : _this$props5$scroll,
          _onFinish = _this$props5.onFinish,
          tableAlertOption = _this$props5.tableAlertOption,
          rowSelection = _this$props5.rowSelection,
          _this$props5$sticky = _this$props5.sticky,
          sticky = _this$props5$sticky === void 0 ? true : _this$props5$sticky,
          className = _this$props5.className,
          optionColSpaceSize = _this$props5.optionColSpaceSize,
          search = _this$props5.search,
          request = _this$props5.request,
          _this$props5$modalPro = _this$props5.modalProps,
          modalProps = _this$props5$modalPro === void 0 ? {} : _this$props5$modalPro,
          _this$props5$formProp = _this$props5.formProps,
          formProps = _this$props5$formProp === void 0 ? {} : _this$props5$formProp,
          rest = _objectWithoutProperties(_this$props5, _excluded); // state


      var _this$state = this.state,
          formVisible = _this$state.formVisible,
          formType = _this$state.formType,
          formData = _this$state.formData;
      /**
       * 全局默认设置
       */

      var setting = this.context || {};

      var _setting$modalProps = setting.modalProps,
          settingModalProps = _setting$modalProps === void 0 ? {} : _setting$modalProps,
          _setting$formProps = setting.formProps,
          settingFormProps = _setting$formProps === void 0 ? {} : _setting$formProps,
          _setting$searchConfig = setting.searchConfig,
          searchConfig = _setting$searchConfig === void 0 ? {} : _setting$searchConfig,
          restSetting = _objectWithoutProperties(setting, _excluded2);

      var tableRest = _objectSpread(_objectSpread({}, restSetting), rest);

      var modalRest = _objectSpread(_objectSpread({}, settingModalProps), modalProps);

      var defaultSearchConfig = _objectSpread(_objectSpread({}, searchConfig), {}, {
        className: 'searchFormStyleFix'
      });

      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(AntProTable, _objectSpread({
          className: cs(className, optionColSpaceSize === 'small' && 'myTableSmallOptionCol'),
          rowKey: rowKey,
          headerTitle: this.getTitle() // @ts-ignore
          ,
          columns: this.enableDelete(this.patchColumn(columns)),
          options: options,
          pagination: pagination,
          scroll: scroll,
          tableAlertOptionRender: this.tableAlertOptionRender,
          rowSelection: this.getRowSelection(),
          sticky: sticky,
          search: search === false ? false : _objectSpread(_objectSpread({}, defaultSearchConfig), search),
          request: request ? function (params, sort, filter) {
            return new Promise(function (resolve, reject) {
              request(handleRequestParams(params, sort), sort, filter).then(function (res) {
                _this2.setInnerRef({
                  total: res.total,
                  data: res.data,
                  params: handleRequestParams(params, sort)
                });

                resolve(res);
              }).catch(function (err) {
                return reject(err);
              });
            });
          } : undefined
        }, tableRest)), /*#__PURE__*/_jsx(ModalForm, _objectSpread({
          open: formVisible,
          onCancel: function onCancel() {
            return _this2.setState({
              formVisible: false
            });
          },
          title: this.getModalTitle() // @ts-ignore
          ,
          columns: this.patchColumn(formColumns || columns),
          onFinish: function onFinish(values) {
            return _onFinish && _onFinish(handleValuesForSubmit(values), formType, formData);
          },
          formProps: _objectSpread(_objectSpread(_objectSpread({}, settingFormProps), formProps), {}, {
            initialValues: formData
          })
        }, modalRest))]
      });
    }
  }]);

  return ProTable;
}(Component);

_defineProperty(ProTable, "contextType", ProTableContext);

export default ProTable;