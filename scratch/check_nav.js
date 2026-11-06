const fs = require('fs');

['index.html', 'about.html', 'menu.html', 'events.html', 'gallery.html', 'blog.html', 'contact.html'].forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const headerMatch = c.match(/<header[^>]*>[\s\S]*?<\/header>/);
    if (headerMatch) {
      console.log('=== ' + f + ' HEADER LINKS ===');
      const links = headerMatch[0].match(/<a\s+[^>]*href=["'][^"']+["'][^>]*>[\s\S]*?<\/a>/g) || [];
      links.forEach(l => {
        if (!l.includes('logo') && !l.includes('Brand') && (l.includes('Home') || l.includes('About') || l.includes('Menu') || l.includes('Events') || l.includes('Gallery') || l.includes('Blog') || l.includes('Contact'))) {
          console.log('  ' + l.replace(/\s+/g, ' ').trim());
        }
      });
    }
  }
});

