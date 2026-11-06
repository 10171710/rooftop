const fs = require('fs');
const html = fs.readFileSync('blog.html', 'utf8');
console.log('blog.html has #faqSection:', html.includes('id="faqSection"'));
console.log('blog.html has no-rtl-shift:', html.includes('no-rtl-shift'));
console.log('blog.html v=47:', html.includes('?v=47'));

const css = fs.readFileSync('assets/css/style.css', 'utf8');
console.log('style.css has #faqSection:', css.includes('#faqSection'));
console.log('style.css has no-rtl-shift:', css.includes('.no-rtl-shift'));

