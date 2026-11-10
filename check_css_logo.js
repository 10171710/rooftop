const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((line, i) => {
  if (line.includes('brand') || line.includes('logo') || line.includes('navbar') || (line.includes('header') && !line.includes('/*'))) {
    if (i < 300 || i > 5400) {
      console.log(`Line ${i + 1}: ${line.trim()}`);
    }
  }
});
