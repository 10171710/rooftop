const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(660, 730).map((l, i) => `${661 + i}: ${l}`).join('\n'));
