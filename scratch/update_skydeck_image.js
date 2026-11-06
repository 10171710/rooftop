const fs = require('fs');

const file = 'about.html';
let content = fs.readFileSync(file, 'utf8');

const target = `        <!-- Visual Architectural Showcase -->
        <div class="lg:col-span-5 relative">
          <div class="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80" 
              alt="AURA SKY High-Altitude Terrace Architecture" 
              class="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-widest inline-block mb-2">
                Bioclimatic Engineering
              </span>
              <h4 class="text-white font-serif text-xl font-bold">54th Floor Skydeck Anatomy</h4>
              <p class="text-gray-300 text-xs mt-1">Dual-level climate-controlled pavilion with seamless open-air terrace flow.</p>
            </div>
          </div>
        </div>`;

const replacement = `        <!-- Visual Architectural Showcase -->
        <div class="lg:col-span-5 relative">
          <div class="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=90" 
              alt="AURA SKY High-Altitude Terrace Architecture" 
              class="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              style="filter: none !important; -webkit-filter: none !important;">
            <div class="absolute inset-0 pointer-events-none"
              style="background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.05) 70%, transparent 100%) !important;"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-widest inline-block mb-2">
                Bioclimatic Engineering
              </span>
              <h4 class="font-serif text-xl font-bold" style="color: #FFFFFF !important; -webkit-text-fill-color: #FFFFFF !important;">54th Floor Skydeck Anatomy</h4>
              <p class="text-xs mt-1 leading-relaxed" style="color: #E2E8F0 !important;">Dual-level climate-controlled pavilion with seamless open-air terrace flow.</p>
            </div>
          </div>
        </div>`;

if (!content.includes(target)) {
  console.error('Target block not found in about.html');
  process.exit(1);
}

content = content.replace(target, replacement);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated Skydeck Anatomy image in about.html');

