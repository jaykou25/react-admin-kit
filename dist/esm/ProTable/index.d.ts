import { Component } from 'react';
import type { MyProTableType } from './types';
import './styles.less';
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
    constructor(props: any);
    componentDidMount(): void;
    getTitle: () => string | number | true | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment;
    getModalTitle: () => string;
    setInnerRef: (newValue: any) => void;
    openModal: (type?: string, _initialData?: any) => void;
    patchColumn: ($cols: any) => (base?: ((cols: any) => void) | undefined, ...args: unknown[]) => ((cols: any) => void) | Promise<(cols: any) => void>;
    enableDelete: ($cols: any) => (base?: ((cols: any) => void) | undefined, ...args: unknown[]) => ((cols: any) => void) | Promise<(cols: any) => void>;
    getRowSelection: () => false | (import("antd/lib/table/interface").TableRowSelection<any> & {
        alwaysShowAlert?: boolean | undefined;
    }) | {
        selectedRowKeys: any;
        onChange: (keys: any) => void;
        preserveSelectedRowKeys?: boolean | undefined;
        type?: import("antd/lib/table/interface").RowSelectionType | undefined;
        defaultSelectedRowKeys?: import("react").Key[] | undefined;
        getCheckboxProps?: ((record: any) => Partial<Omit<import("antd").CheckboxProps, "defaultChecked" | "checked">>) | undefined;
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
    tableAlertOptionRender: ({ selectedRowKeys: _selectedRowKeys, onCleanSelected, selectedRows, }: {
        selectedRowKeys: any;
        onCleanSelected: any;
        selectedRows: any;
    }) => JSX.Element;
    render(): JSX.Element;
}
export default ProTable;
