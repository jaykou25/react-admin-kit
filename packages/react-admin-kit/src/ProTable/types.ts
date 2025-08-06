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
   *
   *
   */
  params?: any; // 查询参数

  /**
   * @zh-Hans 总条数。
   *
   *
   */
  total?: number; // 总条数

  /**
   * @zh-Hans 表格数据。
   *
   *
   */
  dataSource?: any; // 表格数据

  /**
   * @zh-Hans 导出表格数据。
   *
   *
   */
  export: (
    /**
     * @zh-Hans 要导出的数据。 可以传 dataSource 或者 selectedRows
     */
    rows,
    /**
     * @zh-Hans exceljs 对象
     */
    ExcelJS,
    options?: {
      /**
       * @zh-Hans 导出前的回调函数，可以对 worksheet 进行修改。
       */
      beforeExport?: (worksheet) => void;
      /**
       * @zh-Hans 导出文件名。
       */
      filename?: string;
    },
  ) => void;
} & ModalFormInnerRefType;

type InnerRef = React.MutableRefObject<InnerRefType | undefined>;

export type TableAlertOptionType = {
  /**
   * @description 是否开启 alert 上的删除
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
   *
   *
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
   *
   *
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
   *
   * @type [Space](https://ant-design.antgroup.com/components/space-cn#api)
   * @default {size: 'middle'}
   */
  spaceProps?: SpaceProps;
};

// 这几个属性已提取到 ProTable 上。
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
   */
  request?: ProTableProps<any, any>['request'];

  /**
   * @zh-Hans 用于手动触发 table 的一些操作，比如 reload, reset 等;
   *
   * @type [ActionType](https://procomponents.ant.design/components/table#actionref-%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91)
   */
  actionRef?: ProTableProps<any, any>['actionRef'];

  /**
   * @zh-Hans 一个工具类 ref，包含了一些方法和属性;
   * @type [InnerRefType](/components/protable#innerreftype)
   */
  innerRef?: InnerRef;

  /**
   * @zh-Hans 用于 table 的 headerTitle 的显示, 还有弹出框的 title 显示; 可以配合 locale 修改文案。
   *
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
   *
   */
  delFunction?: (
    /**
     * @zh-Hans 所选行的 ids 数组;
     */
    selectedIds: (string | number)[],
    /**
     * @zh-Hans 所选行的数据; 如果是多选的，record 是空对象;
     */
    record,
  ) => Promise<any> | void;

  /**
   * @zh-Hans 是否有删除权限; 不传默认为有;
   *
   */
  delPermission?: () => boolean;

  /**
   * @zh-Hans 多选删除功能的选项;
   *
   * @type [TableAlertOptionType](/components/protable#tablealertoptiontype)
   */
  tableAlertOption?: TableAlertOptionType;

  /**
   * @zh-Hans 自定义 table alert 右侧区域;
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
   *
   * @type Omit<[ModalFormProps](/components/setting-provider#modalformsettingprops), 'innerRef' | 'onFinish' | 'onOpen' | 'columns'>
   */
  modalFormProps?: ModalFormPropsForProTable;

  /**
   * @zh-Hans 移除 Card 包裹的 padding; 已废弃; 用 cardStyle = false 替代;
   * @deprecated 用 cardStyle = false 替代
   *
   */
  noPadding?: boolean;

  /**
   * @zh-Hans 删除的确认弹框类型。
   *
   * @default popconfirm
   */
  delConfirmType?: 'popconfirm' | 'modal';

  /**
   * @zh-Hans 传给删除确认框的属性。title 和 description 可以是函数;
   *
   *
   */
  delPopconfirmProps?: Omit<PopconfirmProps, 'title' | 'description'> & {
    title?: ReactNode | ((record: any, index: any) => ReactNode);
    description?: ReactNode | ((record: any, index: any) => ReactNode);
  };

  /**
   * @zh-Hans 传给删除确认框的属性。title 和 content 可以是函数;
   *
   *
   */
  delModalConfirmProps?: Omit<ModalFuncProps, 'title' | 'content'> & {
    title?: ReactNode | ((record: any, index: any) => ReactNode);
    content?: ReactNode | ((record: any, index: any) => ReactNode);
  };

  /**
   * @zh-Hans 删除成功后的提示属性（传递给 Message 的属性）。false 关闭提示。
   *
   * @type false | [MessageConfig](https://ant-design.antgroup.com/components/message-cn#messageconfig)
   * @default {content: "删除成功", type: "success"}
   */
  delSuccessProps?: Partial<MessageArgsProps> | false;

  /**
   * @zh-Hans 搜索区域的选项;
   *
   * @type false | {labelWrap?: boolean} & [SearchConfig](https://procomponents.ant.design/components/table#search-%E6%90%9C%E7%B4%A2%E8%A1%A8%E5%8D%95)
   */
  search?: false | (SearchConfig & { labelWrap?: boolean });

  /**
   * @zh-Hans 传给操作列中包裹各按钮的 Space 组件的属性。
   *
   * @type [Space](https://ant-design.antgroup.com/components/space-cn#api)
   * @default {size: 'small'}
   */
  optionColumnSpaceProps?: SpaceProps;

  /**
   * @zh-Hans columns 中的列是否默认在搜索区域里隐藏。
   *
   * @default false
   */
  defaultHideInSearch?: boolean;

  /**
   * @zh-Hans 用于修改 headerTitle 的后缀文案和 formType 等对应的文案。
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
  // 以下是 procomponent-protable 中的不要的属性
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
   */
  disabled?: boolean;

  /**
   * @zh-Hans 操作列中的删除按钮是否可见。
   */
  visible?: boolean;

  /**
   * @zh-Hans 操作列中的删除按钮的 danger 属性。
   */
  danger?: boolean;

  /**
   * @zh-Hans 操作列中的删除按钮的文字。
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
  // 移除掉一些废用的属性
  | 'filterDropdownOpen'
  | 'onFilterDropdownOpenChange'
  | 'filterDropdownVisible'
  | 'onFilterDropdownVisibleChange'
>;

export type TableColumnSelfType<Record, ValueType> = {
  /**
   * @description 是否开启操作列上的删除
   */
  enableDelete?:
    | boolean
    | ((
        record: any,
        index: number,
      ) => (EnableDeleteType & { btnIndex?: number }) | boolean);
  /**
   * @zh-Hans 定义导出
   */
  renderExport?: (text: string | number, record: Record) => string | number;

  /**
   * @zh-Hans 给 render 方法注入 innerRef
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
   */
  type?: 'form' | 'table' | 'search';

  /**
   * @zh-Hans 套嵌表格
   */
  children?: TableColumnType<Record, ValueType>[];
};

/**
 * Table 类型的 column 定义
 * 在 @ant-design/pro-table 的 type { ProColumns } 上修改某些属性
 */
export type TableColumnTypeBase<Record, ValueType> = TableColumnOriginType<
  Record,
  ValueType
> &
  TableColumnSelfType<Record, ValueType>;

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
