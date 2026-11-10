const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const standardHeaderFiles = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('<header') && content.includes('martini-glass-citrus') && content.includes('theme-toggle-btn')) {
    standardHeaderFiles.push(f);
  }
});

console.log('Standard header files count:', standardHeaderFiles.length);
console.log(standardHeaderFiles.join('\n'));
