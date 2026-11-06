const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const newCss = `
/* ===================================================================
   33. Curated Topics & Gazette Search Working System
   =================================================================== */
.topic-pill {
  cursor: pointer;
  user-select: none;
  font-family: inherit;
  font-size: 0.75rem;
  line-height: 1rem;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.topic-pill:hover {
  transform: translateY(-1px);
}

.topic-pill.active {
  border-color: #D4AF37 !important;
  background: rgba(212, 175, 55, 0.22) !important;
  color: #FBBF24 !important;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.25) !important;
  font-weight: 700 !important;
}

/* Light Mode Curated Topics & Search Widgets */
html.light .topic-pill,
html:not(.dark) .topic-pill,
body.light .topic-pill {
  background: #F1F5F9 !important;
  border-color: #CBD5E1 !important;
  color: #334155 !important;
}

html.light .topic-pill:hover,
html:not(.dark) .topic-pill:hover,
body.light .topic-pill:hover {
  border-color: #D4AF37 !important;
  color: #B45309 !important;
  background: #FFFBEB !important;
}

html.light .topic-pill.active,
html:not(.dark) .topic-pill.active,
body.light .topic-pill.active {
  background: rgba(212, 175, 55, 0.18) !important;
  border-color: #D4AF37 !important;
  color: #92400E !important;
  font-weight: 700 !important;
}

html.light .curated-topic-pill,
html:not(.dark) .curated-topic-pill,
body.light .curated-topic-pill {
  background: #F8FAFC !important;
  border-color: #E2E8F0 !important;
  color: #334155 !important;
}

html.light .curated-topic-pill:hover,
html:not(.dark) .curated-topic-pill:hover,
body.light .curated-topic-pill:hover {
  border-color: #D4AF37 !important;
  color: #B45309 !important;
  background: #FEF3C7 !important;
}

/* Gazette Live Search Dropdown */
#gazette-search-results-dropdown {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

html.light #gazette-search-results-dropdown,
html:not(.dark) #gazette-search-results-dropdown,
body.light #gazette-search-results-dropdown {
  background: #FFFFFF !important;
  border-color: #E2E8F0 !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}

html.light #gazette-search-results-dropdown a:hover,
html:not(.dark) #gazette-search-results-dropdown a:hover,
body.light #gazette-search-results-dropdown a:hover {
  background: #F8FAFC !important;
}

html.light #gazette-search-results-dropdown h5,
html:not(.dark) #gazette-search-results-dropdown h5,
body.light #gazette-search-results-dropdown h5 {
  color: #0F172A !important;
}

/* Status Banner */
html.light #blog-filter-status,
html:not(.dark) #blog-filter-status,
body.light #blog-filter-status {
  background: #FFFBEB !important;
  border-color: #FDE68A !important;
  color: #92400E !important;
}

html.light #blog-no-results,
html:not(.dark) #blog-no-results,
body.light #blog-no-results {
  background: #F8FAFC !important;
  border-color: #E2E8F0 !important;
}

html.light #blog-no-results h3,
html:not(.dark) #blog-no-results h3,
body.light #blog-no-results h3 {
  color: #0F172A !important;
}

/* RTL Support */
html[dir="rtl"] #curated-topics-bar {
  direction: rtl !important;
}

html[dir="rtl"] .gazette-search-widget form input {
  padding-left: 2.25rem !important;
  padding-right: 0.875rem !important;
  text-align: right !important;
}

html[dir="rtl"] .gazette-search-widget form button {
  right: auto !important;
  left: 0.75rem !important;
}

html[dir="rtl"] #gazette-search-results-dropdown a {
  text-align: right !important;
}
`;

fs.writeFileSync('assets/css/style.css', css.trimEnd() + '\n' + newCss + '\n', 'utf8');
console.log('Appended Section 33 to assets/css/style.css');

