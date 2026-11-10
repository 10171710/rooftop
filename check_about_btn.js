const fs = require('fs');

const content = fs.readFileSync('about.html', 'utf8');
const btnIdx = content.indexOf('mobileMenuBtn');
console.log(content.substring(btnIdx, btnIdx + 500));
