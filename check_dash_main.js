const fs = require('fs');
const content = fs.readFileSync('dashboard.html', 'utf8');

console.log('dashboard.html lines:', content.split('\n').length);
// Check the main tag structure
const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
if (mainMatch) {
  const main = mainMatch[0];
  console.log('Main length:', main.length);
  // List all panels in main
  const panels = main.match(/data-view-panel="([^"]+)"/g) || [];
  console.log('Panels:', panels);
}
