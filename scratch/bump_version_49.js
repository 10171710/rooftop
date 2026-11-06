const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('?v=48')) {
    content = content.replace(/\?v=48/g, '?v=49');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Bumped cachebuster from v=48 to v=49 in ${count} files.`);

