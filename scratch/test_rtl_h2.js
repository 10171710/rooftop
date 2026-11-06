const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

// Check selectors that affect h2 and p under html[dir="rtl"]
const lines = css.split('\n');
console.log('--- Rules targeting h2 and p in html[dir="rtl"] ---');
lines.forEach((l, i) => {
  if (l.includes('h2') && l.includes('rtl')) {
    console.log((i+1) + ': ' + l);
  }
  if (l.includes('text-center') && l.includes('rtl')) {
    console.log((i+1) + ': ' + l);
  }
});

