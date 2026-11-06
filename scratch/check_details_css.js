const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, i) => {
  if (l.includes('article') || l.includes('prose') || l.includes('blogDetail')) {
    if (l.includes('{') || l.includes('html.light')) {
      console.log((i+1) + ': ' + l.trim());
    }
  }
});

