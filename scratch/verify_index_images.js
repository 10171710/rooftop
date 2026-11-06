const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const start = content.indexOf('<!-- Menu Items Grid -->');
const end = content.indexOf('<!-- View Complete Menu CTA -->');
const block = content.slice(start, end);
const regex = /src="([^"]+)"/g;
let m;
console.log('Verified index.html menu section images:');
while ((m = regex.exec(block)) !== null) {
  console.log(' - ' + m[1]);
}

