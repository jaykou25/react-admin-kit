import type { FormSchema } from '@ant-design/pro-form/es/components/SchemaForm/typing';
import type { ProFormProps } from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import React from 'react';

export type SchemaFormProps = SchemaFormSelfProps & OtherFormProps;

export type SchemaFormSelfProps = {
  /**
   * @description       是否为内嵌模式
   * @default           false
   */
  embed?: Boolean;

  /**
   * @description       是否为只读模式
   * @default           false
   */
  readonly?: Boolean;

  /**
   * @description 表单项的配置描述;
   */
  columns: any;

  onFinish: any;

  // formRef:
  //   | React.MutableRefObject<FormInstance<any> | undefined>
  //   | React.RefObject<FormInstance<any> | undefined>;
};

export type OtherFormProps = Omit<ProFormProps, 'action' | 'onFinish' | 'form' | 'layoutType'>;
