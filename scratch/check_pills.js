const fs = require('fs');
const h2 = fs.readFileSync('index-2.html', 'utf8');
const lines = h2.split('\n');
console.log(lines.slice(285, 340).join('\n'));

