import * as XLSX from "xlsx";
import * as path from "path";

export const readExcelData = (fileName: string, sheetName: string): any[] => {

    const filePath = path.join(process.cwd(),"test-data",fileName);
    try{

        const workbook = XLSX.readFile(filePath);
        const sheet=workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(sheet);
        return data;
    }
    catch(error){
        console.error(`Error reading Excel file: ${error}`);
        throw new Error(`Error reading Excel file: ${error}`);
    }
    

}