const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if ((l.includes('from-black') || l.includes('bg-gradient-to-t')) && l.includes('absolute inset-0')) {
      console.log(`${file}:${i + 1}: ${l.trim()}`);
    }
  });
});

