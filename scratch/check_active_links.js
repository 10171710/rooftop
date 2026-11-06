const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const headerMatch = content.match(/<nav[^>]*>([\s\S]*?)<\/nav>/);
  if (headerMatch) {
    const nav = headerMatch[1];
    // Find any link with text-amber-400 or active class
    const activeMatches = nav.match(/<a\s+[^>]*class=["'][^"']*(text-amber-400|nav-active|active)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi) || [];
    const activeText = activeMatches.map(m => m.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
    console.log(`${file}: ${activeText.join(', ') || 'NONE'}`);
  } else {
    console.log(`${file}: NO NAV`);
  }
});

