const xlsx = require('node-xlsx').default;
const fs = require('fs');

export default function convert2Json(inputfilepath, outputfilename, ) {
  const file = xlsx.parse(`${__dirname}/meta-solution.xlsx`);
  const list = [...file[0].data];
  let result = '';

  list.forEach((item, key) => {
    if (item.length > 0 && item[0]) {
      if(/[0-9a-zA-Z]$/.test(item[0])) {
        item[0] += ':';
      }

      result += item[0] + ((item[2] && item[2] !== 'undefined') ? `'${item[2]}\r\n` : '\r\n');
    }
  });

  fs.writeFileSync(`${__dirname}/meta-solution.ja-JP.json`, result);
}