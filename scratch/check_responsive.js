const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  // Check for fixed large widths like w-[500px], w-[600px] without max-w-full
  const fixedMatches = html.match(/w-\[[4-9][0-9]{2}px\]/g) || [];
  if (fixedMatches.length) {
    console.log(f, 'Fixed large widths:', fixedMatches);
  }
  
  // Check for min-w larger than 320px
  const minMatches = html.match(/min-w-\[[4-9][0-9]{2}px\]/g) || [];
  if (minMatches.length) {
    console.log(f, 'Min large widths:', minMatches);
  }
});

