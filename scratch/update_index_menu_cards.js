const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

const targetSectionStart = '<!-- Menu Items Grid -->';
const targetSectionEnd = '<!-- View Complete Menu CTA -->';

const startIndex = content.indexOf(targetSectionStart);
const endIndex = content.indexOf(targetSectionEnd);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find target boundaries');
  process.exit(1);
}

const replacement = `<!-- Menu Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Item 1: Cocktails -->
        <div
          class="menu-item-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate group"
          data-category="cocktails">
          <div class="relative h-60 overflow-hidden">
            <img src="assets/images/home/aurora-54-spritz-26833229.jpg" alt="Aurora 54 Spritz cocktail at a rooftop bar"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span
              class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">$29</span>
            <span
              class="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500 text-black">Rooftop
              Signature</span>
          </div>
          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-white mb-1">Aurora 54 Spritz</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-4">London dry gin, blood-orange cordial, elderflower tonic,
              and prosecco finished with rosemary smoke and a single clear ice column.</p>
            <div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5"><i
                  class="fa-solid fa-sun mr-1"></i> Sunset Pour</span>
            </div>
          </div>
        </div>

        <!-- Item 2: Cocktails -->
        <div
          class="menu-item-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate group"
          data-category="cocktails">
          <div class="relative h-60 overflow-hidden">
            <img src="assets/images/home/cedar-fig-negroni-34437244.jpg"
              alt="Cedar and fig negroni with an orange twist"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span
              class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">$27</span>
          </div>
          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-white mb-1">Cedar &amp; Fig Negroni</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-4">Cedar-aged Campari, fig-infused London dry gin, and
              Antica Formula vermouth with torched orange oils and a smoked salt rim.</p>
            <div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5"><i
                  class="fa-solid fa-fire mr-1"></i> Cedar-Smoked</span>
            </div>
          </div>
        </div>

        <!-- Item 3: Tapas -->
        <div
          class="menu-item-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate group"
          data-category="tapas">
          <div class="relative h-60 overflow-hidden">
            <img src="assets/images/home/charred-octopus-37068830.jpg" alt="Charred octopus tapas on an elegant plate"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span
              class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">$32</span>
            <span
              class="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500 text-black">Coastal
              Tapas</span>
          </div>
          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-white mb-1">Charred Octopus &amp; Saffron Aioli</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-4">Binchotan-charred Galician octopus, saffron potato
              foam, smoked paprika oil, and pickled padrón peppers.</p>
            <div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5"><i
                  class="fa-solid fa-fire mr-1"></i> Binchotan Charred</span>
            </div>
          </div>
        </div>

        <!-- Item 4: Mains -->
        <div
          class="menu-item-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate group"
          data-category="mains">
          <div class="relative h-60 overflow-hidden">
            <img src="assets/images/home/binchotan-lamb-35619348.jpg" alt="Binchotan grilled lamb rack with sauce"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span
              class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">$68</span>
            <span
              class="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500 text-black">Charcoal
              Grill</span>
          </div>
          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-white mb-1">Binchotan Lamb Rack</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-4">Herb-crusted lamb rack over Japanese binchotan,
              smoked aubergine purée, charred spring onions, and pomegranate jus.</p>
            <div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5"><i
                  class="fa-solid fa-fire mr-1"></i> Open-Fire Grill</span>
            </div>
          </div>
        </div>

        <!-- Item 5: Mains -->
        <div
          class="menu-item-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate group"
          data-category="mains">
          <div class="relative h-60 overflow-hidden">
            <img src="assets/images/home/saffron-lobster-risotto-12097598.jpg" alt="Saffron lobster risotto with prawns"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span
              class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">$58</span>
          </div>
          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-white mb-1">Saffron Lobster Risotto</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-4">Carnaroli rice, blue lobster bisque, saffron butter,
              mascarpone, preserved lemon, and a touch of Espelette pepper.</p>
            <div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5"><i
                  class="fa-solid fa-fish mr-1"></i> Lobster Bisque</span>
            </div>
          </div>
        </div>

        <!-- Item 6: Wines -->
        <div
          class="menu-item-card rounded-2xl glass-dark border border-amber-500/20 overflow-hidden hover-elevate group"
          data-category="wines">
          <div class="relative h-60 overflow-hidden">
            <img src="assets/images/home/ruinart-champagne-29811323.jpg"
              alt="Champagne bottles chilling in an ice bucket"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span
              class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">$240</span>
          </div>
          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-white mb-1">Ruinart Blanc de Blancs NV</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-4">White peach, jasmine blossom, crushed chalk, and a
              fine mineral mousse, poured tableside in crystal flutes.</p>
            <div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5"><i
                  class="fa-solid fa-champagne-glasses mr-1"></i> 100% Chardonnay</span>
            </div>
          </div>
        </div>
      </div>

      `;

const newContent = content.slice(0, startIndex) + replacement + content.slice(endIndex);
fs.writeFileSync(file, newContent, 'utf8');
console.log('Successfully updated index.html menu section cards.');

