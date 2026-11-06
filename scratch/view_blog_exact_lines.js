const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(525, 565).map((l, i) => (i + 526) + ': ' + l).join('\n'));

