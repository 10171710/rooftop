const fs = require('fs');
console.log('contact-hero.jpg exists:', fs.existsSync('assets/images/contact-hero.jpg'));
if (fs.existsSync('assets/images/contact-hero.jpg')) {
  console.log('Size:', fs.statSync('assets/images/contact-hero.jpg').size);
}

