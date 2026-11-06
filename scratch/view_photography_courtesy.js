const fs = require('fs');

['contact.html', 'index-2.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('Photography Courtesy')) {
      console.log(`=== ${f} ===`);
      console.log(lines.slice(Math.max(0, i - 10), Math.min(lines.length, i + 15)).map((line, idx) => (i - 9 + idx) + ': ' + line).join('\n'));
    }
  });
});

