const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const allUsedImages = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/photo-[a-zA-Z0-9-]+/g) || [];
  matches.forEach(m => allUsedImages.add(m));
});

console.log('Total unique Unsplash photo IDs currently in project:', allUsedImages.size);
Array.from(allUsedImages).sort().forEach(id => console.log('USED:', id));

