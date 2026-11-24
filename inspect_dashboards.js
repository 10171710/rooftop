const fs = require('fs');

function inspectFile(filename) {
  if (!fs.existsSync(filename)) {
    console.log(`${filename} does not exist`);
    return;
  }
  const content = fs.readFileSync(filename, 'utf8');
  console.log(`\n================== ${filename} ==================`);
  console.log('Size:', content.length, 'bytes');
  
  // Title
  const title = content.match(/<title>([^<]+)<\/title>/i);
  console.log('Title:', title ? title[1] : 'No title');

  // Sidebar links or tabs
  const sidebarLinks = content.match(/<a[^>]*class="[^"]*(?:sidebar|tab|nav)[^"]*"[^>]*>.*?<\/a>/gis) || [];
  console.log('Sidebar/Nav link count:', sidebarLinks.length);
  sidebarLinks.slice(0, 10).forEach(l => console.log('  Link:', l.replace(/\s+/g, ' ').slice(0, 100)));

  // Sections with IDs
  const sections = content.match(/<(?:section|div)[^>]*id="([^"]+)"[^>]*>/gi) || [];
  console.log('IDs in document:', sections.slice(0, 15).map(s => s.match(/id="([^"]+)"/)?.[1]));

  // Check for any "demo" mentions
  const demoMatches = content.match(/\bdemo\w*\b/gi) || [];
  console.log('Mentions of "demo":', demoMatches.length, [...new Set(demoMatches.map(m => m.toLowerCase()))]);
}

inspectFile('dashboard-admin.html');
inspectFile('dashboard-guest.html');
inspectFile('login.html');
inspectFile('register.html');
