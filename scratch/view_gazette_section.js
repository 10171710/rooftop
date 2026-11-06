const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
const idx = lines.findIndex(l => l.includes('Skyline Gazette'));
console.log('Line number around:', idx + 1);
console.log(lines.slice(Math.max(0, idx - 20), Math.min(lines.length, idx + 35)).map((l, i) => (idx - 19 + i) + ': ' + l).join('\n'));

