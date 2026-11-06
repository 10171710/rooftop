const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

// Update Policy 1: Evening Dress Code
const oldCard1 = `<div class="h-36 sm:h-40 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
                alt="AURA SKY Evening Dress Code Attire"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>`;

const newCard1 = `<div class="h-44 sm:h-48 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                alt="AURA SKY Evening Dress Code Attire"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
            </div>`;

// Update Policy 2 container height
const oldCard2 = `<div class="h-36 sm:h-40 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=600&q=80"
                alt="AURA SKY 21+ Nightlife Lounge Bar"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>`;

const newCard2 = `<div class="h-44 sm:h-48 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=600&q=80"
                alt="AURA SKY 21+ Nightlife Lounge Bar"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>`;

// Update Policy 3 container height
const oldCard3 = `<div class="h-36 sm:h-40 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                alt="AURA SKY Weather Resilient Glass Canopy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>`;

const newCard3 = `<div class="h-44 sm:h-48 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                alt="AURA SKY Weather Resilient Glass Canopy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>`;

// Update Policy 4: Photography Courtesy
const oldCard4 = `<div class="h-36 sm:h-40 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80"
                alt="AURA SKY Photography Courtesy & Skyline Views"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>`;

const newCard4 = `<div class="h-44 sm:h-48 w-full overflow-hidden border-b border-amber-500/10">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
                alt="AURA SKY Photography Courtesy & Skyline Views"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
            </div>`;

html = html.replace(oldCard1, newCard1);
html = html.replace(oldCard2, newCard2);
html = html.replace(oldCard3, newCard3);
html = html.replace(oldCard4, newCard4);

fs.writeFileSync('contact.html', html, 'utf8');
console.log('Successfully updated contact.html etiquette cards with visible faces and object-top!');

