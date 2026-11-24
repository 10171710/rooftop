const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const lastScriptIdx = content.lastIndexOf('<script>');
console.log('Last script content:');
console.log(content.substring(lastScriptIdx, lastScriptIdx + 2500));
