const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(140, 225).map((l, i) => (i + 141) + ': ' + l).join('\n'));

