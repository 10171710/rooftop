const fs = require('fs');

let html = fs.readFileSync('blog-details.html', 'utf8');

// We need to replace the article header, image, body, author, tags, and add the dataset script
// First, let's inspect the exact lines around the article in blog-details.html
const startMarker = '<article class="lg:col-span-2 space-y-8">';
const endMarker = '<!-- Comments Section -->';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found in blog-details.html!', { startIdx, endIdx });
  process.exit(1);
}

const newArticleContent = `<article class="lg:col-span-2 space-y-8" id="blogDetailArticle">
          
          <div>
            <div class="flex items-center gap-3 text-xs text-amber-400 mb-3">
              <span id="articleCategory" class="px-2.5 py-0.5 rounded font-bold uppercase bg-amber-500/10 border border-amber-500/30">Rooftop Dining</span>
              <span>•</span>
              <span id="articleDate" class="text-gray-400">November 5, 2026</span>
              <span>•</span>
              <span id="articleReadTime" class="text-gray-400">5 min read</span>
            </div>
            <h1 id="articleTitle" class="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy
            </h1>
          </div>

          <!-- Featured Image -->
          <div class="rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl">
            <img id="articleImage" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85" 
                 alt="Skyline Charcoal Grilling" class="w-full h-[400px] sm:h-[450px] object-cover">
          </div>

          <!-- Article Body -->
          <div id="articleBody" class="prose prose-invert max-w-none text-sm text-gray-300 leading-relaxed space-y-6">
            <!-- Dynamic article paragraphs rendered here -->
          </div>

          <!-- Author Box -->
          <div class="p-6 rounded-2xl glass-dark border border-amber-500/20 flex flex-col sm:flex-row items-center gap-6 mt-12">
            <img id="authorAvatar" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=85" 
                 alt="Author" class="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shrink-0">
            <div>
              <span class="text-xs uppercase font-bold text-amber-400 tracking-wider">Written by</span>
              <h4 id="authorName" class="font-serif text-xl font-bold text-white">Julian Vance</h4>
              <p id="authorRole" class="text-xs font-semibold text-amber-300 mt-0.5">Executive Chef</p>
              <p id="authorBio" class="text-xs text-gray-400 mt-1 leading-relaxed">
                Executive Chef at AURA SKY. Michelin-pedigree culinary artist specializing in wood-fired Nikkei gastronomy, contemporary robata searing, and seasonal sourcing.
              </p>
            </div>
          </div>

          <!-- Social Share & Tags -->
          <div class="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-gray-800 text-xs">
            <div id="articleTags" class="flex flex-wrap items-center gap-2">
              <span class="text-gray-400 font-semibold">Tags:</span>
              <span class="px-2.5 py-1 rounded bg-gray-800 text-gray-300">#RooftopDining</span>
              <span class="px-2.5 py-1 rounded bg-gray-800 text-gray-300">#BinchotanGrill</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-400 font-semibold">Share:</span>
              <button onclick="navigator.clipboard?.writeText(window.location.href); showToast('Link Copied', 'Article URL copied to clipboard!', 'info')" class="w-8 h-8 rounded-lg bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition">
                <i class="fa-solid fa-link"></i>
              </button>
              <a href="#" class="w-8 h-8 rounded-lg bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" class="w-8 h-8 rounded-lg bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>

          `;

html = html.substring(0, startIdx) + newArticleContent + html.substring(endIdx);

// Also update breadcrumb
const oldBreadcrumb = `<li>
          <span class="text-amber-400 font-medium truncate max-w-[200px] sm:max-w-md">The Alchemy of Centrifugal Clarification</span>
        </li>`;
const newBreadcrumb = `<li>
          <span id="breadcrumbTitle" class="text-amber-400 font-medium truncate max-w-[200px] sm:max-w-md">Skyline Charcoal Grilling</span>
        </li>`;
