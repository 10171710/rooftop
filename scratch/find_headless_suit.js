const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('photo-1507679799987')) {
    console.log(`Found photo-1507679799987 in ${f}`);
  }
});

