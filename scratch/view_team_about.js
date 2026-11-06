const fs = require('fs');

const content = fs.readFileSync('about.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(375, 435).map((l, i) => (i + 376) + ': ' + l).join('\n'));

