const fs = require('fs');
const { convertFile } = require('xlsx-to-csv')

const convertXslxToCsv = (file) => {
const { filePath } = convertFile(file.pathToFile)
 return {
  filePath
 }
};

module.exports = { convertXslxToCsv };
