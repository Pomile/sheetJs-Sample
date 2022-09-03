const { generateWorkBook } = require('./generateWorkbook');
const { convertXslxToCsv } = require('./convertXslxToCsv');

const file = generateWorkBook();
const csv = convertXslxToCsv(file);
console.log(file);
console.log(csv);
