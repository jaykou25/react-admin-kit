export declare const exportToExcel: (data: any, name?: string) => void;
export declare const exportToExcelSheet: (dataSource: {
    data: any;
    sheetName: string;
}[], name?: string) => void;
export declare const exportAntTableDataToExcel: (tableData: any, cols: any, fileName: any, notExport?: boolean) => any;