html = html.replace(oldBreadcrumb, newBreadcrumb);

// Add the dynamic dataset & router script before closing body
const scriptTag = `
  <!-- Simple Blog Details Dynamic Router -->
  <script>
    const AURA_POSTS = {
      '1': {
        title: "Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy",
        category: "Rooftop Dining",
        date: "November 5, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85",
        quote: "When intense 1,000°C binchotan heat meets ocean breezes 54 floors in the air, culinary craft becomes high theater.",
        paragraphs: [
          "Traditional Japanese open-flame cooking at high altitude requires an extraordinary understanding of air pressure, convective air currents, and wood charcoal purity. At AURA SKY, our custom-built robata hearth burns genuine Kishu Binchotan—white oak branches fired for weeks until they achieve the metallic ring of crystal glass.",
          "Unlike standard lump charcoal, Binchotan emits virtually zero smoke and produces intense far-infrared radiation. This allows Chef Julian Vance to instantly sear prime Miyazaki A5 Wagyu skewers and Breton blue lobsters, locking in succulent natural juices while infusing each cut with a delicate, clean caramelization without bitterness.",
          "Paired with our 360-degree panoramic skyline views, our charcoal hearth transforms the evening dining experience into an intimate sensory journey where the warmth of open embers contrasts with the cool twilight expanse outside our panoramic glass terrace."
        ],
        calloutTitle: "Nikkei Gastronomy Highlights",
        calloutItems: [
          "A5 Miyazaki Wagyu Robata with smoked ponzu & black winter truffle",
          "Robata-kissed King Salmon with Peruvian aji amarillo glaze",
          "Charred Maitake mushrooms over binchotan ash butter and sea salt"
        ],
        author: {
          name: "Julian Vance",
          role: "Executive Chef",
          avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=85",
          bio: "Executive Chef at AURA SKY. Michelin-pedigree culinary artist specializing in wood-fired Nikkei gastronomy, contemporary robata searing, and seasonal sourcing."
        },
        tags: ["#RooftopDining", "#BinchotanGrill", "#Wagyu", "#NikkeiGastronomy"]
      },
      '2': {
        title: "Anatomy of Sunset Cocktails: Smoked Bourbons & Elixirs",
        category: "Mixology & Bar",
        date: "October 30, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1600&q=85",
        quote: "A great cocktail at twilight does not merely quench thirst; it captures the golden transition of light into night.",
        paragraphs: [
          "As the sun dips beneath the horizon and casts copper and violet hues across the metropolis, cocktail service at AURA SKY shifts into a ceremonial cadence. Beverage Director Sophia Leclerc balances smoke, botanical acidity, and cold clarity to craft elixirs that elevate the senses.",
          "Using Japanese smoking cloches charged with charred bourbon barrel staves, our bartenders infuse small-batch Kentucky bourbons right at the guest's table. By combining this rich aromatics profile with our laboratory-clarified blood orange and spiced ginger cordial, each cocktail arrives completely transparent yet layered with deep, resonant depth.",
          "Tasting a smoke-infused elixir against the setting sun creates a multisensory harmony where temperature, aroma, and visual grandeur elevate casual sipping into pure penthouse luxury."
        ],
        calloutTitle: "The Sunset Elixir Ritual",
        calloutItems: [
          "Charred white oak & pecan wood cold smoke infusion table-side",
          "Clarified organic citrus cordials with 100% preserved aromatics",
          "Hand-carved artisanal diamond ice sphere with ultra-slow dilution"
        ],
        author: {
          name: "Sophia Leclerc",
          role: "Beverage Director",
          avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=85",
          bio: "Beverage Director at AURA SKY. Winner of World Class Bartender 2021. Innovator of sustainable cocktail chemistry and ultrasonic infusion techniques."
        },
        tags: ["#Mixology", "#CraftCocktails", "#Bourbon", "#SunsetElixirs"]
      },
      '3': {
        title: "Twilight to Midnight: High-Altitude Supper Club Nights",
        category: "Terrace Atmosphere",
        date: "October 24, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
        quote: "Above the clouds, evening transitions from quiet culinary sophistication into vibrant midnight revelry.",
        paragraphs: [
          "Supper clubs have historically represented the pinnacle of nightlife elegance. At AURA SKY, we've elevated this mid-century concept to the 54th floor, pairing five-star dining with sultry late-night atmosphere, mood-reactive lighting, and private banquette seating.",
          "Creative Director Liam Sterling curated the transition from daytime golden hour to candlelit twilight. Automated warm-dimming optics adjust their color temperature in lockstep with the sunset, casting flattering golden amber tones over custom Italian velvet banquettes and marble-topped tables.",
          "As midnight approaches, the dining room effortlessly melts into a high-energy lounge where guests linger over rare agave flights, artisan desserts, and magnetic city horizons."
        ],
        calloutTitle: "Supper Club Experience Privileges",
        calloutItems: [
          "Bespoke late-night caviar and champagne pairings until 2:00 AM",
          "Direct table-side sommelier allocations and vintage flights",
          "Velvet partitioned semi-private sky alcoves with skyline views"
        ],
        author: {
          name: "Liam Sterling",
          role: "Creative Director",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85",
          bio: "Creative Director at AURA SKY. Master of experiential hospitality design, lighting architecture, and immersive luxury dining concepts."
        },
        tags: ["#SupperClub", "#TerraceLife", "#Nightlife", "#RooftopLounge"]
      },
      '4': {
        title: "Soundscapes Above the Clouds: Live Saxophone & Deep House",
        category: "Live Sessions",
        date: "October 18, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85",
        quote: "Acoustic energy should never compete with conversation—it should wrap around it like a cashmere throw.",
        paragraphs: [
          "High-altitude audio engineering presents unique acoustic challenges. Wind sheer, open terrace reflections, and high glass surfaces can easily turn music into harsh clatter. At AURA SKY, we engineered a state-of-the-art acoustic system featuring directional line-arrays tailored to open air.",
          "Resident Sound Curator DJ Matteo Ross collaborates with world-touring saxophonists and trumpet soloists. The organic warmth of live brass riffs woven over melodic deep house basslines creates a soulful, sophisticated soundscape that effortlessly flows from dinner into twilight drinks.",
          "Whether seated inside the glass salon or relaxing on the outdoor sky terrace, every guest experiences crystal-clear fidelity while conversing comfortably with table companions."
        ],
        calloutTitle: "Acoustic Architecture Highlights",
        calloutItems: [
          "Directional d&b audiotechnik speakers minimizing table echo",
          "Live acoustic brass amplification with zero sonic fatigue",
          "Nightly curated sunset melodic transitions and deep house"
        ],
        author: {
          name: "DJ Matteo Ross",
          role: "Sound Curator",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85",
          bio: "Resident Sound Curator at AURA SKY. Renowned European electronic music producer and vinyl selector specializing in ambient sunset transitions."
        },
        tags: ["#LiveSaxophone", "#DeepHouse", "#Soundscapes", "#MusicAboveClouds"]
      },
      '5': {
        title: "Cellar in the Sky: Grand Cru Champagne & Caviar Flights",
        category: "Sommelier Reserves",
        date: "October 11, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=1600&q=85",
        quote: "At 700 feet above the pavement, rare vintage effervescence and Royal Osetra caviar achieve supreme culinary synchrony.",
        paragraphs: [
          "Storing a 1,400-bottle wine collection atop a skyscraper requires extreme technological precision. Head Sommelier Antoine Dubois oversees our suspended glass cellar, an architectural marvel maintained at a constant 54°F and 68% relative humidity with anti-vibration damping.",
          "Our cellar features benchmark Dom Pérignon, Krug Clos d'Ambonnay, and rare grower champagnes direct from Côte des Blancs. Each champagne is paired with sustainable Royal Osetra caviar served on mother-of-pearl spoons over hand-carved ice platters.",
          "Guests can book private table-side sabrage ceremonies and customized pairings guided personally by Dubois and his cellar team."
        ],
        calloutTitle: "Featured Tasting Flights",
        calloutItems: [
          "Blanc de Blancs flight: Salon, Jacques Selosse & Ruinart 2010",
          "Imperial Osetra Caviar with warm buckwheat blinis and crème fraîche",
          "Rare single-vineyard biodynamic grower pours direct from Épernay"
        ],
        author: {
          name: "Antoine Dubois",
          role: "Head Sommelier",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85",
          bio: "Head Sommelier at AURA SKY. Master Sommelier Diploma holder with over 15 years curating Michelin-starred cellars across Paris, Tokyo, and New York."
        },
        tags: ["#GrandCru", "#Champagne", "#Caviar", "#SommelierCellar"]
      },
      '6': {
        title: "The Penthouse Cabanas: Bespoke Bottle Service & Lounging",
        category: "VIP Experiences",
        date: "October 04, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=85",
        quote: "Privacy, discretion, and panoramic skyline grandeur coalesce in our bespoke heated glass cabanas.",
        paragraphs: [
          "For patrons seeking private celebration or confidential conversation, our four Penthouse Cabanas offer the ultimate vantage point. Perched along the western edge of the 54th-floor terrace, each cabana features custom climate control and panoramic skyline glass.",
          "VIP Relations Director Marcus Sterling ensures every cabana reservation includes dedicated bottle service, a private mixologist, and access to our private reserve locker containing rare single-barrel tequilas, scotches, and crystal decanters.",
          "Heated plush banquettes and radiant glass flooring ensure comfortable year-round enjoyment even during crisp autumn evenings."
        ],
        calloutTitle: "Cabana Privileges",
        calloutItems: [
          "Discreet private elevator access avoiding the main lobby foyer",
          "Dedicated personal mixologist and sommelier for your table",
          "Complimentary seasonal raw bar tasting towers and artisan desserts"
        ],
        author: {
          name: "Marcus Sterling",
          role: "VIP Relations",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85",
          bio: "VIP Relations Director at AURA SKY. Over a decade coordinating high-profile celebrity hospitality, royal delegations, and luxury brand takeovers."
        },
        tags: ["#VIPCabana", "#BottleService", "#PenthouseLounge", "#SkylineViews"]
      },
      '7': {
        title: "The 54th Floor Compendium: Centrifugal Mixology & Zero-Waste Alchemy",
        category: "Mixology & Science",
        date: "November 2, 2026",
        readTime: "14 min read",
        image: "https://images.unsplash.com/photo-1546195643-70f48f9c5b87?auto=format&fit=crop&w=1600&q=85",
        quote: "When you gaze through a cocktail glass against the neon skyline 54 floors up, optical clarity becomes an emotional experience.",
        paragraphs: [
          "In traditional bartending, achieving clarity in citrus-heavy or dairy-based cocktails meant relying on agar-agar filtration, gelatin fining, or days of slow gravity straining through coffee filters. While effective, these methods inevitably stripped delicate top-note terpenes, volatile esters, and aromatic freshness.",
          "At AURA SKY, we installed a temperature-regulated laboratory centrifuge behind our secondary preparation counter. By subjecting freshly squeezed Sicilian lemons, blood oranges, and passion fruit purees to over 3,000 gravities (G-force), we separate pectins, cellulose fibres, and clouding colloids in under twelve minutes.",
          "This allows us to create our signature Celestial Gold Martini. While standard gin martinis become murky when citrus oils or fruit garnishes are introduced, our clarified cordial yields an impeccably crystalline drink served over an artisanal diamond ice sphere that sparkles under our mood pinspots."
        ],
        calloutTitle: "How Centrifugal Clarification Works",
        calloutItems: [
          "Heavy solids and plant fibres are forced to the bottom sediment pellet",
          "Natural essential oils form a microscopic buoyant film on the surface",
          "The middle stratum is completely pure, brilliant, transparent nectar"
        ],
        author: {
          name: "Sophia Leclerc",
          role: "Beverage Director",
          avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=85",
          bio: "Beverage Director at AURA SKY. Winner of World Class Bartender 2021. Innovator of sustainable cocktail chemistry and ultrasonic infusion techniques."
        },
        tags: ["#Mixology", "#Science", "#ZeroWaste", "#RooftopAlchemy"]
      }
    };

    function renderBlogPost() {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id') || '1';
      const post = AURA_POSTS[id] || AURA_POSTS['1'];

      document.title = post.title + " | AURA SKY Blog";

      const titleEl = document.getElementById('articleTitle');
      const breadcrumbEl = document.getElementById('breadcrumbTitle');
      const categoryEl = document.getElementById('articleCategory');
      const dateEl = document.getElementById('articleDate');
      const readTimeEl = document.getElementById('articleReadTime');
      const imageEl = document.getElementById('articleImage');
      const bodyEl = document.getElementById('articleBody');
      const authorAvatarEl = document.getElementById('authorAvatar');
      const authorNameEl = document.getElementById('authorName');
      const authorRoleEl = document.getElementById('authorRole');
      const authorBioEl = document.getElementById('authorBio');
      const tagsEl = document.getElementById('articleTags');

      if (titleEl) titleEl.textContent = post.title;
      if (breadcrumbEl) breadcrumbEl.textContent = post.title;
      if (categoryEl) categoryEl.textContent = post.category;
      if (dateEl) dateEl.textContent = post.date;
      if (readTimeEl) readTimeEl.textContent = post.readTime;
      if (imageEl) {
        imageEl.src = post.image;
        imageEl.alt = post.title;
      }

      if (bodyEl) {
        let contentHtml = \`
          <p class="text-base text-gray-200 font-serif italic border-l-2 border-amber-400 pl-4 py-1">
            "\${post.quote}"
          </p>
          <p>\${post.paragraphs[0]}</p>
          <div class="p-6 rounded-2xl glass-dark border border-amber-500/20 my-6">
            <h4 class="font-serif text-lg font-bold text-amber-400 mb-3"><i class="fa-solid fa-gem mr-2"></i> \${post.calloutTitle}:</h4>
            <ul class="space-y-2 text-xs text-gray-300">
              \${post.calloutItems.map(item => \`<li class="flex items-start gap-2"><i class="fa-solid fa-circle-dot text-amber-400 text-[8px] mt-1 shrink-0"></i> <span>\${item}</span></li>\`).join('')}
            </ul>
          </div>
          <p>\${post.paragraphs[1]}</p>
          <p>\${post.paragraphs[2]}</p>
        \`;
        bodyEl.innerHTML = contentHtml;
      }

      if (authorAvatarEl) authorAvatarEl.src = post.author.avatar;
      if (authorNameEl) authorNameEl.textContent = post.author.name;
      if (authorRoleEl) authorRoleEl.textContent = post.author.role;
      if (authorBioEl) authorBioEl.textContent = post.author.bio;

      if (tagsEl) {
        tagsEl.innerHTML = \`<span class="text-gray-400 font-semibold">Tags:</span>\` +
          post.tags.map(t => \`<span class="px-2.5 py-1 rounded bg-gray-800 text-gray-300 font-medium">\${t}</span>\`).join(' ');
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderBlogPost);
    } else {
      renderBlogPost();
    }
  </script>
`;

// Insert the script right before </body>
html = html.replace('</body>', scriptTag + '\n</body>');

fs.writeFileSync('blog-details.html', html, 'utf8');
console.log('Successfully updated blog-details.html with dynamic simple post renderer!');

