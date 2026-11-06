const fs = require('fs');

// 1. Update blog.html
let html = fs.readFileSync('blog.html', 'utf8');

const targetSection = `<!-- Extra Section 2: The VIP Skyline Dispatch Club (Newsletter & Private Journal Access) -->
  <section class="py-20 bg-zinc-950/90 border-t border-amber-500/15 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">

      <span
        class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest inline-block mb-3">
        <i class="fa-solid fa-envelope-open-text mr-1 text-amber-400"></i> The Private Dispatch
      </span>
      <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Subscribe to the <span class="gold-gradient-text">Skyline Gazette</span>
      </h2>
      <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
        Join 14,000+ patrons receiving our bi-weekly tasting notes, sommelier vintage releases, and confidential
        guestlist invitations.
      </p>

      <form
        onsubmit="event.preventDefault(); showToast('Subscribed to Gazette', 'Welcome to the inner circle. Check your inbox for the welcome vintage credit.', 'success'); this.reset();"
        class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
        <input type="email" required placeholder="Enter your email address"
          class="flex-1 bg-black/80 border border-gray-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition">
        <button type="submit"
          class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shrink-0 shadow-lg shadow-amber-500/20"
          style="color: #000000 !important;">
          Subscribe
        </button>
      </form>
      <span class="text-gray-500 text-xs"><i class="fa-solid fa-lock mr-1 text-amber-400"></i> Discretion guaranteed. We
        never share your contact details.</span>

    </div>
  </section>`;

const newSection = `<!-- Extra Section 2: The VIP Skyline Dispatch Club (Newsletter Box Container) -->
  <section class="py-16 sm:py-24 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-amber-500/20 relative overflow-hidden">
    <!-- Subtle ambient background radial glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

      <!-- Luxury Box Container -->
      <div class="skyline-gazette-box relative rounded-3xl p-8 sm:p-12 lg:p-14 text-center overflow-hidden border border-amber-500/30 shadow-2xl">
        
        <!-- Glowing corner accents -->
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-2xl mx-auto">
          
          <!-- Badge -->
          <span
            class="gazette-badge px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-4 shadow-sm">
            <i class="fa-solid fa-envelope-open-text text-amber-400"></i> The Private Dispatch
          </span>

          <!-- Heading -->
          <h2 class="gazette-title font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
            Subscribe to the <span class="gold-gradient-text">Skyline Gazette</span>
          </h2>

          <!-- Description -->
          <p class="gazette-desc text-sm sm:text-base leading-relaxed mb-6 font-light">
            Join 14,000+ patrons receiving our bi-weekly tasting notes, sommelier vintage releases, and confidential guestlist invitations.
          </p>

          <!-- VIP Perks Row -->
          <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 text-xs gazette-perks">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full">
              <i class="fa-solid fa-champagne-glasses text-amber-400 text-[11px]"></i>
              <span>Rare Cellar Releases</span>
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full">
              <i class="fa-solid fa-bell-concierge text-amber-400 text-[11px]"></i>
              <span>48-Hr Priority Tables</span>
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full">
              <i class="fa-solid fa-gem text-amber-400 text-[11px]"></i>
              <span>Secret Guestlists</span>
            </span>
          </div>

          <!-- Subscription Form inside Box Container -->
          <form
            onsubmit="event.preventDefault(); showToast('Subscribed to Gazette', 'Welcome to the inner circle. Check your inbox for the welcome vintage credit.', 'success'); this.reset();"
            class="gazette-form flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-5 p-1.5 rounded-2xl">
            <div class="relative flex-1 flex items-center">
              <i class="fa-solid fa-envelope absolute left-4 text-gray-500 text-xs gazette-input-icon"></i>
              <input type="email" required placeholder="Enter your email address"
                class="gazette-input w-full rounded-xl pl-10 pr-4 py-3.5 text-sm outline-none transition">
            </div>
            <button type="submit"
              class="gazette-btn px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shrink-0 shadow-lg flex items-center justify-center gap-2">
              <i class="fa-solid fa-paper-plane text-black"></i>
              <span>Subscribe</span>
            </button>
          </form>

          <!-- Discretion guarantee -->
          <div class="flex items-center justify-center gap-2 text-xs gazette-footer-note">
            <i class="fa-solid fa-lock text-amber-400 text-[11px]"></i>
            <span>Discretion guaranteed. We never share your contact details.</span>
          </div>

        </div>

      </div>

    </div>
  </section>`;

if (html.includes(targetSection)) {
  html = html.replace(targetSection, newSection);
  fs.writeFileSync('blog.html', html, 'utf8');
  console.log('Successfully redesigned Skyline Gazette section as box container in blog.html!');
} else {
  console.error('Target section not found in blog.html');
}

// 2. Append CSS rules to assets/css/style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const gazetteBoxCss = `

