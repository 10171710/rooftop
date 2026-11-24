const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const idx = content.indexOf('function handleLoginSubmit');
console.log(content.substring(idx, idx + 1200));
