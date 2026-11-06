const fs = require('fs');

const content = fs.readFileSync('contact.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(140, 210).map((l, i) => (i + 141) + ': ' + l).join('\n'));

