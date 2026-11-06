const fs = require('fs');

const blogHtml = fs.readFileSync('blog.html', 'utf8');
console.log('blog.html has skyline-gazette-box:', blogHtml.includes('skyline-gazette-box'));
console.log('blog.html has gazette-perks:', blogHtml.includes('gazette-perks'));
console.log('blog.html has gazette-form:', blogHtml.includes('gazette-form'));

const css = fs.readFileSync('assets/css/style.css', 'utf8');
console.log('css has .skyline-gazette-box:', css.includes('.skyline-gazette-box'));
console.log('css has html.light .skyline-gazette-box:', css.includes('html.light .skyline-gazette-box'));
console.log('css has html[dir="rtl"] .gazette-input:', css.includes('html[dir="rtl"] .gazette-input'));

