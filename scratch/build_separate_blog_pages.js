const fs = require('fs');

const POSTS = [
  {
    id: 1,
    file: 'blog-details-1.html',
    title: 'Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy',
    category: 'Rooftop Dining',
    date: 'November 5, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Skyline Dining & Charcoal Grill Gastronomy',
    quote: 'When intense 1,000°C binchotan heat meets ocean breezes 54 floors in the air, culinary craft becomes high theater.',
    paragraphs: [
      'Traditional Japanese open-flame cooking at high altitude requires an extraordinary understanding of atmospheric pressure, convective airflow, and charcoal purity. At AURA SKY, our custom-engineered robata hearth burns authentic Kishu Binchotan—dense white oak branches fired for weeks in Wakayama kilns until they ring like porcelain glass.',
      'Unlike conventional hardwood or briquette fuels, Binchotan emits virtually zero smoke and unleashes intense far-infrared thermal radiation. This allows Executive Chef Julian Vance to instantly sear prime Miyazaki A5 Wagyu skewers and Breton blue lobsters, locking in succulent natural juices while infusing each cut with a delicate, clean caramelization without bitterness or ash.',
      'Paired with our 360-degree panoramic skyline views, our charcoal hearth transforms the evening dining experience into an intimate sensory journey where the warmth of glowing embers contrasts with the cool twilight expanse outside our panoramic glass terrace.'
    ],
    calloutTitle: 'Nikkei Gastronomy Highlights',
    calloutItems: [
      'A5 Miyazaki Wagyu Robata with smoked ponzu & shaved black winter truffle',
      'Robata-kissed King Salmon with Peruvian aji amarillo emulsion',
      'Charred Maitake mushrooms basted in binchotan ash butter and Maldon flake'
    ],
    author: {
      name: 'Julian Vance',
      role: 'Executive Chef',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=85',
      bio: 'Executive Chef at AURA SKY. Michelin-pedigree culinary artist specializing in wood-fired Nikkei gastronomy, contemporary robata searing, and seasonal sourcing.'
    },
    tags: ['#RooftopDining', '#BinchotanGrill', '#Wagyu', '#NikkeiGastronomy']
  },
  {
    id: 2,
    file: 'blog-details-2.html',
    title: 'Anatomy of Sunset Cocktails: Smoked Bourbons & Elixirs',
    category: 'Mixology & Bar',
    date: 'October 30, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Artisan Craft Cocktails at the Skyline Bar',
    quote: 'A great cocktail at twilight does not merely quench thirst; it captures the golden transition of light into night.',
    paragraphs: [
      'As the sun dips beneath the western horizon and casts copper and violet hues across the metropolis, cocktail service at AURA SKY shifts into a ceremonial cadence. Beverage Director Sophia Leclerc balances smoke, botanical acidity, and cold clarity to craft elixirs that elevate the senses.',
      'Using Japanese smoking cloches charged with charred bourbon barrel staves, our bartenders infuse small-batch Kentucky bourbons right at the guest table. By combining this rich aromatics profile with our laboratory-clarified blood orange and spiced ginger cordial, each cocktail arrives completely transparent yet layered with deep, resonant depth.',
      'Tasting a smoke-infused elixir against the setting sun creates a multisensory harmony where temperature, aroma, and visual grandeur elevate casual sipping into pure penthouse luxury.'
    ],
    calloutTitle: 'The Sunset Elixir Ritual',
    calloutItems: [
      'Charred white oak & pecan wood cold smoke infusion table-side',
      'Clarified organic citrus cordials with 100% preserved aromatic terpenes',
      'Hand-carved artisanal diamond ice sphere with ultra-slow dilution rate'
    ],
    author: {
      name: 'Sophia Leclerc',
      role: 'Beverage Director',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=85',
      bio: 'Beverage Director at AURA SKY. Winner of World Class Bartender 2021. Innovator of sustainable cocktail chemistry and ultrasonic infusion techniques.'
    },
    tags: ['#Mixology', '#CraftCocktails', '#Bourbon', '#SunsetElixirs']
  },
  {
    id: 3,
    file: 'blog-details-3.html',
    title: 'Twilight to Midnight: High-Altitude Supper Club Nights',
    category: 'Terrace Atmosphere',
    date: 'October 24, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Panoramic Rooftop Restaurant Evening Ambiance',
    quote: 'Above the clouds, evening transitions from quiet culinary sophistication into vibrant midnight revelry.',
    paragraphs: [
      'Supper clubs have historically represented the pinnacle of nightlife elegance. At AURA SKY, we have elevated this mid-century concept to the 54th floor, pairing five-star dining with sultry late-night atmosphere, mood-reactive lighting, and private banquette seating.',
      'Creative Director Liam Sterling curated the transition from daytime golden hour to candlelit twilight. Automated warm-dimming optics adjust their color temperature in lockstep with the sunset, casting flattering golden amber tones over custom Italian velvet banquettes and marble-topped tables.',
      'As midnight approaches, the dining room effortlessly melts into a high-energy lounge where guests linger over rare agave flights, artisan desserts, and magnetic city horizons.'
    ],
    calloutTitle: 'Supper Club Experience Privileges',
    calloutItems: [
      'Bespoke late-night caviar and champagne pairings until 2:00 AM',
      'Direct table-side sommelier allocations and vintage flights',
      'Velvet partitioned semi-private sky alcoves with skyline views'
    ],
    author: {
      name: 'Liam Sterling',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
      bio: 'Creative Director at AURA SKY. Master of experiential hospitality design, lighting architecture, and immersive luxury dining concepts.'
    },
    tags: ['#SupperClub', '#TerraceLife', '#Nightlife', '#RooftopLounge']
  },
  {
    id: 4,
    file: 'blog-details-4.html',
    title: 'Soundscapes Above the Clouds: Live Saxophone & Deep House',
    category: 'Live Sessions',
    date: 'October 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Live Saxophone and Deep House Sessions Above Clouds',
    quote: 'Acoustic energy should never compete with conversation—it should wrap around it like a cashmere throw.',
    paragraphs: [
      'High-altitude audio engineering presents unique acoustic challenges. Wind sheer, open terrace reflections, and high glass surfaces can easily turn music into harsh clatter. At AURA SKY, we engineered a state-of-the-art acoustic system featuring directional line-arrays tailored to open air.',
      'Resident Sound Curator DJ Matteo Ross collaborates with world-touring saxophonists and trumpet soloists. The organic warmth of live brass riffs woven over melodic deep house basslines creates a soulful, sophisticated soundscape that effortlessly flows from dinner into twilight drinks.',
      'Whether seated inside the glass salon or relaxing on the outdoor sky terrace, every guest experiences crystal-clear fidelity while conversing comfortably with table companions.'
    ],
    calloutTitle: 'Acoustic Architecture Highlights',
    calloutItems: [
      'Directional d&b audiotechnik speakers minimizing table echo',
      'Live acoustic brass amplification with zero sonic fatigue',
      'Nightly curated sunset melodic transitions and deep house'
    ],
    author: {
      name: 'DJ Matteo Ross',
      role: 'Sound Curator',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
      bio: 'Resident Sound Curator at AURA SKY. Renowned European electronic music producer and vinyl selector specializing in ambient sunset transitions.'
    },
    tags: ['#LiveSaxophone', '#DeepHouse', '#Soundscapes', '#MusicAboveClouds']
  },
  {
    id: 5,
    file: 'blog-details-5.html',
    title: 'Cellar in the Sky: Grand Cru Champagne & Caviar Flights',
    category: 'Sommelier Reserves',
    date: 'October 11, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Grand Cru Champagne and Wine Pairings',
    quote: 'At 700 feet above the pavement, rare vintage effervescence and Royal Osetra caviar achieve supreme culinary synchrony.',
    paragraphs: [
      'Storing a 1,400-bottle wine collection atop a skyscraper requires extreme technological precision. Head Sommelier Antoine Dubois oversees our suspended glass cellar, an architectural marvel maintained at a constant 54°F and 68% relative humidity with anti-vibration damping.',
      'Our cellar features benchmark Dom Pérignon, Krug Clos d’Ambonnay, and rare grower champagnes direct from Côte des Blancs. Each champagne is paired with sustainable Royal Osetra caviar served on mother-of-pearl spoons over hand-carved ice platters.',
      'Guests can book private table-side sabrage ceremonies and customized pairings guided personally by Dubois and his cellar team.'
    ],
    calloutTitle: 'Featured Tasting Flights',
    calloutItems: [
      'Blanc de Blancs flight: Salon, Jacques Selosse & Ruinart 2010',
      'Imperial Osetra Caviar with warm buckwheat blinis and crème fraîche',
      'Rare single-vineyard biodynamic grower pours direct from Épernay'
    ],
    author: {
      name: 'Antoine Dubois',
      role: 'Head Sommelier',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
      bio: 'Head Sommelier at AURA SKY. Master Sommelier Diploma holder with over 15 years curating Michelin-starred cellars across Paris, Tokyo, and New York.'
    },
    tags: ['#GrandCru', '#Champagne', '#Caviar', '#SommelierCellar']
  },
  {
    id: 6,
    file: 'blog-details-6.html',
    title: 'The Penthouse Cabanas: Bespoke Bottle Service & Lounging',
    category: 'VIP Experiences',
    date: 'October 04, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Exclusive VIP Lounge Cabanas & Skyline Views',
    quote: 'Privacy, discretion, and panoramic skyline grandeur coalesce in our bespoke heated glass cabanas.',
    paragraphs: [
      'For patrons seeking private celebration or confidential conversation, our four Penthouse Cabanas offer the ultimate vantage point. Perched along the western edge of the 54th-floor terrace, each cabana features custom climate control and panoramic skyline glass.',
      'VIP Relations Director Marcus Sterling ensures every cabana reservation includes dedicated bottle service, a private mixologist, and access to our private reserve locker containing rare single-barrel tequilas, scotches, and crystal decanters.',
      'Heated plush banquettes and radiant glass flooring ensure comfortable year-round enjoyment even during crisp autumn evenings.'
    ],
    calloutTitle: 'Cabana Privileges',
    calloutItems: [
      'Discreet private elevator access avoiding the main lobby foyer',
      'Dedicated personal mixologist and sommelier for your table',
      'Complimentary seasonal raw bar tasting towers and artisan desserts'
    ],
    author: {
      name: 'Marcus Sterling',
      role: 'VIP Relations',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
      bio: 'VIP Relations Director at AURA SKY. Over a decade coordinating high-profile celebrity hospitality, royal delegations, and luxury brand takeovers.'
    },
    tags: ['#VIPCabana', '#BottleService', '#PenthouseLounge', '#SkylineViews']
  },
  {
    id: 7,
    file: 'blog-details-7.html',
    title: 'The 54th Floor Compendium: Centrifugal Mixology & Zero-Waste Alchemy',
    category: 'Mixology & Science',
    date: 'November 2, 2026',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'High-Altitude Mixology Compendium',
    quote: 'When you gaze through a cocktail glass against the neon skyline 54 floors up, optical clarity becomes an emotional experience.',
    paragraphs: [
      'In traditional bartending, achieving clarity in citrus-heavy or dairy-based cocktails meant relying on agar-agar filtration, gelatin fining, or days of slow gravity straining through coffee filters. While effective, these methods inevitably stripped delicate top-note terpenes, volatile esters, and aromatic freshness.',
      'At AURA SKY, we installed a temperature-regulated laboratory centrifuge behind our secondary preparation counter. By subjecting freshly squeezed Sicilian lemons, blood oranges, and passion fruit purees to over 3,000 gravities (G-force), we separate pectins, cellulose fibres, and clouding colloids in under twelve minutes.',
      'This allows us to create our signature Celestial Gold Martini. While standard gin martinis become murky when citrus oils or fruit garnishes are introduced, our clarified cordial yields an impeccably crystalline drink served over an artisanal diamond ice sphere that sparkles under our mood pinspots.'
    ],
    calloutTitle: 'How Centrifugal Clarification Works',
    calloutItems: [
      'Heavy solids and plant fibres are forced to the bottom sediment pellet',
      'Natural essential oils form a microscopic buoyant film on the surface',
      'The middle stratum is completely pure, brilliant, transparent nectar'
    ],
    author: {
      name: 'Sophia Leclerc',
      role: 'Beverage Director',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=85',
      bio: 'Beverage Director at AURA SKY. Winner of World Class Bartender 2021. Innovator of sustainable cocktail chemistry and ultrasonic infusion techniques.'
    },
    tags: ['#Mixology', '#Science', '#ZeroWaste', '#RooftopAlchemy']
  }
];

