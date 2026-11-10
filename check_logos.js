const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const logos = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<!-- Brand Logo -->[\s\S]*?<\/a>/);
  if (match) {
    logos.push({ file: f, length: match[0].length, snippet: match[0] });
  } else {
    // try fallback search
    const m2 = content.match(/<a[^>]*href=["']index\.html["'][^>]*class=["'][^"']*group[^"']*["'][\s\S]*?<\/a>/);
    if (m2) {
      logos.push({ file: f, length: m2[0].length, snippet: m2[0], noComment: true });
    } else {
      console.log('No logo found in', f);
    }
  }
});

console.log('Found logos in', logos.length, 'of', files.length, 'HTML files');
const snippets = new Set(logos.map(l => l.snippet.replace(/\r?\n\s*/g, ' ')));
console.log('Unique patterns count:', snippets.size);
Array.from(snippets).forEach((s, i) => {
  console.log(`\n--- Pattern ${i + 1} ---`);
  console.log(s.substring(0, 200));
});
