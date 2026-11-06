const fs = require('fs');
const content = fs.readFileSync('blog-details.html', 'utf8');
const lines = content.split('\n');

console.log('Total lines in blog-details.html:', lines.length);

lines.forEach((l, i) => {
  if (l.includes('<h1') || l.includes('<h2') || l.includes('article') || l.includes('id=')) {
    if (i > 150 && i < 600) {
      console.log((i+1) + ': ' + l.trim());
    }
  }
});

