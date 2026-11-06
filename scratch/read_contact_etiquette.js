const fs = require('fs');
const content = fs.readFileSync('contact.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(510, 585).join('\n'));

