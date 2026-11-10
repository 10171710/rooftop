const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const footerMatches = indexHtml.match(/<!-- Brand Logo in Footer -->[\s\S]*?<\/a>|footer[\s\S]{0,500}AURA SKY[\s\S]*?<\/a>/);
if (footerMatches) {
  console.log('Footer logo in index.html:\n', footerMatches[0]);
} else {
  console.log('No footer logo match with comment. Searching generic:');
  const m = indexHtml.match(/<footer[\s\S]*?<\/footer>/);
  if (m) {
    const mLogo = m[0].match(/<a[^>]*href=["']index\.html["'][^>]*>[\s\S]*?<\/a>/);
    if (mLogo) console.log('Footer logo:\n', mLogo[0]);
  }
}
