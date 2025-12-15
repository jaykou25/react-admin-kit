import { TableColumnType } from '../types';
import dayjs from 'dayjs';
import { FormStore } from 'rc-field-form/lib/useForm';

/**
 * 根据 dataIndex 获取嵌套对象的值
 * @param record 数据记录
 * @param dataIndex 字段索引，可以是字符串或字符串数组
 * @returns 对应的值
 */
export function _getValueByDataIndex(
  record: Record<string, any>,
  dataIndex: string | string[],
): any {
  if (typeof dataIndex === 'string') {
    return record[dataIndex];
  }

  if (Array.isArray(dataIndex)) {
    return dataIndex.reduce((obj, key) => {
      return obj != null ? obj[key] : undefined;
    }, record);
  }

  return undefined;
}

export function getFieldVisibility(
  field: TableColumnType,
  defaultHideInSearch: boolean = false,
): {
  search: boolean;
  table: boolean;
  form: boolean;
} {
  const { type, search, hideInSearch, hideInTable, hideInForm } = field;

  // 默认值：如果没有指定，默认出现在所有区域
  const defaultVisibility = {
    search: defaultHideInSearch === false,
    table: true,
    form: true,
  };

  // 1. 首先处理 type 属性的优先级
  if (type) {
    switch (type) {
      case 'search':
        return {
          search: true,
          table: false,
          form: false,
        };
      case 'table':
        return {
          search: false,
          table: true,
          form: false,
        };
      case 'form':
        return {
          search: false,
          table: false,
          form: true,
        };
      default:
        // 未知的 type，继续后续判断
        break;
    }
  }

  // 2. 如果指定了 type，但不在上述情况中，继续后续逻辑
  const visibility = { ...defaultVisibility };

  // 3. 处理 search 属性（过时的 API，为了兼容性保留）
  if (typeof search === 'boolean') {
    visibility.search = search;
  }

  // 4. 处理 hideInXxx 属性
  if (hideInSearch === true) {
    visibility.search = false;
  } else if (hideInSearch === false) {
    visibility.search = true;
  }

  if (hideInTable) {
    visibility.table = false;
  }
  if (hideInForm) {
    visibility.form = false;
  }

  return visibility;
}

// 只挑选，不对 column 加东西。
export function getAreaFields(
  fields: TableColumnType[],
  area: 'search' | 'table' | 'form' | 'export',
  options?: { defaultHideInSearch: boolean },
) {
  const { defaultHideInSearch = false } = options || {};

  const result: { [key: string]: TableColumnType[] } = {
    search: [],
    table: [],
    export: [],
    form: [],
  };

  fields.forEach((field) => {
    const visibility = getFieldVisibility(field, defaultHideInSearch);
    const valueType =
      typeof field.valueType === 'string' ? field.valueType : '';
    const tableOnlyValueType = ['index', 'option'].includes(valueType);
    const formOnlyValueType = valueType === 'dependency';

    // 创建字段副本，避免修改原始对象
    const fieldCopy = { ...field };

    // search区域
    if (visibility.search && !tableOnlyValueType) {
      result.search.push({
        ...fieldCopy,
        hideInSearch: false,
        hideInTable: true,
        hideInForm: true,
      });
    }

    // table区域
    if (visibility.table && !formOnlyValueType) {
      result.table.push({
        ...fieldCopy,
        hideInTable: false,
        hideInSearch: true,
        hideInForm: true,
      });
    }

    // export区域
    if (visibility.table && !tableOnlyValueType && !formOnlyValueType) {
      result.export.push(fieldCopy);
    }

    // form区域
    if (visibility.form && !tableOnlyValueType) {
      result.form.push({ ...fieldCopy, hideInForm: false });
    }
  });

  return result[area] || [];
}

export function _formatDateTypeData(text, format?: string) {
  if (!text) return '';

  if (typeof text === 'string') {
    return text;
  } else {
    return dayjs(text).format(format || 'YYYY-MM-DD');
  }
}

export function _getTextByOptions(text, _col: TableColumnType) {
  const findOption = (options, text) => {
    return options.find((option: any) => {
      if (option.value === text) return true;

      const optionValue =
        typeof option.value === 'number'
          ? option.value.toString()
          : option.value;
      const textValue = typeof text === 'number' ? text.toString() : text;

      return optionValue === textValue;
    });
  };

  const col = _col || {};

  if (col.valueEnum) {
    return col.valueEnum[text]?.text;
  }

  if (col.fieldProps) {
    if (typeof col.fieldProps === 'function') {
      const options =
        // @ts-ignore
        col.fieldProps(new FormStore(() => ''), { current: {} }, col)
          ?.options || [];
      return findOption(options, text)?.label;
    } else {
      // @ts-ignore
      const options = col.fieldProps?.options || [];

      return findOption(options, text)?.label;
    }
  }
}

/**
 * 获取导出的值
 */
export function _getExportValue(
  record: Record<string, any>,
  col: TableColumnType,
  index: number = 0,
) {
  const text =
    typeof col.dataIndex === 'string' || Array.isArray(col.dataIndex)
      ? _getValueByDataIndex(record, col.dataIndex)
      : ''; // dataIndex 如果是 react node 就不导出

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
    ['select', 'radio', 'radioButton', 'checkbox'].includes(
      typeof col.valueType === 'string' ? col.valueType || '' : '',
    )
  ) {
    return _getTextByOptions(text, col);
  }

  if (col.valueType === 'date') {
    return _formatDateTypeData(text, 'YYYY-MM-DD');
  }

  if (col.valueType === 'dateTime') {
    return _formatDateTypeData(text, 'YYYY-MM-DD HH:mm:ss');
  }

  if (col.valueType === 'dateRange') {
    if (text) {
      return text
        .map((itemDate) => {
          return _formatDateTypeData(itemDate, 'YYYY-MM-DD');
        })
        .join(' - ');
    }
  }

  if (col.valueType === 'dateTimeRange') {
    if (text) {
      return text
        .map((itemDate) => {
          return _formatDateTypeData(itemDate, 'YYYY-MM-DD HH:mm:ss');
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

/* istanbul ignore next */
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
      return _getExportValue(record, col, index);
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
