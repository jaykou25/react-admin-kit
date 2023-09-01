function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import * as ExcelJs from 'exceljs';
import { saveAs } from 'file-saver';
import moment from 'moment';
// 默认的列宽
export var DEFAULT_COLUMN_WIDTH = 20;
function formatDateTypeData(text, format) {
  if (!text) return '';
  if (typeof text === 'string') {
    return text;
  } else {
    return moment(text).format(format);
  }
}
function getTextByOptions(text, col) {
  if (col.valueEnum) {
    var _col$valueEnum$text;
    return (_col$valueEnum$text = col.valueEnum[text]) === null || _col$valueEnum$text === void 0 ? void 0 : _col$valueEnum$text.text;
  }
  if (col.fieldProps) {
    if (typeof col.fieldProps === 'function') {
      var _col$fieldProps, _options$find;
      var options = ((_col$fieldProps = col.fieldProps({}, {
        current: {}
      })) === null || _col$fieldProps === void 0 ? void 0 : _col$fieldProps.options) || [];
      // eslint-disable-next-line eqeqeq
      return (_options$find = options.find(function (option) {
        return option.value == text;
      })) === null || _options$find === void 0 ? void 0 : _options$find.label;
    } else {
      var _options$find2;
      var _options = col.fieldProps.options || [];
      // eslint-disable-next-line eqeqeq
      return (_options$find2 = _options.find(function (option) {
        return option.value == text;
      })) === null || _options$find2 === void 0 ? void 0 : _options$find2.label;
    }
  }
}

/**
 * 获取导出的值
 */
export function getExportValue(record, col) {
  var text = record[col.dataIndex];
  if (col.renderExport) {
    return col.renderExport(text, record);
  }
  if (col.render) {
    return col.render(text, record);
  }
  if (col.renderText) {
    return col.renderText(text, record);
  }
  if (['select', 'radio', 'radioButton', 'checkbox'].includes(col.valueType)) {
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
      return text.map(function (itemDate) {
        return formatDateTypeData(itemDate, 'YYYY-MM-DD');
      }).join(' - ');
    }
  }
  if (col.valueType === 'dateTimeRange') {
    if (text) {
      return text.map(function (itemDate) {
        return formatDateTypeData(itemDate, 'YYYY-MM-DD HH:mm:ss');
      }).join(' - ');
    }
  }
  if (col.valueType === 'money') {
    if (!text) return '';
    return text;
  }
  if (!!text && _typeof(text) === 'object') {
    return text.value;
  }
  return text;
}
export function saveWorkbook(workbook, fileName) {
  // 导出文件
  workbook.xlsx.writeBuffer().then(function (data) {
    var blob = new Blob([data], {
      type: ''
    });
    saveAs(blob, fileName);
  });
}
export var exportAntTableToExcel = function exportAntTableToExcel(columns, dataSource) {
  var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '默认导出';
  // 创建工作簿
  var workbook = new ExcelJs.Workbook();
  // 添加sheet
  var worksheet = workbook.addWorksheet('sheet1');
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = 20;

  // 设置列
  worksheet.columns = columns.map(function (col) {
    return {
      header: typeof col.title === 'function' ? '' : col.title,
      key: col.dataIndex,
      width: col.width ? col.width / 5 : DEFAULT_COLUMN_WIDTH
    };
  });

  // 设置垂直的对齐方式
  worksheet.columns.forEach(function (col) {
    col.alignment = {
      vertical: 'middle'
    };
  });
  console.log('导出', dataSource);

  // 处理行
  var rowsData = (dataSource || []).map(function (record) {
    return columns.map(function (col) {
      return getExportValue(record, col);
    });
  });

  // 添加行
  worksheet.addRows(rowsData);

  // 处理合并问题
  (dataSource || []).forEach(function (record, recordIndex) {
    columns.forEach(function (col, colIdx) {
      var _ref = col.onCell ? col.onCell(record) || {} : {},
        rowSpan = _ref.rowSpan;
      if (rowSpan > 1) {
        // 向下合并
        var rowIndex = recordIndex + 2;
        var colIndex = colIdx + 1;
        worksheet.mergeCells(rowIndex, colIndex, rowIndex + rowSpan - 1, colIndex);
      }
    });
  });

  // 导出excel
  saveWorkbook(workbook, fileName + '.xlsx');
};