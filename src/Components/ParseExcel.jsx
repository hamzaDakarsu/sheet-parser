import React, {useState} from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';


export const ParseExcel = () => {
  const [fileName, setFileName] = useState(null);

  const handleFile = async (e) => {

    const XLSX = require("xlsx");

    const file = e.target.files[0];
    setFileName(file.name);
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);


    const worksheet = workbook.Sheets[workbook.SheetNames];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    

    console.log(jsonData);
    localStorage.setItem("worksheet", JSON.stringify(jsonData));
  };


  return (
    <div>
        <h1>Parse</h1>
        {fileName && (
          <p>
            FileName: <span>{fileName}</span>
          </p>
        )}

        <input type="file" onChange={(e) => handleFile(e)} />
    </div>
  );
};