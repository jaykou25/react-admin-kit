import React from 'react';
import { FormUploadProps } from '../FormUpload/types';
import {
  ModalFormSettingProps,
  ProTableSettingProps,
  SchemaFormSettingProps,
} from './types';

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
