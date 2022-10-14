function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 将前端数据导出成excel
import XLSX from 'xlsx';
import moment from 'moment';
/* 将数据导出成excel, 数据格式如下:
  [
    { 列1: 1, 列2: 2 },
    { 列1: 10, 列2: 20 },
  ];
*/

export var exportToExcel = function exportToExcel(data) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '导出数据';
  var sheet = XLSX.utils.json_to_sheet(data);
  var workbook = {
    SheetNames: ['sheet1'],
    Sheets: {}
  };
  workbook.Sheets.sheet1 = sheet;
  XLSX.writeFile(workbook, "".concat(name, "_").concat(moment().format('YYYY-MM-DD'), ".xlsx"));
};
export var exportToExcelSheet = function exportToExcelSheet(dataSource) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '导出数据';
  var sheetNames = dataSource.map(function (item) {
    return item.sheetName;
  });
  var workbook = {
    SheetNames: sheetNames,
    Sheets: {}
  };
  dataSource.forEach(function (item) {
    var sheet = XLSX.utils.json_to_sheet(item.data);
    workbook.Sheets[item.sheetName] = sheet;
  });
  XLSX.writeFile(workbook, "".concat(name, "_").concat(moment().format('YYYY-MM-DD'), ".xlsx"));
};
export var exportAntTableDataToExcel = function exportAntTableDataToExcel(tableData, cols, fileName) {
  var notExport = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // 产出n个空字符串
  function repeatEmptyString(n) {
    var string = '';

    for (var i = 0; i < n; i += 1) {
      string += ' ';
    }

    return string;
  }

  var json = tableData.map(function (item, index) {
    var repeat = 1;
    return cols.reduce(function (prev, col) {
      var result = _objectSpread({}, prev);

      var name;

      if (_typeof(col.title) === 'object') {
        // 有时title是一个react node
        // 如: <><span>*</span>姓名</>, 取col.title.props.children[1]
        // 如: <>{/*<span>*</span>*/}姓名</>, 对于这种注释项, 取col.title.props.children
        var chilren = col.title.props.children;
        name = _typeof(chilren) === 'object' ? chilren[1] : chilren;
      } else {
        name = col.title;
      } // 判断是否有重名的列, 如果有重名后面加空字符串


      if (name in result) {
        name += repeatEmptyString(repeat);
        repeat += 1;
      }

      if (col.renderExport) {
        result[name] = col.renderExport(item[col.dataIndex], item, index);
        return result;
      }

      if (col.renderText) {
        result[name] = col.renderText(item[col.dataIndex], item, index);
        return result;
      }

      if (col.render) {
        result[name] = col.render(item[col.dataIndex], item, index);
        return result;
      }

      if (col.valueType) {
        switch (col.valueType) {
          case 'index':
            result[name] = index + 1;
            break;

          case 'date':
            var val = item[col.dataIndex];
            result[name] = val ? moment(val).format('YYYY-MM-DD') : '';
            break;

          case 'select':
            if (col.valueEnum) {
              result[name] = col.valueEnum[item[col.dataIndex]];
            } else {
              var _col$fieldProps$optio = col.fieldProps.options,
                  options = _col$fieldProps$optio === void 0 ? [] : _col$fieldProps$optio;
              result[name] = options.find(function (option) {
                return option.value == item[col.dataIndex];
              }).label;
            }

            break;

          default:
            result[name] = item[col.dataIndex];
        }

        return result;
      }

      result[name] = item[col.dataIndex];
      return result;
    }, {});
  }); // 仅输出json

  if (notExport) {
    return json;
  }

  exportToExcel(json, fileName);
};