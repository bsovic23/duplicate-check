import React, { useState } from 'react';
import ExcelJS from 'exceljs';

// Components
import DuplicateCheckForm from '../DuplicateCheckForm';

const DuplicateCheckImport = () => {

  // Excel Import
  const [excelData, setExcelData] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);

    const worksheet = workbook.worksheets[0];
    const data = [];

    const headerRow = worksheet.getRow(1);
    const headers = [];
    headerRow.eachCell((cell) => {
      headers.push(cell.value);
    });

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) { 
        const rowData = {};
        row.eachCell((cell, colNumber) => {
            const cellValue = cell.type === ExcelJS.ValueType.Date ? cell.value.toString() : cell.value;
            const header = headers[colNumber - 1];
        if (header === 'digits') {
          rowData[header] = cellValue.toString();
        } else {
          rowData[header] = cellValue;
        }
      });
      data.push(rowData);
    }
  });

    // Use the 'data' array here or pass it to another function/component
    setExcelData(data);
  };

  return (
    <section class="duplicate-check-import">
        <h1>Import Your Excel File Here</h1>
        <div class="file-input">
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
        </div>
        <div class="duplicate-check-form">
          {excelData && <DuplicateCheckForm excelData={excelData} />}
        </div>
    </section>
  );
};

export default DuplicateCheckImport;