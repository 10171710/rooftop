const fs = require('fs');

const c = fs.readFileSync('about.html', 'utf8');
const matches = c.match(/(https:\/\/images\.unsplash\.com\/[^\s"']+|assets\/images\/[^\s"']+)/g) || [];
console.log('About.html images:');
matches.forEach(m => console.log('  ' + m));

