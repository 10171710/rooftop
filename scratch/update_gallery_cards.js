const fs = require('fs');
let html = fs.readFileSync('gallery.html', 'utf8');

const oldGridStart = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`;
const oldGridEnd = `<!-- Extra Section 1: Virtual 360° Skydeck Interactive Panoramic Preview -->`;

const startIndex = html.indexOf(oldGridStart);
const endIndex = html.indexOf(oldGridEnd);

if (startIndex === -1 || endIndex === -1) {
  console.log('Error: Could not locate gallery grid in gallery.html');
  process.exit(1);
}

const newGridContent = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Photo 1: Skyline -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="skyline" data-title="Panoramic 54th Floor Terrace Sunset">
          <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85" alt="Panoramic 54th Floor Terrace Sunset" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Terrace Edge</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Panoramic 54th Floor Sunset</h4>
            </div>
          </div>
        </div>

        <!-- Photo 2: Culinary -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="culinary" data-title="Miyazaki Wagyu A5 &amp; Winter Truffle">
          <img src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85" alt="Miyazaki Wagyu A5 Striploin Plating" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Culinary Art</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Miyazaki Wagyu A5 &amp; Winter Truffle</h4>
            </div>
          </div>
        </div>

        <!-- Photo 3: Cocktails -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="cocktails" data-title="Celestial 24k Gold Flake Martini">
          <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=85" alt="Celestial 24k Gold Flake Martini" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Signature Mixology</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Celestial 24k Gold Flake Martini</h4>
            </div>
          </div>
        </div>

        <!-- Photo 4: Nightlife -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="nightlife" data-title="Friday Skyline DJ Sessions">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85" alt="Friday Skyline DJ Sessions" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Nightlife</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Friday Skyline DJ Sessions</h4>
            </div>
          </div>
        </div>

        <!-- Photo 5: Skyline -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="skyline" data-title="Midnight Skyline from Lounge Bar">
          <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85" alt="Midnight Skyline from Lounge Bar" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">City Lights</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Midnight Skyline from Lounge Bar</h4>
            </div>
          </div>
        </div>

        <!-- Photo 6: Culinary -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="culinary" data-title="Hokkaido Scallop Crudo &amp; Caviar">
          <img src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=1200&q=85" alt="Hokkaido Scallop Crudo &amp; Caviar" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Raw Bar</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Hokkaido Scallop Crudo &amp; Caviar</h4>
            </div>
          </div>
        </div>

        <!-- Photo 7: Cocktails -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="cocktails" data-title="Obsidian Hickory Wood Smoke Infusion">
          <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=85" alt="Obsidian Hickory Wood Smoke Infusion" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Mixology Lab</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Obsidian Hickory Wood Smoke Infusion</h4>
            </div>
          </div>
        </div>

        <!-- Photo 8: Skyline / VIP Cabana -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="skyline" data-title="Penthouse Skyline Cabana Suite">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85" alt="Penthouse Skyline Cabana Suite" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">VIP Cabana</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">Penthouse Skyline Cabana Suite</h4>
            </div>
          </div>
        </div>

        <!-- Photo 9: Nightlife / Live Music -->
        <div class="gallery-card relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-amber-500/20" data-category="nightlife" data-title="The Skyline Acoustic Jazz Trio">
          <img src="https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=1200&q=85" alt="The Skyline Acoustic Jazz Trio" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="gallery-card-scrim absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 flex items-end transition duration-300">
            <div class="gallery-info-badge w-full p-3 rounded-xl">
              <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider block mb-0.5">Live Music</span>
              <h4 class="font-serif text-sm sm:text-base font-bold text-white leading-snug">The Skyline Acoustic Jazz Trio</h4>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  `;

html = html.substring(0, startIndex) + newGridContent + html.substring(endIndex);
fs.writeFileSync('gallery.html', html, 'utf8');
console.log('Successfully updated all 9 gallery cards in gallery.html with unique photos & clear hover overlay!');

