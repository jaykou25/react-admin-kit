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

export type FormUploadSettingProps = Omit<
  FormUploadProps,
  'value' | 'onChange'
>;

export type SettingProviderProps = {
  /**
   * @zh-Hans SchemaForm组件的设置项
   * @en Settings for SchemaForm component
   * @default           -
   * @type [SchemaFormSettingProps](/components/setting-provider#schemaformsettingprops)
   */
  schemaFormSetting?: SchemaFormSettingProps;

  /**
   * @zh-Hans ModalForm 组件的设置项
   * @en Settings for ModalForm component
   * @default           -
   * @type [ModalFormSettingProps](/components/setting-provider#modalformsettingprops)
   */
  modalFormSetting?: ModalFormSettingProps;

  /**
   * @zh-Hans ProTable组件的设置项
   * @en Settings for ProTable component
   * @default           -
   * @type [ProTableSettingProps](/components/setting-provider#protablesettingprops)
   */
  proTableSetting?: ProTableSettingProps;

  /**
   * @zh-Hans FormUpload组件的设置项
   * @en Settings for FormUpload component
   * @default           -
   * @type [FormUploadSettingProps](/components/setting-provider#formuploadsettingprops)
   */
  formUploadSetting?: FormUploadSettingProps;
  children: any;
};
