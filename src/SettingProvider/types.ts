import { SearchConfig } from '@ant-design/pro-table/es/components/Form/FormRender';
import type { ModalProps } from 'antd';
import { FormUploadProps } from '../FormUpload/types';
import { SchemaFormProps } from '../SchemaForm/types';

export type SettingFormProps = Omit<SchemaFormProps, 'onFinish' | 'columns'>;

export type ProTableSetting =
  | {
      size?: 'small' | 'default' | 'middle';
      searchConfig?: SearchConfig;
      modalProps?: ModalProps;
      formProps?: SettingFormProps;
    }
  | undefined;

export type ModalFormSetting =
  | {
      modalProps?: ModalProps;
      formProps?: SettingFormProps;
    }
  | undefined;

export type SettingProviderProps = {
  /**
   * @description       ProTable组件的设置项
   * @default           false
   */
  proTableSetting?: ProTableSetting;

  /**
   * @description       ModalForm组件的设置项
   * @default           false
   */
  modalFormSetting?: ModalFormSetting;

  /**
   * @description       SchemaForm组件的设置项
   * @default           false
   */
  schemaFormSetting?: SettingFormProps;

  /**
   * @description       FormUpload组件的设置项
   * @default           false
   */
  formUploadSetting?: FormUploadProps;
  children: any;
};
