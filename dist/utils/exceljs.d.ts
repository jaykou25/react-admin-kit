import type { Workbook } from 'exceljs';
import type { TableColumnType } from '../index';
export declare const DEFAULT_COLUMN_WIDTH = 20;
/**
 * 获取导出的值
 */
export declare function getExportValue(record: Record<string, any>, col: TableColumnType): any;
export declare function saveWorkbook(workbook: Workbook, fileName: string): void;
export declare const exportAntTableToExcel: (columns: TableColumnType[], dataSource: any, fileName?: string) => void;
