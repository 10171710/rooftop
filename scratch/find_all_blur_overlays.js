const fs = require('fs');

['index.html', 'index-2.html'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  console.log('=== ' + file + ' OVERLAYS & GRADIENTS ===');
  lines.forEach((l, i) => {
    if ((l.includes('from-black') || l.includes('bg-gradient-to-t') || l.includes('from-[#')) && (l.includes('absolute') || l.includes('gradient'))) {
      console.log('  Line ' + (i+1) + ': ' + l.trim());
    }
  });
});

