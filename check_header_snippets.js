const fs = require('fs');

['about.html', 'menu.html', 'events.html', 'contact.html', 'index-2.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<header[\s\S]*?<\/header>/);
  if (m) {
    // print first 600 chars of header
    console.log(`=== Header in ${f} ===\n`, m[0].substring(0, 600), '\n');
  }
});
