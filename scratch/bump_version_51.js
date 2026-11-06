const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('?v=50')) {
    content = content.replace(/\?v=50/g, '?v=51');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Bumped cachebuster from v=50 to v=51 in ${count} files.`);

