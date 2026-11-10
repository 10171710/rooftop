const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const candidates = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('<!-- Brand Logo -->') || content.includes('martini-glass-citrus')) {
    candidates.push(f);
  }
});

console.log('Candidates count:', candidates.length);
console.log(candidates.join(', '));
