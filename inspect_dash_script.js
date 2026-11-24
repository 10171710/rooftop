const fs = require('fs');
const html = fs.readFileSync('dashboard.html', 'utf8');

const scriptIdx = html.lastIndexOf('<script>');
const script = html.substring(scriptIdx);

// List function definitions
const fns = script.match(/function\s+[a-zA-Z0-9_]+\s*\(/g) || [];
console.log('Functions in dashboard.html:', fns);

// Find switchView function
const svIdx = script.indexOf('switchView');
if (svIdx !== -1) {
  console.log('switchView implementation:');
  console.log(script.substring(svIdx - 20, svIdx + 600));
}
