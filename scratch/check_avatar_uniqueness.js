const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const allImages = new Set();
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.matchAll(/src=["']([^"']+)["']/g);
  for (const match of matches) {
    allImages.add(match[1]);
  }
});

console.log('Total unique src attributes across all HTML files:', allImages.size);

const candidates = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
];

candidates.forEach(cand => {
  const candId = cand.split('photo-')[1];
  let foundIn = [];
  htmlFiles.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes(candId)) {
      foundIn.push(f);
    }
  });
  console.log(`Candidate ${candId} found in: ${foundIn.length} files (${foundIn.join(', ')})`);
});

