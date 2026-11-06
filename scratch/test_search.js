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

function searchArticles(q) {
  const query = q.toLowerCase().trim();
  if (!query) return [];
  return AURA_BLOG_ARTICLES.filter(art => {
    return art.title.toLowerCase().includes(query) ||
           art.category.toLowerCase().includes(query) ||
           art.author.toLowerCase().includes(query) ||
           art.excerpt.toLowerCase().includes(query) ||
           art.topics.some(t => t.includes(query) || query.includes(t));
  });
}

console.log('Search "mixology":', searchArticles('mixology').map(a => a.title));
console.log('Search "binchotan":', searchArticles('binchotan').map(a => a.title));
console.log('Search "wine":', searchArticles('wine').map(a => a.title));
console.log('Search "cabana":', searchArticles('cabana').map(a => a.title));

