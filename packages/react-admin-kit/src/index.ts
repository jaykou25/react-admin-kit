// 核心组件
export { default as ProForm } from './ProForm';
export { default as SchemaForm } from './SchemaForm';
export { default as ModalForm } from './ModalForm';
export { default as ProTable } from './ProTable';

// 衍生组件
export { default as BusinessSelectBuilder } from './BusinessSelectBuilder';
export { clearSelectCache } from './BusinessSelectBuilder';
export { default as BusinessTreeSelectBuilder } from './BusinessTreeSelectBuilder';
export { clearTreeSelectCache } from './BusinessTreeSelectBuilder';
export { default as Button } from './Button';
export { default as LinkButton } from './LinkButton';
export { default as FormUpload } from './FormUpload';

// 全局设置
export { default as SettingProvider } from './SettingProvider';

// 类型定义
export type { ProFormInstance } from '@ant-design/pro-form';
export type { FormColumnType } from './SchemaForm/types';
export type { SchemaFormInnerRefType } from './context';

export type { ActionType as ActionRefType } from '@ant-design/pro-table';
export type { TableColumnType } from './ProTable/types';
export type { ModalFormInnerRefType } from './ModalForm/types';

// 用于捕获来自 pro-component 的告警信息 https://github.com/ant-design/pro-components/discussions/8837
if (typeof window !== 'undefined') {
  require('./utils/setupGlobalErrorHandling').setupGlobalErrorHandling();
}
