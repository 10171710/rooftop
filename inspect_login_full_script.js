const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const scriptIdx = content.indexOf('<script>');
console.log('Script length:', content.length - scriptIdx);
console.log(content.substring(scriptIdx, scriptIdx + 2000));
