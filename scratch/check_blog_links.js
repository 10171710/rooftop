const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');

const matches = content.match(/href="blog-details\.html[^"]*"/g);
console.log('Blog details links in blog.html:', matches);

