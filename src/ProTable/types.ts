import type React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { ProColumns, ProTableProps } from '@ant-design/pro-table';
import type { ModalProps } from 'antd';
import { SettingFormProps } from '../SettingProvider/types';

export type ToolbarType = {
  title?: string | false;
  actions?: ReactElement[];
};

export type InnerRefType = {
  openModal: OpenModalType;
  params?: any; // 查询参数
  total?: number; // 总条数
  data?: any; // 表格数据
};

export type MyProTableType = Omit<
  ProTableProps<any, any>,
  'columns' | 'name' | 'onFinish' | 'tableAlertOptionRender' | 'editable'
> & {
  columns: MyProColumnType[];
  name?: string; // 这个值用于table的headerTitle, 还有弹出框的title
  formColumns?: MyProColumnType[]; // 弹框中的表单项, 这个值不传就拿columns中的值
  onFinish?: (values: any, formType: 'new' | 'edit', formData: any) => Promise<any>;
  innerRef?: React.MutableRefObject<InnerRefType | undefined>;
  /**
   * 传入这个函数, 组件就会自动集成多选删除功能.
   * 如果点击的是行上的删除, record是该行的数据, selectedIds是该行的id; 如果是多选后的删除, record是空对象
   * 同时在columns中, 对于valueType为option的那一列, 如果声明了enableDelete, 操作列就会自动加入删除按钮
   */
  delFunction?: (selectedIds, record, callback?) => Promise<any>;
  delPermission?: () => Boolean; // 是否有删除权限
  /**
   * 移除了原来ProTable中的tableAlertOptionRender接口而用tableAlertOptions来替代.
   * 是因为在tableAlert中封装了多选删除的功能
   */
  tableAlertOption?: {
    hideDelete?: boolean; // 默认是false
    hideExport?: boolean; // 默认是true
    actions?: ReactNode[];
    exportName?: string;
  };
  // 操作列的space间距
  optionColSpaceSize?: 'small';
  editable?: boolean;
  modalProps?: ModalProps;
  formProps?: SettingFormProps;
};

export type OpenModalType = (type?: 'new' | 'edit', record?: any) => void;

export type FetchOptionType = {
  needLoading?: boolean;
};

type EnableDeleteType = {
  disabled?: boolean;
  visible?: boolean;
  danger?: boolean;
};

export type selfColumnsValueType = 'export';

export type MyProColumnType<Type = string> = Omit<
  ProColumns,
  'renderFormItem' | 'render' | 'editable'
> & {
  children?: MyProColumnType<Type>[];
  enableDelete?: boolean | ((record: any, index: number) => EnableDeleteType);
  renderFormItem?: (item, config, form, innerRef) => any;
  render?: (text, record, index, actionRef, innerRef) => any;
  editable?: boolean | (() => boolean);
  type?: Type | Type[];
  transform?: (vals) => any;
};

/**
 * 只针对MyEditTable, renderFormItem有变化
 */
export type MyEditProColumnType = Omit<MyProColumnType, 'renderFormItem'> & {
  renderFormItem?: (a, b, form, index, record) => any;
};

export type MyEditProTableType = Omit<MyProTableType, 'columns'> & {
  columns: MyEditProColumnType[];
};
