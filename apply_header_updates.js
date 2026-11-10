const fs = require('fs');

const newLogoMarkup = `<!-- Brand Logo -->
        <a href="index.html" class="flex items-center gap-1.5 sm:gap-3 group shrink-0 brand-logo">
          <div
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-400 via-gold-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition shrink-0 brand-logo-icon">
            <div class="w-full h-full bg-black rounded-[7px] sm:rounded-[10px] flex items-center justify-center">
              <i
                class="fa-solid fa-martini-glass-citrus text-amber-400 text-xs sm:text-base group-hover:rotate-12 transition duration-300"></i>
            </div>
          </div>
          <div class="flex flex-col whitespace-nowrap brand-logo-text">
            <span
              class="brand-logo-name font-display text-sm sm:text-base md:text-xl font-bold tracking-wider sm:tracking-widest text-white group-hover:text-amber-400 transition leading-none whitespace-nowrap">AURA SKY</span>
            <span class="brand-logo-sub text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.16em] sm:tracking-[0.25em] text-amber-400 font-semibold mt-0.5 sm:mt-1 whitespace-nowrap">Rooftop &amp; Lounge</span>
          </div>
        </a>`;

const newRightActionsMarkup = `<!-- Right Header Actions: Theme Toggle, RTL Toggle, Login Portal CTA -->
        <div class="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0 header-actions">

          <!-- Theme Toggle Icon -->
          <button
            class="theme-toggle-btn w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition flex items-center justify-center text-xs sm:text-sm shrink-0"
            aria-label="Toggle Theme">
            <i class="theme-toggle-icon fa-solid fa-moon"></i>
          </button>

          <!-- RTL Toggle Icon -->
          <button
            class="rtl-toggle-btn px-1.5 sm:px-2.5 h-8 sm:h-9 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition flex items-center gap-1 text-[11px] sm:text-xs font-semibold shrink-0"
            aria-label="Toggle RTL Mode">
            <i class="fa-solid fa-globe text-xs"></i>
            <span class="rtl-toggle-label hidden min-[380px]:inline">LTR</span>
          </button>

          <!-- Login Portal CTA (Primary Header Action) -->
          <a href="login.html"
            class="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-gold-500 to-amber-500 text-black shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition shrink-0"
            style="color: #000000 !important;">
            <i class="fa-solid fa-user-lock"></i>
            <span class="hidden sm:inline">Login Portal</span>
            <span class="sm:hidden">Login</span>
          </a>

          <!-- Mobile Hamburger Menu Button -->
          <button id="mobileMenuBtn"
            class="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center text-base sm:text-lg focus:outline-none shrink-0">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>`;

const standardNavPages = [
  'index-2.html', 'about.html', 'menu.html', 'events.html', 'gallery.html',
  'blog.html', 'blog-details.html', 'blog-details-1.html', 'blog-details-2.html',
  'blog-details-3.html', 'blog-details-4.html', 'blog-details-5.html',
  'blog-details-6.html', 'blog-details-7.html', 'contact.html',
  'pricing.html', 'services.html', 'service-details.html'
];

const rightActionsBlockRegex = /(?:<!--\s*Right Header Actions[^>]*-->\s*)?<div class="flex items-center gap-[^"]*">[\s\S]*?<button id="mobileMenuBtn"[\s\S]*?<\/button>\s*<\/div>/i;

standardNavPages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const initialOpen = (content.match(/<div(\s|>)/gi) || []).length;
  const initialClose = (content.match(/<\/div>/gi) || []).length;

  // 1. Update header container padding and height
  content = content.replace(
    /(<header[^>]*>[\s\S]*?<div class="max-w-7xl mx-auto )px-4 sm:px-6 lg:px-8("[\s\S]*?<div class="flex items-center justify-between )h-20(")/,
    '$1px-2.5 sm:px-6 lg:px-8$2h-16 sm:h-20$3'
  );

  // 2. Replace right actions block
  const actionMatch = content.match(rightActionsBlockRegex);
  if (actionMatch) {
    content = content.replace(actionMatch[0], newRightActionsMarkup);
  } else {
    console.log(`[WARN] Right actions not matched in ${file}`);
  }

  const finalOpen = (content.match(/<div(\s|>)/gi) || []).length;
  const finalClose = (content.match(/<\/div>/gi) || []).length;

  if (initialOpen - initialClose === finalOpen - finalClose) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[OK] ${file} updated successfully.`);
  } else {
    console.error(`[FAIL] ${file} div balance changed! Not saved.`);
  }
});

// Update 404.html and coming-soon.html
['404.html', 'coming-soon.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const initialOpen = (content.match(/<div(\s|>)/gi) || []).length;
  const initialClose = (content.match(/<\/div>/gi) || []).length;

  content = content.replace(
    /<header([^>]*)px-4 sm:px-8 py-4([^>]*)>/,
    '<header$1px-2.5 sm:px-8 py-3 sm:py-4$2>'
  );

  content = content.replace(
    /<a href="index\.html" class="flex items-center gap-3 group">[\s\S]*?<\/a>/,
    newLogoMarkup
  );

  content = content.replace(
    /<div class="flex items-center gap-3">\s*<button class="theme-toggle-btn w-9 h-9/,
    '<div class="flex items-center gap-1.5 sm:gap-3 shrink-0">\n      <button class="theme-toggle-btn w-8 h-8 sm:w-9 sm:h-9'
  );

  content = content.replace(
    /<button class="rtl-toggle-btn px-2\.5 h-9/,
    '<button class="rtl-toggle-btn px-1.5 sm:px-2.5 h-8 sm:h-9'
  );

  const finalOpen = (content.match(/<div(\s|>)/gi) || []).length;
  const finalClose = (content.match(/<\/div>/gi) || []).length;

  if (initialOpen - initialClose === finalOpen - finalClose) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[OK] ${file} updated successfully.`);
  } else {
    console.error(`[FAIL] ${file} div balance changed! Not saved.`);
  }
});

// Update dashboard and auth files to ensure whitespace-nowrap
['dashboard-admin.html', 'dashboard-guest.html', 'login.html', 'register.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /class="font-display([^"]*)"/g,
    'class="font-display$1 whitespace-nowrap brand-logo-name"'
  );
  content = content.replace(
    /class="text-\[9px\] uppercase tracking-\[0\.25em\] text-amber-400 font-semibold mt-1"/g,
    'class="text-[9px] uppercase tracking-[0.25em] text-amber-400 font-semibold mt-1 whitespace-nowrap brand-logo-sub"'
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[OK] ${file} whitespace-nowrap applied.`);
});
