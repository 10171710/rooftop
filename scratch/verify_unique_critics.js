const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const photoCounts = {};
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const matches = c.match(/https:\/\/images\.unsplash\.com\/[^\s"'>]+/g) || [];
  const setInFile = new Set();
  matches.forEach(m => {
    const base = m.split('?')[0];
    setInFile.add(base);
  });
  setInFile.forEach(base => {
    photoCounts[base] = photoCounts[base] || [];
    photoCounts[base].push(f);
  });
});

['photo-1519085360753-af0119f7cbe7', 'photo-1573496359142-b8d87734a5a2', 'photo-1580489944761-15a19d654956'].forEach(id => {
  const full = 'https://images.unsplash.com/' + id;
  console.log(id, 'used in:', photoCounts[full]);
});

