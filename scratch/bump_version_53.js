const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('?v=52')) {
    content = content.replace(/\?v=52/g, '?v=53');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Bumped cachebuster from v=52 to v=53 in ${count} files.`);

