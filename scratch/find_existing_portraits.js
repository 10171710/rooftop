const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const images = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s"'>]+/g);
  if (matches) {
    matches.forEach(m => images.add(m));
  }
});

console.log('Total unique Unsplash images in project:', images.size);
Array.from(images).forEach(img => {
  if (img.includes('1507003') || img.includes('1534528') || img.includes('1500648') || img.includes('1507679') || img.includes('1516035') || img.includes('1554080') || img.includes('1583394') || img.includes('1577219')) {
    console.log(img);
  }
});

