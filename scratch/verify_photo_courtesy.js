const fs = require('fs');

const content = fs.readFileSync('contact.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(568, 586).map((l, i) => (i + 569) + ': ' + l).join('\n'));

