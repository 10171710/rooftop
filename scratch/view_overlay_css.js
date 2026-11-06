const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(4018, 4048).join('\n'));

