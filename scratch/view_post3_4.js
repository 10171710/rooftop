const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(250, 310).map((l, i) => (i + 251) + ': ' + l).join('\n'));

