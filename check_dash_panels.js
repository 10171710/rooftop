const fs = require('fs');
const content = fs.readFileSync('dashboard.html', 'utf8');

// Find all data-view-panel
const panelMatches = content.match(/data-view-panel="([^"]+)"/g) || [];
console.log('Panels found in dashboard.html:', panelMatches);

// Find all data-view in sidebar
const navMatches = content.match(/data-view="([^"]+)"/g) || [];
console.log('Sidebar nav links found:', navMatches);

// Check if all nav buttons have matching panels
const panels = panelMatches.map(p => p.match(/"([^"]+)"/)[1]);
const navs = navMatches.map(n => n.match(/"([^"]+)"/)[1]);

console.log('Navs not in panels:', navs.filter(n => !panels.includes(n)));
console.log('Panels not in navs:', panels.filter(p => !navs.includes(p)));
