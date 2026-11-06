const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const moreCands = [
  'photo-1550547660-d9450f859349',
  'photo-1546069901-ba9599a7e63c',
  'photo-1565958011703-44f9829ba187',
  'photo-1504754524776-8f4f37790ca0',
  'photo-1540189549336-e6e99c3679fe',
  'photo-1555244162-803834f70033',
  'photo-1551218808-94e220e084d2',
  'photo-1579871494447-9811cf80d66c',
  'photo-1579027989536-b7b1f875659b'
];

moreCands.forEach(cand => {
  const matches = [];
  files.forEach(f => {
    if (fs.readFileSync(f, 'utf8').includes(cand)) {
      matches.push(f);
    }
  });
  console.log(`${cand}: used in ${matches.length} file(s) -> ${matches.join(', ')}`);
});

