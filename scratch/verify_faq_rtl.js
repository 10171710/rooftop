const fs = require('fs');

const blogHtml = fs.readFileSync('blog.html', 'utf8');
console.log('blog.html has faq-header-center:', blogHtml.includes('faq-header-center'));
console.log('blog.html section does NOT have dir="ltr":', !blogHtml.includes('id="faqSection" dir="ltr"'));

const css = fs.readFileSync('assets/css/style.css', 'utf8');
console.log('css has faq-header-center:', css.includes('.faq-header-center'));
console.log('css has html[dir="rtl"] #faqSection details:', css.includes('html[dir="rtl"] #faqSection details'));
console.log('css flips summary to right:', css.includes('html[dir="rtl"] #faqSection details summary'));

