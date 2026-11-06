const fs = require('fs');

// 1. Update blog.html
let html = fs.readFileSync('blog.html', 'utf8');

const oldSection = `<section id="faqSection" dir="ltr" class="py-20 bg-black/90 border-t border-amber-500/20 relative no-rtl-shift">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">

      <div class="text-center mb-14 no-rtl-shift">`;

const newSection = `<section id="faqSection" class="py-20 bg-black/90 border-t border-amber-500/20 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">

      <div class="text-center mb-14 faq-header-center">`;

if (html.includes(oldSection)) {
  html = html.replace(oldSection, newSection);
  fs.writeFileSync('blog.html', html, 'utf8');
  console.log('Successfully updated blog.html section tags!');
} else {
  console.error('Target oldSection not found in blog.html');
}

// 2. Update assets/css/style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const oldFaqRtlBlock = `#faqSection details,
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
}`;

const newFaqRtlBlock = `/* FAQ Header & Subcontent: Fixed Centered in BOTH LTR and RTL */
.faq-header-center,
.faq-header-center *,
#faqSection .faq-header-center,
#faqSection .faq-header-center *,
html[dir="rtl"] .faq-header-center,
html[dir="rtl"] .faq-header-center *,
html[dir="rtl"] #faqSection .faq-header-center,
html[dir="rtl"] #faqSection .faq-header-center * {
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

/* FAQ Questions & Answers: Change Accurately in RTL Toggle */
html[dir="rtl"] #faqSection details {
  direction: rtl !important;
  text-align: right !important;
}

html[dir="rtl"] #faqSection details summary {
  direction: rtl !important;
  text-align: right !important;
  flex-direction: row !important;
  justify-content: space-between !important;
}

html[dir="rtl"] #faqSection details summary span.flex {
  direction: rtl !important;
  text-align: right !important;
  flex-direction: row !important;
  gap: 0.75rem !important;
}

html[dir="rtl"] #faqSection details summary span.flex i {
  margin-right: 0 !important;
  margin-left: 0.25rem !important;
}

html[dir="rtl"] #faqSection details div {
  direction: rtl !important;
  text-align: right !important;
}`;

if (css.includes(oldFaqRtlBlock)) {
  css = css.replace(oldFaqRtlBlock, newFaqRtlBlock);
  fs.writeFileSync('assets/css/style.css', css, 'utf8');
  console.log('Successfully updated assets/css/style.css with FAQ RTL question flipping!');
} else {
  console.error('Target oldFaqRtlBlock not found in assets/css/style.css');
}

