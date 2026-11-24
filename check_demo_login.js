const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

const lines = content.split('\n');
lines.forEach((l, i) => {
  if (/demo/i.test(l)) {
    console.log(`Line ${i+1}: ${l}`);
  }
});
