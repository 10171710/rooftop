const fs = require('fs');

// 1. Update about.html
const aboutPath = 'about.html';
let about = fs.readFileSync(aboutPath, 'utf8');

const aboutTarget = `        <p class="contact-hero-desc text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The story of how an ambitious architectural dream on the 54th floor became one of the world's most sought-after
          culinary and nightlife destinations.
        </p>
      </div>`;

const aboutReplacement = `        <p class="contact-hero-desc text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The story of how an ambitious architectural dream on the 54th floor became one of the world's most sought-after
          culinary and nightlife destinations.
        </p>

        <!-- Social Proof & Ratings Row -->
        <div class="pt-6 mt-6 border-t border-amber-500/20 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <div class="flex items-center -space-x-2">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=85"
              alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=85"
              alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85"
              alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
            <div
              class="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center text-[10px] font-bold text-amber-300">
              +4K</div>
          </div>
          <div class="text-left">
            <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span class="text-white ml-1 font-semibold">4.9 / 5</span>
            </div>
            <span class="text-[11px] text-gray-300">Over 45,000+ Sunset Cocktails Served</span>
          </div>
        </div>
      </div>`;

if (!about.includes(aboutTarget)) {
  console.error('Target not found in about.html');
  process.exit(1);
}

about = about.replace(aboutTarget, aboutReplacement);
fs.writeFileSync(aboutPath, about, 'utf8');
console.log('Successfully added social proof row to about.html.');

// 2. Update index-2.html avatars
const index2Path = 'index-2.html';
let index2 = fs.readFileSync(index2Path, 'utf8');

const oldAvatars = `<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85"
                alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85"
                alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85"
                alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">`;

const newAvatars = `<img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=85"
                alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
              <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=85"
                alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85"
                alt="Guest" class="w-8 h-8 rounded-full object-cover border-2 border-amber-500/40">`;

if (index2.includes(oldAvatars)) {
  index2 = index2.replace(oldAvatars, newAvatars);
  fs.writeFileSync(index2Path, index2, 'utf8');
  console.log('Successfully updated avatars in index-2.html.');
} else {
  console.log('Could not find old avatars in index-2.html, checking if already updated.');
}

