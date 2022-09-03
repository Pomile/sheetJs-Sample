const { generateWorkBook } = require('./generateWorkbook');
const { convertXslxToCsv } = require('./convertXslxToCsv');

const file = generateWorkBook();
convertXslxToCsv(file);

