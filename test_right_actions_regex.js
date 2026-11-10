const fs = require('fs');

const standardNavPages = [
  'index-2.html', 'about.html', 'menu.html', 'events.html', 'gallery.html',
  'blog.html', 'blog-details.html', 'blog-details-1.html', 'blog-details-2.html',
  'blog-details-3.html', 'blog-details-4.html', 'blog-details-5.html',
  'blog-details-6.html', 'blog-details-7.html', 'contact.html',
  'pricing.html', 'services.html', 'service-details.html'
];

const rightActionsBlockRegex = /(?:<!--\s*Right Header Actions[^>]*-->\s*)?<div class="flex items-center gap-[^"]*">[\s\S]*?<button id="mobileMenuBtn"[\s\S]*?<\/button>\s*<\/div>/i;

standardNavPages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const m = content.match(rightActionsBlockRegex);
  console.log(`${file.padEnd(25)}: matches = ${!!m}, len = ${m ? m[0].length : 0}`);
});
