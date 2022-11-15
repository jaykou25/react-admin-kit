import type { ProFormProps, ProFormInstance } from '@ant-design/pro-form';

export type SchemaFormProps = SchemaFormSelfProps & OtherFormProps;

export type SchemaFormSelfProps = {
  /**
   * @description       是否为内嵌模式
   * @default           false
   */
  embed?: Boolean;

  /**
   * @description      处理套嵌数据结构; 在onFinish收集数据时, 会挂在该字段下. 仅适用于embed模式
   * @default           false
   */
  valueBaseName?: String;

  /**
   * @description       是否为只读模式
   * @default           false
   */
  readonly?: Boolean;

  /**
   * @description 表单项的配置描述;
   */
  columns: any;

  /**
   * @description 表单提交时的回调;
   */
  onFinish?: (values: any) => Promise<boolean> | void;

  /**
   * @description 用于获取form实例; 请使用formRef而不要使用form属性传入一个form实例. 因为组件有对formRef进行封装.
   * @type RefObject<ProFormInstance>
   */
  formRef?:
    | React.MutableRefObject<ProFormInstance<any> | undefined>
    | React.RefObject<ProFormInstance<any> | undefined>;
};

export type OtherFormProps = Omit<ProFormProps, 'action' | 'onFinish' | 'form' | 'layoutType'>;
