const fs = require('fs');
let html = fs.readFileSync('blog.html', 'utf8');

html = html.replace(
  `<a href="blog-details.html">Twilight to Midnight: High-Altitude Supper Club Nights</a>`,
  `<a href="blog-details.html?id=3">Twilight to Midnight: High-Altitude Supper Club Nights</a>`
);

html = html.replace(
  `Liam Sterling • Creative Director</span>\n            <a href="blog-details.html"`,
  `Liam Sterling • Creative Director</span>\n            <a href="blog-details.html?id=3"`
);

html = html.replace(
  `<a href="blog-details.html">Soundscapes Above the Clouds: Live Saxophone &amp; Deep House</a>`,
  `<a href="blog-details.html?id=4">Soundscapes Above the Clouds: Live Saxophone &amp; Deep House</a>`
);

fs.writeFileSync('blog.html', html, 'utf8');
console.log('Post 3 and Post 4 links updated!');

