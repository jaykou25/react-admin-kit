import type {
  ProFormColumnsType,
  ProFormInstance,
  ProFormProps,
  SubmitterProps,
} from '@ant-design/pro-form';
import type { DescriptionsProps } from 'antd';
import { BaseInnerRef } from 'react-admin-kit/context';

export type SchemaFormProps = SchemaFormSelfProps & OtherFormProps;

export type SchemaFormSelfProps = {
  /**
   * @zh-Hans 是否为内嵌模式
   * @en      Whether it is embed mode
   * @default false
   */
  embed?: boolean;

  /**
   * @zh-Hans 开启embed后处理套嵌数据结构; 在onFinish收集数据时, 会挂在该字段下. 仅适用于embed模式
   * @en      When embed is enabled, handle nested data structure; when collecting data in onFinish, it will be attached under this field. Only applicable in embed mode.
   * @default false
   */
  valueBaseName?: string;

  /**
   * @zh-Hans 是否为只读模式
   * @en      Whether it is readonly mode
   * @default false
   */
  readonly?: boolean;

  /**
   * @zh-Hans 只读时的展示形式。可选 form 或 descriptions
   * @en      Display type when readonly. Options: form or descriptions
   * @default form
   */
  readonlyType?: 'form' | 'descriptions';

  /**
   * @zh-Hans 表单项的配置描述;
   * @en      Configuration description of form items;
   * @type [FormColumnType](/components/schema-form#formcolumntype)[]
   */
  columns: FormColumnType[];

  /**
   * @zh-Hans 表单提交时的回调;
   * @en      Callback when the form is submitted;
   * @type (values) => Promise | void
   */
  onFinish?: (values: any) => Promise<boolean | void> | void;

  /**
   * @zh-Hans 用于获取form实例; 请使用formRef而不要通过form属性传入一个form实例来获取实例. 因为RAK组件对form实例进行了额外的封装, 一定要通过formRef来获取.
   * @en      Used to get the form instance; please use formRef instead of passing a form instance through the form property. Because RAK components have extra encapsulation for the form instance, you must get it through formRef.
   * @type    RefObject<ProFormInstance>
   */
  formRef?:
    | React.MutableRefObject<ProFormInstance<any> | undefined>
    | React.RefObject<ProFormInstance<any> | undefined>;

  /**
   * @zh-Hans RAK特有的ref, 用于存放一些工具类函数和数据.
   * @en      RAK specific ref, used to store some utility functions and data.
   * @type    [SchemaFormInnerRefType](/components/schema-form#schemaforminnerreftype)
   */
  innerRef?: BaseInnerRef;

  /**
   * @zh-Hans 提交按钮相关配置.
   * @en      Submit button related configuration.
   * @type    boolean | SubmitterProps & { style: React.CSSProperties }
   * @default false
   */
  submitter?:
    | boolean
    | (SubmitterProps & { style?: React.CSSProperties; className?: string });

  /**
   * @zh-Hans 描述模式下的表格样式配置
   * @en      Table style configuration in descriptions mode
   * @type    Omit<[DescriptionsProps](https://ant-design.antgroup.com/components/descriptions-cn#descriptions), 'items'>
   */
  descriptionsProps?: Omit<DescriptionsProps, 'items'>;
};

export type OtherFormProps = Omit<
  ProFormProps,
  'action' | 'onFinish' | 'layoutType' | 'submitter'
>;

/**
 * @zh-Hans 表单的 schema 定义
 * @en      Schema definition for the form
 */
export type FormColumnType<T = any, ValueType = 'text'> = {
  /**
   * @zh-Hans 给 fieldProps 方法注入 innerRef
   * @en      Inject innerRef into the fieldProps method
   */
  fieldProps?:
    | object
    | ((form: ProFormInstance, innerRef: BaseInnerRef, config: any) => object);

  /**
   * @zh-Hans 给 renderFormItem 方法注入 innerRef
   * @en      Inject innerRef into the renderFormItem method
   */
  renderFormItem?: (item, config, form, innerRef: BaseInnerRef) => any;

  /**
   * @zh-Hans 重新定义 columns 类型
   * @en      Redefine the columns type
   *
   */
  columns?:
    | FormColumnType<T, ValueType>[]
    | ((values: any) => FormColumnType<T, ValueType>[]);

  /**
   * @zh-Hans 是否必选; formItemProps: { rules: [{ required: true }] } 的简写
   * @en      Whether it is required; shorthand for formItemProps: { rules: [{ required: true }] }
   */
  required?: boolean;

  /**
   * @zh-Hans 可使用约定式自动处理值: userId, userName 或 userId, userName_id, name;
   * @en      Can use conventional automatic value processing: userId, userName or userId, userName_id, name;
   */
  dataIndex?: string;

  /**
   * @zh-Hans 可以自定义任意的字段
   * @en      Can customize any field
   */
  [key: string]: any;
} & Omit<
  ProFormColumnsType<T, ValueType>,
  | 'editable'
  | 'fieldProps'
  | 'renderFormItem'
  | 'columns'
  | 'dataIndex'
  // @zh-Hans 移除掉一些不需要的
  // @en      Remove some unnecessary properties
  | 'hideInDescriptions'
  | 'hideInTable'
  | 'hideInSearch'
  | 'proFieldProps'
>;
