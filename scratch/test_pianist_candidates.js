const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const candidates = [
  'photo-1472099645785-5658abf4ff4e',
  'photo-1519085360753-af0119f7cbe7',
  'photo-1560250097-0b93528c311a',
  'photo-1566492031773-4f4e44671857',
  'photo-1522075469751-3a6694fb2f61',
  'photo-1508214751196-bcfd4ca60f91',
  'photo-1537151608828-ea2b11777ee8',
  'photo-1501196354995-cbb51c65aaea'
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

