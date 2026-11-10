const fs = require('fs');
const h2 = fs.readFileSync('index-2.html', 'utf8');
const lines = h2.split('\n');
const idx = lines.findIndex(l => l.includes('hero2-photo') || l.includes('hero2-overlay') || l.includes('Aura Sky'));
console.log('Hero in index-2.html:');
console.log(lines.slice(idx - 5, idx + 45).join('\n'));

