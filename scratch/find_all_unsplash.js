const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const used = new Set();
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const matches = c.match(/https:\/\/images\.unsplash\.com\/[^\s"'>]+/g) || [];
  matches.forEach(m => used.add(m.split('?')[0]));
});

console.log('Total unique Unsplash photos used:', used.size);
Array.from(used).sort().forEach(u => console.log(u));

