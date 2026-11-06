const fs = require('fs');

// 1. Update blog.html
let html = fs.readFileSync('blog.html', 'utf8');

const oldHero = `  <!-- Banner & Search -->
  <section
    class="relative min-h-[92vh] flex items-center justify-center py-20 bg-gradient-to-b from-black via-[#0F1420] to-[#07090E] border-b border-amber-500/15 text-center overflow-hidden">
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4">
      <span
        class="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
        Journal of Taste & Sound
      </span>
      <h1 class="font-serif text-4xl sm:text-6xl font-bold text-white mb-4">
        The Skyline <span class="gold-gradient-text font-display italic font-normal">Chronicles</span>
      </h1>
      <p class="text-gray-300 text-sm max-w-xl mx-auto mb-8">
        Insider culinary philosophies, masterclass mixology recipes, and nightlife culture from the 54th floor.
      </p>

      <!-- Search & Category Filter Bar -->
      <div class="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
        <div class="relative flex-1">
          <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          <input type="text" placeholder="Search articles, recipes, cocktails..."
            class="w-full bg-slate-900 border border-gray-700 rounded-xl py-3 pl-11 pr-4 text-xs text-white focus:border-amber-400 focus:outline-none">
        </div>
        <select
          class="bg-slate-900 border border-gray-700 rounded-xl px-4 py-3 text-xs text-white focus:border-amber-400 focus:outline-none">
          <option>All Categories</option>
          <option>Rooftop Dining</option>
          <option>Mixology & Bar</option>
          <option>Terrace Atmosphere</option>
          <option>Nightlife & Sound</option>
          <option>Sommelier Reserves</option>
          <option>VIP Experiences</option>
        </select>
      </div>
    </div>
  </section>`;

const newHero = `  <!-- Banner & Search (Matching Contact Hero Center Container with Custom Background) -->
  <section
    class="relative min-h-[92vh] flex items-center justify-center py-20 bg-black border-b border-amber-500/15 text-center overflow-hidden">
    <!-- Hero Background Image -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1789523381284-d5da8811cb01?auto=format&fit=crop&w=1920&q=85"
        alt="AURA SKY Skyline Chronicles Atmosphere"
        class="w-full h-full object-cover object-center scale-100">
      <div class="contact-hero-overlay"></div>
    </div>
    <div class="relative z-10 w-full max-w-3xl mx-auto px-4">
      <div class="contact-hero-box p-8 sm:p-12 rounded-3xl text-center transition-all duration-300">
        <span
          class="contact-hero-badge inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 transition">
          <i class="fa-solid fa-book-open mr-1.5 text-amber-400"></i> Journal of Taste &amp; Sound
        </span>
        <h1 class="contact-hero-title font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
          The Skyline <span class="gold-gradient-text font-display italic font-normal">Chronicles</span>
        </h1>
        <p class="contact-hero-desc text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Insider culinary philosophies, masterclass mixology recipes, and nightlife culture from the 54th floor.
        </p>

        <!-- Search & Category Filter Bar inside Center Container Box -->
        <div class="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input type="text" placeholder="Search articles, recipes, cocktails..."
              onkeydown="if(event.key === 'Enter'){ showToast('Search Results', 'Showing articles matching: ' + this.value, 'info'); }"
              class="w-full bg-slate-900/90 border border-gray-700 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition">
          </div>
          <select
            onchange="showToast('Filter Applied', 'Showing category: ' + this.value, 'info')"
            class="bg-slate-900/90 border border-gray-700 rounded-xl px-4 py-3 text-xs text-white focus:border-amber-400 focus:outline-none transition">
            <option>All Categories</option>
            <option>Rooftop Dining</option>
            <option>Mixology &amp; Bar</option>
            <option>Terrace Atmosphere</option>
            <option>Nightlife &amp; Sound</option>
            <option>Sommelier Reserves</option>
            <option>VIP Experiences</option>
          </select>
        </div>
      </div>
    </div>
  </section>`;

if (html.includes(oldHero)) {
  html = html.replace(oldHero, newHero);
  fs.writeFileSync('blog.html', html, 'utf8');
  console.log('Successfully updated blog.html hero section with background and center container!');
} else {
  console.error('Target oldHero not found in blog.html');
}

// 2. Update assets/css/style.css with input styling inside .contact-hero-box for light mode and RTL
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const heroBoxInputCss = `

/* 32. CONTACT & BLOG HERO BOX FORM CONTROLS (LIGHT THEME & RTL) */
html.light .contact-hero-box input,
html:not(.dark) .contact-hero-box input,
body.light .contact-hero-box input,
html.light .contact-hero-box select,
html:not(.dark) .contact-hero-box select,
body.light .contact-hero-box select {
  background-color: #FFFFFF !important;
  color: #0F172A !important;
  border-color: rgba(212, 175, 55, 0.45) !important;
}

html.light .contact-hero-box input::placeholder,
html:not(.dark) .contact-hero-box input::placeholder,
body.light .contact-hero-box input::placeholder {
  color: #94A3B8 !important;
}

html[dir="rtl"] .contact-hero-box .fa-magnifying-glass {
  left: auto !important;
  right: 1rem !important;
}

html[dir="rtl"] .contact-hero-box input {
  padding-left: 1rem !important;
  padding-right: 2.75rem !important;
  text-align: right !important;
}
`;

css += heroBoxInputCss;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Appended hero box form control styling to assets/css/style.css');

