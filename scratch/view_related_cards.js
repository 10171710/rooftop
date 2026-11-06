const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(290, 370).map((l, i) => (i + 291) + ': ' + l).join('\n'));

