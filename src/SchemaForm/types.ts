import type {
  ProFormColumnsType,
  ProFormInstance,
  ProFormProps,
  SubmitterProps,
} from '@ant-design/pro-form';

export type SchemaFormProps = SchemaFormSelfProps & OtherFormProps;

export type SchemaFormSelfProps = {
  /**
   * @description       是否为内嵌模式
   * @default           false
   */
  embed?: boolean;

  /**
   * @description      开启embed后处理套嵌数据结构; 在onFinish收集数据时, 会挂在该字段下. 仅适用于embed模式
   * @default           false
   */
  valueBaseName?: string;

  /**
   * @description       是否为只读模式
   * @default           false
   */
  readonly?: boolean;

  /**
   * @description 表单项的配置描述;
   */
  columns: FormColumnType[];

  /**
   * @description 表单提交时的回调;
   */
  onFinish?: (values: any) => Promise<boolean | void> | void;

  /**
   * @description 用于获取form实例; 请使用formRef而不要通过form属性传入一个form实例来获取实例. 因为RAK组件对form实例进行了额外的封装, 一定要通过formRef来获取.
   * @type RefObject<ProFormInstance>
   */
  formRef?:
    | React.MutableRefObject<ProFormInstance<any> | undefined>
    | React.RefObject<ProFormInstance<any> | undefined>;

  /**
   * @description RAK特有的ref, 用于存放一些工具类函数和数据.
   * @type RefObject<SchemaFormInnerRefType>
   */
  innerRef?: InnerRef;

  /**
   * @description 提交按钮相关配置.
   * @type boolean | SubmitterProps & { style: React.CSSProperties }
   * @default    false
   */
  submitter?: boolean | (SubmitterProps & { style: React.CSSProperties });
};

export type OtherFormProps = Omit<
  ProFormProps,
  'action' | 'onFinish' | 'form' | 'layoutType' | 'submitter'
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
    | ((form: ProFormInstance, innerRef: InnerRef, config: any) => object);

  /**
   * 给 renderFormItem 方法注入 innerRef
   */
  renderFormItem?: (item, config, form, innerRef: InnerRef) => any;

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

export type InnerRef = React.MutableRefObject<SchemaFormInnerRefType | null>;
