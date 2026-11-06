const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(425, 460).map((l, i) => (i + 426) + ': ' + l).join('\n'));