function generateBlogDetailsHtml(post) {
  // Related posts: exclude current post, pick 3 other posts
  const otherPosts = POSTS.filter(p => p.id !== post.id && p.id <= 6).slice(0, 3);

  return `<!DOCTYPE html>
<html lang="en" class="dark" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | AURA SKY Rooftop & Lounge</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
  <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png">
  <meta name="description" content="${post.quote}">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gold: { 300: '#F5E6B8', 400: '#E5C468', 500: '#D4AF37', 600: '#B89222' },
            midnight: '#07090E',
          },
          fontFamily: {
            serif: ['Playfair Display', 'Georgia', 'serif'],
            display: ['Cinzel', 'serif'],
            sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css?v=50">
</head>
<body class="bg-white text-slate-900 dark:bg-[#07090E] dark:text-slate-100 transition-colors duration-300">

  <!-- Main Navigation Header -->
  <header class="sticky top-0 z-40 bg-black border-b border-amber-500/20 shadow-lg shadow-black/50" style="background-color: #000000 !important; background: #000000 !important;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-gold-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition shrink-0">
            <div class="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
              <i class="fa-solid fa-martini-glass-citrus text-amber-400 text-base group-hover:rotate-12 transition duration-300"></i>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-display text-xl font-bold tracking-widest text-white group-hover:text-amber-400 transition leading-none">AURA SKY</span>
            <span class="text-[9px] uppercase tracking-[0.25em] text-amber-400 font-semibold mt-1">Rooftop & Lounge</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-300">
          <div class="relative group">
            <button class="hover:text-amber-400 transition flex items-center gap-1.5 py-2">
              Home <i class="fa-solid fa-chevron-down text-[10px] transition group-hover:rotate-180"></i>
            </button>
            <div class="dropdown-menu absolute top-full left-0 w-44 bg-black/95 border border-amber-500/20 rounded-xl py-2 hidden group-hover:block backdrop-blur-md shadow-xl">
              <a href="index.html" class="block px-4 py-2 hover:bg-amber-500/10 hover:text-amber-400 text-[11px] transition">Classic Rooftop</a>
              <a href="index-2.html" class="block px-4 py-2 hover:bg-amber-500/10 hover:text-amber-400 text-[11px] transition">Twilight Lounge</a>
            </div>
          </div>
          <a href="about.html" class="hover:text-amber-400 transition">About</a>
          <a href="menu.html" class="hover:text-amber-400 transition">Menu</a>
          <a href="events.html" class="hover:text-amber-400 transition">Events &amp; Live Music</a>
          <a href="gallery.html" class="hover:text-amber-400 transition">Gallery</a>
          <a href="blog.html" class="text-amber-400 transition">Blog</a>
          <a href="contact.html" class="hover:text-amber-400 transition">Contact</a>
          <a href="dashboard-admin.html" class="hover:text-amber-400 transition">Dashboard</a>
        </nav>

        <!-- Right Side Utility Controls -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button id="themeToggle" class="theme-toggle-btn w-9 h-9 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-400 hover:border-amber-400 transition flex items-center justify-center text-xs" title="Toggle Light/Dark Theme">
            <i class="fa-solid fa-moon"></i>
          </button>

          <!-- RTL Toggle Button -->
          <button type="button" class="rtl-toggle-btn px-3 py-1.5 rounded-full border border-amber-500/30 text-xs font-bold text-amber-400 hover:border-amber-400 transition flex items-center gap-1.5">
            <i class="fa-solid fa-globe text-xs"></i>
            <span class="rtl-toggle-label text-[11px]">LTR</span>
          </button>

          <!-- Login Portal CTA -->
          <a href="login.html" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-gold-500 to-amber-600 text-black text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-amber-500/30 transition duration-300" style="color: #000000 !important;">
            <i class="fa-solid fa-user-lock"></i>
            <span>Login Portal</span>
          </a>

          <!-- Mobile Menu Hamburger Button -->
          <button id="mobileMenuBtn" class="lg:hidden w-10 h-10 rounded-xl bg-zinc-900 border border-amber-500/20 text-amber-400 flex items-center justify-center hover:border-amber-400 transition">
            <i class="fa-solid fa-bars text-base"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Drawer -->
    <div id="mobileMenu" class="hidden lg:hidden bg-black/95 border-b border-amber-500/20 px-6 py-6 text-sm uppercase tracking-wider space-y-3">
      <a href="index.html" class="block py-2 text-gray-300 hover:text-amber-400">Home (Classic)</a>
      <a href="index-2.html" class="block py-2 text-gray-300 hover:text-amber-400">Home (Twilight)</a>
      <a href="about.html" class="block py-2 text-gray-300 hover:text-amber-400">About</a>
      <a href="menu.html" class="block py-2 text-gray-300 hover:text-amber-400">Menu</a>
      <a href="events.html" class="block py-2 text-gray-300 hover:text-amber-400">Events &amp; Live Music</a>
      <a href="gallery.html" class="block py-2 text-gray-300 hover:text-amber-400">Gallery</a>
      <a href="blog.html" class="block py-2 text-amber-400 font-bold">Blog Gazette</a>
      <a href="contact.html" class="block py-2 text-gray-300 hover:text-amber-400">Contact</a>
      <a href="dashboard-admin.html" class="block py-2 text-gray-300 hover:text-amber-400">Dashboard</a>
      <a href="login.html" class="text-amber-400 py-2 border-t border-gray-800 font-semibold block">Login Portal</a>
    </div>
  </header>

  <!-- Breadcrumb Navigation -->
  <div class="bg-zinc-950/80 border-b border-gray-800/80 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol class="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
        <li><a href="index.html" class="hover:text-amber-400 transition"><i class="fa-solid fa-house mr-1 text-[10px]"></i>Home</a></li>
        <li><i class="fa-solid fa-chevron-right text-[9px] text-gray-600 rtl-flip"></i></li>
        <li><a href="blog.html" class="hover:text-amber-400 transition">Skyline Gazette</a></li>
        <li><i class="fa-solid fa-chevron-right text-[9px] text-gray-600 rtl-flip"></i></li>
        <li>
          <span class="text-amber-400 font-medium truncate max-w-[220px] sm:max-w-md">${post.title}</span>
        </li>
      </ol>
    </div>
  </div>

  <!-- Minimal Clean Main Article Section -->
  <main class="py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        <!-- Post Main Content (8 Columns on desktop for minimal clean readability) -->
        <article class="lg:col-span-8 space-y-8" id="blogDetailArticle">
          
          <!-- Article Header Metadata -->
          <div>
            <div class="flex items-center gap-3 text-xs text-amber-400 mb-3 flex-wrap">
              <span class="px-3 py-1 rounded-full font-bold uppercase bg-amber-500/10 border border-amber-500/30 text-[11px] tracking-wider">${post.category}</span>
              <span>•</span>
              <span class="text-gray-400">${post.date}</span>
              <span>•</span>
              <span class="text-gray-400"><i class="fa-regular fa-clock mr-1 text-amber-400"></i>${post.readTime}</span>
            </div>
            <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              ${post.title}
            </h1>
          </div>

          <!-- Featured Image (Exact Match for Outside Card) -->
          <div class="rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl">
            <img src="${post.image}" 
                 alt="${post.imageAlt}" 
                 class="w-full h-[360px] sm:h-[460px] object-cover">
          </div>

          <!-- Minimal Clean Article Body -->
          <div class="prose prose-invert max-w-none text-sm sm:text-base text-gray-300 leading-relaxed space-y-6">
            
            <p class="text-base sm:text-lg text-gray-200 font-serif italic border-l-2 border-amber-400 pl-4 py-1">
              "${post.quote}"
            </p>

            <p>
              ${post.paragraphs[0]}
            </p>

            <!-- Highlights Callout Card -->
            <div class="p-6 rounded-2xl glass-dark border border-amber-500/25 my-6">
              <h4 class="font-serif text-base sm:text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
                <i class="fa-solid fa-gem text-amber-400 text-sm"></i>
                <span>${post.calloutTitle}:</span>
              </h4>
              <ul class="space-y-2.5 text-xs sm:text-sm text-gray-300">
                ${post.calloutItems.map(item => `<li class="flex items-start gap-2.5"><i class="fa-solid fa-circle-dot text-amber-400 text-[8px] mt-1.5 shrink-0"></i><span>${item}</span></li>`).join('\n                ')}
              </ul>
            </div>

            <p>
              ${post.paragraphs[1]}
            </p>

            <p>
              ${post.paragraphs[2]}
            </p>

          </div>

          <!-- Author Signature Card -->
          <div class="p-6 rounded-2xl glass-dark border border-amber-500/20 flex flex-col sm:flex-row items-center gap-5 mt-10">
            <img src="${post.author.avatar}" 
                 alt="${post.author.name}" 
                 class="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shrink-0 shadow-lg">
            <div>
              <span class="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Written by</span>
              <h4 class="font-serif text-xl font-bold text-white">${post.author.name}</h4>
              <p class="text-xs font-semibold text-amber-300 mt-0.5">${post.author.role}</p>
              <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">
                ${post.author.bio}
              </p>
            </div>
          </div>

          <!-- Working Social Share & Tags Strip -->
          <div class="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-gray-800 text-xs">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-gray-400 font-semibold">Tags:</span>
              ${post.tags.map(t => `<span class="px-2.5 py-1 rounded bg-zinc-900 border border-gray-800 text-gray-300 font-medium">${t}</span>`).join(' ')}
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-gray-400 font-semibold">Share:</span>
              <button type="button" 
                      onclick="navigator.clipboard?.writeText(window.location.href); showToast('Link Copied', 'Article link copied to clipboard!', 'info')" 
                      class="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/20 hover:bg-amber-500 hover:text-black flex items-center justify-center transition" 
                      title="Copy URL">
                <i class="fa-solid fa-link text-xs"></i>
              </button>
              <button type="button" 
                      onclick="showToast('Shared to X', 'Opening X (Twitter) share dialog...', 'info')" 
                      class="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/20 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                      title="Share to X">
                <i class="fa-brands fa-x-twitter text-xs"></i>
              </button>
              <button type="button" 
                      onclick="showToast('Shared to Facebook', 'Opening Facebook share dialog...', 'info')" 
                      class="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/20 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                      title="Share to Facebook">
                <i class="fa-brands fa-facebook-f text-xs"></i>
              </button>
            </div>
          </div>

          <!-- Working Comments Reflections Section -->
          <div class="space-y-6 pt-4">
            <h3 class="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-comments text-amber-400 text-lg"></i>
              <span>Patron Reflections (2)</span>
            </h3>
            
            <div class="space-y-3.5">
              <div class="p-4 sm:p-5 rounded-xl glass-dark border border-gray-800 text-xs space-y-1.5">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-white text-sm">Julian Vance</span>
                  <span class="text-gray-500">2 days ago</span>
                </div>
                <p class="text-gray-300 leading-relaxed">
                  "Sensational breakdown. Experiencing this above the city skyline during the sunset golden hour was truly unforgettable."
                </p>
              </div>

              <div class="p-4 sm:p-5 rounded-xl glass-dark border border-gray-800 text-xs space-y-1.5">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-white text-sm">Elena Rostova</span>
                  <span class="text-gray-500">1 day ago</span>
                </div>
                <p class="text-gray-300 leading-relaxed">
                  "The attention to sensory craftsmanship and altitude physics at AURA SKY sets a whole new benchmark for rooftop hospitality."
                </p>
              </div>
            </div>

            <!-- Working Comment Form with Live Toast -->
            <form onsubmit="event.preventDefault(); showToast('Comment Received', 'Thank you! Your reflection is awaiting moderation.', 'success'); this.reset();" 
                  class="p-5 sm:p-6 rounded-2xl glass-dark border border-amber-500/20 space-y-4">
              <h4 class="font-serif text-lg font-bold text-white">Leave a Thought</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Your Name" class="bg-black/60 border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none">
                <input type="email" required placeholder="Your Email" class="bg-black/60 border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none">
              </div>
              <textarea rows="3" required placeholder="Share your experience or inquiry..." class="w-full bg-black/60 border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none"></textarea>
              <button type="submit" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition shadow-md" style="color: #000000 !important;">
                Post Comment
              </button>
            </form>
          </div>

        </article>

        <!-- Minimal Clean Sidebar (4 Columns on desktop) -->
        <aside class="lg:col-span-4 space-y-6">
          
          <!-- Quick Navigation to All Gazette Stories -->
          <div class="p-6 rounded-2xl glass-dark border border-amber-500/20">
            <h4 class="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              All Gazette Stories
            </h4>
            <ul class="space-y-3 text-xs">
              ${POSTS.slice(0, 6).map(p => `
              <li>
                <a href="${p.file}" class="flex items-center gap-2.5 p-2 rounded-xl transition ${p.id === post.id ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'text-gray-300 hover:text-amber-400 hover:bg-zinc-900/50'}">
                  <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">${p.id}</span>
                  <span class="truncate">${p.title}</span>
                </a>
              </li>`).join('')}
            </ul>
          </div>

          <!-- Working Search Widget -->
          <div class="p-6 rounded-2xl glass-dark border border-gray-800">
            <h4 class="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-amber-400 pl-2">
              Search Gazette
            </h4>
            <div class="relative">
              <input type="text" 
                     placeholder="Search stories, recipes, craft..." 
                     onkeydown="if(event.key === 'Enter'){ showToast('Search Results', 'Showing results for: ' + this.value, 'info'); }"
                     class="w-full bg-black/60 border border-gray-700 rounded-xl py-2.5 pl-3.5 pr-8 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none">
              <i class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
            </div>
          </div>

          <!-- Quick Curated Topics -->
          <div class="p-6 rounded-2xl glass-dark border border-gray-800">
            <h4 class="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-amber-400 pl-2">
              Curated Topics
            </h4>
            <div class="flex flex-wrap gap-2 text-xs">
              <a href="blog.html" class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Mixology</a>
              <a href="blog.html" class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Binchotan</a>
              <a href="blog.html" class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#Acoustics</a>
              <a href="blog.html" class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#GrandCru</a>
              <a href="blog.html" class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-gray-800 text-gray-300 hover:border-amber-400 hover:text-amber-400 transition">#PenthouseCabanas</a>
            </div>
          </div>

        </aside>

      </div>

    </div>
  </main>

  <!-- Minimal Clean Related Stories Strip -->
  <section class="py-16 bg-black/90 border-t border-amber-500/20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest inline-block mb-2">
            <i class="fa-solid fa-book-open mr-1 text-amber-400"></i> Continue Reading
          </span>
          <h2 class="font-serif text-2xl sm:text-3xl font-bold text-white">Related <span class="gold-gradient-text">Journal Dispatches</span></h2>
        </div>
        <a href="blog.html" class="text-xs font-bold text-amber-400 hover:underline mt-3 sm:mt-0 inline-flex items-center gap-1">
          <span>View All Dispatches</span>
          <i class="fa-solid fa-arrow-right text-[10px] rtl-flip"></i>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${otherPosts.map(op => `
        <article class="bg-zinc-900/80 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400 transition flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden border-b border-amber-500/10">
              <img src="${op.image}" alt="${op.imageAlt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block mb-2">${op.category}</span>
              <h3 class="font-serif text-base font-bold text-white mb-2 line-clamp-2">
                <a href="${op.file}" class="hover:text-amber-400 transition">${op.title}</a>
              </h3>
              <p class="text-gray-400 text-xs leading-relaxed line-clamp-2">
                ${op.paragraphs[0]}
              </p>
            </div>
          </div>
          <div class="px-5 pb-5 pt-2 flex justify-between items-center text-xs">
            <span class="text-gray-400 text-[11px] font-medium">${op.author.name}</span>
            <a href="${op.file}" class="text-amber-400 font-bold hover:underline inline-flex items-center gap-1">
              <span>Read</span>
              <i class="fa-solid fa-arrow-right text-[9px] rtl-flip"></i>
            </a>
          </div>
        </article>`).join('')}
      </div>

    </div>
  </section>

  <!-- Universal Footer -->
  <footer class="bg-black text-gray-400 text-xs border-t border-amber-500/20 pt-16 pb-12"
    style="background-color: #000000 !important; background: #000000 !important;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">

        <!-- Brand Info -->
        <div class="lg:col-span-2 space-y-4">
          <a href="index.html" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-gold-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition shrink-0">
              <div class="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                <i class="fa-solid fa-martini-glass-citrus text-amber-400 text-base group-hover:rotate-12 transition duration-300"></i>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="font-display text-xl font-bold tracking-widest text-white group-hover:text-amber-400 transition leading-none">AURA SKY</span>
              <span class="text-[9px] uppercase tracking-[0.25em] text-amber-400 font-semibold mt-1">Rooftop &amp; Lounge</span>
            </div>
          </a>
          <p class="text-gray-400 text-xs leading-relaxed max-w-sm">
            Ascend to the 54th floor for wood-fired culinary artistry, rare cellar allocations, and panoramic twilight horizons above the metropolis.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-serif text-sm font-bold mb-4 uppercase tracking-wider border-l-2 border-amber-400 pl-2">Navigation</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="hover:text-amber-400 transition">Classic Rooftop</a></li>
            <li><a href="about.html" class="hover:text-amber-400 transition">About Us</a></li>
            <li><a href="menu.html" class="hover:text-amber-400 transition">A la Carte Menu</a></li>
            <li><a href="events.html" class="hover:text-amber-400 transition">Events &amp; Music</a></li>
            <li><a href="blog.html" class="hover:text-amber-400 transition">Skyline Gazette</a></li>
            <li><a href="contact.html" class="hover:text-amber-400 transition">Contact Concierge</a></li>
          </ul>
        </div>

        <!-- Hours & Location -->
        <div>
          <h4 class="text-white font-serif text-sm font-bold mb-4 uppercase tracking-wider border-l-2 border-amber-400 pl-2">Hours</h4>
          <ul class="space-y-2 text-gray-400">
            <li><span class="text-white font-semibold block">Dinner &amp; Raw Bar:</span> Daily 5:00 PM – 11:00 PM</li>
            <li><span class="text-white font-semibold block">Twilight Lounge (21+):</span> Nightly 9:00 PM – 2:00 AM</li>
            <li><span class="text-white font-semibold block">Weekend Brunch:</span> Sat &amp; Sun 11:00 AM – 3:30 PM</li>
          </ul>
        </div>

        <!-- Contact & Reservations -->
        <div>
          <h4 class="text-white font-serif text-sm font-bold mb-4 uppercase tracking-wider border-l-2 border-amber-400 pl-2">Reservations</h4>
          <p class="text-gray-400 leading-relaxed mb-3">
            5400 Skyline Blvd, Penthouse Level<br>Metropolis Tower
          </p>
          <a href="mailto:concierge@auraskyrooftop.com" class="text-amber-400 hover:underline block font-semibold">concierge@auraskyrooftop.com</a>
          <span class="text-gray-400 block mt-1">+1 (555) 839-2872</span>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px]">
        <p>&copy; 2026 AURA SKY Rooftop &amp; Lounge. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="privacy.html" class="hover:text-amber-400 transition">Privacy Policy</a>
          <a href="terms.html" class="hover:text-amber-400 transition">Terms of Service</a>
          <a href="accessibility.html" class="hover:text-amber-400 transition">Accessibility</a>
        </div>
      </div>

    </div>
  </footer>

  <!-- Scripts -->
  <script src="assets/js/main.js?v=50"></script>
</body>
</html>`;
}

// Generate all individual blog detail pages
POSTS.forEach(post => {
  const content = generateBlogDetailsHtml(post);
  fs.writeFileSync(post.file, content, 'utf8');
  console.log(`Generated separate page: ${post.file}`);
});

// Also create blog-details.html (defaults to Post 1)
const defaultDetailsContent = generateBlogDetailsHtml(POSTS[0]);
fs.writeFileSync('blog-details.html', defaultDetailsContent, 'utf8');
console.log('Updated blog-details.html to clean minimal structure of Post 1');

// Now update blog.html so all 6 cards link to their separate pages
let blogHtml = fs.readFileSync('blog.html', 'utf8');

// Replace blog-details.html?id=1 with blog-details-1.html, etc.
for (let i = 1; i <= 6; i++) {
  const target1 = `href="blog-details.html?id=${i}"`;
  const repl1 = `href="blog-details-${i}.html"`;
  blogHtml = blogHtml.split(target1).join(repl1);
}
// Replace feature id=7
blogHtml = blogHtml.split('href="blog-details.html?id=7"').join('href="blog-details-7.html"');

fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Successfully updated blog.html cards to link to separate pages!');

