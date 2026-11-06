const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const suits = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\s"'>]*/g);
  if (matches) {
    matches.forEach(m => {
      if (m.includes('1507003') || m.includes('1500648') || m.includes('1560250') || m.includes('1519085') || m.includes('1534030') || m.includes('1617127')) {
        suits.push({ file: f, url: m });
      }
    });
  }
});

console.log(suits);

