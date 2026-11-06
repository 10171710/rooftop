const fs = require('fs');

let html = fs.readFileSync('blog-details.html', 'utf8');

// Update related article 1
html = html.replace(
  `<h3 class="font-serif text-lg font-bold text-white mb-2 hover:text-amber-400 transition">\n              <a href="blog-details.html">Cellar Secrets: Curating 1,400 Grand Cru Bottles at 820 Feet</a>\n            </h3>`,
  `<h3 class="font-serif text-lg font-bold text-white mb-2 hover:text-amber-400 transition">\n              <a href="blog-details.html?id=5">Cellar in the Sky: Grand Cru Champagne &amp; Caviar Flights</a>\n            </h3>`
);
html = html.replace(
  `<span>Antoine Dubois • 7 Min</span>\n            <a href="blog-details.html" class="text-amber-400 font-bold hover:underline">Read &rarr;</a>`,
  `<span>Antoine Dubois • 6 Min</span>\n            <a href="blog-details.html?id=5" class="text-amber-400 font-bold hover:underline">Read &rarr;</a>`
);

// Update related article 2
html = html.replace(
  `<h3 class="font-serif text-lg font-bold text-white mb-2 hover:text-amber-400 transition">\n              <a href="blog-details.html">Meyer Sound Architecture: Sonic Intimacy Over the Metropolis</a>\n            </h3>`,
  `<h3 class="font-serif text-lg font-bold text-white mb-2 hover:text-amber-400 transition">\n              <a href="blog-details.html?id=4">Soundscapes Above the Clouds: Live Saxophone &amp; Deep House</a>\n            </h3>`
);
html = html.replace(
  `<span>Malik Vance • 5 Min</span>\n            <a href="blog-details.html" class="text-amber-400 font-bold hover:underline">Read &rarr;</a>`,
  `<span>DJ Matteo Ross • 5 Min</span>\n            <a href="blog-details.html?id=4" class="text-amber-400 font-bold hover:underline">Read &rarr;</a>`
);

// Update related article 3
html = html.replace(
  `<h3 class="font-serif text-lg font-bold text-white mb-2 hover:text-amber-400 transition">\n              <a href="blog-details.html">The Anatomy of Kishu Binchotan: Pure Searing Without Smoke</a>\n            </h3>`,
  `<h3 class="font-serif text-lg font-bold text-white mb-2 hover:text-amber-400 transition">\n              <a href="blog-details.html?id=1">Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy</a>\n            </h3>`
);
html = html.replace(
  `<span>Antoine Dubois • 6 Min</span>\n            <a href="blog-details.html" class="text-amber-400 font-bold hover:underline">Read &rarr;</a>`,
  `<span>Julian Vance • 5 Min</span>\n            <a href="blog-details.html?id=1" class="text-amber-400 font-bold hover:underline">Read &rarr;</a>`
);

fs.writeFileSync('blog-details.html', html, 'utf8');
console.log('Successfully updated related articles in blog-details.html!');

