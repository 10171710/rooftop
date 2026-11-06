const fs = require('fs');

// 1. Update blog.html
let html = fs.readFileSync('blog.html', 'utf8');

const targetSection = `  <!-- FAQ Section: Frequently Asked Questions -->
  <section class="py-20 bg-black/90 border-t border-amber-500/20 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">

      <div class="text-center mb-14">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest inline-block mb-3">
          <i class="fa-solid fa-circle-question mr-1 text-amber-400"></i> Guest Inquiries
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Frequently Asked <span class="gold-gradient-text">Questions</span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about rooftop dining, sunset cabana reservations, sommelier cellar flights, and skyline lounge etiquette.
        </p>
      </div>`;

const replacementSection = `  <!-- FAQ Section: Frequently Asked Questions (Does not shift in RTL toggle) -->
  <section id="faqSection" dir="ltr" class="py-20 bg-black/90 border-t border-amber-500/20 relative no-rtl-shift">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">

      <div class="text-center mb-14 no-rtl-shift">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest inline-block mb-3 text-center">
          <i class="fa-solid fa-circle-question mr-1 text-amber-400"></i> Guest Inquiries
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Frequently Asked <span class="gold-gradient-text">Questions</span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-center">
          Everything you need to know about rooftop dining, sunset cabana reservations, sommelier cellar flights, and skyline lounge etiquette.
        </p>
      </div>`;

if (html.includes(targetSection)) {
  html = html.replace(targetSection, replacementSection);
  fs.writeFileSync('blog.html', html, 'utf8');
  console.log('Successfully updated blog.html with no-rtl-shift classes and dir="ltr"!');
} else {
  console.error('Target section not found in blog.html!');
}

// 2. Update assets/css/style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

// Update lines around text-center and h1-h6:not(.text-center)
const oldRtlHeaders = `/* All headings, paragraphs, lists, forms, and cards align to the right in RTL */
html[dir="rtl"] h1:not(.text-center):not([class*="text-center"]),
html[dir="rtl"] h2:not(.text-center):not([class*="text-center"]),
html[dir="rtl"] h3:not(.text-center):not([class*="text-center"]),
html[dir="rtl"] h4:not(.text-center):not([class*="text-center"]),
html[dir="rtl"] h5:not(.text-center):not([class*="text-center"]),
html[dir="rtl"] h6:not(.text-center):not([class*="text-center"]),
html[dir="rtl"] p:not(.text-center):not([class*="text-center"]),`;

const newRtlHeaders = `/* All headings, paragraphs, lists, forms, and cards align to the right in RTL */
html[dir="rtl"] h1:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),
html[dir="rtl"] h2:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),
html[dir="rtl"] h3:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),
html[dir="rtl"] h4:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),
html[dir="rtl"] h5:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),
html[dir="rtl"] h6:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),
html[dir="rtl"] p:not(.text-center):not([class*="text-center"]):not(.text-center *):not([class*="text-center"] *),`;

if (css.includes(oldRtlHeaders)) {
  css = css.replace(oldRtlHeaders, newRtlHeaders);
  console.log('Successfully updated RTL headings/paragraph exclusion selectors!');
}

const oldTextCenter = `/* Explicit text-center remains centered */
html[dir="rtl"] .text-center {
  text-align: center !important;
}`;

const newTextCenter = `/* Explicit text-center remains centered */
html[dir="rtl"] .text-center,
html[dir="rtl"] .text-center *,
html[dir="rtl"] [class*="text-center"],
html[dir="rtl"] [class*="text-center"] * {
  text-align: center !important;
}`;

if (css.includes(oldTextCenter)) {
  css = css.replace(oldTextCenter, newTextCenter);
  console.log('Successfully updated RTL .text-center rule!');
}

// Append specific no-rtl-shift rules for #faqSection
const faqNoShiftCss = `

/* 28. PREVENT SHIFT IN RTL TOGGLE FOR FAQ SECTION */
#faqSection,
#faqSection *,
.no-rtl-shift,
.no-rtl-shift *,
html[dir="rtl"] #faqSection,
html[dir="rtl"] #faqSection *,
html[dir="rtl"] .no-rtl-shift,
html[dir="rtl"] .no-rtl-shift * {
  direction: ltr !important;
}

#faqSection .text-center,
#faqSection .text-center *,
.no-rtl-shift.text-center,
.no-rtl-shift.text-center *,
html[dir="rtl"] #faqSection .text-center,
html[dir="rtl"] #faqSection .text-center *,
html[dir="rtl"] .no-rtl-shift.text-center,
html[dir="rtl"] .no-rtl-shift.text-center * {
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

#faqSection details,
html[dir="rtl"] #faqSection details {
  direction: ltr !important;
  text-align: left !important;
}

#faqSection details summary,
html[dir="rtl"] #faqSection details summary {
  direction: ltr !important;
  text-align: left !important;
}

#faqSection details summary span.flex,
html[dir="rtl"] #faqSection details summary span.flex {
  direction: ltr !important;
  text-align: left !important;
  flex-direction: row !important;
}

#faqSection details div,
html[dir="rtl"] #faqSection details div {
  direction: ltr !important;
  text-align: left !important;
}
`;

css += faqNoShiftCss;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Successfully appended FAQ no-shift CSS to assets/css/style.css!');

