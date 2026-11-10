const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
const start = lines.findIndex(l => l.includes('<header'));
const end = lines.findIndex(l => l.includes('</header>'));
console.log(lines.slice(start, end + 1).join('\n'));

