const fs = require('fs');
['contact.html', 'blog.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('dir="ltr"')) {
      console.log(f + ':' + (i+1) + ' -> ' + l.trim());
    }
  });
});

