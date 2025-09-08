import type { FormFieldType } from '@ant-design/pro-form/es/components/SchemaForm/typing';
import type {
  ActionType,
  ProColumns,
  ProColumnsValueType,
  ProTableProps,
} from '@ant-design/pro-table';
import type { SearchConfig } from '@ant-design/pro-table/es/components/Form/FormRender';
import type {
  MessageArgsProps,
  ModalFuncProps,
  ModalProps,
  PopconfirmProps,
  SpaceProps,
} from 'antd';
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
  /**
   * @zh-Hans 查询参数。
   * @en Query parameters.
   */
  params?: any; // @zh-Hans 查询参数 @en Query parameters

  /**
   * @zh-Hans 总条数。
   * @en Total count.
   */
  total?: number; // @zh-Hans 总条数 @en Total count

  /**
   * @zh-Hans 表格数据。
   * @en Table data source.
   */
  dataSource?: any; // @zh-Hans 表格数据 @en Table data

  /**
   * @zh-Hans 导出表格数据。
   * @en Export table data.
   */
  export: (
    /**
     * @zh-Hans 要导出的数据。 可以传 dataSource 或者 selectedRows
     * @en Data to be exported. Can pass dataSource or selectedRows
     */
    rows,
    /**
     * @zh-Hans exceljs 对象
     * @en ExcelJS object
     */
    ExcelJS,
    options?: {
      /**
       * @zh-Hans 导出前的回调函数，可以对 worksheet 进行修改。
       * @en Callback function before export, can modify the worksheet.
       */
      beforeExport?: (worksheet) => void;
      /**
       * @zh-Hans 导出文件名。
       * @en Export filename.
       */
      filename?: string;
    },
  ) => void;
} & ModalFormInnerRefType;

type InnerRef = React.MutableRefObject<InnerRefType | undefined>;

export type TableAlertOptionType = {
  /**
   * @zh-Hans 是否开启 alert 上的删除
   * @en Whether to enable delete on alert
   *
   * @default true
   */
  enableDelete?:
    | boolean
    | ((
        selectedRowKeys: any[],
        selectedRows: any[],
      ) => EnableDeleteType | boolean);

  /**
   * @zh-Hans 传给 alert 上删除确认框的属性。title 和 description 可以是函数;
   * @en Properties passed to the delete confirmation popover on alert. title and description can be functions;
   */
  delPopconfirmProps?: Omit<PopconfirmProps, 'title' | 'description'> & {
    title?:
      | ReactNode
      | ((selectedRowKeys: any[], selectedRows: any[]) => ReactNode);
    description?:
      | ReactNode
      | ((selectedRowKeys: any[], selectedRows: any[]) => ReactNode);
  };

  /**
   * @zh-Hans 传给 alert 上删除确认框的属性。title 和 content 可以是函数;
   * @en Properties passed to the delete confirmation modal on alert. title and content can be functions;
   */
  delModalConfirmProps?: Omit<ModalFuncProps, 'title' | 'content'> & {
    title?:
      | ReactNode
      | ((selectedRowKeys: any[], selectedRows: any[]) => ReactNode);
    content?:
      | ReactNode
      | ((selectedRowKeys: any[], selectedRows: any[]) => ReactNode);
  };

  /**
   * @zh-Hans 传递给 alert 中包裹各按钮的 Space 组件的属性。
   * @en Properties passed to the Space component that wraps buttons in the alert.
   *
   * @type [Space](https://ant-design.antgroup.com/components/space-cn#api)
   * @default {size: 'middle'}
   */
  spaceProps?: SpaceProps;
};

// @zh-Hans 这几个属性已提取到 ProTable 上。
// @en These properties have been extracted to ProTable.
export type ModalFormPropsForProTable = Omit<
  ModalFormProps,
  'innerRef' | 'onFinish' | 'onOpen' | 'columns'
>;

