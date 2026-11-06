const fs = require('fs');
let html = fs.readFileSync('blog.html', 'utf8');

// 1. Update Search & Category Filter Bar and add Curated Topics Pills
const oldSearchSection = `        <!-- Search & Category Filter Bar inside Center Container Box -->
        <div class="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input type="text" placeholder="Search articles, recipes, cocktails..."
              onkeydown="if(event.key === 'Enter'){ showToast('Search Results', 'Showing articles matching: ' + this.value, 'info'); }"
              class="w-full bg-slate-900/90 border border-gray-700 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition">
          </div>
          <select
            onchange="showToast('Filter Applied', 'Showing category: ' + this.value, 'info')"
            class="bg-slate-900/90 border border-gray-700 rounded-xl px-4 py-3 text-xs text-white focus:border-amber-400 focus:outline-none transition">
            <option>All Categories</option>
            <option>Rooftop Dining</option>
            <option>Mixology &amp; Bar</option>
            <option>Terrace Atmosphere</option>
            <option>Nightlife &amp; Sound</option>
            <option>Sommelier Reserves</option>
            <option>VIP Experiences</option>
          </select>
        </div>`;

const newSearchSection = `        <!-- Search Gazette & Category Filter Bar inside Center Container Box -->
        <div class="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input type="text" 
              id="blog-search-input"
              placeholder="Search Gazette stories, recipes, craft..."
              autocomplete="off"
              class="w-full bg-slate-900/90 border border-gray-700 rounded-xl py-3 pl-11 pr-9 text-xs text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition">
            <button type="button" id="blog-search-clear-btn" class="hidden absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-400 text-xs transition" title="Clear Search">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <select
            id="blog-category-select"
            class="bg-slate-900/90 border border-gray-700 rounded-xl px-4 py-3 text-xs text-white focus:border-amber-400 focus:outline-none transition">
            <option value="all">All Categories</option>
            <option value="Rooftop Dining">Rooftop Dining</option>
            <option value="Mixology & Bar">Mixology &amp; Bar</option>
            <option value="Terrace Atmosphere">Terrace Atmosphere</option>
            <option value="Live Sessions">Live Sessions</option>
            <option value="Sommelier Reserves">Sommelier Reserves</option>
            <option value="VIP Experiences">VIP Experiences</option>
          </select>
        </div>

        <!-- Curated Topics Filter Bar -->
        <div class="mt-6 pt-5 border-t border-amber-500/15">
          <div class="flex items-center justify-center gap-2 mb-2.5 text-xs font-serif uppercase tracking-wider text-amber-400">
            <i class="fa-solid fa-tags text-xs text-amber-400"></i>
            <span class="font-bold">Curated Topics</span>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2 text-xs" id="curated-topics-bar">
            <button type="button" data-topic="all" class="topic-pill active px-3 py-1.5 rounded-xl border border-amber-400/50 bg-amber-500/20 text-amber-300 font-semibold shadow-sm transition">All Topics</button>
            <button type="button" data-topic="mixology" class="topic-pill px-3 py-1.5 rounded-xl border border-gray-700/80 bg-zinc-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Mixology</button>
            <button type="button" data-topic="binchotan" class="topic-pill px-3 py-1.5 rounded-xl border border-gray-700/80 bg-zinc-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Binchotan</button>
            <button type="button" data-topic="acoustics" class="topic-pill px-3 py-1.5 rounded-xl border border-gray-700/80 bg-zinc-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Acoustics</button>
            <button type="button" data-topic="grandcru" class="topic-pill px-3 py-1.5 rounded-xl border border-gray-700/80 bg-zinc-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#GrandCru</button>
            <button type="button" data-topic="penthousecabanas" class="topic-pill px-3 py-1.5 rounded-xl border border-gray-700/80 bg-zinc-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#PenthouseCabanas</button>
            <button type="button" data-topic="supperclub" class="topic-pill px-3 py-1.5 rounded-xl border border-gray-700/80 bg-zinc-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#SupperClub</button>
          </div>
        </div>`;

if (html.includes(oldSearchSection)) {
  html = html.replace(oldSearchSection, newSearchSection);
  console.log('Replaced search section');
} else {
  console.log('Could not find exact oldSearchSection in blog.html');
}

// 2. Update section & grid start
const oldGridStart = `  <!-- Blog Posts Grid (Curated Exclusive Journal Stories - Non-Repeated) -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`;

