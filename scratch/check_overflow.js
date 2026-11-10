const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('overflow-x') || (l.includes('overflow') && l.includes('hidden') && l.includes('body'))) {
    console.log(i + 1, l);
  }
});

