var _excluded = ["embed", "readonly", "submitter", "columns", "valueName"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Col, Row, Form } from 'antd';
import { genItems } from "./genItems";
import { jsx as _jsx } from "react/jsx-runtime";

var SchemaForm = function SchemaForm(props) {
  var _props$embed = props.embed,
      embed = _props$embed === void 0 ? false : _props$embed,
      _props$readonly = props.readonly,
      readonly = _props$readonly === void 0 ? false : _props$readonly,
      _props$submitter = props.submitter,
      submitter = _props$submitter === void 0 ? false : _props$submitter,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      valueName = props.valueName,
      rest = _objectWithoutProperties(props, _excluded);

  var $columns = readonly ? columns.map(function (col) {
    return _objectSpread(_objectSpread({}, col), {}, {
      readonly: true
    });
  }) : columns; // 处理套嵌数据结构

  if (valueName) {
    $columns.forEach(function (col) {
      var dataIndex = col.dataIndex;

      if (typeof dataIndex === 'string') {
        col.dataIndex = [valueName, dataIndex];
      }
    });
  }
  /**
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */


  var formInstance = Form.useFormInstance();

  if (embed) {
    var grid = props.grid,
        rowProps = props.rowProps,
        colProps = props.colProps,
        labelCol = props.labelCol;

    if (grid) {
      return /*#__PURE__*/_jsx(Row, _objectSpread(_objectSpread({}, rowProps), {}, {
        children: genItems($columns, 'form', formInstance, labelCol).map(function (itemObj) {
          var dom = itemObj.dom,
              item = itemObj.item;
          return /*#__PURE__*/_jsx(Col, _objectSpread(_objectSpread(_objectSpread({}, colProps), item.colProps), {}, {
            children: dom
          }), item.dataIndex);
        })
      }));
    }

    return genItems($columns, 'form', formInstance, labelCol).map(function (itemObj) {
      return itemObj.dom;
    });
  }

  return /*#__PURE__*/_jsx(BetaSchemaForm, _objectSpread(_objectSpread({
    submitter: submitter
  }, rest), {}, {
    columns: $columns,
    layoutType: 'Form'
  }));
};

export default SchemaForm; // 用于生成api文档

export var Self = function Self() {
  return null;
};