const newGridStart = `  <!-- Blog Posts Grid (Curated Exclusive Journal Stories - Non-Repeated) -->
  <section class="py-20" id="blog-posts-section">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Active Filter Status Bar -->
      <div id="blog-filter-status" class="hidden mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between transition-all">
        <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
          <i class="fa-solid fa-filter text-amber-400"></i>
          <span id="blog-filter-message">Showing all matching stories</span>
        </div>
        <button type="button" id="blog-reset-filter-btn" class="text-xs text-amber-400 hover:text-amber-300 font-bold underline transition flex items-center gap-1">
          <i class="fa-solid fa-arrow-rotate-left text-[10px]"></i> Clear Filter
        </button>
      </div>

      <!-- Zero Results Message -->
      <div id="blog-no-results" class="hidden text-center py-16 px-4 rounded-3xl bg-zinc-900/50 border border-gray-800 my-8">
        <div class="w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl mx-auto mb-4 border border-amber-500/20">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h3 class="font-serif text-xl font-bold text-white mb-2">No Matching Gazette Stories Found</h3>
        <p class="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-6">
          We couldn't find any articles matching your search query. Try another keyword or reset to browse all curated topics.
        </p>
        <button type="button" id="blog-empty-reset-btn" class="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition shadow-lg">
          Browse All Stories
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">`;

if (html.includes(oldGridStart)) {
  html = html.replace(oldGridStart, newGridStart);
  console.log('Replaced grid start');
} else {
  console.log('Could not find exact oldGridStart');
}

// 3. Mark each article with data attributes
const articlesConfig = [
  {
    target: '<!-- Post 1: Rooftop Dining -->\n        <article\n          class="rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group">',
    replace: `<!-- Post 1: Rooftop Dining -->
        <article
          class="blog-article-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group"
          data-title="Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy"
          data-category="Rooftop Dining"
          data-topics="binchotan rooftopdining gastronomy wagyu charcoal grill nikkei"
          data-excerpt="Chef Julian Vance pairs Japanese binchotan charcoal with high-altitude sear craft, infusing prime A5 Wagyu and sea bass with delicate smoky aromatics.">`
  },
  {
    target: '<!-- Post 2: Mixology & Bar -->\n        <article\n          class="rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group">',
    replace: `<!-- Post 2: Mixology & Bar -->
        <article
          class="blog-article-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group"
          data-title="Anatomy of Sunset Cocktails: Smoked Bourbons & Elixirs"
          data-category="Mixology & Bar"
          data-topics="mixology cocktails smokedbourbon elixirs bar bourbon sunset"
          data-excerpt="Beverage Director Sophia Leclerc crafts our signature twilight libations by balancing clarified citrus juices, house-aged bitters, and cedar smoke aromatics.">`
  },
  {
    target: '<!-- Post 3: Terrace Atmosphere -->\n        <article\n          class="rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group">',
    replace: `<!-- Post 3: Terrace Atmosphere -->
        <article
          class="blog-article-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group"
          data-title="Twilight to Midnight: High-Altitude Supper Club Nights"
          data-category="Terrace Atmosphere"
          data-topics="supperclub terraceatmosphere nightlife skyline terrace atmosphere"
          data-excerpt="From golden skyline horizons to candlelit booths under the midnight sky, discover the immersive sensory design that turns dining into an elevated celebration.">`
  },
  {
    target: '<!-- Post 4: Live Sessions -->\n        <article\n          class="rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group">',
    replace: `<!-- Post 4: Live Sessions -->
        <article
          class="blog-article-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group"
          data-title="Soundscapes Above the Clouds: Live Saxophone & Deep House"
          data-category="Live Sessions"
          data-topics="acoustics livesessions deephouse sound saxophone music deep house"
          data-excerpt="Resident DJ Matteo Ross explores how we blend soulful live brass improvisations with warm ambient house rhythms to create an unmatched penthouse atmosphere.">`
  },
  {
    target: '<!-- Post 5: Sommelier Reserves -->\n        <article\n          class="rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group">',
    replace: `<!-- Post 5: Sommelier Reserves -->
        <article
          class="blog-article-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group"
          data-title="Cellar in the Sky: Grand Cru Champagne & Caviar Flights"
          data-category="Sommelier Reserves"
          data-topics="grandcru sommelierreserves champagne caviar wine cellar sommelier"
          data-excerpt="Head Sommelier Antoine Dubois curates three vintage champagnes paired with chilled Osetra caviar and Breton oysters, preserved in our 1,400-bottle glass cellar.">`
  },
  {
    target: '<!-- Post 6: VIP Experiences -->\n        <article\n          class="rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group">',
    replace: `<!-- Post 6: VIP Experiences -->
        <article
          class="blog-article-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate transition flex flex-col justify-between group"
          data-title="The Penthouse Cabanas: Bespoke Bottle Service & Lounging"
          data-category="VIP Experiences"
          data-topics="penthousecabanas vipexperiences bottleservice cabanas lounge vip penthouse"
          data-excerpt="Step inside our heated glass cabanas featuring dedicated VIP mixologists, rare single-barrel tequila reserves, crystal decanters, and 360-degree skyline views.">`
  }
];

articlesConfig.forEach((cfg, i) => {
  if (html.includes(cfg.target)) {
    html = html.replace(cfg.target, cfg.replace);
    console.log(`Replaced article ${i+1}`);
  } else {
    console.log(`Could not find article ${i+1}`);
  }
});

fs.writeFileSync('blog.html', html, 'utf8');
console.log('blog.html updated successfully!');

