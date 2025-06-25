import type {
  ProFormColumnsType,
  ProFormInstance,
  ProFormProps,
  SubmitterProps,
} from '@ant-design/pro-form';

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
   * @zh-Hans 表单项的配置描述;
   * @en      Configuration description of form items;
   */
  columns: FormColumnType[];

  /**
   * @zh-Hans 表单提交时的回调;
   * @en      Callback when the form is submitted;
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
   * @type    RefObject<SchemaFormInnerRefType>
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
    | (SubmitterProps & { style: React.CSSProperties; className?: string });
};

export type OtherFormProps = Omit<
  ProFormProps,
  'action' | 'onFinish' | 'layoutType' | 'submitter'
>;

/**
 * 表单的 schema 定义
 */
export type FormColumnType<T = any, ValueType = 'text'> = Omit<
  ProFormColumnsType<T, ValueType>,
  'editable' | 'fieldProps' | 'renderFormItem' | 'columns'
> & {
  /**
   * 给 fieldProps 方法注入 innerRef
   */
  fieldProps?:
    | object
    | ((form: ProFormInstance, innerRef: BaseInnerRef, config: any) => object);

  /**
   * 给 renderFormItem 方法注入 innerRef
   */
  renderFormItem?: (item, config, form, innerRef: BaseInnerRef) => any;

  /**
   * 重新定义 columns 类型
   */
  columns?:
    | FormColumnType<T, ValueType>[]
    | ((values: any) => FormColumnType<T, ValueType>[]);

  /**
   * formItemProps: {rules: [{required: true}]} 的简写
   */
  required?: boolean;

  /**
   * 可以自定义任意的字段
   */
  [key: string]: any;
};

/**
 * 表单的 InnerRef
 */
export type SchemaFormInnerRefType = {
  data: any; // 用于存放一些数据
  setData: (values: Record<string, any>) => void; // 存入数据
};

export type BaseInnerRef = React.MutableRefObject<
  SchemaFormInnerRefType | undefined
>;
