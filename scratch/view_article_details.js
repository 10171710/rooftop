const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(150, 280).join('\n'));

