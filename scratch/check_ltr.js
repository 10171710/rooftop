const fs = require('fs');
['contact.html', 'blog.html', 'about.html', 'index.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const matches = c.match(/dir=["']ltr["']/g);
  if (matches) console.log(f, 'has dir=ltr matches:', matches.length);
});

