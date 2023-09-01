import { FormUploadContext, ModalFormContext, ProTableContext, SchemaFormContext } from "./context";
import { jsx as _jsx } from "react/jsx-runtime";
var SettingProvider = function SettingProvider(props) {
  var proTableSetting = props.proTableSetting,
    modalFormSetting = props.modalFormSetting,
    schemaFormSetting = props.schemaFormSetting,
    formUploadSetting = props.formUploadSetting,
    children = props.children;
  return /*#__PURE__*/_jsx(ProTableContext.Provider, {
    value: proTableSetting,
    children: /*#__PURE__*/_jsx(ModalFormContext.Provider, {
      value: modalFormSetting,
      children: /*#__PURE__*/_jsx(SchemaFormContext.Provider, {
        value: schemaFormSetting,
        children: /*#__PURE__*/_jsx(FormUploadContext.Provider, {
          value: formUploadSetting,
          children: children
        })
      })
    })
  });
};
export default SettingProvider;