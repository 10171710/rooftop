const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(148, 186).map((l, i) => (i + 149) + ': ' + l).join('\n'));

