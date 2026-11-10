const fs = require('fs');

['404.html', 'coming-soon.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`=== ${f} ===\n`, content.substring(content.indexOf('<header'), content.indexOf('</header>') + 9));
});
