const fs = require('fs');

const content = fs.readFileSync('contact.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(510, 535).map((l, i) => (i + 511) + ': ' + l).join('\n'));

