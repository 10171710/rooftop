const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('rounded-3xl') || l.includes('rounded-2xl') || l.includes('glass-dark') || l.includes('bg-gradient-to')) {
    if (i > 350 && i < 430) {
      console.log(`${i+1}: ${l.trim()}`);
    }
  }
});