export type MyProTableSelfType = {
  /**
   * @zh-Hans 表格或表单的配置描述;
   * @en      Configuration description of table or form items;
   * @type [TableColumnType](/components/protable#tablecolumntype)[]
   */
  columns: TableColumnType[];

  /**
   * @zh-Hans 获取 dataSource 的方法;
   * @en Function to get dataSource;
   */
  request?: ProTableProps<any, any>['request'];

  /**
   * @zh-Hans 用于手动触发 table 的一些操作，比如 reload, reset 等;
   * @en Used to manually trigger some table operations, such as reload, reset, etc;
   *
   * @type [ActionType](https://procomponents.ant.design/components/table#actionref-%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91)
   */
  actionRef?: ProTableProps<any, any>['actionRef'];

  /**
   * @zh-Hans 一个工具类 ref，包含了一些方法和属性;
   * @en A utility ref that contains some methods and properties;
   * @type [InnerRefType](/components/protable#innerreftype)
   */
  innerRef?: InnerRef;

  /**
   * @zh-Hans 用于 table 的 headerTitle 的显示, 还有弹出框的 title 显示; 可以配合 locale 修改文案。
   * @en Used for table headerTitle display and modal title display; can be used with locale to modify text.
   */
  name?: string;

  /**
   * @zh-Hans 点击弹窗确定按钮后的回调;
   * @en      Callback after clicking the modal confirm button;
   * @type (values, formType, formData) => Promise | void
   */
  onFinish?: (
    values: any,
    formType: FormType,
    formData: any,
  ) => Promise<any> | void;

  /**
   * @zh-Hans 打开弹框后的回调, 可以在这里请求数据;
   * @en      Callback after opening the modal, you can request data here;
   * @type (formType, formRef, formData) => Promise | void
   */
  onOpen?: ModalFormSelfProps['onOpen'];

  /**
   * @zh-Hans 传入的删除函数;
   * @en The delete function passed in;
   */
  delFunction?: (
    /**
     * @zh-Hans 所选行的 ids 数组;
     * @en Array of selected row ids;
     */
    selectedIds: (string | number)[],
    /**
     * @zh-Hans 所选行的数据; 如果是多选的，record 是空对象;
     * @en Data of selected rows; if multiple selection, record is an empty object;
     */
    record,
  ) => Promise<any> | void;

  /**
   * @zh-Hans 是否有删除权限; 不传默认为有;
   * @en Whether has delete permission; defaults to true if not passed;
   */
  delPermission?: () => boolean;

  /**
   * @zh-Hans 多选删除功能的选项;
   * @en Options for multi-select delete functionality;
   *
   * @type [TableAlertOptionType](/components/protable#tablealertoptiontype)
   */
  tableAlertOption?: TableAlertOptionType;

  /**
   * @zh-Hans 自定义 table alert 右侧区域;
   * @en Custom table alert right area;
   */
  tableAlertOptionRender?:
    | false
    | ((
        option: {
          selectedRowKeys: any[];
          selectedRows: any[];
          onCleanSelected: () => void;
        },
        doms: {
          delDom?: ReactNode;
          cancelDom: ReactNode;
        },
      ) => ReactNode);

  /**
   * @zh-Hans 传递给 ModalForm 组件的属性。
   * @en Properties passed to the ModalForm component.
   *
   * @type Omit<[ModalFormProps](/components/setting-provider#modalformsettingprops), 'innerRef' | 'onFinish' | 'onOpen' | 'columns'>
   */
  modalFormProps?: ModalFormPropsForProTable;

  /**
   * @zh-Hans 移除 Card 包裹的 padding; 已废弃; 用 cardStyle = false 替代;
   * @en Remove Card wrapper padding; deprecated; use cardStyle = false instead;
   * @deprecated 用 cardStyle = false 替代
   */
  noPadding?: boolean;

  /**
   * @zh-Hans 删除的确认弹框类型。
   * @en Type of delete confirmation popup.
   *
   * @default popconfirm
   */
  delConfirmType?: 'popconfirm' | 'modal';

  /**
   * @zh-Hans 传给删除确认框的属性。title 和 description 可以是函数;
   * @en Properties passed to delete confirmation popover. title and description can be functions;
   */
  delPopconfirmProps?: Omit<PopconfirmProps, 'title' | 'description'> & {
    title?: ReactNode | ((record: any, index: any) => ReactNode);
    description?: ReactNode | ((record: any, index: any) => ReactNode);
  };

  /**
   * @zh-Hans 传给删除确认框的属性。title 和 content 可以是函数;
   * @en Properties passed to delete confirmation modal. title and content can be functions;
   */
  delModalConfirmProps?: Omit<ModalFuncProps, 'title' | 'content'> & {
    title?: ReactNode | ((record: any, index: any) => ReactNode);
    content?: ReactNode | ((record: any, index: any) => ReactNode);
  };

  /**
   * @zh-Hans 删除成功后的提示属性（传递给 Message 的属性）。false 关闭提示。
   * @en Message properties after successful deletion (passed to Message component). false to disable message.
   *
   * @type false | [MessageConfig](https://ant-design.antgroup.com/components/message-cn#messageconfig)
   * @default {content: "删除成功", type: "success"}
   */
  delSuccessProps?: Partial<MessageArgsProps> | false;

  /**
   * @zh-Hans 搜索区域的选项;
   * @en Options for search area;
   *
   * @type false | {labelWrap?: boolean} & [SearchConfig](https://procomponents.ant.design/components/table#search-%E6%90%9C%E7%B4%A2%E8%A1%A8%E5%8D%95)
   */
  search?: false | (SearchConfig & { labelWrap?: boolean });

  /**
   * @zh-Hans 传给操作列中包裹各按钮的 Space 组件的属性。
   * @en Properties passed to the Space component that wraps buttons in the action column.
   *
   * @type [Space](https://ant-design.antgroup.com/components/space-cn#api)
   * @default {size: 'small'}
   */
  optionColumnSpaceProps?: SpaceProps;

  /**
   * @zh-Hans columns 中的列是否默认在搜索区域里隐藏。
   * @en Whether columns are hidden in search area by default.
   *
   * @default false
   */
  defaultHideInSearch?: boolean;

  /**
   * @zh-Hans 用于修改 headerTitle 的后缀文案和 formType 等对应的文案。
   * @en Used to modify the suffix text of headerTitle and corresponding text for formType, etc.
   *
   * @default zh_CH
   */
  locale?: LocaleType;

  /**
   * @zh-Hans 弹框中的表单项。
   * @en Form items in the modal.
   *
   * @default columns
   */
  formColumns?: FormColumnType[];
};

