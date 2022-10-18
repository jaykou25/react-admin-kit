import React from 'react';
import { ModalFormSetting, ProTableSetting } from './types';

export const ProTableContext = React.createContext<ProTableSetting>(undefined);

export const ModalFormContext = React.createContext<ModalFormSetting>(undefined);
