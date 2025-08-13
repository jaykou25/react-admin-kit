import { FormUploadProps } from '../FormUpload/types';
import { MyProTableType } from '../ProTable/types';
import type { SchemaFormProps } from '../SchemaForm/types';
import type { ModalFormProps } from '../ModalForm/types';

export type SchemaFormSettingProps = Omit<
  SchemaFormProps,
  'form' | 'formRef' | 'innerRef' | 'onFinish' | 'columns'
>;

export type ModalFormSettingProps = Omit<
  ModalFormProps,
  'innerRef' | 'formRef' | 'onFinish' | 'columns' | 'onOk'
>;

export type ProTableSettingProps = Omit<
  MyProTableType,
  'request' | 'columns' | 'formColumns' | 'onFinish' | 'innerRef' | 'actionRef'
>;

export type SettingProviderProps = {
  /**
   * @description       SchemaForm组件的设置项
   * @default           -
   * @type SchemaFormSettingProps
   */
  schemaFormSetting?: SchemaFormSettingProps;

  /**
   * @description       ModalForm 组件的设置项
   * @default           -
   */
  modalFormSetting?: ModalFormSettingProps;

  /**
   * @description       ProTable组件的设置项
   * @default           -
   */
  proTableSetting?: ProTableSettingProps;

  /**
   * @description       FormUpload组件的设置项
   * @default           -
   */
  formUploadSetting?: Omit<FormUploadProps, 'value' | 'onChange'>;
  children: any;
};
