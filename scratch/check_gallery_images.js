const fs = require('fs');
const gallery = fs.readFileSync('gallery.html', 'utf8');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'gallery.html');

const galleryCards = gallery.match(/<div class="gallery-card[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log('Total gallery cards:', galleryCards.length);

galleryCards.forEach((c, idx) => {
  const imgMatch = c.match(/src="([^"]+)"/);
  const img = imgMatch ? imgMatch[1] : '';
  const titleMatch = c.match(/<h4[^>]*>(.*?)<\/h4>/);
  const title = titleMatch ? titleMatch[1] : '';
  const catMatch = c.match(/data-category="([^"]+)"/);
  const cat = catMatch ? catMatch[1] : '';
  
  const baseImg = img.split('?')[0];
  let occurrences = [];
  files.forEach(f => {
    const fc = fs.readFileSync(f, 'utf8');
    if (baseImg && fc.includes(baseImg)) {
      occurrences.push(f);
    }
  });
  console.log(`Card ${idx+1} [${cat}] "${title}":`);
  console.log('  Image:', baseImg);
  console.log('  Used in other pages:', occurrences.join(', ') || 'NONE (Unique)');
});

