const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const idx = content.indexOf('handleLoginSubmit');
console.log(content.substring(idx - 50, idx + 1500));

const demoIdx = content.indexOf('loginDemo');
console.log('--- loginDemo ---');
console.log(content.substring(demoIdx - 50, demoIdx + 800));
