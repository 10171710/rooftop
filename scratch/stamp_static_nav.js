const fs = require('fs');

const pageMapping = {
  'index.html': { linkText: 'Home 1 - Skyline Dining', isHome: true },
  'index-2.html': { linkText: 'Home 2 - Sunset Lounge', isHome: true },
  'about.html': { href: 'about.html' },
  'menu.html': { href: 'menu.html' },
  'events.html': { href: 'events.html' },
  'gallery.html': { href: 'gallery.html' },
  'blog.html': { href: 'blog.html' },
  'contact.html': { href: 'contact.html' },
  'services.html': { href: 'services.html' },
  'pricing.html': { href: 'pricing.html' },
  'dashboard-guest.html': { href: 'dashboard-guest.html' }
};

Object.keys(pageMapping).forEach(filename => {
  if (!fs.existsSync(filename)) return;
  let content = fs.readFileSync(filename, 'utf8');
  const target = pageMapping[filename];

  if (target.isHome) {
    // Make sure Home button has nav-active active
    content = content.replace(
      /<button\s+class="([^"]*text-amber-400[^"]*)"/i,
      (match, p1) => {
        if (!p1.includes('nav-active')) {
          return `<button class="${p1} nav-active active"`;
        }
        return match;
      }
    );
  } else if (target.href) {
    // Replace the link to itself in the desktop nav
    const reg = new RegExp(`(<a\\s+href="${target.href}"[^>]*class="[^"]*)(")`, 'i');
    content = content.replace(reg, (match, p1, p2) => {
      if (!p1.includes('nav-active')) {
        return `${p1} nav-active active${p2}`;
      }
      return match;
    });
  }

  fs.writeFileSync(filename, content, 'utf8');
});

console.log('Successfully stamped static nav-active classes across target pages.');

