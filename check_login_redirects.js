const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');

// Look for redirects (window.location, href)
const redirects = content.match(/window\.location[^;\n]+/g) || [];
console.log('Redirects in login.html:', redirects);

// Look for forms in login.html
const forms = content.match(/<form[\s\S]*?<\/form>/gi) || [];
console.log('Forms count in login.html:', forms.length);
forms.forEach((f, i) => console.log(`Form ${i+1}:`, f.slice(0, 300)));
