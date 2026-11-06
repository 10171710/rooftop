const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('?v=51')) {
    content = content.replace(/\?v=51/g, '?v=52');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Bumped cachebuster from v=51 to v=52 in ${count} files.`);

