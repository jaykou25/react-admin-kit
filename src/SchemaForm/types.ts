import type { ProFormProps } from '@ant-design/pro-form';

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

  onFinish?: any;

  // formRef:
  //   | React.MutableRefObject<FormInstance<any> | undefined>
  //   | React.RefObject<FormInstance<any> | undefined>;
};

export type OtherFormProps = Omit<ProFormProps, 'action' | 'onFinish' | 'form' | 'layoutType'>;
