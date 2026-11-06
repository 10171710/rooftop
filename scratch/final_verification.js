const fs = require('fs');

const contactHtml = fs.readFileSync('contact.html', 'utf8');
console.log('--- Contact Page Verification ---');
console.log('Evening Dress Code image:', contactHtml.includes('photo-1507679799987'));
console.log('Evening Dress Code object-top:', contactHtml.includes('object-cover object-top'));
console.log('Photography Courtesy image:', contactHtml.includes('photo-1531746020798'));

const blogHtml = fs.readFileSync('blog.html', 'utf8');
console.log('--- Blog Page Verification ---');
for (let i = 1; i <= 6; i++) {
  console.log(`Blog has id=${i}:`, blogHtml.includes(`blog-details.html?id=${i}`));
}

const detailsHtml = fs.readFileSync('blog-details.html', 'utf8');
console.log('--- Blog Details Verification ---');
console.log('Has AURA_POSTS router:', detailsHtml.includes('const AURA_POSTS = {'));
console.log('Has articleTitle ID:', detailsHtml.includes('id="articleTitle"'));
console.log('Has articleBody ID:', detailsHtml.includes('id="articleBody"'));
console.log('Has articleImage ID:', detailsHtml.includes('id="articleImage"'));
console.log('Has authorName ID:', detailsHtml.includes('id="authorName"'));

