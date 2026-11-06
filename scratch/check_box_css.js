const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('contact-hero-box') || l.includes('rounded-3xl') || l.includes('newsletter') || l.includes('dispatch')) {
    console.log(`${i+1}: ${l}`);
  }
});

