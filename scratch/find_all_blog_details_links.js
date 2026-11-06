const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/href="blog-details\.html[^"]*"/g);
  if (matches) {
    console.log(`${f}: ${matches.length} matches ->`, matches);
  }
});

