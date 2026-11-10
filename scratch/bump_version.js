const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let cssUpdated = 0;
let jsUpdated = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('style.css')) {
    content = content.replace(/style\.css(\?v=\d+)?/g, 'style.css?v=101');
    cssUpdated++;
  }
  if (content.includes('main.js')) {
    content = content.replace(/main\.js(\?v=\d+)?/g, 'main.js?v=101');
    jsUpdated++;
  }
  fs.writeFileSync(file, content, 'utf8');
});

console.log(`Bumped cachebuster to v=101 (CSS: ${cssUpdated}, JS: ${jsUpdated}) across ${htmlFiles.length} HTML files.`);
