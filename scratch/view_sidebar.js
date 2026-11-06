const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(225, 290).map((l, i) => (i + 226) + ': ' + l).join('\n'));

