const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const idx = content.indexOf('const DEFAULT_ACCOUNTS');
console.log(content.substring(idx, idx + 1000));
