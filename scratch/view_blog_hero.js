const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(145, 190).map((l, i) => (i + 146) + ': ' + l).join('\n'));

