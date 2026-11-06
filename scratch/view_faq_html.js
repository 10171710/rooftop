const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(425, 450).join('\n'));

