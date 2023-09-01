import type { FormFieldType } from '@ant-design/pro-form/es/components/SchemaForm/typing';
import type { ActionType, ProColumns, ProColumnsValueType, ProTableProps } from '@ant-design/pro-table';
import type { ModalProps } from 'antd';
import type React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { FormColumnType, ModalFormInnerRefType } from '..';
import { FormType, ModalFormSelfProps } from '../ModalForm/types';
import { SettingFormProps } from '../SettingProvider/types';
export type ToolbarType = {
    title?: string | false;
    actions?: ReactElement[];
};
export type InnerRefType = {
    params?: any;
    total?: number;
    dataSource?: any;
    data?: any;
    setData?: (vals: Record<string, any>) => void;
} & ModalFormInnerRefType;
type InnerRef = React.MutableRefObject<InnerRefType | undefined> | React.RefObject<InnerRefType | undefined>;
export type MyProTableType = Omit<ProTableProps<any, any>, 'columns' | 'name' | 'onFinish' | 'tableAlertOptionRender' | 'editable'> & {
    columns: TableColumnType[];
    name?: string;
    formColumns?: FormColumnType[];
    onFinish?: (values: any, formType: FormType, formData: any) => Promise<any> | void;
    onOpen?: ModalFormSelfProps['onOpen'];
    innerRef?: InnerRef;
    /**
     * 传入这个函数, 组件就会自动集成多选删除功能.
     * 如果点击的是行上的删除, record是该行的数据, selectedIds是该行的id; 如果是多选后的删除, record是空对象
     * 同时在columns中, 对于valueType为option的那一列, 如果声明了enableDelete, 操作列就会自动加入删除按钮
     */
    delFunction?: (selectedIds: string[] | number[], record: any, callback?: any) => Promise<any>;
    delPermission?: () => boolean;
    /**
     * 移除了原来ProTable中的tableAlertOptionRender接口而用tableAlertOptions来替代.
     * 是因为在tableAlert中封装了多选删除的功能
     */
    tableAlertOption?: {
        hideDelete?: boolean;
        enableExport?: boolean;
        actions?: ReactNode[];
        exportName?: string;
    };
    optionColSpaceSize?: 'small';
    editable?: boolean;
    modalProps?: ModalProps;
    formProps?: SettingFormProps;
    noPadding?: boolean;
};
export type FetchOptionType = {
    needLoading?: boolean;
};
type EnableDeleteType = {
    disabled?: boolean;
    visible?: boolean;
    danger?: boolean;
};
export type selfColumnsValueType = 'export';
export type MyFieldType = ProColumnsValueType | FormFieldType;
/**
 * Table 类型的 column 定义
 * 在 @ant-design/pro-table 的 type { ProColumns } 上修改某些属性
 */
type TableColumnTypeBase<Record, ValueType> = Omit<ProColumns<Record, ValueType>, 'renderFormItem' | 'render' | 'fieldProps' | 'editable' | 'valueType'> & {
    /**
     * @description 是否开启操作列上的删除
     */
    enableDelete?: boolean | ((record: any, index: number) => EnableDeleteType);
    /**
     * 定义导出
     */
    renderExport?: (text: string | number, record: Record) => string | number;
    /**
     * 给 render 方法注入 innerRef
     */
    render?: (text: string | number, record: Record, index: number, actionRef: React.RefObject<ActionType | undefined>, innerRef: InnerRef) => any;
};
/**
 * Table 的 column 定义
 * 它是 Form column 和 Table column 的合并, 因为在 ProTable 组件中 Tablet 和 Form 都存在
 */
export type TableColumnType<Record = any, ValueType = 'text', Type = string> = Omit<FormColumnType<Record, ValueType>, 'render'> & TableColumnTypeBase<Record, ValueType> & {
    type?: Type;
    children?: TableColumnType<Record, ValueType, Type>[];
    valueType?: MyFieldType | ValueType;
};
export {};
