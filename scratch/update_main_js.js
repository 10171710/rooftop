const fs = require('fs');
let code = fs.readFileSync('assets/js/main.js', 'utf8');

// 1. Add init calls to DOMContentLoaded if not present
const domTarget = 'initStatCounters();';
const domReplacement = `initStatCounters();
  initBlogGazette();
  initBlogDetailsSearch();`;

if (code.includes(domTarget) && !code.includes('initBlogGazette();')) {
  code = code.replace(domTarget, domReplacement);
}

// 2. Add blog functions to end of main.js if not present
if (!code.includes('function initBlogGazette()')) {
  const blogCode = `
/* ===================================================================
   14. Blog Gazette Search & Curated Topics Filter System
   =================================================================== */
const AURA_BLOG_ARTICLES = [
  {
    id: 1,
    title: "Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy",
    category: "Rooftop Dining",
    topics: ["binchotan", "rooftopdining", "gastronomy", "wagyu", "charcoal", "grill", "nikkei"],
    url: "blog-details-1.html",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read",
    author: "Julian Vance",
    excerpt: "Japanese binchotan charcoal sear craft infusing prime A5 Wagyu and sea bass."
  },
  {
    id: 2,
    title: "Anatomy of Sunset Cocktails: Smoked Bourbons & Elixirs",
    category: "Mixology & Bar",
    topics: ["mixology", "cocktails", "smokedbourbon", "elixirs", "bar", "bourbon", "sunset"],
    url: "blog-details-2.html",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=400&q=80",
    readTime: "6 min read",
    author: "Sophia Leclerc",
    excerpt: "Crafting twilight libations balancing clarified citrus juices, house bitters, and cedar smoke."
  },
  {
    id: 3,
    title: "Twilight to Midnight: High-Altitude Supper Club Nights",
    category: "Terrace Atmosphere",
    topics: ["supperclub", "terraceatmosphere", "nightlife", "skyline", "terrace", "atmosphere"],
    url: "blog-details-3.html",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    readTime: "4 min read",
    author: "Liam Sterling",
    excerpt: "From golden skyline horizons to candlelit booths under the midnight sky."
  },
  {
    id: 4,
    title: "Soundscapes Above the Clouds: Live Saxophone & Deep House",
    category: "Live Sessions",
    topics: ["acoustics", "livesessions", "deephouse", "sound", "saxophone", "music"],
    url: "blog-details-4.html",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read",
    author: "DJ Matteo Ross",
    excerpt: "Soulful live brass improvisations blended with warm ambient house rhythms."
  },
  {
    id: 5,
    title: "Cellar in the Sky: Grand Cru Champagne & Caviar Flights",
    category: "Sommelier Reserves",
    topics: ["grandcru", "sommelierreserves", "champagne", "caviar", "wine", "cellar"],
    url: "blog-details-5.html",
    image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=400&q=80",
    readTime: "6 min read",
    author: "Antoine Dubois",
    excerpt: "Vintage champagnes paired with chilled Osetra caviar and Breton oysters."
  },
  {
    id: 6,
    title: "The Penthouse Cabanas: Bespoke Bottle Service & Lounging",
    category: "VIP Experiences",
    topics: ["penthousecabanas", "vipexperiences", "bottleservice", "cabanas", "lounge", "vip"],
    url: "blog-details-6.html",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=400&q=80",
    readTime: "4 min read",
    author: "Marcus Sterling",
    excerpt: "Private open-air sanctuaries with dedicated butler service and crystal glassware."
  },
  {
    id: 7,
    title: "The Rare Harvest: Autumn White Truffles & Barolo Cellar Mastery",
    category: "Seasonal Gazette",
    topics: ["whitetruffles", "barolo", "seasonal", "wine", "gastronomy"],
    url: "blog-details-7.html",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80",
    readTime: "8 min read",
    author: "Antoine Dubois",
    excerpt: "Exclusive deep-dive masterclass into Piedmont white truffles and vintage Barolo pairings."
  }
];

function initBlogGazette() {
  const searchInput = document.getElementById('blog-search-input');
  const categorySelect = document.getElementById('blog-category-select');
  const topicPills = document.querySelectorAll('.topic-pill');
  const cards = document.querySelectorAll('.blog-article-card');
  const clearBtn = document.getElementById('blog-search-clear-btn');
  const filterStatus = document.getElementById('blog-filter-status');
  const filterMsg = document.getElementById('blog-filter-message');
  const resetBtn = document.getElementById('blog-reset-filter-btn');
  const noResults = document.getElementById('blog-no-results');
  const emptyResetBtn = document.getElementById('blog-empty-reset-btn');

  if (!cards.length && !searchInput) return;

  let currentTopic = 'all';
  let currentCategory = 'all';
  let currentSearch = '';

  function applyFilters(shouldScroll = false) {
    let visibleCount = 0;
    const query = currentSearch.toLowerCase().trim();

    cards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const cat = (card.getAttribute('data-category') || '').toLowerCase();
      const topics = (card.getAttribute('data-topics') || '').toLowerCase();
      const excerpt = (card.getAttribute('data-excerpt') || '').toLowerCase();

      // Check Category
      const matchCat = (currentCategory === 'all' || cat === currentCategory.toLowerCase());

      // Check Topic
      const matchTopic = (currentTopic === 'all' || topics.includes(currentTopic.toLowerCase()));

      // Check Search text
      const matchSearch = !query || 
        title.includes(query) || 
        cat.includes(query) || 
        topics.includes(query) || 
        excerpt.includes(query);

      if (matchCat && matchTopic && matchSearch) {
        card.classList.remove('hidden');
        card.style.display = '';
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });

    // Update Clear Button on search input
    if (clearBtn) {
      if (currentSearch) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }

    // Update Status Banner
    const isFiltered = (currentTopic !== 'all' || currentCategory !== 'all' || currentSearch !== '');
    if (filterStatus) {
      if (isFiltered && visibleCount > 0) {
        filterStatus.classList.remove('hidden');
        let parts = [];
        if (currentTopic !== 'all') parts.push(\`Topic: #\${currentTopic}\`);
        if (currentCategory !== 'all') parts.push(\`Category: \${currentCategory}\`);
        if (currentSearch) parts.push(\`Query: "\${currentSearch}"\`);
        if (filterMsg) {
          filterMsg.innerHTML = \`Showing <strong>\${visibleCount}</strong> \${visibleCount === 1 ? 'chronicle' : 'chronicles'} (\${parts.join(' • ')})\`;
        }
      } else {
        filterStatus.classList.add('hidden');
      }
    }

    // Show/hide zero results box
    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }

    if (shouldScroll) {
      const grid = document.getElementById('blog-posts-section') || document.getElementById('blog-posts-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Topic pills click
  topicPills.forEach(pill => {
    pill.addEventListener('click', () => {
      topicPills.forEach(p => {
        p.classList.remove('active');
      });
      pill.classList.add('active');

      currentTopic = pill.getAttribute('data-topic') || 'all';
      applyFilters(true);
    });
  });

  // Search input live
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      applyFilters(false);
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFilters(true);
      }
    });
  }

  // Category select
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      applyFilters(true);
    });
  }

  // Clear search input button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      applyFilters(false);
    });
  }

  // Reset filters
  const resetAll = () => {
    currentTopic = 'all';
    currentCategory = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = 'all';
    topicPills.forEach(p => {
      if (p.getAttribute('data-topic') === 'all') {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
    applyFilters(false);
  };

  if (resetBtn) resetBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

  // Check URL parameters on load
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get('q') || urlParams.get('search');
  const topicParam = urlParams.get('topic');
  const catParam = urlParams.get('category');

  if (qParam || topicParam || catParam) {
    if (qParam && searchInput) {
      searchInput.value = qParam;
      currentSearch = qParam;
    }
    if (topicParam) {
      currentTopic = topicParam.toLowerCase().replace('#', '');
      topicPills.forEach(p => {
        if ((p.getAttribute('data-topic') || '').toLowerCase() === currentTopic) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }
    if (catParam && categorySelect) {
      categorySelect.value = catParam;
      currentCategory = catParam;
    }
    setTimeout(() => {
      applyFilters(true);
    }, 200);
  }
}

// Global submit handler for blog details search widget
window.submitGazetteSearch = function(formEl) {
  const input = formEl.querySelector('input[name="q"]') || formEl.querySelector('#gazette-detail-search-input');
  if (input && input.value.trim()) {
    window.location.href = \`blog.html?q=\${encodeURIComponent(input.value.trim())}\`;
  } else {
    window.location.href = \`blog.html\`;
  }
};

function initBlogDetailsSearch() {
  const searchInput = document.getElementById('gazette-detail-search-input');
  const dropdown = document.getElementById('gazette-search-results-dropdown');
  if (!searchInput || !dropdown) return;

  const renderResults = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    const matches = AURA_BLOG_ARTICLES.filter(art => {
      return art.title.toLowerCase().includes(q) ||
             art.category.toLowerCase().includes(q) ||
             art.author.toLowerCase().includes(q) ||
             art.excerpt.toLowerCase().includes(q) ||
             art.topics.some(t => t.includes(q) || q.includes(t));
    });

    if (matches.length === 0) {
      dropdown.innerHTML = \`
        <div class="p-3 text-center text-xs text-gray-400">
          <p class="mb-1">No stories found for "<span class="text-amber-400">\${query}</span>"</p>
          <a href="blog.html?q=\${encodeURIComponent(query)}" class="text-amber-400 font-bold hover:underline">Search all on Blog &rarr;</a>
        </div>
      \`;
      dropdown.classList.remove('hidden');
      return;
    }

    dropdown.innerHTML = \`
      <div class="px-2 py-1 text-[10px] font-serif uppercase tracking-widest text-amber-400 border-b border-gray-800 mb-1 flex items-center justify-between">
        <span>Gazette Matches (\${matches.length})</span>
        <a href="blog.html?q=\${encodeURIComponent(query)}" class="text-gray-400 hover:text-white normal-case font-sans">View all &rarr;</a>
      </div>
      <div class="space-y-1">
        \${matches.map(art => \`
          <a href="\${art.url}" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-zinc-900 transition group text-left">
            <img src="\${art.image}" alt="\${art.title}" class="w-10 h-10 rounded-md object-cover shrink-0 border border-amber-500/20 group-hover:border-amber-400">
            <div class="flex-1 min-w-0">
              <span class="text-[9px] uppercase tracking-wider text-amber-400 font-bold block">\${art.category}</span>
              <h5 class="text-xs text-white group-hover:text-amber-300 font-serif font-bold truncate transition">\${art.title}</h5>
              <span class="text-[10px] text-gray-400 block">\${art.author} • \${art.readTime}</span>
            </div>
          </a>
        \`).join('')}
      </div>
    \`;
    dropdown.classList.remove('hidden');
  };

  searchInput.addEventListener('input', (e) => {
    renderResults(e.target.value);
  });

  searchInput.addEventListener('focus', (e) => {
    if (e.target.value.trim()) {
      renderResults(e.target.value);
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}
`;

  code = code.trimEnd() + '\n' + blogCode + '\n';
  fs.writeFileSync('assets/js/main.js', code, 'utf8');
  console.log('Appended Blog Gazette code to assets/js/main.js');
} else {
  console.log('Already appended.');
}
