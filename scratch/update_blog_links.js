const fs = require('fs');

let html = fs.readFileSync('blog.html', 'utf8');

// Replace links in Post 1
const post1OldTitle = `<a href="blog-details.html">Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy</a>`;
const post1NewTitle = `<a href="blog-details.html?id=1">Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy</a>`;

// Replace links in Post 2
const post2OldTitle = `<a href="blog-details.html">Anatomy of Sunset Cocktails: Smoked Bourbons &amp; Elixirs</a>`;
const post2NewTitle = `<a href="blog-details.html?id=2">Anatomy of Sunset Cocktails: Smoked Bourbons &amp; Elixirs</a>`;

// Replace links in Post 3
const post3OldTitle = `<a href="blog-details.html">Altitude &amp; Architecture: Designing a 54th Floor Sanctuary</a>`;
const post3NewTitle = `<a href="blog-details.html?id=3">Altitude &amp; Architecture: Designing a 54th Floor Sanctuary</a>`;

// Replace links in Post 4
const post4OldTitle = `<a href="blog-details.html">Twilight Acoustic Sessions: Live Saxophone &amp; Deep House</a>`;
const post4NewTitle = `<a href="blog-details.html?id=4">Twilight Acoustic Sessions: Live Saxophone &amp; Deep House</a>`;

// Replace links in Post 5
const post5OldTitle = `<a href="blog-details.html">Cellar in the Sky: Grand Cru Champagne &amp; Caviar Flights</a>`;
const post5NewTitle = `<a href="blog-details.html?id=5">Cellar in the Sky: Grand Cru Champagne &amp; Caviar Flights</a>`;

// Replace links in Post 6
const post6OldTitle = `<a href="blog-details.html">The Penthouse Cabanas: Bespoke Bottle Service &amp; Lounging</a>`;
const post6NewTitle = `<a href="blog-details.html?id=6">The Penthouse Cabanas: Bespoke Bottle Service &amp; Lounging</a>`;

// Replace Feature link
const featureOld = `href="blog-details.html"\n              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20"`;
const featureNew = `href="blog-details.html?id=7"\n              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20"`;

html = html.replace(post1OldTitle, post1NewTitle);
html = html.replace(post2OldTitle, post2NewTitle);
html = html.replace(post3OldTitle, post3NewTitle);
html = html.replace(post4OldTitle, post4NewTitle);
html = html.replace(post5OldTitle, post5NewTitle);
html = html.replace(post6OldTitle, post6NewTitle);
html = html.replace(featureOld, featureNew);

// Also replace the "Read More" links in each post
// In Post 1:
html = html.replace(
  `Julian Vance • Executive Chef</span>\n            <a href="blog-details.html"`,
  `Julian Vance • Executive Chef</span>\n            <a href="blog-details.html?id=1"`
);
// In Post 2:
html = html.replace(
  `Sophia Leclerc • Beverage Director</span>\n            <a href="blog-details.html"`,
  `Sophia Leclerc • Beverage Director</span>\n            <a href="blog-details.html?id=2"`
);
// In Post 3:
html = html.replace(
  `Vikram Malhotra • Chief Architect</span>\n            <a href="blog-details.html"`,
  `Vikram Malhotra • Chief Architect</span>\n            <a href="blog-details.html?id=3"`
);
// In Post 4:
html = html.replace(
  `DJ Matteo Ross • Sound Curator</span>\n            <a href="blog-details.html"`,
  `DJ Matteo Ross • Sound Curator</span>\n            <a href="blog-details.html?id=4"`
);
// In Post 5:
html = html.replace(
  `Antoine Dubois • Head Sommelier</span>\n            <a href="blog-details.html"`,
  `Antoine Dubois • Head Sommelier</span>\n            <a href="blog-details.html?id=5"`
);
// In Post 6:
html = html.replace(
  `Marcus Sterling • VIP Relations</span>\n            <a href="blog-details.html"`,
  `Marcus Sterling • VIP Relations</span>\n            <a href="blog-details.html?id=6"`
);

fs.writeFileSync('blog.html', html, 'utf8');
console.log('Successfully updated blog.html links with id parameters!');

