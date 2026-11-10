const fs = require('fs');

const idx = fs.readFileSync('index.html', 'utf8');
const lines = idx.split('\n');
const mIdx = lines.findIndex(l => l.includes('id="mobileMenu"'));
console.log('Mobile menu in index.html:');
console.log(lines.slice(mIdx - 2, mIdx + 45).join('\n'));

// Check hero section in index.html
const hIdx = lines.findIndex(l => l.includes('hero1-photo'));
console.log('\nHero section in index.html:');
console.log(lines.slice(hIdx - 5, hIdx + 45).join('\n'));

