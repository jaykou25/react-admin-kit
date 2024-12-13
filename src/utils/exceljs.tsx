// import type { Workbook } from 'exceljs';
// import * as ExcelJs from 'exceljs';
import { saveAs } from 'file-saver';
import moment from 'moment';
import type { TableColumnType } from '../index';

type Workbook = any;
const ExcelJs: any = {};

// 默认的列宽
export const DEFAULT_COLUMN_WIDTH = 20;

function formatDateTypeData(text, format) {
  if (!text) return '';

  if (typeof text === 'string') {
    return text;
  } else {
    return moment(text).format(format);
  }
}

function getTextByOptions(text, col: TableColumnType) {
  if (col.valueEnum) {
    return col.valueEnum[text]?.text;
  }

  if (col.fieldProps) {
    if (typeof col.fieldProps === 'function') {
      // @ts-ignore
      const options = col.fieldProps({}, { current: {} }, col)?.options || [];
      // eslint-disable-next-line eqeqeq
      return options.find((option: any) => option.value == text)?.label;
    } else {
      // @ts-ignore
      const options = col.fieldProps?.options || [];
      // eslint-disable-next-line eqeqeq
      return options.find((option: any) => option.value == text)?.label;
    }
  }
}

/**
 * 获取导出的值
 */
export function getExportValue(
  record: Record<string, any>,
  col: TableColumnType,
  index: number = 0,
) {
  const text = typeof col.dataIndex === 'string' ? record[col.dataIndex] : ''; // dataIndex 如果是 react node 就不导出

  if (col.renderExport) {
    return col.renderExport(text, record);
  }

  if (col.render) {
    // @ts-ignore
    return col.render(text, record, index, undefined, undefined);
  }

  if (col.renderText) {
    // @ts-ignore
    return col.renderText(text, record, index);
  }

  if (
    ['select', 'radio', 'radioButton', 'checkbox'].includes(col.valueType || '')
  ) {
    return getTextByOptions(text, col);
  }

  if (col.valueType === 'date') {
    return formatDateTypeData(text, 'YYYY-MM-DD');
  }

  if (col.valueType === 'dateTime') {
    return formatDateTypeData(text, 'YYYY-MM-DD HH:mm:ss');
  }

  if (col.valueType === 'dateRange') {
    if (text) {
      return text
        .map((itemDate) => {
          return formatDateTypeData(itemDate, 'YYYY-MM-DD');
        })
        .join(' - ');
    }
  }

  if (col.valueType === 'dateTimeRange') {
    if (text) {
      return text
        .map((itemDate) => {
          return formatDateTypeData(itemDate, 'YYYY-MM-DD HH:mm:ss');
        })
        .join(' - ');
    }
  }

  if (col.valueType === 'money') {
    if (!text) return '';

    return text;
  }

  if (!!text && typeof text === 'object') {
    return text.value;
  }

  return text;
}

export function saveWorkbook(workbook: Workbook, fileName: string) {
  // 导出文件
  workbook.xlsx.writeBuffer().then((data) => {
    const blob = new Blob([data], { type: '' });
    saveAs(blob, fileName);
  });
}

export const exportAntTableToExcel = (
  columns: TableColumnType[],
  dataSource: any,
  fileName = '默认导出',
) => {
  // 创建工作簿
  const workbook = new ExcelJs.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet('sheet1');
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = 20;

  // 设置列
  worksheet.columns = columns.map((col) => ({
    header: typeof col.title === 'string' ? col.title : '',
    key:
      typeof col.dataIndex === 'string' ? col.dataIndex : Date.now().toString(),
    width: col.width ? Number(col.width) / 5 : DEFAULT_COLUMN_WIDTH,
  }));

  // 设置垂直的对齐方式
  worksheet.columns.forEach((col) => {
    col.alignment = { vertical: 'middle' };
  });

  console.log('导出', dataSource);

  // 处理行
  const rowsData = (dataSource || []).map((record, index) => {
    return columns.map((col) => {
      return getExportValue(record, col, index);
    });
  });

  // 添加行
  worksheet.addRows(rowsData);

  // 处理合并问题
  (dataSource || []).forEach((record, recordIndex) => {
    columns.forEach((col, colIdx) => {
      //@ts-ignore
      const { rowSpan } = col.onCell ? col.onCell(record) || {} : {};

      if (rowSpan > 1) {
        // 向下合并
        const rowIndex = recordIndex + 2;
        const colIndex = colIdx + 1;
        worksheet.mergeCells(
          rowIndex,
          colIndex,
          rowIndex + rowSpan - 1,
          colIndex,
        );
      }
    });
  });

  // 导出excel
  saveWorkbook(workbook, fileName + '.xlsx');
};
