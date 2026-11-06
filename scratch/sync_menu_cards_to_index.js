const fs = require('fs');

const menuHtml = fs.readFileSync('menu.html', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const menuStart = menuHtml.indexOf('<!-- 1: Cocktails -->');
const menuEnd = menuHtml.indexOf('<!-- 7: Tapas -->');

if (menuStart === -1 || menuEnd === -1) {
  console.error('Could not find menu cards in menu.html');
  process.exit(1);
}

const menuCardsBlock = menuHtml.slice(menuStart, menuEnd).trim();

const indexStart = indexHtml.indexOf('<!-- Menu Items Grid -->');
const indexGridOpen = indexHtml.indexOf('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">', indexStart);
const indexEnd = indexHtml.indexOf('<!-- View Complete Menu CTA -->');

if (indexStart === -1 || indexGridOpen === -1 || indexEnd === -1) {
  console.error('Could not find index target boundaries');
  process.exit(1);
}

// Find the closing </div> of the grid right before indexEnd
const gridCloseIndex = indexHtml.lastIndexOf('</div>', indexEnd);

const newIndexGrid = `<!-- Menu Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        ${menuCardsBlock}

      </div>
      `;

const newIndexHtml = indexHtml.slice(0, indexStart) + newIndexGrid + indexHtml.slice(indexEnd);
fs.writeFileSync('index.html', newIndexHtml, 'utf8');
console.log('Successfully replaced index.html menu section with exact same cards and images from menu.html!');

