const fs = require('fs');

if (fs.existsSync('blog-details.html')) {
  const content = fs.readFileSync('blog-details.html', 'utf8');
  console.log('blog-details.html exists, length:', content.length);
  const lines = content.split('\n');
  console.log('First 50 lines:');
  console.log(lines.slice(0, 50).join('\n'));
} else {
  console.log('blog-details.html does NOT exist');
}

