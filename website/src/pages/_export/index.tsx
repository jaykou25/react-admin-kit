import { Button } from 'antd';
import * as ExcelJS from 'exceljs';

const Demo = () => {
  return (
    <Button
      onClick={async () => {
        const workbook = new ExcelJS.Workbook();

        const worksheet = workbook.addWorksheet();

        worksheet.properties.defaultColWidth = 30;

        worksheet.columns = [
          { header: 'Id', key: 'id', width: 10 },
          { header: 'Name', key: 'name', width: 32 },
          { header: 'Title', key: 'title', width: undefined },
        ];

        worksheet.addRows([
          [10, 'jakc', 'ceo'],
          [20, 'tom', 'cfo'],
          [30, 'tom2', 'cfo2'],
        ]);

        worksheet.name = 'FROM JAY3';

        // 导出文件
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'hello-exceljs.xlsx';
        a.click();
        URL.revokeObjectURL(url);
      }}
    >
      export
    </Button>
  );
};

export default Demo;
