const fs = require('fs');

const file = 'index-2.html';
let content = fs.readFileSync(file, 'utf8');

const target = `  <!-- Dress Code & House Rules -->
  <section class="py-16 bg-black/80 border-t border-amber-500/15">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <span class="text-xs uppercase font-bold text-amber-400 tracking-widest block mb-2">Atmosphere & Courtesy</span>
      <h3 class="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">Dress Code & Entry Policy</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div class="p-5 rounded-xl glass-dark border border-white/5">
          <div class="text-amber-400 font-bold text-xs uppercase mb-1"><i class="fa-solid fa-shirt mr-1"></i> Smart
            Elegant Attire</div>
          <p class="text-xs text-gray-400 leading-relaxed">Collared shirts, tailored blazers, dresses, upscale shoes. No
            athletic wear, flip-flops, or baseball caps after 7 PM.</p>
        </div>
        <div class="p-5 rounded-xl glass-dark border border-white/5">
          <div class="text-amber-400 font-bold text-xs uppercase mb-1"><i class="fa-solid fa-id-card mr-1"></i> Age &
            Valid ID</div>
          <p class="text-xs text-gray-400 leading-relaxed">21+ strictly enforced after 9:00 PM for all lounge areas.
            Government-issued photo identification required at door.</p>
        </div>
        <div class="p-5 rounded-xl glass-dark border border-white/5">
          <div class="text-amber-400 font-bold text-xs uppercase mb-1"><i class="fa-solid fa-camera mr-1"></i>
            Photography Courtesy</div>
          <p class="text-xs text-gray-400 leading-relaxed">Skyline photography welcomed. Professional tripod equipment
            or intrusive flash photography requires prior press clearance.</p>
        </div>
      </div>
    </div>
  </section>`;

const replacement = `  <!-- Frequently Asked Questions & Guest Guidelines -->
  <section class="py-20 bg-black/80 border-t border-amber-500/15 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      
      <div class="text-center mb-14">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest inline-block mb-3">
          <i class="fa-solid fa-circle-question mr-1 text-amber-400"></i> Guest Guidelines
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Frequently Asked <span class="gold-gradient-text">Questions</span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
          Essential information regarding our dress code, door entry policies, VIP table reservations, and rooftop lounge etiquette.
        </p>
      </div>

      <div class="space-y-4">
        
        <!-- FAQ 1: Dress Code -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-shirt text-amber-400 text-sm"></i>
              What is the dress code for the Sunset Lounge & Nightlife Sessions?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            We observe a smart-casual to cocktail-evening attire standard. Collared shirts, tailored jackets, dresses, and upscale designer footwear are warmly encouraged. Athletic wear, gym shorts, sweatpants, beachwear, flip-flops, and sports baseball caps are strictly prohibited after 7:00 PM.
          </div>
        </details>

        <!-- FAQ 2: Age & Door Policy -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-id-card text-amber-400 text-sm"></i>
              What are the age restrictions and door entry policies?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Starting at 9:00 PM nightly, both the open-air skydeck and indoor twilight lounge transition to a strictly 21+ venue. All guests must present a valid government-issued physical photo ID or passport at the reception foyer before accessing the high-speed elevators. Door host discretion applies at all times.
          </div>
        </details>

        <!-- FAQ 3: Bottle Service & VIP Tables -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-champagne-glasses text-amber-400 text-sm"></i>
              How do VIP Bottle Service reservations and table minimums work?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            VIP tables and heated skyline cabana suites require a pre-authorized beverage minimum spend based on party size, booth location, and resident DJ talent. Every booking includes a dedicated private hostess, custom mixers, priority elevator express escort, and unobstructed skyline views.
          </div>
        </details>

        <!-- FAQ 4: Weather & Retractable Deck -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-cloud-sun-rain text-amber-400 text-sm"></i>
              What happens if there is sudden rain or high winds on the terrace?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Our 54th-floor terrace is engineered with an acoustic motorized bioclimatic glass roof that closes seamlessly within 45 seconds. Guests continue to enjoy their cocktails, bottle service, and panoramic 360° city lights in climate-controlled warmth regardless of precipitation.
          </div>
        </details>

        <!-- FAQ 5: Photography & Courtesy -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-camera text-amber-400 text-sm"></i>
              Can guests take photos and videos during performances?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Smartphone photography and casual social video captures are warmly welcomed. However, commercial video equipment, professional DSLR cameras, tripods, and external lighting rigs require advance written accreditation from our media relations team to protect guest privacy.
          </div>
        </details>

      </div>
    </div>
  </section>`;

if (!content.includes(target)) {
  console.error('Target section not found in index-2.html');
  process.exit(1);
}

content = content.replace(target, replacement);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully replaced Dress Code section with FAQ in index-2.html');

