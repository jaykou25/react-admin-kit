import { SearchConfig } from '@ant-design/pro-table/es/components/Form/FormRender';
import type { ModalProps, SpaceProps } from 'antd';
import { FormUploadProps } from '../FormUpload/types';
import { MyProTableType, TableAlertOptionType } from '../ProTable/types';
import type { SchemaFormProps } from '../SchemaForm/types';
import type { ModalFormProps } from '../ModalForm/types';

// todo 待废弃
export type SettingFormProps = Omit<SchemaFormProps, 'onFinish' | 'columns'>;

export type SchemaFormSettingProps = Omit<
  SchemaFormProps,
  'form' | 'formRef' | 'innerRef' | 'onFinish' | 'columns'
>;

export type ModalFormSettingProps = Omit<
  ModalFormProps,
  'innerRef' | 'formRef' | 'onFinish' | 'columns' | 'onOk'
>;

export type ModalSettingProps = Omit<ModalProps, 'onOk'>;

export type ProTableSetting =
  | {
      size?: 'small' | 'default' | 'middle';
      searchConfig?: SearchConfig;
      modalProps?: ModalProps;
      formProps?: SchemaFormSettingProps;
      confirmModalType?: 'popconfirm' | 'modal';
      confirmModalProps?: any;
      tableAlertOption?: TableAlertOptionType;
      optionColumnSpaceProps?: SpaceProps;
      options?: MyProTableType['options'];
      defaultHideInSearch?: boolean;
    }
  | undefined;

export type SettingProviderProps = {
  /**
   * @description       SchemaForm组件的设置项
   * @default           -
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
  proTableSetting?: ProTableSetting;

  /**
   * @description       FormUpload组件的设置项
   * @default           -
   */
  formUploadSetting?: Omit<FormUploadProps, 'children'>;
  children: any;
};
