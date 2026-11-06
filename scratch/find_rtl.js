const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('dir="rtl"') || l.includes("dir='rtl'") || l.includes('rtl')) {
    if (l.includes('{') || l.includes('html') || l.includes('body')) {
      console.log((i+1) + ': ' + l.trim());
    }
  }
});

