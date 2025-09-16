import React from 'react';
import { FormUploadProps } from '../FormUpload/types';
import {
  ModalFormSettingProps,
  ProTableSettingProps,
  SchemaFormSettingProps,
} from './types';
import { LocaleType } from '../locale';
import zhCN from '../locale/zh_CN';

export const ProTableContext = React.createContext<
  ProTableSettingProps | undefined
>(undefined);

export const ModalFormContext = React.createContext<
  ModalFormSettingProps | undefined
>(undefined);

export const SchemaFormContext = React.createContext<
  SchemaFormSettingProps | undefined
>(undefined);

export const FormUploadContext = React.createContext<
  FormUploadProps | undefined
>(undefined);

export const LocaleContext = React.createContext<LocaleType>(zhCN);
