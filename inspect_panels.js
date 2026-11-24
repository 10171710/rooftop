const fs = require('fs');
const html = fs.readFileSync('dashboard.html', 'utf8');

// List all panels in dashboard.html
const panelNames = [];
const regex = /data-view-panel="([^"]+)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  panelNames.push(m[1]);
}
console.log('Panels:', panelNames);

// Print first 500 chars of each panel
panelNames.forEach(p => {
  const pIdx = html.indexOf(`data-view-panel="${p}"`);
  console.log(`\n=== PANEL: ${p} ===`);
  console.log(html.substring(pIdx, pIdx + 600).replace(/\s+/g, ' '));
});
