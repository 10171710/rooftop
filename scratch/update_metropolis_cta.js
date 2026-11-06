const fs = require('fs');

const file = 'index-2.html';
let content = fs.readFileSync(file, 'utf8');

const target = `        <div class="flex items-center gap-3 shrink-0">
          <a href="pricing.html" class="px-5 py-2.5 rounded-lg border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 text-xs font-bold uppercase tracking-wider transition">
            View Table Packages
          </a>
          <button type="button" data-open-reservation class="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20" style="color: #000000 !important;">
            Reserve VIP Table
          </button>
        </div>`;

const replacement = `        <div class="flex items-center gap-3 shrink-0">
          <a href="contact.html" class="px-5 py-2.5 rounded-lg border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 text-xs font-bold uppercase tracking-wider transition">
            Inquire &amp; Contact
          </a>
          <a href="contact.html" class="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 inline-flex items-center gap-2" style="color: #000000 !important;">
            <span>Reserve VIP Table</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>`;

if (!content.includes(target)) {
  console.error('Target CTA block not found in index-2.html');
  process.exit(1);
}

content = content.replace(target, replacement);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated Experience Metropolis After Dark CTA to navigate to contact.html in index-2.html');
