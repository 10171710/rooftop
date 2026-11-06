const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

const minimalArticleCss = `

/* 31. MINIMAL BLOG DETAILS LIGHT MODE & ARTICLE TYPOGRAPHY */
html.light article h1,
html.light article h2,
html.light article h3,
html.light article h4,
html.light article h5,
html:not(.dark) article h1,
html:not(.dark) article h2,
html:not(.dark) article h3,
html:not(.dark) article h4,
html:not(.dark) article h5,
body.light article h1,
body.light article h2,
body.light article h3,
body.light article h4,
body.light article h5 {
  color: #0F172A !important;
}

html.light article p,
html:not(.dark) article p,
body.light article p {
  color: #334155 !important;
}

html.light article .text-gray-300,
html:not(.dark) article .text-gray-300,
body.light article .text-gray-300 {
  color: #334155 !important;
}

html.light article .text-gray-200,
html:not(.dark) article .text-gray-200,
body.light article .text-gray-200 {
  color: #1E293B !important;
}

html.light article input,
html.light article textarea,
html:not(.dark) article input,
html:not(.dark) article textarea,
body.light article input,
body.light article textarea {
  background-color: #FFFFFF !important;
  color: #0F172A !important;
  border-color: rgba(212, 175, 55, 0.4) !important;
}

html.light article input::placeholder,
html.light article textarea::placeholder,
html:not(.dark) article input::placeholder,
html:not(.dark) article textarea::placeholder,
body.light article input::placeholder,
body.light article textarea::placeholder {
  color: #94A3B8 !important;
}

html.light aside input,
html:not(.dark) aside input,
body.light aside input {
  background-color: #FFFFFF !important;
  color: #0F172A !important;
  border-color: rgba(212, 175, 55, 0.4) !important;
}
`;

css += minimalArticleCss;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Appended minimal blog details styling to assets/css/style.css');

