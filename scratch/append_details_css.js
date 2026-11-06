const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

const detailsCss = `

/* 29. BLOG DETAILS ARTICLE STYLING FOR LIGHT & DARK THEMES */
html.light #articleTitle,
html:not(.dark) #articleTitle,
body.light #articleTitle {
  color: #0F172A !important;
}

html.light #articleBody p,
html:not(.dark) #articleBody p,
body.light #articleBody p {
  color: #334155 !important;
}

html.light #articleBody h3,
html.light #articleBody h4,
html:not(.dark) #articleBody h3,
html:not(.dark) #articleBody h4,
body.light #articleBody h3,
body.light #articleBody h4 {
  color: #0F172A !important;
}

html.light #authorName,
html:not(.dark) #authorName,
body.light #authorName {
  color: #0F172A !important;
}

html.light #authorBio,
html:not(.dark) #authorBio,
body.light #authorBio {
  color: #475569 !important;
}
`;

css += detailsCss;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Appended blog details article CSS to style.css!');

