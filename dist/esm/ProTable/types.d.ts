import type React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { ProColumns, ProTableProps } from '@ant-design/pro-table';
export declare type ToolbarType = {
    title?: string | false;
    actions?: ReactElement[];
};
export declare type InnerRefType = {
    openModal: OpenModalType;
    params?: any;
    total?: number;
    data?: any;
};
export declare type MyProTableType = Omit<ProTableProps<any, any>, 'columns' | 'name' | 'onFinish' | 'tableAlertOptionRender' | 'editable'> & {
    columns: MyProColumnType[];
    name?: string;
    formColumns?: MyProColumnType[];
    onFinish?: (values: any, formType: 'new' | 'edit', formData: any) => Promise<any>;
    innerRef?: React.MutableRefObject<InnerRefType | undefined>;
    /**
     * 传入这个函数, 组件就会自动集成多选删除功能.
     * 如果点击的是行上的删除, record是该行的数据, selectedIds是该行的id; 如果是多选后的删除, record是空对象
     * 同时在columns中, 对于valueType为option的那一列, 如果声明了enableDelete, 操作列就会自动加入删除按钮
     */
    delFunction?: (selectedIds: any, record: any, callback?: any) => Promise<any>;
    delPermission?: () => Boolean;
    /**
     * 移除了原来ProTable中的tableAlertOptionRender接口而用tableAlertOptions来替代.
     * 是因为在tableAlert中封装了多选删除的功能
     */
    tableAlertOption?: {
        hideDelete?: boolean;
        hideExport?: boolean;
        actions?: ReactNode[];
        exportName?: string;
    };
    optionColSpaceSize?: 'small';
    editable?: boolean;
    modalProps?: any;
};
export declare type OpenModalType = (type?: 'new' | 'edit', record?: any) => void;
export declare type FetchOptionType = {
    needLoading?: boolean;
};
declare type EnableDeleteType = {
    disabled?: boolean;
    visible?: boolean;
    danger?: boolean;
};
export declare type selfColumnsValueType = 'export';
export declare type MyProColumnType<Type = string> = Omit<ProColumns, 'renderFormItem' | 'render' | 'editable'> & {
    children?: MyProColumnType<Type>[];
    enableDelete?: boolean | ((record: any, index: number) => EnableDeleteType);
    renderFormItem?: (item: any, config: any, form: any, innerRef: any) => any;
    render?: (text: any, record: any, index: any, actionRef: any, innerRef: any) => any;
    editable?: boolean | (() => boolean);
    type?: Type | Type[];
    transform?: (vals: any) => any;
};
/**
 * 只针对MyEditTable, renderFormItem有变化
 */
export declare type MyEditProColumnType = Omit<MyProColumnType, 'renderFormItem'> & {
    renderFormItem?: (a: any, b: any, form: any, index: any, record: any) => any;
};
export declare type MyEditProTableType = Omit<MyProTableType, 'columns'> & {
    columns: MyEditProColumnType[];
};
export {};
