const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const linkCounts = { 'dashboard.html': 0, 'dashboard-admin.html': 0, 'dashboard-guest.html': 0 };

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('dashboard.html')) linkCounts['dashboard.html']++;
  if (content.includes('dashboard-admin.html')) linkCounts['dashboard-admin.html']++;
  if (content.includes('dashboard-guest.html')) linkCounts['dashboard-guest.html']++;
});

console.log('File link counts:', linkCounts);
