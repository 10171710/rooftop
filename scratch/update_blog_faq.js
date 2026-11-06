const fs = require('fs');

let html = fs.readFileSync('blog.html', 'utf8');

const faqSection = `  <!-- FAQ Section: Frequently Asked Questions -->
  <section class="py-20 bg-black/90 border-t border-amber-500/20 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">

      <div class="text-center mb-14">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest inline-block mb-3">
          <i class="fa-solid fa-circle-question mr-1 text-amber-400"></i> Guest Inquiries
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Frequently Asked <span class="gold-gradient-text">Questions</span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about rooftop dining, sunset cabana reservations, sommelier cellar flights, and skyline lounge etiquette.
        </p>
      </div>

      <div class="space-y-4">

        <!-- FAQ 1 -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-calendar-check text-amber-400 text-sm"></i>
              How far in advance should I reserve dining or VIP sunset cabanas?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Standard dining reservations open 30 days in advance at 9:00 AM daily. Private sunset cabanas and chef’s tasting table seatings typically book 2–3 weeks prior. Walk-in guests are welcomed at the Sunset Raw Bar on a space-available basis.
          </div>
        </details>

        <!-- FAQ 2 -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-vest-patches text-amber-400 text-sm"></i>
              What is the dress code policy on the 54th floor terrace?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            We observe an elegant evening attire policy. Collared shirts, tailored jackets, and elevated footwear are encouraged. We do not permit athletic wear, flip-flops, beachwear, or distressed apparel after 6:00 PM.
          </div>
        </details>

        <!-- FAQ 3 -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-cloud-showers-heavy text-amber-400 text-sm"></i>
              How does the rooftop operate during rain or high wind conditions?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Our 54th-floor terrace is equipped with a German-engineered motorized bioclimatic glass roof that closes within 45 seconds. Guests continue enjoying uninterrupted 360-degree skyline views in climate-controlled warmth regardless of precipitation.
          </div>
        </details>

        <!-- FAQ 4 -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-champagne-glasses text-amber-400 text-sm"></i>
              Are minors permitted in the dining room and cocktail lounge?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Guests of all ages are welcome in the fine dining restaurant between 5:00 PM and 9:00 PM. Beginning at 9:00 PM nightly, both the lounge deck and main terrace transition to a strict 21+ adult venue with government photo ID verification at the reception foyer.
          </div>
        </details>

        <!-- FAQ 5 -->
        <details class="group bg-zinc-900/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-400/50 transition">
          <summary class="flex justify-between items-center cursor-pointer list-none text-white font-bold text-sm sm:text-base select-none">
            <span class="flex items-center gap-3">
              <i class="fa-solid fa-building-columns text-amber-400 text-sm"></i>
              Can I organize private corporate buyouts or brand takeovers at AURA SKY?
            </span>
            <span class="text-amber-400 transition-transform duration-300 group-open:rotate-180">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <div class="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-xs sm:text-sm leading-relaxed">
            Yes. We offer bespoke buyout packages for luxury product launches, corporate galas, and private weddings accommodating up to 350 guests. Early daylight hours are also available for commercial film permits and editorial fashion shoots.
          </div>
        </details>

      </div>

    </div>
  </section>

`;

// 1. Remove Extra Section 3 (Explore Topics)
const exploreStart = html.indexOf('<!-- Extra Section 3: Explore by Culinary Discipline & Sensory Topics -->');
const footerStart = html.indexOf('<!-- Universal Footer -->');

if (exploreStart !== -1 && footerStart !== -1) {
  html = html.substring(0, exploreStart) + html.substring(footerStart);
  console.log('Successfully removed Explore Topics section!');
} else {
  console.error('Could not find Explore Topics boundaries:', { exploreStart, footerStart });
}

// 2. Insert FAQ section before The Private Dispatch
const dispatchComment = '<!-- Extra Section 2: The VIP Skyline Dispatch Club (Newsletter & Private Journal Access) -->';
const dispatchIdx = html.indexOf(dispatchComment);

if (dispatchIdx !== -1) {
  html = html.substring(0, dispatchIdx) + faqSection + html.substring(dispatchIdx);
  console.log('Successfully inserted FAQ section before The Private Dispatch!');
} else {
  console.error('Could not find The Private Dispatch comment!');
}

fs.writeFileSync('blog.html', html, 'utf8');
console.log('Saved blog.html successfully!');

