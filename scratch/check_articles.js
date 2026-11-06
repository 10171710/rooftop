const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');
const articles = content.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Total articles in blog.html:', articles.length);
articles.forEach((art, i) => {
  const titleMatch = art.match(/<h3[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
  const title = titleMatch ? titleMatch[1].trim() : 'No title';
  const badgeMatch = art.match(/card-category-badge[^>]*>([\s\S]*?)<\/span>/);
  const badge = badgeMatch ? badgeMatch[1].trim() : 'No badge';
  const hrefMatch = art.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  console.log(`${i+1}. [${badge}] ${title} (${href})`);
});

