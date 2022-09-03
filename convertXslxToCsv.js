const fs = require('fs');
const { convertFile } = require('xlsx-to-csv')

const convertXslxToCsv = (file) => {
const { filePath } = convertFile(file.pathToFile)
console.log(filePath)
//const csvData = fs.readFileSync(filePath).toString()
 return {
  filePath
 }
};

module.exports = { convertXslxToCsv };
