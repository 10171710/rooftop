const fs = require('fs');
const content = fs.readFileSync('dashboard-admin.html', 'utf8');

// Check the sidebar of dashboard-admin.html
const sidebarMatch = content.match(/<aside[\s\S]*?<\/aside>/i);
if (sidebarMatch) {
  console.log('--- DASHBOARD-ADMIN.HTML SIDEBAR ---');
  console.log(sidebarMatch[0]);
}

// Check main content of dashboard-admin.html
const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
if (mainMatch) {
  console.log('\n--- MAIN CONTENT LENGTH ---', mainMatch[0].length);
  // Look for sections or tabs inside main
  const headings = mainMatch[0].match(/<h[1-4][^>]*>.*?<\/h[1-4]>/gi) || [];
  console.log('Headings in main:', headings.map(h => h.replace(/\s+/g, ' ')));
}

// Check images in dashboard-admin.html
const imgMatches = content.match(/<img[^>]+>/gi) || [];
console.log('\nImages in dashboard-admin.html count:', imgMatches.length);
imgMatches.forEach(img => console.log('  Image:', img));
