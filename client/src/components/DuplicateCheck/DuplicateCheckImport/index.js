import React, { useState } from 'react';
import ExcelJS from 'exceljs';

const DuplicateCheckImport = () => {
  const [tableData, setTableData] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);

    const worksheet = workbook.worksheets[0];
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
      const rowData = {};
      row.eachCell((cell, colNumber) => {
        const cellValue = cell.type === ExcelJS.ValueType.Date ? cell.value.toString() : cell.value;
        rowData[`col${colNumber}`] = cellValue;
      });
      data.push(rowData);
    });

    setTableData(data);
  };

  return (
    <div>
      <h1>Import Your Excel File Here</h1>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      {tableData && (
        <table>
          <thead>
            <tr>
              {Object.keys(tableData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DuplicateCheckImport;