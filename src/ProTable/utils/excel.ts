// 将前端数据导出成excel
import XLSX from 'xlsx';
import moment from 'moment';

/* 将数据导出成excel, 数据格式如下:
  [
    { 列1: 1, 列2: 2 },
    { 列1: 10, 列2: 20 },
  ];
*/
export const exportToExcel = (data, name = '导出数据') => {
  const sheet = XLSX.utils.json_to_sheet(data);

  const workbook: any = {
    SheetNames: ['sheet1'],
    Sheets: {},
  };
  workbook.Sheets.sheet1 = sheet;

  XLSX.writeFile(workbook, `${name}_${moment().format('YYYY-MM-DD')}.xlsx`);
};

export const exportToExcelSheet = (
  dataSource: { data: any; sheetName: string }[],
  name = '导出数据',
) => {
  const sheetNames = dataSource.map((item) => item.sheetName);
  const workbook: any = {
    SheetNames: sheetNames,
    Sheets: {},
  };

  dataSource.forEach((item) => {
    const sheet = XLSX.utils.json_to_sheet(item.data);

    workbook.Sheets[item.sheetName] = sheet;
  });

  XLSX.writeFile(workbook, `${name}_${moment().format('YYYY-MM-DD')}.xlsx`);
};

export const exportAntTableDataToExcel = (tableData, cols, fileName, notExport = false) => {
  // 产出n个空字符串
  function repeatEmptyString(n: number) {
    let string = '';
    for (let i = 0; i < n; i += 1) {
      string += ' ';
    }
    return string;
  }

  const json = tableData.map((item, index) => {
    let repeat = 1;
    return cols.reduce((prev, col) => {
      const result = { ...prev };
      let name;
      if (typeof col.title === 'object') {
        // 有时title是一个react node
        // 如: <><span>*</span>姓名</>, 取col.title.props.children[1]
        // 如: <>{/*<span>*</span>*/}姓名</>, 对于这种注释项, 取col.title.props.children
        const chilren = col.title.props.children;
        name = typeof chilren === 'object' ? chilren[1] : chilren;
      } else {
        name = col.title;
      }

      // 判断是否有重名的列, 如果有重名后面加空字符串
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
            const val = item[col.dataIndex];
            result[name] = val ? moment(val).format('YYYY-MM-DD') : '';
            break;
          case 'select':
            if (col.valueEnum) {
              result[name] = col.valueEnum[item[col.dataIndex]];
            } else {
              const { options = [] } = col.fieldProps;

              result[name] = options.find((option) => option.value == item[col.dataIndex]).label;
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
  });

  // 仅输出json
  if (notExport) {
    return json;
  }

  exportToExcel(json, fileName);
};
