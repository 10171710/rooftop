const fs = require('fs');
const html = fs.readFileSync('dashboard.html', 'utf8');

// Check all img tags in dashboard.html
const imgRegex = /<img[^>]+>/g;
let m;
while ((m = imgRegex.exec(html)) !== null) {
  console.log(m[0]);
}
