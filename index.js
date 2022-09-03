const { generateWorkBook } = require('./generateWorkbook');
const { convertXslxToCsv } = require('./convertXslxToCsv');

const file = generateWorkBook();
console.log(file)
const csv = convertXslxToCsv(file);
