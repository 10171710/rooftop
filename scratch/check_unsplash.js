const fs = require('fs');

['services.html', 'events.html', 'gallery.html', 'index.html'].forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const matches = c.match(/https:\/\/images\.unsplash\.com\/[^\s"']+/g) || [];
    console.log(`=== ${f} ===`);
    matches.forEach(m => console.log('  ' + m));
  }
});

