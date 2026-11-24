const fs = require('fs');
const content = fs.readFileSync('dashboard.html', 'utf8');

console.log('Size:', content.length);
console.log('Title:', content.match(/<title>([^<]+)<\/title>/i)?.[1]);
console.log('First 1000 chars:');
console.log(content.slice(0, 1000));
