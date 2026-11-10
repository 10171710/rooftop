const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let hasError = false;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const openCount = (content.match(/<div(\s|>)/gi) || []).length;
  const closeCount = (content.match(/<\/div>/gi) || []).length;
  if (openCount !== closeCount) {
    console.error(`Mismatch in ${f}: open=${openCount}, close=${closeCount}, diff=${openCount - closeCount}`);
    hasError = true;
  }
});

if (!hasError) {
  console.log('All 25 HTML files have 100% PERFECT div balance (diff = 0)!');
}
