const fs = require('fs');
const content = fs.readFileSync('dashboard.html', 'utf8');

// Check views in dashboard.html
const views = content.match(/data-view-panel="([^"]+)"/g) || content.match(/id="view-([^"]+)"/g) || content.match(/class="[^"]*dc-view[^"]*"/g) || [];
console.log('Views found:', views.slice(0, 20));

// Check images in dashboard.html
const imgs = content.match(/<img[^>]+>/g) || [];
console.log('Images count in dashboard.html:', imgs.length);
imgs.slice(0, 10).forEach(i => console.log(' ', i));
