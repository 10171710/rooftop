const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const candidates = [
  'photo-1544025162-d76694265947', // already tested in other files?
  'photo-1551218808-94e220e084d2', 
  'photo-1578474846511-04ba529f0b88',
  'photo-1514933651103-005eec06c04b', // fine dining restaurant / dishes
  'photo-1550966871-3ed3cdb5ed0c',
  'photo-1504674900247-0877df9cc836', // gourmet food
  'photo-1540420773420-3366772f4999', // gourmet salad
  'photo-1600891964599-f61ba0e24092', // steak plating
  'photo-1579027989536-b7b1f875659b', // omakase / sushi plating
  'photo-1579871494447-9811cf80d66c', // sushi chef plating
  'photo-1555396273-367ea4eb4db5', // restaurant
  'photo-1517248135467-4c7edcad34c4', // restaurant
  'photo-1565299585323-38d6b0865b47',
  'photo-1583394838336-acd977736f90',
  'photo-1563245372-f21724e3856d'
];

candidates.forEach(cand => {
  const matches = [];
  files.forEach(f => {
    if (fs.readFileSync(f, 'utf8').includes(cand)) {
      matches.push(f);
    }
  });
  console.log(`${cand}: used in ${matches.length} file(s) -> ${matches.join(', ')}`);
});

