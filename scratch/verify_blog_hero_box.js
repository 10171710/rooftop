const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(150, 195).map((l, i) => (i + 151) + ': ' + l).join('\n'));

