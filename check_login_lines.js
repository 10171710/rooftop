const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(190, 240).map((l, i) => `${191 + i}: ${l}`).join('\n'));
