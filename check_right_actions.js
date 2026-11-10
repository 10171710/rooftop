const fs = require('fs');

['about.html', 'menu.html', 'events.html', 'contact.html', 'gallery.html', 'blog.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<nav[\s\S]*?<\/nav>\s*([\s\S]*?)<\/div>\s*<\/div>/);
  if (m) {
    console.log(`=== Right Actions in ${f} ===\n`, m[1], '\n');
  }
});
