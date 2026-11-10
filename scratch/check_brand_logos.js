const fs = require('fs');

const files = ['index.html', 'about.html', 'menu.html', 'events.html', 'contact.html', 'login.html', 'dashboard-admin.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  const logoLine = lines.findIndex(l => l.includes('AURA') && l.includes('SKY') && (l.includes('font-display') || l.includes('text-xl')));
  if (logoLine !== -1) {
    console.log(f + ' (line ' + (logoLine+1) + '):');
    console.log(lines.slice(Math.max(0, logoLine - 10), logoLine + 6).join('\n'));
    console.log('-----------------------------------');
  }
});
