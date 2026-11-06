const fs = require('fs');

['blog.html', 'about.html', 'contact.html', 'index.html', 'pricing.html', 'services.html'].forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`=== ${file} ===`);
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('object-cover') || l.includes('object-top') || l.includes('object-center') || l.includes('<img')) {
      if (l.includes('photo-') || l.includes('unsplash')) {
        console.log(`  ${i+1}: ${l.trim().substring(0, 110)}`);
      }
    }
  });
});
