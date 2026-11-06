const fs = require('fs');
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const faqCss = `

/* 27. FAQ ACCORDION STYLING FOR LIGHT MODE AND RTL */
html.light details[class*="bg-zinc-"],
html:not(.dark) details[class*="bg-zinc-"],
body.light details[class*="bg-zinc-"] {
  background-color: #FFFFFF !important;
  background: #FFFFFF !important;
  border-color: rgba(212, 175, 55, 0.3) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
}

html.light details summary,
html:not(.dark) details summary,
body.light details summary {
  color: #0F172A !important;
}

html.light details summary:hover,
html:not(.dark) details summary:hover,
body.light details summary:hover {
  color: #B45309 !important;
}

html.light details .border-gray-800,
html:not(.dark) details .border-gray-800,
body.light details .border-gray-800 {
  border-color: rgba(212, 175, 55, 0.2) !important;
}

html.light details div,
html:not(.dark) details div,
body.light details div {
  color: #334155 !important;
}

/* RTL Accordion Alignment */
html[dir="rtl"] details summary {
  direction: rtl !important;
  text-align: right !important;
}

html[dir="rtl"] details summary span.flex {
  text-align: right !important;
}

html[dir="rtl"] details div {
  direction: rtl !important;
  text-align: right !important;
}
`;

css += faqCss;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Appended FAQ CSS rules to style.css!');

