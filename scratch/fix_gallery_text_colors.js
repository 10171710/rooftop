const fs = require('fs');

let content = fs.readFileSync('gallery.html', 'utf8');

// Replace badge container
content = content.replace(
  /<div class="gallery-info-badge w-full p-3 rounded-xl">/g,
  '<div class="gallery-info-badge w-full p-3 rounded-xl" style="background: rgba(10, 10, 14, 0.92) !important; background-color: rgba(10, 10, 14, 0.92) !important; border: 1px solid rgba(212, 175, 55, 0.45) !important;">'
);

// Replace span inside gallery-info-badge
content = content.replace(
  /<span class="text-\[10px\] text-amber-400 uppercase font-bold tracking-wider block mb-0\.5">/g,
  '<span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5" style="color: #FBBF24 !important; text-shadow: 0 1px 4px rgba(0,0,0,0.8);">'
);

// Replace h4 inside gallery-info-badge
content = content.replace(
  /<h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">/g,
  '<h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug" style="color: #FFFFFF !important; -webkit-text-fill-color: #FFFFFF !important; text-shadow: 0 2px 8px rgba(0,0,0,0.95);">'
);

fs.writeFileSync('gallery.html', content, 'utf8');
console.log('Successfully applied inline styles to gallery cards in gallery.html');

