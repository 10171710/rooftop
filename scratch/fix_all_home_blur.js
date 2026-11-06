const fs = require('fs');

// ==========================================
// 1. Update index.html
// ==========================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1a. Glass Cellar
indexHtml = indexHtml.replace(
  '<div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>',
  '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%) !important;"></div>'
);

// 1b. Event Cards in index.html (replace all from-black/90 via-black/20 with inline dark scrim)
indexHtml = indexHtml.replace(
  /<div class="absolute inset-0 bg-gradient-to-t from-black\/90 via-black\/20 to-transparent"><\/div>/g,
  '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%) !important;"></div>'
);

// Ensure images have filter: none
indexHtml = indexHtml.replace(
  'alt="1,400-Bottle Temperature Controlled Skydeck Cellar"\n              class="w-full h-[450px] object-cover hover:scale-105 transition duration-700"',
  'alt="1,400-Bottle Temperature Controlled Skydeck Cellar"\n              class="w-full h-[450px] object-cover hover:scale-105 transition duration-700"\n              style="filter: none !important; -webkit-filter: none !important;"'
);

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully updated index.html image overlays.');

// ==========================================
// 2. Update index-2.html
// ==========================================
let index2Html = fs.readFileSync('index-2.html', 'utf8');

// 2a. Hero 3D Card
index2Html = index2Html.replace(
  '<div class="absolute inset-0 bg-gradient-to-t from-[#06080D] via-[#06080D]/30 to-transparent"></div>',
  '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(6,8,13,0.7) 0%, rgba(6,8,13,0.1) 40%, transparent 100%) !important;"></div>'
);

// 2b. Spotlight Creation: Pomegranate & Basil Fizz
index2Html = index2Html.replace(
  '<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>',
  '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%) !important;"></div>'
);

// 2c. Twilight Sunset Aperitivo
index2Html = index2Html.replace(
  '<div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>',
  '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%) !important;"></div>'
);

// 2d. The Rare Spirits Vault & Rituals (replace dumpling photo with luxury champagne/spirits celebration photo + remove white blur)
const oldRareSpiritsBlock = `<div class="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=2000&q=88" 
                 alt="VIP Bottle Service Presentation Ritual" 
                 class="w-full h-[460px] object-cover hover:scale-105 transition duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border border-amber-500/20 backdrop-blur-md">`;

const newRareSpiritsBlock = `<div class="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1600&q=85" 
                 alt="VIP Bottle Service Presentation Ritual" 
                 class="w-full h-[460px] object-cover hover:scale-105 transition duration-700"
                 style="filter: none !important; -webkit-filter: none !important;">
            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 50%, transparent 100%) !important;"></div>
            <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border border-amber-500/20 backdrop-blur-md">`;

if (index2Html.includes(oldRareSpiritsBlock)) {
  index2Html = index2Html.replace(oldRareSpiritsBlock, newRareSpiritsBlock);
  console.log('Successfully replaced Rare Spirits photo and overlay in index-2.html.');
} else {
  console.log('Could not match exact oldRareSpiritsBlock, replacing components separately.');
  index2Html = index2Html.replace(
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=2000&q=88',
    'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1600&q=85'
  );
  index2Html = index2Html.replace(
    '<div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>',
    '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 50%, transparent 100%) !important;"></div>'
  );
}

// 2e. Event Cards in index-2.html (replace all from-black/90 to-transparent)
index2Html = index2Html.replace(
  /<div class="absolute inset-0 bg-gradient-to-t from-black\/90 to-transparent"><\/div>/g,
  '<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, transparent 100%) !important;"></div>'
);

fs.writeFileSync('index-2.html', index2Html, 'utf8');
console.log('Successfully updated index-2.html image overlays.');

// ==========================================
// 3. Update assets/css/style.css
// ==========================================
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const scrimProtectionRule = `
/* ===================================================================
   Section 39: Permanent Light-Mode Image Clarity & Anti-Blur Scrim Fix
   =================================================================== */
html.light .rounded-3xl > div[class*="absolute"][class*="bg-gradient-to-t"],
html.light .rounded-2xl > div[class*="absolute"][class*="bg-gradient-to-t"],
html.light div[class*="overflow-hidden"] > div[class*="absolute"][class*="bg-gradient-to-t"],
html:not(.dark) .rounded-3xl > div[class*="absolute"][class*="bg-gradient-to-t"],
html:not(.dark) .rounded-2xl > div[class*="absolute"][class*="bg-gradient-to-t"],
html:not(.dark) div[class*="overflow-hidden"] > div[class*="absolute"][class*="bg-gradient-to-t"] {
  --tw-gradient-from: rgba(0, 0, 0, 0.85) var(--tw-gradient-from-position) !important;
  --tw-gradient-to: rgba(0, 0, 0, 0) var(--tw-gradient-to-position) !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
}

/* Ensure all images render with crisp clarity and no CSS filters in both themes */
html.light img,
html:not(.dark) img,
body.light img,
img {
  filter: none !important;
  -webkit-filter: none !important;
}
`;

css += '\n' + scrimProtectionRule;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Successfully added Section 39 to assets/css/style.css.');