/* 30. SKYLINE GAZETTE BOX CONTAINER (LUXURY BOX REDESIGN) */
.skyline-gazette-box {
  background: linear-gradient(145deg, rgba(15, 20, 32, 0.92), rgba(7, 9, 14, 0.96)) !important;
  border: 1px solid rgba(212, 175, 55, 0.35) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.12) !important;
}

.skyline-gazette-box .gazette-badge {
  background: rgba(245, 158, 11, 0.12) !important;
  border: 1px solid rgba(245, 158, 11, 0.35) !important;
  color: #FCD34D !important;
}

.skyline-gazette-box .gazette-title {
  color: #FFFFFF !important;
}

.skyline-gazette-box .gazette-desc {
  color: #CBD5E1 !important;
}

.skyline-gazette-box .gazette-perks span {
  background: rgba(245, 158, 11, 0.08) !important;
  border: 1px solid rgba(245, 158, 11, 0.25) !important;
  color: #E2E8F0 !important;
}

.skyline-gazette-box .gazette-form {
  background: rgba(0, 0, 0, 0.5) !important;
  border: 1px solid rgba(212, 175, 55, 0.25) !important;
}

.skyline-gazette-box .gazette-input {
  background: rgba(0, 0, 0, 0.7) !important;
  border: 1px solid rgba(212, 175, 55, 0.2) !important;
  color: #FFFFFF !important;
}

.skyline-gazette-box .gazette-input::placeholder {
  color: #64748B !important;
}

.skyline-gazette-box .gazette-input:focus {
  border-color: #F59E0B !important;
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2) !important;
}

.skyline-gazette-box .gazette-btn {
  background: linear-gradient(135deg, #FCD34D 0%, #D4AF37 50%, #B45309 100%) !important;
  color: #000000 !important;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3) !important;
}

.skyline-gazette-box .gazette-btn:hover {
  background: linear-gradient(135deg, #FDE68A 0%, #E5C468 50%, #D97706 100%) !important;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.45) !important;
  transform: translateY(-1px);
}

.skyline-gazette-box .gazette-btn i {
  color: #000000 !important;
}

.skyline-gazette-box .gazette-footer-note {
  color: #94A3B8 !important;
}

/* Light Theme Box Container: Pure Frosted White Luxury with Crisp Slate Contrast */
html.light .skyline-gazette-box,
html:not(.dark) .skyline-gazette-box,
body.light .skyline-gazette-box {
  background: rgba(255, 255, 255, 0.96) !important;
  border: 1.5px solid rgba(212, 175, 55, 0.45) !important;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 0 35px rgba(212, 175, 55, 0.15) !important;
}

html.light .skyline-gazette-box .gazette-badge,
html:not(.dark) .skyline-gazette-box .gazette-badge,
body.light .skyline-gazette-box .gazette-badge {
  background: #FEF3C7 !important;
  border: 1px solid #F59E0B !important;
  color: #92400E !important;
}

html.light .skyline-gazette-box .gazette-title,
html:not(.dark) .skyline-gazette-box .gazette-title,
body.light .skyline-gazette-box .gazette-title {
  color: #0F172A !important;
}

html.light .skyline-gazette-box .gazette-desc,
html:not(.dark) .skyline-gazette-box .gazette-desc,
body.light .skyline-gazette-box .gazette-desc {
  color: #475569 !important;
}

html.light .skyline-gazette-box .gazette-perks span,
html:not(.dark) .skyline-gazette-box .gazette-perks span,
body.light .skyline-gazette-box .gazette-perks span {
  background: #F8FAFC !important;
  border: 1px solid rgba(212, 175, 55, 0.35) !important;
  color: #334155 !important;
}

html.light .skyline-gazette-box .gazette-form,
html:not(.dark) .skyline-gazette-box .gazette-form,
body.light .skyline-gazette-box .gazette-form {
  background: #F1F5F9 !important;
  border: 1px solid rgba(212, 175, 55, 0.3) !important;
}

html.light .skyline-gazette-box .gazette-input,
html:not(.dark) .skyline-gazette-box .gazette-input,
body.light .skyline-gazette-box .gazette-input {
  background: #FFFFFF !important;
  border: 1px solid rgba(212, 175, 55, 0.35) !important;
  color: #0F172A !important;
}

html.light .skyline-gazette-box .gazette-input::placeholder,
html:not(.dark) .skyline-gazette-box .gazette-input::placeholder,
body.light .skyline-gazette-box .gazette-input::placeholder {
  color: #94A3B8 !important;
}

html.light .skyline-gazette-box .gazette-footer-note,
html:not(.dark) .skyline-gazette-box .gazette-footer-note,
body.light .skyline-gazette-box .gazette-footer-note {
  color: #64748B !important;
}

/* RTL Support for Gazette Input Icon & Padding */
html[dir="rtl"] .gazette-input-icon {
  left: auto !important;
  right: 1rem !important;
}

html[dir="rtl"] .gazette-input {
  padding-left: 1rem !important;
  padding-right: 2.5rem !important;
  text-align: right !important;
}
`;

css += gazetteBoxCss;
fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Successfully appended skyline-gazette-box CSS to style.css!');

