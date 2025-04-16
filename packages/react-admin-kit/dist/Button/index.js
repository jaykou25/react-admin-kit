import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["visible"];
import { Button as AntButton } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";
var Button = function Button(props) {
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? true : _props$visible,
    restProps = _objectWithoutProperties(props, _excluded);
  if (typeof visible === 'function') {
    if (!visible()) return null;
  }
  if (!visible) {
    return null;
  }
  return /*#__PURE__*/_jsx(AntButton, _objectSpread({}, restProps));
};
export default Button;

// 用于生成api文档
export var ButtonSelf = function ButtonSelf() {
  return null;
};