const fs = require('fs');

const htmlFiles = ['index.html', 'index-2.html', 'menu.html', 'events.html', 'contact.html', 'about.html', 'gallery.html', 'blog.html', 'login.html'];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Check for any hardcoded widths like style="width: ...px"
  const styleWidths = content.match(/style="[^"]*width:\s*[4-9]\d{2}px[^"]*"/g) || [];
  if (styleWidths.length) console.log(f, 'style widths:', styleWidths);
  
  // Check grid-cols that lack responsive sm: or md:
  const rigidGrids = content.match(/class="[^"]*grid-cols-(?:[3-6]|12)[^"]*"/g) || [];
  const badGrids = rigidGrids.filter(g => !g.includes('grid-cols-1') && !g.includes('sm:') && !g.includes('md:'));
  if (badGrids.length) console.log(f, 'rigid grids:', badGrids);
});

