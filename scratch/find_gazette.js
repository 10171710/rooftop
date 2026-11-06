const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Skyline Gazette')) {
    console.log(`Found in ${f}`);
  }
});

