const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(185, 375).map((l, i) => (i + 186) + ': ' + l).join('\n'));

