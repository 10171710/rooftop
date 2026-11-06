const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('?v=46')) {
    content = content.replace(/\?v=46/g, '?v=47');
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Bumped cachebuster from v=46 to v=47 in ${count} files.`);

