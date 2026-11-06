const fs = require('fs');

const content = fs.readFileSync('blog.html', 'utf8');

// Find all articles in the grid
const gridStart = content.indexOf('<!-- Blog Posts Grid');
const gridEnd = content.indexOf('<!-- Extra Section 1:');
const gridContent = content.substring(gridStart, gridEnd);

console.log(gridContent);

