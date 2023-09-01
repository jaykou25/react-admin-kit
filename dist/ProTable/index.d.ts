import { Component } from 'react';
import type { MyProTableType } from './types';
import { FormType } from '../ModalForm/types';
import { ProTableContext } from '../SettingProvider/context';
import './styles.css';
/**
 * 表单类型的映射
 */
export declare const FORM_TYPE_MAP: {
    new: string;
    edit: string;
    read: string;
};
declare class ProTable extends Component<MyProTableType, any> {
    private targetId;
    private modalFormRef;
    private selfInnerRef;
    static contextType: any;
    context: React.ContextType<typeof ProTableContext>;
    constructor(props: any);
    componentDidMount(): void;
    getTitle: () => string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode>;
    getModalTitle: () => string;
    setData: (newValue: any) => void;
    openModal: (type?: FormType, initialData?: any) => void;
    patchColumn: ($cols: any) => (base?: ((cols: any) => void) | undefined, ...args: unknown[]) => ((cols: any) => void) | Promise<(cols: any) => void>;
    enableDelete: ($cols: any) => (base?: ((cols: any) => void) | undefined, ...args: unknown[]) => ((cols: any) => void) | Promise<(cols: any) => void>;
    getRowSelection: () => false | (import("antd/lib/table/interface").TableRowSelection<any> & {
        alwaysShowAlert?: boolean | undefined;
    }) | {
        selectedRowKeys: any;
        onChange: (keys: any, selectedRows: any) => void;
        preserveSelectedRowKeys?: boolean | undefined;
        type?: import("antd/lib/table/interface").RowSelectionType | undefined;
        defaultSelectedRowKeys?: import("react").Key[] | undefined;
        getCheckboxProps?: ((record: any) => Partial<Omit<import("antd").CheckboxProps, "checked" | "defaultChecked">>) | undefined;
        onSelect?: import("antd/lib/table/interface").SelectionSelectFn<any> | undefined;
        onSelectMultiple?: ((selected: boolean, selectedRows: any[], changeRows: any[]) => void) | undefined;
        onSelectAll?: ((selected: boolean, selectedRows: any[], changeRows: any[]) => void) | undefined;
        onSelectInvert?: ((selectedRowKeys: import("react").Key[]) => void) | undefined;
        onSelectNone?: (() => void) | undefined;
        selections?: boolean | import("antd/lib/table/hooks/useSelection").INTERNAL_SELECTION_ITEM[] | undefined;
        hideSelectAll?: boolean | undefined;
        fixed?: import("rc-table/lib/interface").FixedType | undefined;
        columnWidth?: string | number | undefined;
        columnTitle?: import("react").ReactNode;
        checkStrictly?: boolean | undefined;
        renderCell?: ((value: boolean, record: any, index: number, originNode: import("react").ReactNode) => import("react").ReactNode | import("rc-table/lib/interface").RenderedCell<any>) | undefined;
        alwaysShowAlert?: boolean | undefined;
    } | undefined;
    handleDelete: (selectedIds: (string | number)[], record: Record<string, any>, callback?: any) => void;
    tableAlertOptionRender: ({ selectedRowKeys: _selectedRowKeys, onCleanSelected, }: {
        selectedRowKeys: any;
        onCleanSelected: any;
    }) => import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ProTable;
