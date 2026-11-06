const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(lines.length - 70).join('\n'));

