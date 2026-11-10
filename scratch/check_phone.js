const fs = require('fs');
['login.html', 'register.html', 'index.html', 'index-2.html', 'contact.html'].forEach(f => {
  if (!fs.existsSync(f)) return;
  const html = fs.readFileSync(f, 'utf8');
  const lines = html.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('type="tel"') || l.includes('custPhone') || (l.toLowerCase().includes('phone') && l.includes('<input'))) {
      console.log(f + ':' + (i + 1) + ' ' + l.trim());
    }
  });
});

