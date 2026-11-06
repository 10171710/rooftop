const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('The Private Dispatch') || content.includes('Skyline Gazette') || content.includes('Subscribe to the')) {
    console.log(`Found newsletter pattern in ${f}`);
  }
});

