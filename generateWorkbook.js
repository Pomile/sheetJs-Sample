const path = require('path');
const XLSX = require('xlsx');
const data =  require('./data.json');
const generateWorkBook = () =>{
  // get data
  const xdata = data;
  // optional -> reshape data
  const rows = xdata.map(row => ({
  name: row.name.first + " " + row.name.last,
  birthday: row.bio.birthday
  }));
  // create a workbook
  const worksheet = XLSX.utils.json_to_sheet(rows);
   /* calculate column width */
  const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
  worksheet["!cols"] = [ { wch: max_width } ];
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
   /* fix headers */
  XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });
  
  // export file
  const filename = "presidents-" + Date.now() + '-' + Math.round(Math.random() * 1E9) + '.xlsx';
  console.log();
  XLSX.writeFile(workbook, __dirname + '/tmp/' + filename);
  const pathToFile = path.resolve(__dirname, '/tmp/', filename);
  return {
    filename,
    path: pathToFile,
    pathToFile: __dirname + '/tmp/' + filename
  }

};

module.exports = { generateWorkBook };