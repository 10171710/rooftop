const fs = require('fs');

['dashboard-admin.html', 'dashboard-guest.html', 'login.html', 'register.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<a[^>]*href=["']index\.html["'][^>]*>[\s\S]*?<\/a>/);
  if (m) {
    console.log(`=== Logo in ${f} ===\n`, m[0], '\n');
  }
});
