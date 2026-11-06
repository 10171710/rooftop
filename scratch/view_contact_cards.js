const fs = require('fs');
const content = fs.readFileSync('contact.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(500, 590).join('\n'));
