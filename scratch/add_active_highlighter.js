const fs = require('fs');

// 1. Update assets/css/style.css
const cssPath = 'assets/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const activeNavCss = `
/* ===================================================================
   Section 38: Luxury Active Page Navigation Highlight System
   =================================================================== */
header nav a.nav-active,
header nav a.active:not(.dropdown-link),
header nav .dropdown-group.active > button,
header nav button.nav-active {
  color: #F59E0B !important;
  background: rgba(245, 158, 11, 0.15) !important;
  border: 1px solid rgba(245, 158, 11, 0.45) !important;
  border-radius: 9999px !important;
  padding: 0.35rem 0.9rem !important;
  font-weight: 700 !important;
  box-shadow: 0 0 14px rgba(245, 158, 11, 0.25) !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.35rem !important;
  position: relative !important;
  line-height: 1.25 !important;
}

/* Glowing gold indicator dot for active page */
header nav a.nav-active::before,
header nav a.active:not(.dropdown-link)::before,
header nav .dropdown-group.active > button::before,
header nav button.nav-active::before {
  content: "" !important;
  display: inline-block !important;
  width: 6px !important;
  height: 6px !important;
  border-radius: 50% !important;
  background-color: #F59E0B !important;
  margin-right: 4px !important;
  box-shadow: 0 0 6px #F59E0B !important;
  flex-shrink: 0 !important;
}

html[dir="rtl"] header nav a.nav-active::before,
html[dir="rtl"] header nav a.active:not(.dropdown-link)::before,
html[dir="rtl"] header nav .dropdown-group.active > button::before,
html[dir="rtl"] header nav button.nav-active::before {
  margin-right: 0 !important;
  margin-left: 4px !important;
}

/* Light mode luxury active highlight pill */
html.light header nav a.nav-active,
html.light header nav a.active:not(.dropdown-link),
html.light header nav .dropdown-group.active > button,
html.light header nav button.nav-active,
html:not(.dark) header nav a.nav-active,
html:not(.dark) header nav a.active:not(.dropdown-link),
html:not(.dark) header nav .dropdown-group.active > button,
html:not(.dark) header nav button.nav-active {
  color: #92400E !important;
  background: #FEF3C7 !important;
  border-color: #F59E0B !important;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25) !important;
}

html.light header nav a.nav-active::before,
html.light header nav a.active:not(.dropdown-link)::before,
html.light header nav .dropdown-group.active > button::before,
html.light header nav button.nav-active::before,
html:not(.dark) header nav a.nav-active::before,
html:not(.dark) header nav a.active:not(.dropdown-link)::before,
html:not(.dark) header nav .dropdown-group.active > button::before,
html:not(.dark) header nav button.nav-active::before {
  background-color: #D97706 !important;
  box-shadow: 0 0 5px #D97706 !important;
}

/* Dropdown link active state inside dropdown menus */
.dropdown-menu .dropdown-link.active,
.dropdown-menu .dropdown-link.nav-active {
  background: rgba(245, 158, 11, 0.12) !important;
  border-left: 2px solid #F59E0B !important;
}

html[dir="rtl"] .dropdown-menu .dropdown-link.active,
html[dir="rtl"] .dropdown-menu .dropdown-link.nav-active {
  border-left: none !important;
  border-right: 2px solid #F59E0B !important;
}

/* Mobile Drawer Active Page Highlight */
#mobileMenu a.nav-active,
#mobileMenu a.active {
  color: #F59E0B !important;
  background: rgba(245, 158, 11, 0.14) !important;
  border-left: 3px solid #F59E0B !important;
  padding-left: 0.85rem !important;
  font-weight: 700 !important;
  border-radius: 0 0.5rem 0.5rem 0 !important;
}

html[dir="rtl"] #mobileMenu a.nav-active,
html[dir="rtl"] #mobileMenu a.active {
  border-left: none !important;
  border-right: 3px solid #F59E0B !important;
  padding-left: 0.5rem !important;
  padding-right: 0.85rem !important;
  border-radius: 0.5rem 0 0 0.5rem !important;
}

html.light #mobileMenu a.nav-active,
html.light #mobileMenu a.active,
html:not(.dark) #mobileMenu a.nav-active,
html:not(.dark) #mobileMenu a.active {
  color: #92400E !important;
  background: #FEF3C7 !important;
  border-left-color: #D97706 !important;
}
`;

css += '\n' + activeNavCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated assets/css/style.css with active nav highlight rules.');

// 2. Update assets/js/main.js
const jsPath = 'assets/js/main.js';
let js = fs.readFileSync(jsPath, 'utf8');

const activeNavJs = `
/* ===================================================================
   17. Dynamic Automatic Active Page Navigation Highlighter
   =================================================================== */
function initActiveNavHighlighter() {
  const currentPath = window.location.pathname;
  let filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (!filename || filename === '' || filename === '/') {
    filename = 'index.html';
  }
  filename = filename.split('?')[0].split('#')[0];

  const desktopLinks = document.querySelectorAll('header nav a');
  const mobileLinks = document.querySelectorAll('#mobileMenu a');

  const checkLink = (link) => {
    const href = link.getAttribute('href');
    if (!href) return false;
    const linkFile = href.split('?')[0].split('#')[0];

    if (linkFile === filename) return true;
    if ((filename === 'index.html' || filename === '') && (linkFile === 'index.html' || linkFile === '')) return true;
    if (filename.startsWith('blog-details') && linkFile === 'blog.html') return true;
    if (filename.startsWith('service-details') && linkFile === 'services.html') return true;
    return false;
  };

  desktopLinks.forEach(link => {
    if (checkLink(link)) {
      link.classList.add('nav-active', 'active');
      link.classList.remove('text-white');
      const group = link.closest('.dropdown-group');
      if (group) {
        group.classList.add('active');
        const trigger = group.querySelector('button');
        if (trigger) {
          trigger.classList.add('nav-active', 'active');
          trigger.classList.remove('text-white');
        }
      }
    }
  });

  mobileLinks.forEach(link => {
    if (checkLink(link)) {
      link.classList.add('nav-active', 'active');
      link.classList.remove('text-white', 'text-gray-300');
    }
  });

  if (filename === 'index.html' || filename === 'index-2.html' || filename === '') {
    const homeGroup = document.querySelector('header nav .dropdown-group');
    if (homeGroup) {
      homeGroup.classList.add('active');
      const trigger = homeGroup.querySelector('button');
      if (trigger) {
        trigger.classList.add('nav-active', 'active');
        trigger.classList.remove('text-white');
      }
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initActiveNavHighlighter);
} else {
  initActiveNavHighlighter();
}
`;

js += '\n' + activeNavJs;
fs.writeFileSync(jsPath, js, 'utf8');
console.log('Successfully added initActiveNavHighlighter to assets/js/main.js.');

