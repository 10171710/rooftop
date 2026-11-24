const fs = require('fs');
const content = fs.readFileSync('dashboard.html', 'utf8');

// Check demo mentions in dashboard.html
const demoMatches = content.match(/\bdemo\w*\b/gi) || [];
console.log('Mentions of demo in dashboard.html:', demoMatches.length, [...new Set(demoMatches.map(m => m.toLowerCase()))]);

// Check tabs in sidebar
const sidebarMatches = content.match(/<aside[\s\S]*?<\/aside>/i);
if (sidebarMatches) {
  console.log('\n--- SIDEBAR ---');
  console.log(sidebarMatches[0]);
}

// Check tab content sections
const tabSections = content.match(/id="tab-[^"]+"/g) || [];
console.log('\nTab sections in dashboard.html:', tabSections);

// Check all sections with id
const allIds = content.match(/id="[^"]+"/g) || [];
console.log('Total IDs:', allIds.length);

// Check script at bottom
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/gi);
console.log('Scripts count:', scriptMatch ? scriptMatch.length : 0);
if (scriptMatch) {
  console.log('Last script snippet:');
  console.log(scriptMatch[scriptMatch.length - 1].slice(0, 800));
}
