const fs = require('fs');
const h2 = fs.readFileSync('index-2.html', 'utf8');
const lines = h2.split('\n');
const idx = lines.findIndex(l => l.includes('Right Column') || l.includes('col-span-4') || l.includes('col-span-5'));
console.log('Right column in index-2.html:');
console.log(lines.slice(idx - 2, idx + 45).join('\n'));

