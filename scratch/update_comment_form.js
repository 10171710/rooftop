const fs = require('fs');
const files = ['blog-details.html', ...Array.from({length: 7}, (_, i) => 'blog-details-' + (i+1) + '.html')];

const oldFormPattern = /<!-- Working Comment Form with Live Toast -->[\s\S]*?<\/form>/;

const newFormBlock = `<!-- Working Comment Form with Live Toast -->
            <form onsubmit="event.preventDefault(); window.submitCommentForm(this);" 
                  class="p-5 sm:p-6 rounded-2xl glass-dark border border-amber-500/20 space-y-4">
              <h4 class="font-serif text-lg font-bold text-white">Leave a Thought</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" 
                         name="fullname"
                         required 
                         minlength="2" 
                         placeholder="Full Name (Min. 2 letters) *" 
                         title="Full Name is mandatory and must contain at least 2 letters"
                         class="w-full bg-black/60 border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none transition">
                  <span class="text-[10px] text-gray-400 mt-1 block pl-1">Mandatory (min. 2 characters)</span>
                </div>
                <div>
                  <input type="email" 
                         name="email"
                         required 
                         placeholder="Your Email *" 
                         class="w-full bg-black/60 border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none transition">
                  <span class="text-[10px] text-gray-400 mt-1 block pl-1">Will not be published</span>
                </div>
              </div>
              <textarea rows="3" 
                        name="comment"
                        required 
                        placeholder="Share your experience or inquiry..." 
                        class="w-full bg-black/60 border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:border-amber-400 outline-none transition"></textarea>
              <button type="submit" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition shadow-md" style="color: #000000 !important;">
                Post Comment
              </button>
            </form>`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (oldFormPattern.test(content)) {
    content = content.replace(oldFormPattern, newFormBlock);
    fs.writeFileSync(f, content, 'utf8');
    console.log('Successfully updated comment form in', f);
  } else {
    console.log('Could not find oldFormPattern in', f);
  }
});

