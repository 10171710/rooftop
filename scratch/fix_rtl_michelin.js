const fs = require('fs');

// 1. Update about.html
const aboutPath = 'about.html';
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

const targetMichelin = `        <!-- 2. MICHELIN GUIDE Logo Card -->
        <div
          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group">
          <svg class="h-10 sm:h-12 w-auto max-w-[170px] transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 210 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Signature Michelin Red Badge -->
            <rect x="18" y="10" width="36" height="36" rx="8" fill="#DC2626" style="fill: #DC2626 !important;" />
            <!-- 6-Petal Rosette Star -->
            <g transform="translate(36, 28) scale(1.1)">
              <circle cx="0" cy="0" r="3.2" fill="#FFFFFF" />
              <path
                d="M0 -11 C1.8 -6 1.8 -6 7 -7 C3 -2 3 -2 8 2 C3 3 3 3 3 9 C0 4 0 4 -4 8 C-3 3 -3 3 -8 1 C-3 -2 -3 -2 -6 -7 C-1 -6 -1 -6 0 -11 Z"
                fill="#FFFFFF" />
            </g>
            <text x="64" y="28" font-family="'Helvetica Neue', 'Arial', sans-serif" font-size="19" font-weight="900"
              letter-spacing="1.5" fill="#FFFFFF" class="fill-white dark:fill-white">MICHELIN</text>
            <text x="65" y="43" font-family="'Montserrat', 'Arial', sans-serif" font-size="9" font-weight="800"
              letter-spacing="3" fill="#F59E0B">GUIDE 2026</text>
          </svg>
        </div>`;

const replacementMichelin = `        <!-- 2. MICHELIN GUIDE Logo Card -->
        <div
          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group"
          dir="ltr" style="direction: ltr !important;">
          <svg class="h-10 sm:h-12 w-auto max-w-[170px] transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 210 56" fill="none" xmlns="http://www.w3.org/2000/svg" direction="ltr" style="direction: ltr !important;">
            <!-- Signature Michelin Red Badge -->
            <rect x="18" y="10" width="36" height="36" rx="8" fill="#DC2626" style="fill: #DC2626 !important;" />
            <!-- 6-Petal Rosette Star -->
            <g transform="translate(36, 28) scale(1.1)">
              <circle cx="0" cy="0" r="3.2" fill="#FFFFFF" />
              <path
                d="M0 -11 C1.8 -6 1.8 -6 7 -7 C3 -2 3 -2 8 2 C3 3 3 3 3 9 C0 4 0 4 -4 8 C-3 3 -3 3 -8 1 C-3 -2 -3 -2 -6 -7 C-1 -6 -1 -6 0 -11 Z"
                fill="#FFFFFF" />
            </g>
            <text x="64" y="28" font-family="'Helvetica Neue', 'Arial', sans-serif" font-size="19" font-weight="900"
              letter-spacing="1.5" fill="#FFFFFF" class="fill-white dark:fill-white" direction="ltr" style="direction: ltr !important; text-anchor: start;">MICHELIN</text>
            <text x="65" y="43" font-family="'Montserrat', 'Arial', sans-serif" font-size="9" font-weight="800"
              letter-spacing="3" fill="#F59E0B" direction="ltr" style="direction: ltr !important; text-anchor: start;">GUIDE 2026</text>
          </svg>
        </div>`;

if (!aboutContent.includes(targetMichelin)) {
  console.error('Target Michelin block not found in about.html');
  process.exit(1);
}

aboutContent = aboutContent.replace(targetMichelin, replacementMichelin);

// Also add dir="ltr" style="direction: ltr !important;" to the other 3 press cards
aboutContent = aboutContent.replace(
  '<!-- 1. VOGUE GOURMET Logo Card -->\n        <div\n          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group">',
  '<!-- 1. VOGUE GOURMET Logo Card -->\n        <div\n          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group"\n          dir="ltr" style="direction: ltr !important;">'
);

aboutContent = aboutContent.replace(
  '<!-- 3. FORBES TRAVEL GUIDE Logo Card -->\n        <div\n          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group">',
  '<!-- 3. FORBES TRAVEL GUIDE Logo Card -->\n        <div\n          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group"\n          dir="ltr" style="direction: ltr !important;">'
);

aboutContent = aboutContent.replace(
  '<!-- 4. CONDÉ NAST SKY Logo Card -->\n        <div\n          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group">',
  '<!-- 4. CONDÉ NAST SKY Logo Card -->\n        <div\n          class="press-logo-card rounded-2xl glass-dark border border-amber-500/15 p-4 flex items-center justify-center h-24 sm:h-28 transition hover-elevate group"\n          dir="ltr" style="direction: ltr !important;">'
);

fs.writeFileSync(aboutPath, aboutContent, 'utf8');
console.log('Successfully updated about.html press cards with LTR locks.');

// 2. Update assets/css/style.css
const cssPath = 'assets/css/style.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const rtlSvgRules = `
/* RTL Brand Logos & SVG Coordinate Protection */
html[dir="rtl"] svg,
[dir="rtl"] svg,
.press-logo-card,
.press-logo-card svg,
.press-logo-card svg * {
  direction: ltr !important;
  unicode-bidi: isolate !important;
}

html[dir="rtl"] .press-logo-card {
  direction: ltr !important;
  text-align: center !important;
}

html[dir="rtl"] svg text,
[dir="rtl"] svg text {
  direction: ltr !important;
  unicode-bidi: isolate !important;
}
`;

// Insert into Section 0 right after the floating badges flip
const badgeRule = `html[dir="rtl"] [class*="rounded-2xl"] > .absolute.top-4.right-4 {\n  right: auto !important;\n  left: 0.75rem !important;\n}`;

if (cssContent.includes(badgeRule)) {
  cssContent = cssContent.replace(badgeRule, badgeRule + '\n' + rtlSvgRules);
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('Successfully added RTL SVG rules to assets/css/style.css');
} else {
  console.log('Could not find badgeRule insertion point, appending at end of style.css');
  cssContent += '\n' + rtlSvgRules;
  fs.writeFileSync(cssPath, cssContent, 'utf8');
}

