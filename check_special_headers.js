const fs = require('fs');

['404.html', 'coming-soon.html', 'pricing.html', 'services.html', 'service-details.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<header[\s\S]*?<\/header>/);
  if (m) {
    console.log(`=== Header in ${f} ===\n`, m[0].substring(0, 400), '\n');
  }
});
