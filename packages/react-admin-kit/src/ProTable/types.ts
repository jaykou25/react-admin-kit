import type { FormFieldType } from '@ant-design/pro-form/es/components/SchemaForm/typing';
import type {
  ActionType,
  ProColumns,
  ProColumnsValueType,
  ProTableProps,
} from '@ant-design/pro-table';
import type { SearchConfig } from '@ant-design/pro-table/es/components/Form/FormRender';
import type { ModalProps, SpaceProps } from 'antd';
import type React from 'react';
import type { ReactElement, ReactNode } from 'react';
import {
  FormType,
  ModalFormInnerRefType,
  ModalFormProps,
  ModalFormSelfProps,
} from '../ModalForm/types';
import type { FormColumnType } from '../SchemaForm/types';
import { LocaleType } from 'react-admin-kit/locale';

export type ToolbarType = {
  title?: string | false;
  actions?: ReactElement[];
};

export type InnerRefType = {
  params?: any; // 查询参数
  total?: number; // 总条数
  dataSource?: any; // 表格数据
} & ModalFormInnerRefType;

type InnerRef = React.MutableRefObject<InnerRefType | undefined>;

export type TableAlertOptionType = {
  hideDelete?: boolean; // 默认是false
  deleteProps?: { btnText?: string; title?: (num) => string } | any; // 可以传入popconfirm 或 modal.confirm的属性
  enableExport?: boolean; // 默认是false
  actions?: ReactNode[];
  exportName?: string;
};

// 这几个属性已提取到 ProTable 上。
// forceRender 不可更改，强制为 true
export type ModalFormPropsForProTable = Omit<
  ModalFormProps,
  'innerRef' | 'onFinish' | 'onOpen' | 'columns' | 'forceRender'
>;

export type MyProTableType = Omit<
  ProTableProps<any, any>,
  'columns' | 'name' | 'onFinish' | 'tableAlertOptionRender' | 'search'
> & {
  /**
   * @zh-Hans 表格或表单的配置描述;
   * @en      Configuration description of table or form items;
   */
  columns: TableColumnType[];

  /**
   * @zh-Hans 用于 table 的 headerTitle 的显示, 还有弹出框的 title 显示; 可以配合 locale 修改文案。
   *
   */
  name?: string;

  /**
   * @zh-Hans 用于修改 headerTitle 的后缀文案和 formType 对应的文案。
   *
   * @default zh_CH
   *
   */
  locale?: LocaleType;

  /**
   * @zh-Hans 弹框中的表单项。
   *
   * @default columns
   *
   */
  formColumns?: FormColumnType[];
  onFinish?: (
    values: any,
    formType: FormType,
    formData: any,
  ) => Promise<any> | void;
  onOpen?: ModalFormSelfProps['onOpen'];
  innerRef?: InnerRef;
  /**
   * 传入这个函数, 组件就会自动集成多选删除功能.
   * 如果点击的是行上的删除, record是该行的数据, selectedIds是该行的id; 如果是多选后的删除, record是空对象
   * 同时在columns中, 对于valueType为option的那一列, 如果声明了enableDelete, 操作列就会自动加入删除按钮
   */
  delFunction?: (
    selectedIds: (string | number)[],
    record,
    callback?,
  ) => Promise<any>;
  delPermission?: () => boolean; // 是否有删除权限
  /**
   * 移除了原来ProTable中的tableAlertOptionRender接口而用tableAlertOptions来替代.
   * 是因为在tableAlert中封装了多选删除的功能
   */
  tableAlertOption?: TableAlertOptionType;
  // 操作列的space间距
  optionColSpaceSize?: 'small';
  /**
   * @zh-Hans 传递给 ModalForm 组件的属性。
   *
   */
  modalFormProps?: ModalFormPropsForProTable;
  noPadding?: boolean;
  confirmModelType?: 'popconfirm' | 'modal';
  confirmModalProps?: any;
  search?: false | (SearchConfig & { labelWrap?: boolean });
  optionColumnSpaceProps?: SpaceProps;

  /**
   * @zh-Hans columns 中的列是否默认在搜索区域里隐藏。
   *
   * @default false
   */
  defaultHideInSearch?: boolean;
};

type EnableDeleteType = {
  disabled?: boolean;
  visible?: boolean;
  danger?: boolean;
  btnText?: string;
};

export type selfColumnsValueType = 'export';

export type MyFieldType = ProColumnsValueType | FormFieldType;

/**
 * Table 类型的 column 定义
 * 在 @ant-design/pro-table 的 type { ProColumns } 上修改某些属性
 */
type TableColumnTypeBase<Record, ValueType> = Omit<
  ProColumns<Record, ValueType>,
  'renderFormItem' | 'render' | 'fieldProps' | 'editable' | 'valueType'
> & {
  /**
   * @description 是否开启操作列上的删除
   */
  enableDelete?: boolean | ((record: any, index: number) => EnableDeleteType);
  /**
   * 定义导出
   */
  renderExport?: (text: string | number, record: Record) => string | number;

  /**
   * 给 render 方法注入 innerRef
   */
  render?: (
    dom: ReactNode,
    record: Record,
    index: number,
    action: ActionType,
    innerRef: InnerRef,
  ) => any;
  type?: 'form' | 'table' | 'search';
  children?: TableColumnType<Record, ValueType>[];
  valueType?: MyFieldType | ValueType;
};

/**
 * 被继承的基础接口类型中如果含有 [key: string]: any, 在用 Omit 时会有问题
 * https://blog.csdn.net/riddle1981/article/details/131501414
 */
type OmitIndex<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};

/**
 * Table 的 column 定义
 * 它是 Form column 和 Table column 的合并, 因为在 ProTable 组件中 Tablet 和 Form 都存在
 */
export type TableColumnType<Record = any, ValueType = 'text'> = OmitIndex<
  FormColumnType<Record, ValueType>,
  'render'
> &
  TableColumnTypeBase<Record, ValueType>;
