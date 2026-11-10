const fs = require('fs');

const content = fs.readFileSync('about.html', 'utf8');
const navIdx = content.indexOf('</nav>');
console.log(content.substring(navIdx, navIdx + 1300));
