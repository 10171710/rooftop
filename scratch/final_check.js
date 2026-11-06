const fs = require('fs');

console.log('--- Checking blog.html links ---');
const blogHtml = fs.readFileSync('blog.html', 'utf8');
for (let i = 1; i <= 6; i++) {
  console.log(`Card ${i} links to blog-details-${i}.html:`, blogHtml.includes(`blog-details-${i}.html`));
}
console.log('Feature links to blog-details-7.html:', blogHtml.includes('blog-details-7.html'));

console.log('--- Checking separate blog detail files ---');
for (let i = 1; i <= 7; i++) {
  const file = `blog-details-${i}.html`;
  console.log(`${file} exists:`, fs.existsSync(file));
}
console.log('blog-details.html exists:', fs.existsSync('blog-details.html'));

