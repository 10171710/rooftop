const fs = require('fs');

let html = fs.readFileSync('blog-details.html', 'utf8');

const target = '<!-- Categories List -->';
const storiesWidget = `<!-- All Gazette Stories Widget -->
          <div class="p-6 rounded-2xl glass-dark border border-amber-500/20">
            <h4 class="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">All Gazette Stories</h4>
            <ul class="space-y-2.5 text-xs">
              <li><a href="blog-details.html?id=1" class="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-medium"><i class="fa-solid fa-fire-burner text-amber-400 text-[10px]"></i> <span>Skyline Charcoal Grilling</span></a></li>
              <li><a href="blog-details.html?id=2" class="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-medium"><i class="fa-solid fa-martini-glass text-amber-400 text-[10px]"></i> <span>Anatomy of Sunset Cocktails</span></a></li>
              <li><a href="blog-details.html?id=3" class="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-medium"><i class="fa-solid fa-moon text-amber-400 text-[10px]"></i> <span>Twilight Supper Club Nights</span></a></li>
              <li><a href="blog-details.html?id=4" class="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-medium"><i class="fa-solid fa-music text-amber-400 text-[10px]"></i> <span>Live Saxophone &amp; Deep House</span></a></li>
              <li><a href="blog-details.html?id=5" class="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-medium"><i class="fa-solid fa-wine-glass text-amber-400 text-[10px]"></i> <span>Cellar in the Sky: Grand Cru</span></a></li>
              <li><a href="blog-details.html?id=6" class="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-medium"><i class="fa-solid fa-crown text-amber-400 text-[10px]"></i> <span>The Penthouse VIP Cabanas</span></a></li>
            </ul>
          </div>

          `;

if (html.includes(target) && !html.includes('All Gazette Stories')) {
  html = html.replace(target, storiesWidget + target);
  fs.writeFileSync('blog-details.html', html, 'utf8');
  console.log('Added All Gazette Stories widget to blog-details.html!');
} else {
  console.log('Target already replaced or not found');
}