export type MyProTableOriginType = Omit<
  ProTableProps<any, any>,
  | 'columns'
  | 'name'
  | 'onFinish'
  | 'tableAlertOptionRender'
  | 'search'
  | 'request'
  | 'actionRef'
  // @zh-Hans 以下是 procomponent-protable 中的不要的属性
  // @en The following are unwanted properties from procomponent-protable
  | 'form'
  | 'onSubmit'
  | 'expandedRowKeys'
  | 'defaultExpandedRowKeys'
  | 'expandedRowRender'
  | 'expandRowByClick'
  | 'expandIcon'
  | 'onExpand'
  | 'onExpandedRowsChange'
  | 'defaultExpandAllRows'
  | 'expandIconColumnIndex'
  | 'expandedRowClassName'
  | 'childrenColumnName'
  | 'tailor'
  | 'getContainerWidth'
>;

export type MyProTableType = MyProTableOriginType & MyProTableSelfType;

export type EnableDeleteType = {
  /**
   * @zh-Hans 操作列中的删除按钮是否禁用。
   * @en Whether the delete button in the action column is disabled.
   */
  disabled?: boolean;

  /**
   * @zh-Hans 操作列中的删除按钮是否可见。
   * @en Whether the delete button in the action column is visible.
   */
  visible?: boolean;

  /**
   * @zh-Hans 操作列中的删除按钮的 danger 属性。
   * @en The danger property of the delete button in the action column.
   */
  danger?: boolean;

  /**
   * @zh-Hans 操作列中的删除按钮的文字。
   * @en The text of the delete button in the action column.
   */
  btnText?: string;
};

export type MyFieldType = ProColumnsValueType | FormFieldType;

export type TableColumnOriginType<Record, ValueType> = Omit<
  ProColumns<Record, ValueType>,
  | 'renderFormItem'
  | 'render'
  | 'fieldProps'
  | 'editable'
  // @zh-Hans 移除掉一些废用的属性
  // @en Remove some deprecated properties
  | 'filterDropdownOpen'
  | 'onFilterDropdownOpenChange'
  | 'filterDropdownVisible'
  | 'onFilterDropdownVisibleChange'
>;

export type TableColumnSelfType<Record, ValueType> = {
  /**
   * @zh-Hans 是否开启操作列上的删除
   * @en Whether to enable delete in the action column
   */
  enableDelete?:
    | boolean
    | ((
        record: any,
        index: number,
      ) => (EnableDeleteType & { btnIndex?: number }) | boolean);
  /**
   * @zh-Hans 定义导出
   * @en Define export
   */
  renderExport?: (text: string | number, record: Record) => string | number;

  /**
   * @zh-Hans 给 render 方法注入 innerRef
   * @en Inject innerRef into the render method
   */
  render?: (
    dom: ReactNode,
    record: Record,
    index: number,
    action: ActionType,
    innerRef: InnerRef,
  ) => any;

  /**
   * @zh-Hans 用于指定该 schema 是被用于表单还是表格
   * @en Used to specify whether this schema is used for form or table
   */
  type?: 'form' | 'table' | 'search';

  /**
   * @zh-Hans 套嵌表格
   * @en Nested table
   */
  children?: TableColumnType<Record, ValueType>[];
};

/**
 * @zh-Hans Table 类型的 column 定义
 * @zh-Hans 在 @ant-design/pro-table 的 type { ProColumns } 上修改某些属性
 * @en Table type column definition
 * @en Modify certain properties on the type { ProColumns } from @ant-design/pro-table
 */
export type TableColumnTypeBase<Record, ValueType> = TableColumnOriginType<
  Record,
  ValueType
> &
  TableColumnSelfType<Record, ValueType>;

/**
 * @zh-Hans 被继承的基础接口类型中如果含有 [key: string]: any, 在用 Omit 时会有问题
 * @en If the inherited base interface type contains [key: string]: any, there will be problems when using Omit
 * https://blog.csdn.net/riddle1981/article/details/131501414
 */
type OmitIndex<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};

/**
 * @zh-Hans Table 的 column 定义
 * @zh-Hans 它是 Form column 和 Table column 的合并, 因为在 ProTable 组件中 Tablet 和 Form 都存在
 * @en Table column definition
 * @en It is a merge of Form column and Table column, because both Table and Form exist in the ProTable component
 */
export type TableColumnType<Record = any, ValueType = 'text'> = OmitIndex<
  FormColumnType<Record, ValueType>,
  'render'
> &
  TableColumnTypeBase<Record, ValueType>;
