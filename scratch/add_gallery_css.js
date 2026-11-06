const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const galleryCss = `
/* ===================================================================
   34. Crystal-Clear Gallery Cards (Zero Blur, Zero Fogging in Dark & Light)
   =================================================================== */
.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
}

.gallery-card img {
  filter: none !important;
  -webkit-filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.gallery-card:hover img {
  filter: none !important;
  -webkit-filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  transform: scale(1.05) !important;
}

.gallery-card-scrim {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.35) 65%, transparent 100%) !important;
  pointer-events: none;
}

html.light .gallery-card-scrim,
html:not(.dark) .gallery-card-scrim,
body.light .gallery-card-scrim {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.35) 65%, transparent 100%) !important;
}

.gallery-info-badge {
  background: rgba(10, 10, 12, 0.85) !important;
  border: 1px solid rgba(212, 175, 55, 0.35) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45) !important;
}

.gallery-info-badge h4 {
  color: #FFFFFF !important;
}

.gallery-info-badge span {
  color: #F59E0B !important;
}
`;

fs.writeFileSync('assets/css/style.css', css.trimEnd() + '\n' + galleryCss + '\n', 'utf8');
console.log('Appended Section 34 to assets/css/style.css');

