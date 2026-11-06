const fs = require('fs');

['index.html', 'index-2.html', 'about.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const match = c.match(/<div class="dropdown-menu[^>]*>([\s\S]*?)<\/div>/);
  if (match) {
    console.log('=== ' + f + ' ===');
    console.log(match[0]);
  }
});

