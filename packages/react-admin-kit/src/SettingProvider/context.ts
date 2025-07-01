import React from 'react';
import { FormUploadProps } from '../FormUpload/types';
import {
  ModalFormSetting,
  ProTableSetting,
  SchemaFormSettingProps,
} from './types';

export const ProTableContext = React.createContext<ProTableSetting>(undefined);

export const ModalFormContext =
  React.createContext<ModalFormSetting>(undefined);

export const SchemaFormContext = React.createContext<
  SchemaFormSettingProps | undefined
>(undefined);

export const FormUploadContext = React.createContext<
  FormUploadProps | undefined
>(undefined);
