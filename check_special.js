const fs = require('fs');

['dashboard-admin.html', 'dashboard-guest.html', 'login.html', 'register.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<header[\s\S]*?<\/header>/);
  if (m) {
    console.log(`=== Header in ${f} ===\n`, m[0].substring(0, 300), '\n');
  } else {
    const m2 = content.match(/AURA[\s\S]{0,30}SKY/);
    console.log(`No header in ${f}. AURA SKY match:`, m2 ? m2[0] : 'None');
  }
});
