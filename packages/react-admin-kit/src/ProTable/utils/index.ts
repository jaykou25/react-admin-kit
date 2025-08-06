import { TableColumnType } from '../types';
import dayjs from 'dayjs';

/**
 * 处理ProTable request中的参数, 将sort转化成符合后端排序的格式
 */
export const handleRequestParams = (params, sort) => {
  // sort对象是{createdTime: 'ascend'}, 要转成{sort: 'createdTime,asc'}

  if (Object.keys(sort).length < 1) {
    return params;
  }

  const sortMap = { ascend: 'asc', descend: 'desc' };

  const sortKey = Object.keys(sort)[0];
  const sortParams = { sort: `${sortKey},${sortMap[sort[sortKey]]}` };

  return { ...params, ...sortParams };
};

/**
 * ProTable Columns中的排序属性
 */
export const withSorter = (
  dataIndex: string,
  defaultSorter: 'desc' | 'asc' = 'asc',
): any => {
  const orderMap = { asc: 'ascend', desc: 'descend' };

  const directions =
    defaultSorter === 'asc'
      ? ['ascend', 'descend', 'ascend']
      : ['descend', 'ascend', 'descend'];

  return {
    defaultSortOrder: orderMap[defaultSorter],
    sortDirections: directions,
    sorter: true,
  };
};

/**
 * 过滤出供导出用的columns
 */
export const filteExportCols = (columns: TableColumnType[]) => {
  return columns
    .filter((col) => !col.hideInTable)
    .filter((col) => {
      const valueType = typeof col.valueType === 'string' ? col.valueType : '';
      return !['option', 'index'].includes(valueType);
    });
};

/**
 * 过滤出modalForm区域的columns
 */
export const filteFormCols = (columns) => {
  return columns
    .filter((col) => col.type === 'form' || col.type === undefined)
    .filter((col) => !col.hideInForm)
    .filter((col) => {
      const valueType = typeof col.valueType === 'string' ? col.valueType : '';
      return !['option', 'index'].includes(valueType);
    });
};

function formatDateTypeData(text, format) {
  if (!text) return '';

  if (typeof text === 'string') {
    return text;
  } else {
    return dayjs(text).format(format);
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

export const exportTable = async (exportColumns, rows, ExcelJS, options) => {
  const workbook = new ExcelJS.Workbook();

  const worksheet = workbook.addWorksheet();

  worksheet.properties.defaultColWidth = 30;

  // 设置列
  worksheet.columns = exportColumns.map((col) => ({
    header: typeof col.title === 'string' ? col.title : '',
    key:
      typeof col.dataIndex === 'string' ? col.dataIndex : Date.now().toString(),
    width: col.width ? Number(col.width) / 5 : undefined,
  }));

  // 处理行
  const rowsData = (rows || []).map((record, index) => {
    return exportColumns.map((col) => {
      return getExportValue(record, col, index);
    });
  });

  // 添加行
  worksheet.addRows(rowsData);

  // 处理合并问题
  (rows || []).forEach((record, recordIndex) => {
    exportColumns.forEach((col, colIdx) => {
      //@ts-ignore
      const { rowSpan = 0 } = col.onCell ? col.onCell(record) || {} : {};

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

  // 导出文件
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;

  a.download = `${options.filename}.xlsx`;
  a.click();
  URL.revokeObjectURL(url);
};
