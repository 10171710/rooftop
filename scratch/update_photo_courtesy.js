const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

const oldImg = `<img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
                alt="AURA SKY Photography Courtesy & Skyline Views"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">`;

const newImg = `<img src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=800&q=80"
                alt="AURA SKY Photography Courtesy & Skyline Views"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">`;

if (html.includes(oldImg)) {
  html = html.replace(oldImg, newImg);
  fs.writeFileSync('contact.html', html, 'utf8');
  console.log('Successfully updated photography courtesy image in contact.html!');
} else {
  console.error('Target oldImg not found in contact.html');
}

