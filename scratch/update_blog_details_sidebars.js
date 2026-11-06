const fs = require('fs');
const files = ['blog-details.html', ...Array.from({length: 7}, (_, i) => 'blog-details-' + (i+1) + '.html')];

const replacementBlock = `<!-- Working Search Gazette Widget -->
          <div class="p-6 rounded-2xl glass-dark border border-gray-800 relative gazette-search-widget">
            <h4 class="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-amber-400 pl-2">
              Search Gazette
            </h4>
            <form onsubmit="event.preventDefault(); window.submitGazetteSearch(this);" class="relative">
              <input type="text" 
                     id="gazette-detail-search-input"
                     name="q"
                     placeholder="Search stories, recipes, craft..." 
                     autocomplete="off"
                     class="w-full bg-black/60 border border-gray-700 rounded-xl py-2.5 pl-3.5 pr-9 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none transition">
              <button type="submit" aria-label="Search stories" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 text-xs transition">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <!-- Live Search Suggestions Dropdown -->
            <div id="gazette-search-results-dropdown" class="hidden absolute left-0 right-0 top-full mt-2 bg-zinc-950 border border-amber-500/30 rounded-xl shadow-2xl p-2 z-50 max-h-72 overflow-y-auto"></div>
          </div>

          <!-- Quick Curated Topics -->
          <div class="p-6 rounded-2xl glass-dark border border-gray-800">
            <h4 class="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-amber-400 pl-2">
              Curated Topics
            </h4>
            <div class="flex flex-wrap gap-2 text-xs">
              <a href="blog.html?topic=mixology" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Mixology</a>
              <a href="blog.html?topic=binchotan" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Binchotan</a>
              <a href="blog.html?topic=acoustics" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Acoustics</a>
              <a href="blog.html?topic=grandcru" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#GrandCru</a>
              <a href="blog.html?topic=penthousecabanas" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#PenthouseCabanas</a>
              <a href="blog.html?topic=supperclub" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#SupperClub</a>
              <a href="blog.html?topic=rooftopdining" class="curated-topic-pill px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#RooftopDining</a>
            </div>
          </div>`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Match from <!-- Working Search Widget --> to the end of the curated topics div
  const searchStart = content.indexOf('<!-- Working Search Widget -->');
  if (searchStart !== -1) {
    const asideEnd = content.indexOf('</aside>', searchStart);
    if (asideEnd !== -1) {
      const before = content.substring(0, searchStart);
      const after = content.substring(asideEnd);
      content = before + replacementBlock + '\n\n        ' + after;
      fs.writeFileSync(f, content, 'utf8');
      console.log('Successfully updated', f);
      return;
    }
  }
  console.log('Could not find search widget block in', f);
});

